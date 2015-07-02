#!/usr/bin/env node

const debug = require('debug');
const program = require('commander');
const path = require('path');
const spawn = require('child_process').spawn;
const Firedoc = require('../lib/firedoc').Firedoc;

program
  .option('-l --lint', 'lint the parser')
  .option('--parse-only', 'only parse')
  .option('-M --markdown', 'generate markdown docs')
  .option('-T --theme <dir>', 'specify theme directory')
  .option('-D --dest <dir>', 'the destination folder to build')
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
doc.build(onbuild);

function onbuild () {
  var serve = path.join(__dirname, '../node_modules/.bin/serve');
  spawn(serve, [doc.options.dest, '-H'], {
    'stdio': 'inherit'
  });
}

