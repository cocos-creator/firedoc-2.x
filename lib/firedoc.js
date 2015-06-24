
/**
 * This is the __module__ description for the `YUIDoc` module.
 * ```
 * var options = {
 *   paths: [ './lib' ],
 *   outdir: './out'
 * };
 * var Y = require('yuidocjs');
 * var json = (new Y.YUIDoc(options)).run();
 * ```
 *
 * @module firedoc
 * @main firedoc
 */

var _ = require('underscore');
var path = require('path');
var fs = require('graceful-fs');
var readdirp = require('readdirp');
var rimraf = require('rimraf');
var defaults = {
  quiet: false,
  writeJSON: true,
  outdir: path.join(process.cwd(), 'out'),
  extensions: '.js',
  excludes: '.DS_Store,.svn,CVS,.git,build_rollup_tmp,build_tmp,node_modules',
  norecurse: false,
  version: '0.1.0',
  path: './',
  themedir: path.join(__dirname, 'themes', 'default'),
  syntaxtype: 'js'
};

/**
 * YUIDoc main class
 *
 * @class YUIDoc
 * @module yuidoc
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

  /**
   * Applies preprocessors to the data tree. 
   * This function first clones the data and operates on the clone. 
   *
   * @method runPreprocessors
   * @private
   * @return {Object} The mutated data
   */
  runPreprocessors: function (data) {
    if (!this.options.preprocessor) return;
    var cloned = _.clone(data);
    _.each(
      [].concat(this.options.preprocessor), 
      function (p) {
        var mod;
        try {
          mod = require(p);
        } catch (e) {
          mod = require(path.resolve(process.cwd(), p));
        }
        mod(cloned, this.options)
      },
      this
    );
    return cloned;
  },

  /**
   * Writes the parser JSON data to disk.
   * Applies preprocessors, if any.
   * @method writeJSON
   * @param {Object} parser The DocParser instance to use
   * @private
   * @return {Object} The JSON data returned from the DocParser
   */
  writeJSON: function (parser) {
    var self = this, data, file, out;

    data = parser.data;
    data.warnings = parser.warnings;
    data = this.runPreprocessors(data);

    if (self.selleck && self.options.selleck && data.files && data.modules) {
      Object.keys(self.selleck).forEach(function (file) {
        Object.keys(data.files).forEach(function (f) {
          if (file === f) {
            var mods = data.files[f].modules;
            if (mods) {
              Object.keys(mods).forEach(function (mod) {
                if (data.modules[mod]) {
                  if (!data.modules[mod].extra) {
                    data.modules[mod].extra = {};
                  }
                  data.modules[mod].extra.selleck = self.selleck[file];
                }
              });
            }
          }
        });
      });
    }

    if (self.options.project) {
      data.project = self.options.project;
    }

    if (self.options.writeJSON) {
      file = path.join(self.options.outdir, 'data.json');

      if (fs.existsSync(self.options.outdir) && !self.options.nodeleteout) {
        console.warn('Found out dir, deleting: ' + self.options.outdir);
        rimraf.sync(self.options.outdir);
      }

      if (!fs.existsSync(self.options.outdir)) {
        console.log('Making out dir: ' + self.options.outdir);
        try {
          fs.mkdirSync(self.options.outdir, 0777);
        } catch (e) {
          console.warn('Outdir creation failed');
        }
      }

      out = fs.createWriteStream(file, {
        flags: "w",
        encoding: Y.charset,
        mode: 0644
      });
      out.write(JSON.stringify(data, null, 4));
      out.end();
    }

    return data;
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
   * @return {Object} The JSON data returned from the DocParser
   */
  build: function () {
    /**
     * Timestamp holder so we know when YUIDoc started the parse process.
     * @property starttime
     * @type Timestamp
     */
    console.log('Starting from: ' + this.options.path);
    var start = new Date().getTime();
    var self = this;
    this._processConfig();
    this.walk(function () {
      var parser = require('./docparser-new');
      var ast = parser.parse(
        self.options.syntaxtype,
        self.filemap,
        self.dirmap);

      var log = function (o) {
        var msg = require('util').inspect(o, {
          depth: 5, colors: true
        });
        console.log(msg);
      };

      // log(ast.files);
      // log(ast.modules);
      // log(ast.classes);
      log(ast.members);
      // log(ast.inheritedMembers);
    });

    // var json = this.writeJSON(new Y.DocParser({
    //   syntaxtype: this.options.syntaxtype,
    //   filemap: this.filemap,
    //   dirmap: this.dirmap
    // }).parse());

    // if (this.options.lint) {
    //   this.lint(json.warnings);
    //   return null;
    // }

    /**
     * Timestamp holder so we know when YUIDoc has finished the parse process.
     * @property endtime
     * @type Timestamp
     */
    // this.endtime = new Date().getTime();
    // Y.log('Parsed ' + this.filecount + ' files in ' + ((this.endtime - this.starttime) / 1000) + ' seconds', 'info', 'yuidoc');

    // return json;
  }
};
