#!/usr/bin/env node

var program = require('commander');

program
  .option('-m --markdown', 'generate markdown docs')
  .option('-t --theme <dir>', 'specify theme directory')
  .option('-o --out <dir>', 'the destination folder to build')
  .parse(process.argv);

