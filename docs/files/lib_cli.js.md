
# firedoc 0.8.14

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.


### File: `lib/cli.js`

```js
#!/usr/bin/env node
/* global process */
/**
 * Copyright (c) 2011, Yahoo! Inc. All rights reserved.
 * Code licensed under the BSD License:
 * https://github.com/yui/yuidoc/blob/master/LICENSE
 */

/**
 * Parses the arguments, creates the options and passes them to `Y.YUIDoc` and then `Y.DocBuilder`.
 * @class CLI
 * @module yuidoc
 */

/*global Y:true */
var Y = require('./index');

var options = Y.Options(Y.Array(process.argv, 2));

Y.log('Starting FireDoc@' + Y.packageInfo.version + ' using FireDoc@' + Y.version + ' with NodeJS@' + process.versions.node, 'info', 'yuidoc');

var starttime = (new Date()).getTime();

options = Y.Project.init(options);

Y.log('Starting FireDoc with the following options:', 'info', 'yuidoc');
var opts = Y.clone(options);
if (opts.paths && opts.paths.length && (opts.paths.length > 10)) {
  opts.paths = [].concat(opts.paths.slice(0, 5), ['<paths truncated>'], options.paths.slice(-5));
}
Y.log(opts, 'info', 'yuidoc');

if (options.server) {
  Y.Server.start(options);
} else {
  var json = (new Y.YUIDoc(options)).run();
  if (json === null) {
    process.exit(1);
  }
  options = Y.Project.mix(json, options);

  if (!options.parseOnly) {
    var builder = new Y.DocBuilder(options, json);
    builder.compile(function () {
      var endtime = (new Date()).getTime();
      Y.log('Completed in ' + ((endtime - starttime) / 1000) + ' seconds', 'info', 'yuidoc');
      process.exit(0);
    });
  }
}

```
