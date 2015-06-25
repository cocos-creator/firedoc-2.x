
/**
 * The firedoc module
 * @module firedoc
 */

const _ = require('underscore');
const path = require('path');
const marked = require('marked');
const fs = require('graceful-fs');
const fse = require('fs-extra');
const mkdirp = require('mkdirp').sync;
const request = require('needle');
const Promise = require('bluebird');
const Handlebars = require('handlebars');
const debug = require('debug')('firedoc:build');
const utils = require('./utils');
const DocView = require('./docview').DocView;

// Promisify
Promise.promisifyAll(request);
Promise.promisifyAll(fs);
Promise.promisifyAll(fse);

/**
 * List of native types to cross link to MDN
 * @property NATIVES
 * @type Object
 */
const NATIVES = {
  'Array': 1,
  'Boolean': 1,
  'Date': 1,
  'decodeURI': 1,
  'decodeURIComponent': 1,
  'encodeURI': 1,
  'encodeURIComponent': 1,
  'eval': 1,
  'Error': 1,
  'EvalError': 1,
  'Function': 1,
  'Infinity': 1,
  'isFinite': 1,
  'isNaN': 1,
  'Math': 1,
  'NaN': 1,
  'Number': 1,
  'Object': 1,
  'parseFloat': 1,
  'parseInt': 1,
  'RangeError': 1,
  'ReferenceError': 1,
  'RegExp': 1,
  'String': 1,
  'SyntaxError': 1,
  'TypeError': 1,
  'undefined': 1,
  'URIError': 1,
  'HTMLElement': 'https:/' + '/developer.mozilla.org/en/Document_Object_Model_(DOM)/',
  'HTMLCollection': 'https:/' + '/developer.mozilla.org/en/Document_Object_Model_(DOM)/',
  'DocumentFragment': 'https:/' + '/developer.mozilla.org/en/Document_Object_Model_(DOM)/',
  'HTMLDocument': 'https:/' + '/developer.mozilla.org/en/Document_Object_Model_(DOM)/'
};

