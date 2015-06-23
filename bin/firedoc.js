#!/usr/bin/env node

var program = require('commander');
var meta = require('../package.json');

program
  .version(meta.version)
  .command('build [path]', 'build document from the directory')
  .command('install [path]', 'install theme or plugin')
  .command('preview [path]', 'build and preview the document from directory')
  .parse(process.argv);

