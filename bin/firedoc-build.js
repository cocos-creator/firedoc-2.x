#!/usr/bin/env node

var debug = require('debug');
var program = require('commander');
var Firedoc = require('../lib/firedoc').Firedoc;

program
  .option('-l --lint', 'lint the parser')
  .option('--parse-only', 'only parse')
  .option('-H --http', 'build doc for web')
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
  http: program.http || false,
  dest: program.dest,
  lang: program.lang,
  theme: program.theme
});
doc.build();
