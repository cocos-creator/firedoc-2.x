#!/usr/bin/env node

var debug = require('debug');
var program = require('commander');
var path = require('path');
var spawn = require('child_process').spawn;
var Firedoc = require('../lib/firedoc').Firedoc;

program
  .option('-l --lint', 'lint the parser')
  .option('--parse-only', 'only parse')
  .option('-m --markdown', 'generate markdown docs')
  .option('-t --theme <dir>', 'specify theme directory')
  .option('-d --dest <dir>', 'the destination folder to build')
  .option('-L --lang <language>', 'the i18n language')
  .option('-v --verbose', 'print all verbose information')
  .parse(process.argv);

if (program.verbose) {
  debug.enable('firedoc:*');
}

var doc = new Firedoc({
  path: program.args[0],
  lint: program.lint,
  parseOnly: program.parseOnly,
  markdown: program.markdown,
  http: true,
  dest: program.dest,
  lang: program.lang,
  theme: program.theme
});
doc.build(function () {
  var serve = path.join(__dirname, '../node_modules/.bin/serve');
  var dest = path.join(__dirname, '../', doc.options.dest || 'out');
  spawn(serve, [dest, '-H'], {
    'stdio': 'inherit'
  });
});