const defaultHelpers = {
  'buildFileTree': function onbuildFileTree (items) {
    var out = '<ul>';
    _.each(items, function (i, k) {
      out += '<li>';
      if (_.isObject(i)) {
        if (!i.path) {
          out += k + '/' + onbuildFileTree(i);
        } else {
          out += '<a href="../files/' + i.name + '.html">' + k + '</a>';
        }
      }
      out += '</li>';
    });
    out += '</ul>';
    return out;
  },
  'crossLink': function oncrossLink (item, options) {
    var str = '';
    if (!item) {
      item = '';
    }
    if (item.indexOf('|') > 0) {
      var parts = item.split('|'),
        p = [];
      _.each(parts, function (i) {
        p.push(this._parseCrossLink.call(this, i));
      });
      str = p.join(' | ');
    } else {
      str = this._parseCrossLink.call(this, item, false, options.fn(this));
    }
    return str;
  },
  'crossLinkModule': function oncrossLinkModule (item, options) {
    var str = item;
    if (this.ast.modules[item]) {
      var content = options.fn(this);
      if (content === "") {
        content = item;
      }
      str = '<a href="../modules/' + item.replace(/\//g, '_') +
            '.html">' + content + '</a>';
    }
    return str;
  },
  'crossLinkRaw': function oncrossLinkRaw (item, options) {
    var str = '';
    if (!item) {
      item = '';
    }
    if (item.indexOf('|') > 0) {
      var parts = item.split('|'),
        p = [];
      _.each(parts, function (i) {
        p.push(this._parseCrossLink.call(this, i, true));
      });
      str = p.join(' | ');
    } else {
      str = this._parseCrossLink.call(this, item, true);
    }
    return str;
  }
};

/**
 * The Theme Locals
 */
var Locals = {

  /**
   * @property {BuilderContext} context - Builder Context
   */
  context: null,

  /**
   * @property {Option} options - The options
   */
  options: {},

  /**
   * @property {AST} ast - The AST object
   */
  ast: {},

  /**
   * Get the project to export
   *
   * @property
   * @name project
   */
  get project () {
    var root = path.join(process.env.PWD, this.options.dest);
    var proj = this.ast.project;
    // TODO(Yorkie): support relative path
    // proj.logo = proj.logo;
    proj.root = root;
    proj.assets = path.join(root, '/assets');
    return proj;
  },

  /**
   * Get i18n object
   *
   * @property
   * @name i18n
   */
  get i18n () {
    try {
      var defaults = require(this.options.theme + '/i18n/en.json');
      var extra = require(
        this.options.theme + '/i18n/' + this.options.lang + '.json');
      var ret = _.extend(defaults, extra);
      ret.LANG = this.options.lang;
      return ret;
    } catch (e) {
      return {};
    }
  },

  /**
   * Get modules object to export
   *
   * @property
   * @name modules
   */
  get modules () {
    var self = this;
    return Object.keys(self.ast.modules).map(
      function (name) {
        var mod = self.ast.modules[name];
        mod = self.context.addFoundAt(mod);
        mod.description = self.parseCode(self.markdown(mod.description));
        mod.members = mod.members || [];
        mod.project = self.project;
        // mod.globals = self.metadata;
        mod.i18n = self.i18n;
        return mod;
      }
    );
  },

  /**
   * Get classes object to export
   *
   * @property
   * @name classes
   */
  get classes () {
    var self = this;
    return Object.keys(self.ast.classes).map(
      function (name) {
        var clazz = self.ast.classes[name];
        if (clazz.isConstructor) {
          clazz.constructor = self.buildMember(clazz, true);
        }
        clazz = self.context.addFoundAt(clazz);
        clazz = self.appendClassToModule(clazz);
        clazz.description = self.parseCode(self.markdown(clazz.description));
        clazz.members = clazz.members || [];
        clazz.project = self.project;
        clazz.globals = self.meta;
        clazz.i18n = self.i18n;
        clazz.inheritance = self.getInheritanceTree(clazz);
        return clazz;
      }
    );
  },

  /**
   * Get files object to export
   *
   * @property
   * @name files
   */
  get files () {
    var self = this;
    return Object.keys(self.ast.files).map(
      function (name) {
        return self.ast.files[name];
      }
    );
  },

  /**
   * Parses file and line number from an item object and build's an HREF
   * @method addFoundAt
   * @param {Object} a The item to parse
   * @return {String} The parsed HREF
   */
  addFoundAt: function (a) {
    var self = this;
    var ext = this.options.markdown ? '.md' : '.html';
    if (a.file && a.line && !this.options.nocode) {
      a.foundAt = '../files/' + filterFileName(a.file) + ext + '#l' + a.line;
      if (a.path) {
        a.foundAt = a.path + '#l' + a.line;
      }
    }
    return a;
  },

  /**
   * build the method name by its name and parameters
   *
   * @method getMethodName
   * @param {String} name - The function/method name
   * @param {Array} params - The function/method parameters list
   * @param {String} params.name - The name of the parameter
   */
  getMethodName: function (name, params) {
    return name + '(' + (params || []).map(function (v) {
      return v.name;
    }).join(', ') + ')';
  },

  /**
   * Parses `<pre><code>` tags and adds the __prettyprint__ `className` to them
   * @method _parseCode
   * @private
   * @param {HTML} html The HTML to parse
   * @return {HTML} The parsed HTML
   */
  parseCode: function (html) {
    html = html || '';
    html = html.replace(/<pre><code>/g, '<pre class="code prettyprint"><code>\n');
    html = html.replace(/\&gt;/g, '>');
    html = html.replace(/\&lt;/g, '<');
    return html;
  },

  /**
   * Wrapper around the Markdown parser so it can be normalized or even side stepped
   * @method markdown
   * @private
   * @param {String} data The Markdown string to parse
   * @return {HTML} The rendered HTML
   */
  markdown: function (data) {
    if (this.options.markdown) {
      return data;
    }
    var html = marked(data || '');
    //Only reprocess if helpers were asked for
    if (this.options.helpers || (html.indexOf('{{#crossLink') > -1)) {
      try {
        // markdown-it auto-escapes quotation marks (and unfortunately
        // does not expose the escaping function)
        html = html.replace(/&quot;/g, "\"");
        html = (Handlebars.compile(html))({});
      } catch (hError) {
        //Remove all the extra escapes
        html = html.replace(/\\{/g, '{').replace(/\\}/g, '}');
        console.warn('Failed to parse Handlebars, probably an unknown helper, skiped');
      }
    }
    return html;
  },

  /**
   * append the clazz to its module
   *
   * @method appendClassToModule
   * @param {Object} clazz - The class object
   * @param {String} clazz.module - The module name of this clazz object
   */
  appendClassToModule: function (clazz) {
    var mod = this.ast.modules[clazz.module];
    if (mod) {
      if (!_.isArray(mod.classes)) mod.classes = [];
      mod.classes.push(clazz);
    }
    return clazz;
  },

  /**
   * get class inheritance tree
   *
   * @method getClassInheritanceTree
   * @return {Object} return the inheritance tree object
   */
  getInheritanceTree: function (clazz) {
    var children = [];
    this.ast.inheritedMembers.forEach(function (inherit) {
      var at = inherit.indexOf(clazz.name);
      if (at > -1 && at < inherit.length) {
        var curr = children;
        for (var i = at + 1; i < inherit.length; i++) {
          var name = inherit[i];
          var temp = {'name': name, 'children': []};
          var needNewChild = true;
          var pos;

          for (pos = 0; pos < curr.length; pos++) {
            if (curr[pos].name === name) {
              needNewChild = false;
              curr = curr[pos].children;
              break;
            }
          }
          if (needNewChild) {
            if (inherit.length - 1 === i) {
              delete temp.children;
            }
            curr.push(temp);
            if (temp.children) {
              curr = curr[curr.length - 1].children;
            }
          }
        }
      }
    });
    return children;
  },

  /**
   * build the member
   *
   * @method buildMember
   * @param {Object} memeber - The member object
   * @param {Boolean} forceBeMethod - force make the build process be for method
   * @param {Object} parent - The parent context
   * @return {Object} returned member object
   */
  buildMember: function (member, forceBeMethod ,parent) {
    var self = this;
    member = self.addFoundAt(member);
    member.description = self.parseCode(self.markdown(member.description || ''));
    member.hasAccessType = !!member.access;
    member.readonly = member.readonly === '';
    member['final'] = member['final'] === '';
    member.type = member.type || 'Unknown';
    member.config = member.itemtype === 'config';
    member.i18n = self.i18n;

    if (!member.class && member.module) {
      member.parent = self.ast.modules[member.module];
    } else {
      member.parent = self.ast.classes[member.class];
    }

    if (this.options.markdown) {
      member.markdownLink = utils.markdownLink(member.itemtype + ':' + member.name);
    }
    if (member.example) {
      if (!_.isArray(member.example)) {
        member.example = [member.example];
      }
      member.example = member.example.map(function (v) {
        return self._parseCode(self.markdown(v.trim()))
      }).join('');
    }
    if (parent) {
      var classMod = member.submodule || member.module;
      var parentMod = parent.submodule || parent.module;
      if (classMod !== parentMod) {
        member.providedBy = classMod;
      }
    }
    if (member.itemtype === 'method' || forceBeMethod) {
      member.methodDisplay = self.getMethodName(member.name, member.params);
      member.hasParams = (member.params || []).length > 0;
      if (member['return']) {
        member.hasReturn = true;
        member.returnType = member['return'].type;
      } else {
        member.returnType = '';
      }
    }
    if (member.itemtype === 'attribute') {
      member.emit = self.options.attributesEmit;
    }
    return member;
  },

  /**
   * Counter for stepping into merges
   * @private
   * @property _mergeCounter
   * @type Number
   */
  _mergeCounter: null,

  /**
   * Merge superclass data into a child class
   * @method mergeExtends
   * @param {Object} info The item to extend
   * @param {Array} members The list of items to merge in
   * @param {Boolean} first Set for the first call
   */
  mergeExtends: function (info, members, first, onmember) {
    var self = this;
    self._mergeCounter = (first) ? 0 : (self._mergeCounter + 1);

    if (self._mergeCounter === 100) {
      throw new Error('YUIDoc detected a loop extending class ' + info.name);
    }
    if (info.extends || info.uses) {
      var hasItems = {};
      hasItems[info.extends] = 1;
      if (info.uses) {
        info.uses.forEach(function (v) {
          hasItems[v] = 1;
        });
      }
      self.ast.members.forEach(function (v) {
        if (hasItems[v.class]) {
          if (!v.static) {
            var q, override = self.hasProperty(members, v);
            if (override === false) {
              //This method was extended from the parent class but not over written
              q = _.extend({}, v);
              q.extended_from = v.class;
              members.push(q);
            } else {
              //This method was extended from the parent and overwritten in this class
              q = _.extend({}, v);
              q = self.augmentData(q);
              members[override].overwritten_from = q;
            }
            if (typeof onmember === 'function') {
              onmember(q);
            }
          }
        }
      });
      if (self.ast.classes[info.extends]) {
        if (self.ast.classes[info.extends].extends || self.ast.classes[info.extends].uses) {
          members = self.mergeExtends(self.ast.classes[info.extends], members);
        }
      }
    }
    return members;
  },

  /**
   * generate expand function
   *
   * @method getExpandIterator
   * @private
   * @param {Object} parent - The object to be set
   */
  getExpandIterator: function (parent) {
    var pluralsMap = {
      'property': 'properties'
    };
    return function (item) {
      if (!item.itemtype) return;
      var plural = pluralsMap[item.itemtype];
      if (!plural) {
        plural = item.itemtype + 's';
      }
      if (!parent[plural]) {
        parent[plural] = [];
      }
      parent[plural].push(item);
    }
  },

  /**
   * extends members array
   *
   * @method extendMembers
   * @return
   */
  extendMembers: function (meta) {
    _.each(
      meta.classes, 
      function (clazz) {
        var inherited = [];
        clazz.members = this.mergeExtends(clazz, clazz.members, true, function (member) {
          if (member.extendedFrom) inherited.push(member);
        });
        clazz.members.inherited = inherited;
      }, 
      this
    );
  },

  /**
   * extends modules
   *
   * @method expandMembersFromModules
   */
  expandMembersFromModules: function (meta) {
    _.each(
      meta.modules,
      function (mod) {
        mod.properties = [];
        mod.attributes = [];
        mod.methods = [];
        mod.events = [];
        mod.members.forEach(
          this.getExpandIterator(mod.members)
        );
      },
      this
    );
  },

  /**
   * extends members from classes
   *
   * @method expandMembersFromModules
   */
  expandMembersFromClasses: function (meta) {
    _.each(
      meta.classes,
      function (clazz) {
        clazz.members.forEach(
          this.getExpandIterator(clazz.members)
        );
        clazz.members.inherited = clazz.members.inherited || [];
        clazz.members.inherited.forEach(
          this.getExpandIterator(clazz.members.inherited)
        );
      },
      this
    );
  },

  create: function (context) {
    this.context = context;
    this.options = context.options;
    this.ast = context.ast;

    var instance = utils.prepare([this.options.theme], this.project);
    instance.meta.classes = this.classes;
    instance.meta.modules = this.modules;
    instance.meta.files = this.files;
    instance.meta.i18n = this.i18n;
    instance.meta.globals = instance.meta;

    // merge extends
    this.extendMembers(instance.meta);
    this.expandMembersFromModules(instance.meta);
    this.expandMembersFromClasses(instance.meta);

    // build locals.js
    var locals;
    var meta = instance.meta;
    try {
      locals = require(this.options.theme + '/locals.js');
    } catch (e) {
      locals = function () {};
    }
    locals(meta.modules, meta.classes, meta);
    return instance;
  }

};

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
    opts.meta.classes = [];
    opts.meta.enums = [];
    _.each(this.ast.classes, function (v) {
      if (v.external) {
        return;
      }
      var datum = {
        displayName: v.name,
        name: v.name,
        namespace: v.namespace,
        module: v.module,
        description: v.description,
        access: v.access || 'public'
      };

      if (v.isEnum) {
        opts.meta.enums.push(datum);
      } else {
        opts.meta.classes.push(datum);
      }
    });
    opts.meta.classes.sort(this.nameSort);
    opts.meta.enums.sort(this.nameSort);
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
    opts.meta.modules = [];
    opts.meta.allModules = [];
    _.each(this.ast.modules, function (v) {
      if (v.external) {
        return;
      }
      opts.meta.allModules.push({
        displayName: v.displayName || v.name,
        name: filterFileName(v.name),
        description: v.description
      });
      if (!v.isSubmodule) {
        var o = {
          displayName: v.displayName || v.name,
          name: filterFileName(v.name)
        };
        if (v.submodules) {
          o.submodules = [];
          _.each(v.submodules, function (i, k) {
            var moddef = self.ast.modules[k];
            if (moddef) {
              o.submodules.push({
                displayName: k,
                description: moddef.description
              });
            }
          });
          o.submodules.sort(self.nameSort);
        }
        opts.meta.modules.push(o);
      }
    });
    opts.meta.modules.sort(this.nameSort);
    opts.meta.allModules.sort(this.nameSort);
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
    opts.meta.files = [];
    _.each(this.ast.files, function (v) {
      if (v.external) {
        return;
      }
      opts.meta.files.push({
        displayName: v.name,
        name: self.filterFileName(v.name),
        path: v.path || v.name
      });
    });

    var tree = {};
    var files = [];
    _.each(this.ast.files, function (v) {
      if (v.external) {
        return;
      }
      files.push(v.name);
    });
    files.sort();
    _.each(files, function (v) {
      var p = v.split('/'), par;
      p.forEach(function (i, k) {
        if (!par) {
          if (!tree[i]) {
            tree[i] = {};
          }
          par = tree[i];
        } else {
          if (!par[i]) {
            par[i] = {};
          }
          if (k + 1 === p.length) {
            par[i] = {
              path: v,
              name: self.filterFileName(v)
            };
          }
          par = par[i];
        }
      });
    });
    opts.meta.fileTree = tree;
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
      a.foundAt = '../files/' + this.filterFileName(a.file) + ext + '#l' + a.line;
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
   * Compule the AST
   * @method compile
   * @static
   * @param {Function} callback - The callback
   */
  compile: function (callback) {
    debug('Compiling templates...');
    var self = this;
    this
    .mixExternal()
    .then(this.makeDirs.bind(this))
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
    });
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
    debug('Start writing api.js');
    locals = this.populateClasses(locals);
    locals = this.populateModules(locals);
    ['enums', 'classes', 'modules'].forEach(function (id) {
      locals.meta[id].forEach(function (v, k) {
        if (v.submodules) {
          v.submodules.forEach(function (submodule) {
            submodule.name = submodule.displayName;
            locals.meta[id].push(submodule);
          });
        }
      });
      locals.meta[id].sort();
    });
    return fs.writeFileAsync(
      this.options.dest + '/api.json',
      JSON.stringify({
        project: locals.meta.project,
        classes: locals.meta.classes,
        modules: locals.meta.modules,
        files: locals.meta.files,
        enums: locals.meta.enums
      }, null, 2),
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
        var view = new DocView(clazz, null, '../');
        var html = self.render('enum', view, locals);
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
  BuilderContext.init(ast, options).compile(onfinish);
}
exports.compile = compile;
