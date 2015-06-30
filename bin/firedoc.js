#!/usr/bin/env node

var program = require('commander');
var meta = require('../package.json');
var spawn = require('child_process').spawn;

program
  .version(meta.version)
  .command('build [path]', 'build document from the directory')
  .command('install [path]', 'install theme or plugin')
  .command('preview [path]', 'build and preview the document from directory')
  .parse(process.argv);

if (!/(build|install|preview|help)/.test(process.argv[2])) {
  spawn(
    process.argv[1],  // firedoc
    ['build'].concat(process.argv.slice(2)), // arguments
    {
      'stdio': 'inherit',
      'env': process.env
    }
  );
}
