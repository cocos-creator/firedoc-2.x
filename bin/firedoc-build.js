#!/usr/bin/env node

var program = require('commander');
var Firedoc = require('../lib/firedoc').Firedoc;

program
  .option('-m --markdown', 'generate markdown docs')
  .option('-t --theme <dir>', 'specify theme directory')
  .option('-o --out <dir>', 'the destination folder to build')
  .parse(process.argv);

var doc = new Firedoc({
  path: program.args[0]
});
doc.build();
