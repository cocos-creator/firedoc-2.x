#!/usr/bin/env node

var url = require('url');
var path = require('path');
var program = require('commander');
var spawn = require('child_process').spawn;

program
  .option('-a --alias <name>', 'specify the theme/plugin name')
  .option('-t --theme', 'install package as theme')
  .option('-p --plugin', 'install package as plugin')
  .parse(process.argv);

var name = program.alias();
var remote = program.args[0];
if (!name) {
  var urlObj = url.parse(remote);
  name = path.basename(urlObj.path);
}

var script = path.join(__dirname, '../scripts/install-theme.sh');
spawn(
  'sh',
  [
    script, name, remote
  ],
  {
    'stdio': 'inherit',
    'env': {
      'THEMEDIR': path.join(__dirname, '../themes')
    }
  }
);
