
/**
 * The firedoc module
 * @module firedoc
 */

const _ = require('underscore');
const path = require('path');
const fs = require('graceful-fs');
const fse = require('fs-extra');
const mkdirp = require('mkdirp').sync;
const request = require('needle');
const Promise = require('bluebird');
const Handlebars = require('handlebars');
const debug = require('debug')('firedoc:build');
const utils = require('./utils');
const DocView = require('./docview').DocView;
const Locals = require('./locals').Locals;
const defaultHelpers = require('./helpers');

/**
 * List of native types to cross link to MDN
 * @property NATIVES
 * @type Object
 */
const NATIVES = require('./natives.json');

// Promisify
Promise.promisifyAll(request);
Promise.promisifyAll(fs);
Promise.promisifyAll(fse);

/**
 * The Builder Context
 * @class BuilderContext
 */
var BuilderContext = {

  /**
   * @property {AST} ast - The AST object
   */
  ast: null,

  /**
   * @property {Option} options - The command options
  */
  options: null,

  /**
   * @property {Object} helpers - The view helpers function
   */
  helpers: {},

  /**
   * @property {Boolean} cacheView - cache the views
   */
  cacheTemplate: true,

  /**
   * @property {Object} template - The template
   */
  template: null,

  /**
   * @property {Number} files - records the files
   */
  files: 0,

  /**
   * @property {Object} metadata - The project meta
   */
  get metadata () {
    if (!this._metadata) {
      try {
        var metadata;
        var themeJSON = path.join(this.theme, 'theme.json');
        if (fs.existsSync(themeJSON)) {
          debug('loading theme from ' + themeJSON);
          metadata = require(themeJSON);
        } else {
          debug('loading the default theme');
          metadata = require('../themes/default/theme.json');
        }
        this._metadata = metadata;
      } catch (err) {
        console.error(err);
      }
    }
    return this._metadata;
  },

  /**
   * @property {String} viewExtname - The ext name of current view
   */
  get extname () {
    return this.options.markdown ? '.md' : '.html';
  },

  /**
   * Add helper
   * @method addHelper
   * @param {String} name - The helper name
   * @param {Function} helper - The helper logic
   * @static
   */
  addHelper: function (name, helper) {
    this.helpers[name] = helper;
    Handlebars.registerHelper(name, helper.bind(this));
  },

  /**
   * Add helpers
   * @method addHelpers
   * @param {Object} helpers
   * @static
   */
  addHelpers: function (helpers) {
    _.each(helpers, function (helper, name) {
      this.addHelper(name, helper);
    }, this);
  },

  /**
   * Ported from [Selleck](https://github.com/rgrove/selleck), this handles ```'s in fields
   * that are not parsed by the **Markdown** parser.
   * @method _inlineCode
   * @private
   * @param {HTML} html The HTML to parse
   * @return {HTML} The parsed HTML
   */
  inlineCode: function (html) {
    if (this.options.markdown) return html;
    html = html.replace(/\\`/g, '__{{SELLECK_BACKTICK}}__');
    html = html.replace(/`(.+?)`/g, function (match, code) {
      return '<code>' + utils.escapeHTML(code) + '</code>';
    });
    html = html.replace(/__\{\{SELLECK_BACKTICK\}\}__/g, '`');
    return html;
  },

  /**
   * Parse the item to be cross linked and return an HREF linked to the item
   * @method _parseCrossLink
   * @private
   * @static
   * @param {String} item The item to crossLink
   * @param {Boolean} [raw=false] Do not wrap it in HTML
   * @param {String} [content] crossLink helper content
   */
  _parseCrossLink: function (item, raw, content) {
    item = item || 'unknown';
    var self = this;
    var base = '../';
    var baseItem;
    var newWin = false;
    var className = 'crosslink';

    // TODO(@yorkie): now remove the unnecessary fixType
    // will remove this absolutely if this is working for weeks
    // item = fixType(item);
    item = baseItem = utils.safetrim(item.replace('{', '').replace('}', ''));
    item = item.replace('*', '').replace('[', '').replace(']', '');
    var link = false, href;

    if (self.ast.classes[item]) {
      link = true;
    } else {
      if (self.ast.classes[item.replace('.', '')]) {
        link = true;
        item = item.replace('.', '');
      }
    }
    if (self.options.externalData) {
      if (self.ast.classes[item]) {
        if (self.ast.classes[item].external) {
          href = self.ast.classes[item].path;
          base = self.options.externalData.base;
          className += ' external';
          newWin = true;
          link = true;
        }
      }
    }

    if (item.indexOf('/') > -1) {
      //We have a class + method to parse
      var parts = item.split('/'),
        cls = parts[0],
        method = parts[1],
        type = 'method';

      if (method.indexOf(':') > -1) {
        parts = method.split(':');
        method = parts[0];
        type = parts[1];
        if (type.indexOf('attr') === 0) {
          type = 'attribute';
        }
      }

      if (cls && method) {
        if (self.ast.classes[cls]) {
          self.ast.members.forEach(function (i) {
            if (i.itemtype === type && i.name === method && i.class === cls) {
              link = true;
              baseItem = method;
              var t = type;
              if (t === 'attribute') {
                t = 'attr';
              }
              href = utils.webpath(base, 'classes', cls + '.html#' + t + '_' + method);
            }
          });
        }
      }
    }

    if (item === 'Object' || item === 'Array') {
      link = false;
    }
    if (!href) {
      href = utils.webpath(base, 'classes', item + '.html');
      if (base.match(/^https?:\/\//)) {
        href = base + utils.webpath('classes', item + '.html');
      }
    }
    if (!link && self.options.linkNatives) {
      if (self.NATIVES && self.NATIVES[item]) {
        href = linkNativeType(item);
        if (href) {
          className += ' external';
          newWin = true;
          link = true;
        }
      }
    }
    if (link) {
      if (content !== undefined) {
        content = content.trim();
      }
      if (!content) {
        content = baseItem;
      }
      item = '<a href="' + href + '" class="' + className + '"' + ((newWin) ? ' target="_blank"' : '') + '>' + content + '</a>';
    }
    return (raw) ? href : item;
  },
  
  /**
   * Populate the meta data for classes
   * @method populateClasses
   * @param {Object} opts The original options
   * @return {Object} The modified options
   */
  populateClasses: function (opts) {
    var classes = [];
    var enums = [];
    _.each(opts.meta.classes, function (clazz) {
      if (clazz.external) return;
      if (clazz.isEnum) {
        clazz.type = 'enums';
        enums.push(clazz);
      } else {
        clazz.type = 'classes';
        classes.push(clazz);
      }
    });
    opts.meta.classes = _.sortBy(classes, 'name');
    opts.meta.enums = _.sortBy(enums, 'name');
    return opts;
  },
  
  /**
   * Populate the meta data for modules
   * @method populateModules
   * @param {Object} opts The original options
   * @return {Object} The modified options
   */
  populateModules: function (opts) {
    var self = this;
    var modules = opts.meta.modules;
    _.each(modules, function (mod) {
      if (mod.external) return;
      if (!mod.isSubmodule && mod.submodules) {
        var submodules = [];
        _.each(mod.submodules, function (val, name) {
          var mod = self.ast.modules[name];
          if (val && mod) submodules.push(mod);
        });
        mod.type = 'modules';
        mod.submodules = _.sortBy(submodules, 'name');
      }
    });
    opts.meta.modules = _.sortBy(modules, 'name');
    return opts;
  },
  
  /**
   * Populate the meta data for files
   * @method populateFiles
   * @param {Object} opts The original options
   * @return {Object} The modified options
   */
  populateFiles: function (opts) {
    var self = this;
    var files = [];
    _.each(this.ast.files, function (v) {
      if (v.external) return;
      v.name = utils.filterFileName(v.name);
      v.path = v.path || v.name;
      files.push(v);
    });
    files = _.sortBy(files, 'name');
    opts.meta.fileTree = utils.buildFileTree(files);
    return opts;
  },
  
  /**
   * Parses file and line number from an item object and build's an HREF
   * @method addFoundAt
   * @param {Object} a The item to parse
   * @return {String} The parsed HREF
   */
  addFoundAt: function (a) {
    var ext = this.options.markdown ? '.md' : '.html';
    if (a.file && a.line && !this.options.nocode) {
      a.foundAt = '../files/' + utils.filterFileName(a.file) + ext + '#l' + a.line;
      if (a.path) {
        a.foundAt = a.path + '#l' + a.line;
      }
    }
    return a;
  },

  /**
   * Augments the **DocParser** meta data to provide default values for certain keys as well as parses all descriptions
   * with the `Markdown Parser`
   * @method augmentData
   * @param {Object} o The object to recurse and augment
   * @return {Object} The augmented object
   */
  augmentData: function (o) {
    var self = this;
    o = self.addFoundAt(o);
    _.each(o, function (i, k1) {
      if (i && i.forEach) {
        _.each(i, function (a, k) {
          if (!(a instanceof Object)) {
            return;
          }
          if (!a.type) {
            a.type = 'Object'; //Default type is Object
          }
          if (a.final === '') {
            a.final = true;
          }
          if (!a.description) {
            a.description = ' ';
          } else if (!o.extended_from) {
            a.description = self.markdown(a.description);
          }
          if (a.example && !o.extended_from) {
            a.example = self.markdown(a.example);
          }
          a = self.addFoundAt(a);

          _.each(a, function (c, d) {
            if (c.forEach || (c instanceof Object)) {
              c = self.augmentData(c);
              a[d] = c;
            }
          });
          o[k1][k] = a;
        });
      } else if (i instanceof Object) {
          i = self.addFoundAt(i);
          _.each(i, function (v, k) {
            if (k === 'final') {
              o[k1][k] = true;
            } else if (k === 'description' || k === 'example') {
              if (v.forEach || (v instanceof Object)) {
                o[k1][k] = self.augmentData(v);
              } else {
                o[k1][k] = o.extended_from ? v : self.markdown(v);
              }
            }
          });
      } else if (k1 === 'description' || k1 === 'example') {
        o[k1] = o.extended_from ? i : self.markdown(i);
      }
    });
    return o;
  },

  /**
   * Fetches the remote data and fires the callback when it's all complete
   *
   * @method mixExternal
   * @async
   * @param {Function} cb The callback to execute when complete
   * @return {Promise}
   */
  mixExternal: function (callback) {
    var self = this;
    var external = this.options.external || {};
    var current = Promise.resolve();
    if (!external) return callback();

    external.merge = external.merge || 'mix';
    if (!external.data) {
      console.warn('External config found but no data path defined, skipping import.');
      if (_.isFunction(callback)) {
        callback();
      }
      return current;
    }
    if (!_.isArray(external.data)) {
      external.data = [external.data];
    }
    debug('Importing external documentation data');

    return Promise.map(external.data, function (item) {
      var base;
      if (_.isObject(item)) {
        base = item.base;
        item = item.json;
      }
      if (item.match(/^https?:\/\//)) {
        if (!base) {
          base = item.replace('data.json', '');
        }
        return current.then(function () {
          debug('fetching ' + item);
          return request.getAsync(item, {});
        }).then(function (results) {
          var data = JSON.parse(results[1]);
          data.base = base;
          return data;
        });
      } else {
        if (!base) {
          base = path.dirname(path.resolve(item));
        }
        var data = require(item);
        data.base = base;
        return data;
      }
    }).then(function (results) {
      function mixExternal (type, exdata) {
        self.ast[type] = (exdata[type] || []).map(setExternal);
      }
      function setExternal (item) {
        item.external = true;
        return item;
      }
      _.each(results, function (exdata) {
        mixExternal('files', exdata);
        mixExternal('classes', exdata);
        mixExternal('modules', exdata);
        mixExternal('members', exdata);
      });
      if (_.isFunction(callback)) {
        callback();
      }
    });
  },

  /**
   * Makes the default directories needed
   * @method makeDirs
   */
  makeDirs: function (callback) {
    var dirs = ['assets', 'classes', 'modules', 'enums', 'files'];
    var root = this.options.dest || 'out';
    debug('Making default directories: ' + dirs.join(','));
    mkdirp(path.join(root, dirs[0]));
    mkdirp(path.join(root, dirs[1]));
    mkdirp(path.join(root, dirs[2]));
    mkdirp(path.join(root, dirs[3]));
    mkdirp(path.join(root, dirs[4]));
    return dirs;
  },

  /**
   * Init `BuilderContext` context and return
   * @method init
   * @param {AST} ast
   * @param {Option} options 
   * @return {BuilderContext}
   * @static
   */
  init: function (ast, options) {
    this.ast = ast;
    this.options = options;
    this.addHelpers(defaultHelpers);
    this.cacheView = options.cacheView || this.cacheView;

    debug('Building...');
    return this;
  },

  /**
   * correct the theme
   * @method correctTheme
   */
  correctTheme: function () {
    var root = path.join(__dirname, '../themes');
    var theme = root + '/firedoc-theme-' + this.options.theme;
    if (fs.existsSync(theme))
      return this.options.theme = theme;
    theme = root + '/firedoc-plugin-' + this.options.theme;
    if (fs.existsSync(theme))
      return this.options.theme = theme;
    theme = root + '/' + this.options.theme;
    if (fs.existsSync(theme))
      return this.options.theme = theme;
    this.options.theme = root + '/default';
    return this.options.theme;
  },

  /**
   * Compule the AST
   * @method compile
   * @static
   * @param {Function} callback - The callback
   */
  compile: function (callback) {
    debug('Compiling templates...');
    var self = this;
    return this
    .mixExternal()
    .then(this.makeDirs.bind(this))
    .then(function checkThemeDir () {
      debug('Checking theme folder');
      var theme = self.correctTheme.call(self);
      debug('Using corrected theme: ' + theme);
    })
    .then(function copyAssets () {
      debug('Copying assets...');
      var src = self.options.theme + '/assets';
      var dest = self.options.dest + '/assets';
      return fse.copyAsync(src, dest);
    })
    .then(function createLocalsForTheme () {
      debug('Creating locals for theme...');
      return Locals.create(self);
    })
    .then(function render (locals) {
      locals = self.populateFiles(locals);
      locals = self.populateClasses(locals);
      locals = self.populateModules(locals);
      return Promise.all(
        [
          self.writeApiMeta(locals),
          self.writeIndex(locals),
          self.writeFiles(locals),
          self.writeEnums(locals),
          self.writeClasses(locals),
          self.writeModules(locals)
        ]
      );
    })
    .then(function onfinish () {
      debug('Finished the build work');
      if (_.isFunction(callback)) {
        callback();
      }
    })
    .caught(callback);
  },

  /**
   * Render
   * @method render
   */
  render: function (name, view, locals) {
    var html = [];
    var partials = _.extend(locals.partials, {
      'layout_content': '{{>' + name + '}}'
    });
    _.each(partials, function (source, name) {
      Handlebars.registerPartial(name, source);
    });
    if (!this.template || !this.cacheTemplate) {
      this.template = Handlebars.compile(locals.layouts.main);
    }

    var _view = {};
    for (var k in view) {
      if (_.isFunction(view[k])) {
        _view[k] = view[k]();
      } else {
        _view[k] = view[k];
      }
    }
    return this.inlineCode(this.template(_view));
  },

  writeApiMeta: function (locals) {
    var apimeta = {
      project: locals.meta.project,
      files: locals.meta.files,
      enums: [],
      classes: [],
      modules: []
    };
    _.each(
      ['classes', 'modules', 'enums'],
      function (id) {
        var items = locals.meta[id];
        var g = function (item) {
          return {
            'name': item.name,
            'namespace': item.namespace,
            'module': item.module,
            'description': item.description,
            'access': item.access
          };
        }
        var f = function (item) {
          apimeta[id].push(g(item));
          return item && item.submodules;
        };
        var s = function (item) {
          apimeta[id].push(g(item));
        };
        var m = function (item) {
          _.each(item.submodules, s);
        };
        _.each(_.filter(locals.meta[id], f), m);
        apimeta[id] = _.sortBy(apimeta[id], 'name');
      }
    );
    return fs.writeFileAsync(
      this.options.dest + '/api.json',
      JSON.stringify(apimeta, null, 2),
      'utf8'
    ).then(function () {
      debug('api.json finished');
    })
  },

  writeIndex: function (locals) {
    debug('Start writing index');
    var view = new DocView(locals.meta);
    var html = this.render('index', view, locals);
    var filename = this.options.markdown ? '/readme.md' : '/index.html';
    return fs.writeFileAsync(
      this.options.dest + filename,
      html,
      'utf8'
    ).then(function () {
      debug('index.html finished');
    });
  },

  writeFiles: function (locals) {
    debug('Start writing files');
    var self = this;
    return Promise.map(
      locals.meta.files,
      function (file) {
        file.globals = locals.meta;
        var view = new DocView(file, null, '../');
        var html = self.render('file', view, locals);
        var dest = path.join(self.options.dest, 'files', file.name.replace(/\//g, '_') + self.extname);
        return fs.writeFileAsync(dest, html, 'utf8').then(function () {
          debug(dest + ' finished');
        });
      }
    );
  },

  writeEnums: function (locals) {
    debug('Start writing enums');
    var self = this;
    return Promise.map(
      locals.meta.enums,
      function (e) {
        e.globals = locals.meta;
        var view = new DocView(e, null, '../');
        var html = self.render('enum', view, locals);
        var dest = path.join(self.options.dest, 'enums', e.name + self.extname);
        return fs.writeFileAsync(dest, html, 'utf8').then(function () {
          debug(dest + ' finished');
        });
      }
    );
  },

  writeClasses: function (locals) {
    debug('Start writing classes');
    var self = this;
    return Promise.map(
      locals.meta.classes,
      function (clazz) {
        clazz.globals = locals.meta;
        var view = new DocView(clazz, null, '../');
        var html = self.render('class', view, locals);
        var dest = path.join(self.options.dest, 'classes', clazz.name + self.extname);
        return fs.writeFileAsync(dest, html, 'utf8').then(function () {
          debug(dest + ' finished');
        });
      }
    );
  },

  writeModules: function (locals) {
    debug('Start writing modules');
    var self = this;
    return Promise.map(
      locals.meta.modules,
      function (mod) {
        mod.globals = locals.meta;
        var view = new DocView(mod, null, '../');
        var html = self.render('module', view, locals);
        var dest = path.join(self.options.dest, 'modules', mod.name + self.extname);
        return fs.writeFileAsync(dest, html, 'utf8').then(function () {
          debug(dest + ' finished');
        });
      }
    );
  }

};

/**
 * Function to link an external type uses `NATIVES` object
 * @method NATIVES_LINKER
 * @private
 * @param {String} name The name of the type to link
 * @return {String} The combined URL
 */
function linkNativeType (name) {
  name = utils.fixType(name);
  var url = 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/';
  if (NATIVES[name] !== 1) {
    url = NATIVES[name];
  }
  return url + name;
}

/**
 * Normalizes a file path to a writable filename:
 *
 *    var path = 'lib/file.js';
 *    returns 'lib_file.js';
 *
 * @method filterFileName
 * @param {String} f The filename to normalize
 * @return {String} The filtered file path
 */
function filterFileName (f) {
  return f.replace(/[\/\\]/g, '_');
}

/**
 * compile
 *
 * @method compile
 * @param {AST} ast - The `AST` object
 * @param {Option} options - The options
 * @param {Function} onfinish - fired when compile has completed
 */
function compile (ast, options, onfinish) {
  return BuilderContext.init(ast, options).compile(onfinish);
}
exports.compile = compile;
