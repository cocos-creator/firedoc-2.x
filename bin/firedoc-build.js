#!/usr/bin/env node

var program = require('commander');
var Firedoc = require('../lib/firedoc').Firedoc;

program
  .option('-l --lint', 'lint the parser')
  .option('--parse-only', 'only parse')
  .option('-m --markdown', 'generate markdown docs')
  .option('-t --theme <dir>', 'specify theme directory')
  .option('-d --dest <dir>', 'the destination folder to build')
  .parse(process.argv);

var doc = new Firedoc({
  path: program.args[0],
  lint: program.lint,
  parseOnly: program.parseOnly,
  markdown: program.markdown,
  dest: program.dest,
  theme: program.theme
});
doc.build();
