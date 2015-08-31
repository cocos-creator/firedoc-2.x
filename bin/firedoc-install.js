#!/usr/bin/env node

const _ = require('underscore');
const fs = require('fs');
const path = require('path');
const url = require('url');
const npm = require('npm');
const exec = require('child_process').execSync;
const rimraf = require('rimraf');
const semver = require('semver');
const program = require('commander');
const Promise = require('bluebird');

// Promisify some methods
const loadNpmAsync = Promise.promisify(npm.load);
const rimrafAsync = Promise.promisify(rimraf);

// We can't initilize the `npm.commands` before getting the callback from
// `npm.load`.
//
// https://github.com/npm/npm/blob/master/lib/npm.js#L175-L180
// NPM wrote a getter on `npm.commands` to detect this, because of the reason
// from NPM, we have to put a `var` and update it later.
var installNpmPkgAsync;

program
  .option('-a --alias <name>', 'specify the theme/plugin name')
  .option('-t --theme', 'install package as theme')
  .option('-p --plugin', 'install package as plugin')
  .option('-v --verbose', 'print all verbose information')
  .parse(process.argv);

// Make variablize is because we should rewrite this label.
var debug = require('debug');
if (program.verbose) {
  debug.enable('firedoc:*');
}
// Here we rewrite the `debug` to enuse it.
debug = debug('firedoc:install');

// The user can input the --alias to forcely set 
// the `name` value
var name = program.alias();
var remote = program.args[0];

// Commonly, if remote is not a url but a pure name, FireDoc
// should prepend it with `github.com/fireball-x` and make it
// to be a valid URI.
if (/[a-z0-9_\-]+/i.test(remote)) {
  // Check the remote does start from `firedoc-theme-`, this
  // allows the pure theme name like: 
  //
  //    notab` -> `firedoc-theme-notab`
  //
  if (remote.slice(0, 14) !== 'firedoc-theme-') {
    remote = 'firedoc-theme-' + remote;
  }
  remote = 'https://github.com/fireball-x/' + remote;
}

// By default, we should get the name from the url, like if
// we get the following remote:
//
//    https://github.com/fireball-x/firedoc-theme-notab
//
// So we should extract the name to: firedoc-theme-notab
// so far.
//
if (!name) {
  var urlObj = url.parse(remote);
  // If the user inputs a url end with a `.git`, we should
  // not put the extension name to the `name` variable.
  name = path.basename(urlObj.path).replace('.git', '');
}

const themedir = path.join(__dirname, '../themes');
const destdir = themedir + '/' + name;

// This option is used for calling `git.Clone`, that basically
// is for authorization of SSH/HTTPS from Github/Bitbucket.
const cloneOption = {
  'remoteCallbacks': {
    // set a function to return 1 always to skip the authentication
    certificateCheck: function () { return 1; },
    // this is for SSH agent
    credentials: function (url, user) { 
      return git.Cred.sshKeyFromAgent(username); 
    }
  }
  // Check http://www.nodegit.org/guides/cloning for more details
  // about NODEGIT
};

// TODO(Yorkie): This function to be extended in the future, just quite
// not sure the error report for now.
//
// #PR-WELCOME
//
function errorHandler (e) {
  throw e;
}

// Build the installing package string. It supports the following styles:
//
// - [<@scope>/]<pkg>
// - [<@scope>/]<pkg>@<tag>
// - [<@scope>/]<pkg>@<version>
// - [<@scope>/]<pkg>@<version range> (Very Important)
// - <git:// url>
// - etc.
//
// Thanks to the powerful support from libnpm, `firedoc-install(1)` also
// supports the above installation ways.
function buildNpmPackageName (version, name) {
  debug('Validing the package(semver): ' + name);
  return name + '@' + version;
}

function installNpmPackage (pkg) {
  debug('Installing the dependence: ' + pkg);
  // Rewrite the file-scoped `installNpmPkgAsync`, promisify the
  // `npm.commands.install` once here, and free to use forever.
  if (!installNpmPkgAsync) {
    installNpmPkgAsync = Promise.promisify(npm.commands.install);
  }
  // call the promisified `npm.commands.install` and set the theme dir
  // to where the package would be installed.
  return installNpmPkgAsync(destdir, pkg);
}

// This line is the start line in real runtime logic, the entire logic
// of installing theme would inclued the following steps:
// 
// - clean the original/installed theme directory (#PR-WELCOME, remove this?)
// - clone the project the theme directory
// - install npm package
// ? install bower(#PR-WELCOME, do we really need to support bower progress?)
//

debug('cleaning the original folder: ' + name);
rimrafAsync(destdir)
.then(function () {
  debug('Start cloning "' + remote + 
        '" into "' + path.relative(process.cwd(), destdir) + '"');
  return exec(`git clone ${remote} ${destdir}`);
})
.then(function () {
  debug('Start installing the dependencies');
  return _.map(
    require(destdir + '/package.json').dependencies,
    buildNpmPackageName
  );
})
.then(function (deps) {
  return loadNpmAsync({}).then(function () {
    return Promise.map(deps, installNpmPackage);
  });
})
.catch(errorHandler)
.done(function () {
  debug('Installed ' + name);
});
