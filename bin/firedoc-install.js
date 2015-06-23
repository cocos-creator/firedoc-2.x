#!/usr/bin/env node

var program = require('commander');

program
  .option('-t --theme', 'install package as theme')
  .option('-p --plugin', 'install package as plugin')
  .parse(process.argv);

