#!/usr/bin/env node
/* global process */

var url = require('url');
var util = require('util');
var path = require('path');
var exec = require('child_process').exec;
var fs = require('fs');
var rmdir = require('rmdir');
var argv = require('minimist')(process.argv.slice(2));

var command = argv._[0];
var value = argv._[1];
var themedir = path.join(__dirname, '../themes');
var DEFAULT_THEMES = [
  'default',
  'default_zh',
  'markdown'
];

if (command === 'install' || command === 'i') {
  if (!value) {
    console.log('firedoc-theme install remote');
    return;
  }
  // check if install
  var name = argv.name || argv.n;
  if (!name) {
    var urlObj = url.parse(value);
    name = path.basename(urlObj.path);
  }
  if (fs.existsSync(path.join(themedir, name))) {
    console.log('the theme name `' + name + '` been installed.');
    return;
  }
  var execPath = path.join(__dirname, '../scripts/install-theme.sh');
  var ch = exec(
    util.format('THEMEDIR=%s sh %s %s %s', themedir, execPath, name, value)
  );
  ch.stdout.pipe(process.stdout);
  ch.stderr.pipe(process.stderr);
  return;
}

if (command === 'uninstall') {
  var name = value;
  var theme = path.join(themedir, value);
  if (DEFAULT_THEMES.indexOf(name) === -1 && fs.existsSync(theme)) {
    rmdir(theme, {}, function () {
      console.log('uninstalled ' + name);
    });
  }
  return;
}

if (command === 'clear') {
  fs.readdirSync(themedir).filter(
    function (name) {
      return DEFAULT_THEMES.indexOf(name) === -1;
    }
  ).forEach(
    function (name) {
      rmdir(path.join(themedir, name), {}, function () {
        console.log('uninstalled ' + name);
      });
    }
  );
}

if (!command || command === 'list') {
  console.log('installed themes:');
  fs.readdirSync(themedir).forEach(
    function (name) {
      console.log('>', name);
    }
  );
}


