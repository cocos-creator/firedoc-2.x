
/**
 * This is the __module__ description for the `YUIDoc` module.
 * ```
 * var options = {
 *   paths: [ './lib' ],
 *   outdir: './out'
 * };
 * ```
 *
 * @module firedoc
 * @submodule helpers
 * @submodule utils
 * @main firedoc
 */

const _ = require('underscore');
const path = require('path');
const fs = require('graceful-fs');
const readdirp = require('readdirp');
const debug = require('debug')('firedoc');
const defaults = {
  quiet: false,
  writeJSON: true,
  extensions: '.js',
  excludes: '.DS_Store,.svn,CVS,.git,build_rollup_tmp,build_tmp,node_modules',
  norecurse: false,
  version: '0.1.0',
  path: './',
  theme: path.join(__dirname, '../themes/default'),
  dest: path.join(process.cwd(), 'out'),
  syntaxtype: 'js'
};

/**
 * Firedoc main class
 *
 * @class Firedoc
 * @constructor
 * @param config The config object
 */
function Firedoc (config) {
  if (!(this instanceof Firedoc)) {
    return new Firedoc(config);
  }

  /**
   * Holds the number of files that we are processing.
   * @property filecount
   * @type Boolean
   * @private
   */
  this.filecount = 0;
  /**
   * Holder for the list of files we are processing.
   * @property filemap
   * @type Object
   * @private
   */
  this.filemap = {};
  /**
   * Holder for the list of directories we are processing.
   * @property dirmap
   * @type Object
   * @private
   */
  this.dirmap = {};

  /**
   * Internal holder for configuration options.
   * @property options
   * @type Object
   * @private
   */
  this.options = _.defaults(config, defaults);
};
exports.Firedoc = Firedoc;

Firedoc.prototype = {
  /**
   * Always exclude these directories
   *
   * @method _setDefaultExcludes
   * @private
   */
  _setDefaultExcludes: function () {
    this.options.excludes = [
      '.git',
      '.svn',
      'CVS',
      'build_rollup_tmp',
      'build_tmp',
      'node_modules'
    ];
  },

  /**
   * Does post process on self.options.
   *
   * @method _processConfig
   * @private
   */
  _processConfig: function () {
    this._setDefaultExcludes();
  },

  /**
   * Walks the paths and parses the directory contents
   *
   * @method walk
   * @private
   */
  walk: function (callback) {
    var self = this;
    readdirp(
      {
        root: this.options.path,
        fileFilter: '*.@(js|rs|ts|coffee)',
        directoryFilter: self.options.excludes.map(
          function (ex) {
            return '!' + ex;
          }
        )
      }
    ).on('data', function (entry) {
      var text = fs.readFileSync(entry.fullPath, 'utf8');
      self.filecount += 1;
      self.filemap[entry.fullPath] = text.replace(/\r?\n|\r/g, '\n');
      self.dirmap[entry.fullPath] = entry.fullParentDir;
    }).on('end', callback);
  },

  lint: function (warnings) {
    var code = 0, count = 0;
    if (warnings && warnings.length) {
      code = 1;
      console.log('YUIDoc found', warnings.length, 'lint errors in your docs');
      warnings.forEach(function (item) {
        count++;
        console.log('#' + count, item.message, item.line + '\n');
      });
      process.exit(code);
    }
  },

  /**
   * Process the config, walk the file tree and write out the JSON data.
   * @method build
   * @param {Function} callback
   */
  build: function (callback) {
    debug('Starting from: ' + this.options.path);
    var self = this;
    this._processConfig();
    this.walk(function () {
      var parser = require('./docparser');
      var builder = require('./builder');
      var ast = parser.parse(
        self.options.syntaxtype,
        self.filemap,
        self.dirmap);

      debug('Parsing completed');
      if (self.options.lint) {
        debug('lint the warnings from ast');
        self.lint(ast.warnings);
      }
      if (self.options.parseOnly) {
        debug('skip the build because parse only');
        if (_.isFunction(callback)) callback(null, ast, self.options);
        console.log(require('util').inspect(ast, {colors: true, depth: 10}));
        return;
      }
      builder.compile(ast, self.options, callback);
    });
  }
};
