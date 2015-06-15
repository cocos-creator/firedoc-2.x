
# Fireball Engine API

Fireball is the game engine for the future.


### File: `lib/builder.js`

```js
/* global YUI */
/**
 * Copyright (c) 2011, Yahoo! Inc. All rights reserved.
 * Code licensed under the BSD License:
 * https://github.com/yui/yuidoc/blob/master/LICENSE
 */
var MarkdownIt = require('markdown-it'),
  fs = require('graceful-fs'),
  noop = function () {},
  path = require('path'),
  TEMPLATE;

/**
* Takes the `JSON` data from the `DocParser` class, creates and parses markdown and handlebars
based templates to generate static HTML content
* @class DocBuilder
* @module yuidoc
*/

YUI.add('doc-builder', function (Y) {
  /*jshint onevar:false */

  var fixType = Y.Lang.fixType,
    print = function (items) {
      var out = '<ul>';

      Y.each(items, function (i, k) {
        out += '<li>';
        if (Y.Lang.isObject(i)) {
          if (!i.path) {
            out += k + '/' + print(i);
          } else {
            out += '<a href="../files/' + i.name + '.html">' + k + '</a>';
          }
        }
        out += '</li>';
      });

      out += '</ul>';
      return out;
    };

  Y.Handlebars.registerHelper('buildFileTree', function (items) {
    return print(items);
  });

  var DEFAULT_THEME = path.join(__dirname, '../', 'themes', 'default'),
    themeDir = DEFAULT_THEME;

  Y.DocBuilder = function (options, data) {
    this.options = options;
    if (options.helpers) {
      this._addHelpers(options.helpers);
    }
    if (options.themedir) {
      themeDir = options.themedir;
    }
    this.md = new MarkdownIt(options.markdown);
    this.data = data;
    Y.log('Building..', 'info', 'builder');
    this.files = 0;
    var self = this;

    Y.Handlebars.registerHelper('crossLink', function (item, options) {
      var str = '';
      if (!item) {
        item = '';
      }
      if (item.indexOf('|') > 0) {
        var parts = item.split('|'),
          p = [];
        Y.each(parts, function (i) {
          p.push(self._parseCrossLink.call(self, i));
        });
        str = p.join(' | ');
      } else {
        str = self._parseCrossLink.call(self, item, false, options.fn(this));
      }
      return str;
    });

    Y.Handlebars.registerHelper('crossLinkModule', function (item, options) {
      var str = item;
      if (self.data.modules[item]) {
        var content = options.fn(this);
        if (content === "") {
          content = item;
        }
        str = '<a href="../modules/' + item.replace(/\//g, '_') +
            	'.html">' + content + '</a>';
      }
      return str;
    });

    Y.Handlebars.registerHelper('crossLinkRaw', function (item) {
      var str = '';
      if (!item) {
        item = '';
      }
      if (item.indexOf('|') > 0) {
        var parts = item.split('|'),
          p = [];
        Y.each(parts, function (i) {
          p.push(self._parseCrossLink.call(self, i, true));
        });
        str = p.join(' | ');
      } else {
        str = self._parseCrossLink.call(self, item, true);
      }
      return str;
    });

    this.cacheTemplates = true;
    if (options.cacheTemplates === false) {
      this.cacheTemplates = false;
    }
  };

  Y.DocBuilder.prototype = {
    /**
     * Register a `Y.Handlebars` helper method
     * @method _addHelpers
     * @param {Object} helpers Object containing a hash of names and functions
     */
    _addHelpers: function (helpers) {
      Y.log('Importing helpers: ' + helpers, 'info', 'builder');
      helpers.forEach(function (imp) {
        if (!Y.Files.exists(imp) || Y.Files.exists(path.join(process.cwd(), imp))) {
          imp = path.join(process.cwd(), imp);
        }
        var h = require(imp);
        Object.keys(h).forEach(function (name) {
          Y.Handlebars.registerHelper(name, h[name]);
        });
      });
    },
    /**
     * Wrapper around the Markdown parser so it can be normalized or even side stepped
     * @method markdown
     * @private
     * @param {String} data The Markdown string to parse
     * @return {HTML} The rendered HTML
     */
    markdown: function (data) {
      if (Y.options.useMarkdown) {
        return data;
      }
      var html = this.md.render(data);
      //Only reprocess if helpers were asked for
      if (this.options.helpers || (html.indexOf('{{#crossLink') > -1)) {
        try {
          // markdown-it auto-escapes quotation marks (and unfortunately
          // does not expose the escaping function)
          html = html.replace(/&quot;/g, "\"");
          html = (Y.Handlebars.compile(html))({});
        } catch (hError) {
          //Remove all the extra escapes
          html = html.replace(/\\{/g, '{').replace(/\\}/g, '}');
          Y.log('Failed to parse Handlebars, probably an unknown helper, skipping..', 'warn', 'builder');
        }
      }
      return html;
    },

    /**
     * Parse the item to be cross linked and return an HREF linked to the item
     * @method _parseCrossLink
     * @private
     * @param {String} item The item to crossLink
     * @param {Boolean} [raw=false] Do not wrap it in HTML
     * @param {String} [content] crossLink helper content
     */
    _parseCrossLink: function (item, raw, content) {
      item = item || 'unknown';
      var self = this;
      var base = '../',
        baseItem,
        newWin = false,
        className = 'crosslink';

      // TODO(@yorkie): now remove the unnecessary fixType
      // will remove this absolutely if this is working for weeks
      // item = fixType(item);
      item = baseItem = Y.Lang.trim(item.replace('{', '').replace('}', ''));
      //Remove Cruft
      item = item.replace('*', '').replace('[', '').replace(']', '');
      var link = false, href;

      if (self.data.classes[item]) {
        link = true;
      } else {
        if (self.data.classes[item.replace('.', '')]) {
          link = true;
          item = item.replace('.', '');
        }
      }
      if (self.options.externalData) {
        if (self.data.classes[item]) {
          if (self.data.classes[item].external) {
            href = self.data.classes[item].path;
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
          if (self.data.classes[cls]) {
            self.data.classitems.forEach(function (i) {
              if (i.itemtype === type && i.name === method && i.class === cls) {
                link = true;
                baseItem = method;
                var t = type;
                if (t === 'attribute') {
                  t = 'attr';
                }
                href = Y.webpath(base, 'classes', cls + '.html#' + t + '_' + method);
              }
            });
          }
        }
      }

      if (item === 'Object' || item === 'Array') {
        link = false;
      }
      if (!href) {
        href = Y.webpath(base, 'classes', item + '.html');
        if (base.match(/^https?:\/\//)) {
          href = base + Y.webpath('classes', item + '.html');
        }
      }
      if (!link && self.options.linkNatives) {
        if (self.NATIVES && self.NATIVES[item]) {
          href = self.NATIVES_LINKER(item);
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
     * List of native types to cross link to MDN
     * @property NATIVES
     * @type Object
     */
    NATIVES: {
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
    },
    /**
     * Function to link an external type uses `NATIVES` object
     * @method NATIVES_LINKER
     * @private
     * @param {String} name The name of the type to link
     * @return {String} The combined URL
     */
    NATIVES_LINKER: function (name) {
      var url = 'https:/' + '/developer.mozilla.org/en/JavaScript/Reference/Global_Objects/';
      if (this.NATIVES[name] !== 1) {
        url = this.NATIVES[name];
      }
      return url + name;
    },
    /**
     * Mixes the various external data soures together into the local data, augmenting
     * it with flags.
     * @method _mixExternal
     * @private
     */
    _mixExternal: function () {
      var self = this;
      Y.log('External data received, mixing', 'info', 'builder');
      self.options.externalData.forEach(function (exData) {

        ['files', 'classes', 'modules'].forEach(function (k) {
          Y.each(exData[k], function (item, key) {
            item.external = true;
            var file = item.name;
            if (!item.file) {
              file = self.filterFileName(item.name);
            }

            if (item.type) {
              item.type = fixType(item.type);
            }

            item.path = exData.base + path.join(k, file + '.html');
            self.data[k][key] = item;
          });
        });
        Y.each(exData.classitems, function (item) {
          item.external = true;
          item.path = exData.base + path.join('files', self.filterFileName(item.file) + '.html');
          if (item.type) {
            item.type = fixType(item.type);
          }
          if (item.params) {
            item.params.forEach(function (p) {
              if (p.type) {
                p.type = fixType(p.type);
              }
            });
          }
          if (item["return"]) {
            item["return"].type = fixType(item["return"].type);
          }
          self.data.classitems.push(item);
        });
      });
    },
    /**
     * Fetches the remote data and fires the callback when it's all complete
     * @method mixExternal
     * @param {Callback} cb The callback to execute when complete
     * @async
     */
    mixExternal: function (cb) {
      var self = this,
        info = self.options.external;

      if (!info) {
        cb();
        return;
      }
      if (!info.merge) {
        info.merge = 'mix';
      }
      if (!info.data) {
        Y.log('External config found but no data path defined, skipping import.', 'warn', 'builder');
        cb();
        return;
      }
      if (!Y.Lang.isArray(info.data)) {
        info.data = [info.data];
      }
      Y.log('Importing external documentation data.', 'info', 'builder');

      var stack = new Y.Parallel();
      info.data.forEach(function (i) {
        var base;
        if (typeof i === 'object') {
          base = i.base;
          i = i.json;
        }
        if (i.match(/^https?:\/\//)) {
          if (!base) {
            base = i.replace('data.json', '');
          }
          Y.use('io-base', stack.add(function () {
            Y.log('Fetching: ' + i, 'info', 'builder');
            Y.io(i, {
              on: {
                complete: stack.add(function (id, e) {
                  Y.log('Received: ' + i, 'info', 'builder');
                  var data = JSON.parse(e.responseText);
                  data.base = base;
                  //self.options.externalData = Y.mix(self.options.externalData || {}, data);
                  if (!self.options.externalData) {
                    self.options.externalData = [];
                  }
                  self.options.externalData.push(data);
                })
              }
            });
          }));
        } else {
          if (!base) {
            base = path.dirname(path.resolve(i));
          }
          var data = Y.Files.getJSON(i);
          data.base = base;
          //self.options.externalData = Y.mix(self.options.externalData || {}, data);
          if (!self.options.externalData) {
            self.options.externalData = [];
          }
          self.options.externalData.push(data);
        }
      });

      stack.done(function () {
        Y.log('Finished fetching remote data', 'info', 'builder');
        self._mixExternal();
        cb();
      });
    },
    /**
     * File counter
     * @property files
     * @type Number
     */
    files: null,
    /**
     * Holder for project meta data
     * @property _meta
     * @type Object
     * @private
     */
    _meta: null,
    /**
     * Prep the meta data to be fed to Selleck
     * @method getProjectMeta
     * @return {Object} The project metadata
     */
    getProjectMeta: function () {
      var obj = {
        meta: {
          yuiSeedUrl: 'http://yui.yahooapis.com/3.5.0/build/yui/yui-min.js',
          yuiGridsUrl: 'http://yui.yahooapis.com/3.5.0/build/cssgrids/cssgrids-min.css'
        }
      };
      if (!this._meta) {
        try {
          var meta, theme = path.join(themeDir, 'theme.json');
          if (Y.Files.exists(theme)) {
            Y.log('Loading theme from ' + theme, 'info', 'builder');
            meta = Y.Files.getJSON(theme);
          } else if (DEFAULT_THEME !== themeDir) {
            theme = path.join(DEFAULT_THEME, 'theme.json');
            if (Y.Files.exists(theme)) {
              Y.log('Loading theme from ' + theme, 'info', 'builder');
              meta = Y.Files.getJSON(theme);
            }
          }
          if (meta) {
            obj.meta = meta;
            this._meta = meta;
          }
        } catch (e) {
          console.error('Error', e);
        }
      } else {
        obj.meta = this._meta;
      }
      Y.each(this.data.project, function (v, k) {
        var key = k.substring(0, 1).toUpperCase() + k.substring(1, k.length);
        obj.meta['project' + key] = v;
      });
      return obj;
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
      Y.each(this.data.classes, function (v) {
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

        if (v.is_enum) {
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
      Y.each(this.data.modules, function (v) {
        if (v.external) {
          return;
        }
        opts.meta.allModules.push({
          displayName: v.displayName || v.name,
          name: self.filterFileName(v.name),
          description: v.description
        });
        if (!v.is_submodule) {
          var o = {
            displayName: v.displayName || v.name,
            name: self.filterFileName(v.name)
          };
          if (v.submodules) {
            o.submodules = [];
            Y.each(v.submodules, function (i, k) {
              var moddef = self.data.modules[k];
              if (moddef) {
                o.submodules.push({
                  displayName: k,
                  description: moddef.description
                });
                // } else {
                //     Y.log('Submodule data missing: ' + k + ' for ' + v.name, 'warn', 'builder');
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
      Y.each(this.data.files, function (v) {
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
      Y.each(this.data.files, function (v) {
        if (v.external) {
          return;
        }
        files.push(v.name);
      });
      files.sort();
      Y.each(files, function (v) {
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
      var self = this;
      var ext = Y.options.useMarkdown ? '.md' : '.html';
      if (a.file && a.line && !self.options.nocode) {
        a.foundAt = '../files/' + self.filterFileName(a.file) + ext + '#l' + a.line;
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
      Y.each(o, function (i, k1) {
        if (i && i.forEach) {
          Y.each(i, function (a, k) {
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

            Y.each(a, function (c, d) {
              if (c.forEach || (c instanceof Object)) {
                c = self.augmentData(c);
                a[d] = c;
              }
            });
            o[k1][k] = a;
          });
        } else if (i instanceof Object) {
            i = self.addFoundAt(i);
            Y.each(i, function (v, k) {
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
     * Makes the default directories needed
     * @method makeDirs
     * @param {Callback} cb The callback to execute after it's completed
     */
    makeDirs: function (cb) {
      var self = this;
      var dirs = ['classes', 'enums', 'modules', 'files'];
      if (self.options.dumpview) {
        dirs.push('json');
      }
      var writeRedirect = function (dir, file, cb) {
        Y.Files.exists(file, function (x) {
          if (x) {
            var out = path.join(dir, 'index.html');
            fs.createReadStream(file).pipe(fs.createWriteStream(out));
          }
          cb();
        });
      };
      var defaultIndex = path.join(themeDir, 'assets', 'index.html');
      var stack = new Y.Parallel();
      Y.log('Making default directories: ' + dirs.join(','), 'info', 'builder');
      dirs.forEach(function (d) {
        var dir = path.join(self.options.outdir, d);
        Y.Files.exists(dir, stack.add(function (x) {
          if (!x) {
            fs.mkdir(dir, 0777, stack.add(function () {
              writeRedirect(dir, defaultIndex, stack.add(noop));
            }));
          } else {
            writeRedirect(dir, defaultIndex, stack.add(noop));
          }
        }));
      });
      stack.done(function () {
        if (cb) {
          cb();
        }
      });
    },
    _resolveUrl: function (url, opts) {
      if (!url) {
        return null;
      }
      if (url.indexOf("://") >= 0) {
        return url;
      }
      return path.join(opts.meta.projectRoot, url);
    },
    /**
     * Parses `<pre><code>` tags and adds the __prettyprint__ `className` to them
     * @method _parseCode
     * @private
     * @param {HTML} html The HTML to parse
     * @return {HTML} The parsed HTML
     */
    _parseCode: function (html) {
      html = html || '';
      //html = html.replace(/<pre><code>/g, '<pre class="code"><code class="prettyprint">');
      html = html.replace(/<pre><code>/g, '<pre class="code prettyprint"><code>\n');
      html = html.replace(/\&gt;/g, '>');
      html = html.replace(/\&lt;/g, '<');
      return html;
    },
    /**
     * Ported from [Selleck](https://github.com/rgrove/selleck), this handles ```'s in fields
     * that are not parsed by the **Markdown** parser.
     * @method _inlineCode
     * @private
     * @param {HTML} html The HTML to parse
     * @return {HTML} The parsed HTML
     */
    _inlineCode: function (html) {
      if (Y.options.useMarkdown) {
        return html;
      }
      html = html.replace(/\\`/g, '__{{SELLECK_BACKTICK}}__');
      html = html.replace(/`(.+?)`/g, function (match, code) {
        return '<code>' + Y.escapeHTML(code) + '</code>';
      });
      html = html.replace(/__\{\{SELLECK_BACKTICK\}\}__/g, '`');
      return html;
    },

    /**
     * build the uniform API to export the theme context
     *
     * @method buildAPI
     * @return {Object} the api object
     */
    buildAPI: function () {
      this.api = Y.prepare([DEFAULT_THEME, themeDir], this.getProjectMeta());
      this.api.meta.project = this.project;
      this.buildMembers();
      
      // set components
      this.api.meta.modules = this.modules;
      this.api.meta.classes = this.classes;
      this.api.meta.files = this.files;
      this.api.meta.globals = this.api.meta;
      this.api.meta.i18n = this.i18n;

      // merge extends
      this.extendMembers();
      this.expandMembersFromModules();
      this.expandMembersFromClasses();

      // build locals.js
      var locals;
      try {
        locals = require(this.options.themedir + 'locals.js');
      } catch (e) {
        locals = function () {};
      }
      locals(this.api.meta.modules, this.api.meta.classes, this.api.meta);
      return this.api;
    },

    /**
     * build the members
     *
     * @method buildMembers
     * @return {Boolean} always be true
     */
    buildMembers: function () {
      var self = this;
      self.data.classitems.forEach(function (member) {
        var parent;
        if (member.class) {
          parent = self.data.classes[member.class];
        } else if (member.module) {
          parent = self.data.modules[member.module];
        }
        if (!parent) return;
        if (!parent.members) {
          parent.members = [];
        }
        var item = self.buildMember(member, false, parent);
        parent.members.push(item);
      });
      return true;
    },

    /**
     * extends members array
     *
     * @method extendMembers
     * @return
     */
    extendMembers: function () {
      var self = this;
      this.api.meta.classes.forEach(function (clazz) {
        var inherited = [];
        clazz.members = self.mergeExtends(clazz, clazz.members, true, function (member) {
          if (member['extended_from']) inherited.push(member);
        });
        clazz.members.inherited = inherited;
      });
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
      member.description = self._parseCode(self.markdown(member.description || ''));
      member.hasAccessType = !!member.access;
      member.readonly = member.readonly === '';
      member['final'] = member['final'] === '';
      member.type = member.type || 'Unknown';
      member.config = member.itemtype === 'config';
      member.i18n = self.i18n;

      if (!member.class && member.module) {
        member.parent = self.data.modules[member.module];
      } else {
        member.parent = self.data.classes[member.class];
      }

      if (Y.options.useMarkdown) {
        member.markdownLink = Y.markdownLink(member.itemtype + ':' + member.name);
      }
      if (member.example) {
        if (!Array.isArray(member.example)) {
          member.example = [member.example];
        }
        member.example = member.example.map(function (v) {
          return self._parseCode(self.markdown(v))
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
     * extends modules
     *
     * @method expandMembersFromModules
     */
    expandMembersFromModules: function (modules) {
      var self = this;
      self.api.meta.modules.forEach(function (mod) {
        mod.properties = [];
        mod.attributes = [];
        mod.methods = [];
        mod.events = [];
        mod.members.forEach(
          self.getExpandIterator(mod.members)
        );
      });
    },

    /**
     * extends members from classes
     *
     * @method expandMembersFromModules
     */
    expandMembersFromClasses: function () {
      var self = this;
      self.api.meta.classes.forEach(function (clazz) {
        clazz.members.forEach(
          self.getExpandIterator(clazz.members)
        );
        clazz.members.inherited = clazz.members.inherited || [];
        clazz.members.inherited.forEach(
          self.getExpandIterator(clazz.members.inherited)
        );
      });
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
     * get dest view type md or html
     *
     * @method getViewType
     * @return {String} The view type
     */
    getViewType: function () {
      if (Y.options.useMarkdown) {
        return '.md';
      } else {
        return '.html';
      }
    },

    /**
     * get class inheritance tree
     *
     * @method getClassInheritanceTree
     * @return {Object} return the inheritance tree object
     */
    getInheritanceTree: function (clazz) {
      var children = [];
      this.data.classinherits.forEach(function (inherit) {
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
     * append the clazz to its module
     *
     * @method appendClassToModule
     * @param {Object} clazz - The class object
     * @param {String} clazz.module - The module name of this clazz object
     */
    appendClassToModule: function (clazz) {
      var mod = this.data.modules[clazz.module];
      if (mod) {
        if (!Array.isArray(mod.classes)) mod.classes = [];
        mod.classes.push(clazz);
      }
      return clazz;
    },

    /**
     * Get the project to export
     *
     * @property
     * @name project
     */
    get project () {
      var root = path.join(process.env.PWD, this.options.outdir);
      return {
        'logo': this._resolveUrl(this.data.project.logo),
        'root': root,
        'assets': path.join(root, '/assets')
      };
    },

    /**
     * Get i18n object
     *
     * @property
     * @name i18n
     */
    get i18n () {
      try {
        var defaults = require(this.options.themedir + '/i18n/en.json');
        var extra = require(
          this.options.themedir + '/i18n/' + this.options.lang + '.json');
        var ret = Y.merge(defaults, extra);
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
      return Object.keys(self.data.modules).map(
        function (name) {
          var mod = self.data.modules[name];
          mod = self.addFoundAt(mod);
          mod.description = self._parseCode(self.markdown(mod.description));
          mod.members = mod.members || [];
          mod.project = self.project;
          mod.globals = self.api.meta;
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
      return Object.keys(self.data.classes).map(
        function (name) {
          var clazz = self.data.classes[name];
          if (clazz['is_constructor']) {
            clazz.constructor = self.buildMember(clazz, true);
          }
          clazz = self.addFoundAt(clazz);
          clazz = self.appendClassToModule(clazz);
          clazz.description = self._parseCode(self.markdown(clazz.description));
          clazz.members = clazz.members || [];
          clazz.project = self.project;
          clazz.globals = self.api.meta;
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
      return Object.keys(self.data.files).map(
        function (name) {
          return self.data.files[name];
        }
      );
    },

    /**
     * Ported from [Selleck](https://github.com/rgrove/selleck)
     * Renders the handlebars templates with the default View class.
     * @method render
     * @param {HTML} source The default template to parse
     * @param {Class} view The default view handler
     * @param {HTML} [layout=null] The HTML from the layout to use.
     * @param {Object} [partials=object] List of partials to include in this template
     * @param {Callback} callback
     * @param {Error} callback.err
     * @param {HTML} callback.html The assembled template markup
     */
    render: function (source, view, layout, partials, callback) {
      var html = [];

      // function buffer(line) {
      //     html.push(line);
      // }

      // Allow callback as third or fourth param.
      if (typeof partials === 'function') {
        callback = partials;
        partials = {};
      } else if (typeof layout === 'function') {
        callback = layout;
        layout = null;
      }
      var parts = Y.merge(partials || {}, {
        layout_content: source
      });
      Y.each(parts, function (source, name) {
        Y.Handlebars.registerPartial(name, source);
      });

      if (!TEMPLATE || !this.cacheTemplates) {
        TEMPLATE = Y.Handlebars.compile(layout);
      }


      var _v = {};
      for (var k in view) {
        if (Y.Lang.isFunction(view[k])) {
          _v[k] = view[k]();
        } else {
          _v[k] = view[k];
        }
      }
      html = TEMPLATE(_v);
      html = this._inlineCode(html);
      callback(null, html);
    },
    /**
     * Render the index file
     * @method renderIndex
     * @param {Function} cb The callback fired when complete
     * @param {String} cb.html The HTML to render this view
     * @param {Object} cb.view The View Data
     */
    renderIndex: function (cb) {
      var self = this;
      var api = self.api;
      var view = new Y.DocView(api.meta);
      self.render('{{>index}}', view, api.layouts.main, api.partials, function (err, html) {
        self.files += 1;
        cb(html, view);
      });
    },
    /**
     * Generates the index.html file
     * @method writeIndex
     * @param {Callback} cb The callback to execute after it's completed
     * @param {String} cb.html The HTML to write index view
     * @param {Object} cb.view The View Data
     */
    writeIndex: function (cb) {
      var self = this;
      var stack = new Y.Parallel();

      Y.log('Preparing index.html', 'info', 'builder');
      self.renderIndex(stack.add(function (html, view) {
        stack.html = html;
        stack.view = view;
        if (self.options.dumpview) {
          Y.Files.writeFile(path.join(self.options.outdir, 'json', 'index.json'), JSON.stringify(view), stack.add(noop));
        }
        var indexPath;
        if (Y.options.useMarkdown) {
          indexPath = path.join(self.options.outdir, 'readme.md');
        } else {
          indexPath = path.join(self.options.outdir, 'index.html');
        }
        Y.Files.writeFile(indexPath, html, stack.add(noop));
      }));

      stack.done(function ( /* html, view */ ) {
        Y.log('Writing index.html', 'info', 'builder');
        cb(stack.html, stack.view);
      });
    },
    /**
     * Render a module
     * @method renderModule
     * @param {Function} cb The callback fired when complete
     * @param {String} cb.html The HTML to render this view
     * @param {Object} cb.view The View Data
     */
    renderModule: function (mod, cb) {
      var self = this;
      var api = self.api;
      var view = new Y.DocView(mod, null, '../');
      self.render('{{>module}}', view, api.layouts.main, api.partials, function (err, html) {
        self.files += 1;
        cb(html, view);
      });
    },
    /**
     * Generates the module files under "out"/modules/
     * @method writeModules
     * @param {Callback} cb The callback to execute after it's completed
     * @param {String} cb.html The HTML to write module view
     * @param {Object} cb.view The View Data
     */
    writeModules: function (cb, layout) {
      layout = layout || 'main';
      var self = this;
      var meta = self.api.meta;
      var modules = meta.modules;
      var stack = new Y.Parallel();
      stack.html = [];
      stack.view = [];

      Y.log('Rendering and writing ' + modules.length + ' modules pages.', 'info', 'builder');
      modules.forEach(function (mod) {
        if (mod.external) return;

        self.renderModule(mod, function (html, view) {
          stack.html.push(html);
          stack.view.push(view);
          if (self.options.dumpview) {
            Y.Files.writeFile(
              path.join(self.options.outdir, 'json', 'module_' + mod.name + '.json'),
              JSON.stringify(view),
              stack.add(noop)
            );
          }
          var outPath = path.join(self.options.outdir, 'modules', mod.name) + self.getViewType();
          Y.Files.writeFile(outPath, html, stack.add(noop));
        });
      });
      stack.done(function () {
        Y.log('Finished writing module files', 'info', 'builder');
        cb(stack.html, stack.view);
      });
    },
    /**
     * Checks an array of items (class items) to see if an item is in that list
     * @method hasProperty
     * @param {Array} a The Array of items to check
     * @param {Object} b The object to find
     * @return Boolean
     */
    hasProperty: function (a, b) {
      var other = false;
      Y.some(a, function (i, k) {
        if ((i.itemtype === b.itemtype) && (i.name === b.name)) {
          other = k;
          return true;
        }
      });
      return other;
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
     * @param {Array} classItems The list of items to merge in
     * @param {Boolean} first Set for the first call
     */
    mergeExtends: function (info, classItems, first, onmember) {
      var self = this;
      self._mergeCounter = (first) ? 0 : (self._mergeCounter + 1);

      if (self._mergeCounter === 100) {
        throw ('YUIDoc detected a loop extending class ' + info.name);
      }
      if (info.extends || info.uses) {
        var hasItems = {};
        hasItems[info.extends] = 1;
        if (info.uses) {
          info.uses.forEach(function (v) {
            hasItems[v] = 1;
          });
        }
        self.data.classitems.forEach(function (v) {
          //console.error(v.class, '==', info.extends);
          if (hasItems[v.class]) {
            if (!v.static) {
              var q, override = self.hasProperty(classItems, v);
              if (override === false) {
                //This method was extended from the parent class but not over written
                //console.error('Merging extends from', v.class, 'onto', info.name);
                q = Y.merge({}, v);
                q.extended_from = v.class;
                classItems.push(q);
              } else {
                //This method was extended from the parent and overwritten in this class
                q = Y.merge({}, v);
                q = self.augmentData(q);
                classItems[override].overwritten_from = q;
              }
              if (typeof onmember === 'function') {
                onmember(q);
              }
            }
          }
        });
        if (self.data.classes[info.extends]) {
          if (self.data.classes[info.extends].extends || self.data.classes[info.extends].uses) {
            //console.error('Stepping down to:', self.data.classes[info.extends]);
            classItems = self.mergeExtends(self.data.classes[info.extends], classItems);
          }
        }
      }
      return classItems;
    },
    /**
     * Render the class file
     * @method renderClass
     * @param {Function} cb The callback fired when complete
     * @param {String} cb.html The HTML to render this view
     * @param {Object} cb.view The View Data
     */
    renderClass: function (clazz, cb) {
      var self = this;
      var api = self.api;
      var view = new Y.DocView(clazz, null, '../');
      var tmpl = clazz['is_enum'] ? '{{>enums}}' : '{{>classes}}';
      self.render(tmpl, view, api.layouts.main, api.partials, function (err, html) {
        self.files += 1;
        cb(html, view);
      });
    },
    /**
     * Generates the class files under "out"/classes/
     * @method writeClasses
     * @param {Callback} cb The callback to execute after it's completed
     * @param {String} cb.html The HTML to write class view
     * @param {Object} cb.view The View Data
     */
    writeClasses: function (cb, layout) {
      layout = layout || 'main';
      var self = this;
      var meta = self.api.meta;
      var classes = meta.classes;
      var stack = new Y.Parallel();
      stack.html = [];
      stack.view = [];

      Y.log('Rendering and writing ' + classes.length + ' class pages.', 'info', 'builder');
      classes.forEach(function (clazz) {
        if (clazz.external) return;

        self.renderClass(clazz, function (html, view) {
          var dir = clazz['is_enum'] ? 'enums' : 'classes';
          stack.html.push(html);
          stack.view.push(view);
          if (self.options.dumpview) {
            Y.Files.writeFile(
              path.join(self.options.outdir, 'json', dir + '_' + clazz.name + '.json'),
              JSON.stringify(view),
              stack.add(noop)
            );
          }
          var outPath = path.join(self.options.outdir, dir, clazz.name) + self.getViewType();
          Y.Files.writeFile(outPath, html, stack.add(noop));
        });
      });
      stack.done(function () {
        Y.log('Finished writing class files', 'info', 'builder');
        cb(stack.html, stack.view);
      });
    },
    /**
     * Sort method of array of objects with a property called __name__
     * @method nameSort
     * @param {Object} a First object to compare
     * @param {Object} b Second object to compare
     * @return {Number} 1, -1 or 0 for sorting.
     */
    nameSort: function (a, b) {
      if (!a.name || !b.name) {
        return 0;
      }
      var an = a.name.toLowerCase(),
        bn = b.name.toLowerCase(),
        ret = 0;

      if (an < bn) {
        ret = -1;
      }
      if (an > bn) {
        ret = 1;
      }
      return ret;
    },
    /**
     * Generates the syntax files under `"out"/files/`
     * @method writeFiles
     * @param {Callback} cb The callback to execute after it's completed
     * @param {String} cb.html The HTML to write file view
     * @param {Object} cb.view The View Data
     */
    writeFiles: function (cb, layout) {
      layout = layout || 'main';
      var self = this,
          stack = new Y.Parallel();
      stack.html = [];
      stack.view = [];

      var counter = 0;
      Object.keys(self.data.files).forEach(function (k) {
          if (!self.data.files[k].external) {
              counter++;
          }
      });
      Y.log('Rendering and writing ' + counter + ' source files.', 'info', 'builder');
      Y.each(self.data.files, function (v) {
        if (v.external) {
          return;
        }
        self.renderFile(stack.add(function (html, view, data) {
          if (!view || !data) {
            return;
          }
          stack.html.push(html);
          stack.view.push(view);
          if (self.options.dumpview) {
            Y.Files.writeFile(
              path.join(self.options.outdir, 'json', 'files_' + self.filterFileName(data.name) + '.json'),
              JSON.stringify(view),
              stack.add(noop)
            );
          }
          
          var outPath = path.join(self.options.outdir, 'files', self.filterFileName(data.name));
          if (Y.options.useMarkdown) {
            outPath += '.md';
          } else {
            outPath += '.html';
          }
          
          Y.Files.writeFile(
            outPath,
            html,
            stack.add(noop)
          );
        }), v, layout);
      });
      stack.done(function () {
        Y.log('Finished writing source files', 'info', 'builder');
        cb(stack.html, stack.view);
      });
    },
    /**
     * Render the source file
     * @method renderFile
     * @param {Function} cb The callback fired when complete
     * @param {String} cb.html The HTML to render this view
     * @param {Object} cb.view The View Data
     */
    renderFile: function (cb, data, layout) {
      var self = this;

      Y.prepare([DEFAULT_THEME, themeDir], self.getProjectMeta(), function (err, opts) {
        if (err) {
          console.log(err);
        }
        if (!data.name) {
          return;
        }

        opts.meta = Y.merge(opts.meta, data);
        opts.meta.title = self.data.project.name;
        opts.meta.moduleName = data.name;
        opts.meta.projectRoot = '../';
        opts.meta.projectAssets = '../assets';
        opts.meta.projectLogo = self._resolveUrl(self.data.project.logo, opts);

        opts = self.populateClasses(opts);
        opts = self.populateModules(opts);
        opts = self.populateFiles(opts);

        opts.meta.fileName = data.name;
        fs.readFile(opts.meta.fileName, Y.charset, Y.rbind(function (err, str, opts, data) {
          if (err) {
            Y.log(err, 'error', 'builder');
            cb(err);
            return;
          }

          if (typeof self.options.tabspace === 'string') {
            str = str.replace(/\t/g, self.options.tabspace);
          }

          opts.meta.fileData = str;
          var view = new Y.DocView(opts.meta, 'index', '..');
          var mainLayout = opts.layouts[layout];
          self.render('{{>files}}', view, mainLayout, opts.partials, function (err, html) {
            self.files++;
            cb(html, view, data);
          });

        }, this, opts, data));
      });
    },
    /**
     * Write the API meta data used for the AutoComplete widget
     * @method writeAPIMeta
     * @param {Callback} cb The callback to execute when complete
     * @async
     */
    writeAPIMeta: function (cb) {
      Y.log('Writing API Meta Data', 'info', 'builder');
      var self = this;
      this.renderAPIMeta(function (js) {
        fs.writeFile(path.join(self.options.outdir, 'api.js'), js, Y.charset, cb);
      });
    },
    /**
     * Render the API meta and return the JavaScript
     * @method renderAPIMeta
     * @param {Callback} cb The callback
     * @param {String} cb.apijs The JavaScript code to write API meta data
     * @async
     */
    renderAPIMeta: function (cb) {
      var opts = {
        meta: {}
      };
      opts = this.populateClasses(opts);
      opts = this.populateModules(opts);

      ['enums', 'classes', 'modules'].forEach(function (id) {
        opts.meta[id].forEach(function (v, k) {
          if (v.submodules) {
            v.submodules.forEach(function (s) {
              s.name = s.displayName;
              opts.meta[id].push(s);
            });
          }
        });
        opts.meta[id].sort();
      });

      var apijs = 'YUI.add("yuidoc-meta", function(Y) {\n' +
          '   Y.YUIDoc = { meta: ' + JSON.stringify(opts.meta, null, 4) + ' };\n' +
          '});';

      cb(apijs);
    },
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
    filterFileName: function (f) {
      return f.replace(/[\/\\]/g, '_');
    },
    /**
     * Compiles the templates from the meta-data provided by DocParser
     * @method compile
     * @param {Callback} cb The callback to execute after it's completed
     */
    compile: function (cb) {
      var self = this;
      var starttime = (new Date()).getTime();
      Y.log('Compiling Templates', 'info', 'builder');

      self.mixExternal(function () {
        self.makeDirs(function () {
          Y.log('Copying Assets', 'info', 'builder');
          if (!Y.Files.isDirectory(path.join(self.options.outdir, 'assets'))) {
            fs.mkdirSync(path.join(self.options.outdir, 'assets'), 0777);
          }
          Y.Files.copyAssets([
            path.join(DEFAULT_THEME, 'assets'),
            path.join(themeDir, 'assets')
          ],
          path.join(self.options.outdir, 'assets'),
          false,
          function () {
            var cstack = new Y.Parallel();
            self.api = self.buildAPI(cstack.add(noop));
            self.writeModules(cstack.add(function () {
              self.writeClasses(cstack.add(function () {
                if (!self.options.nocode) {
                  self.writeFiles(cstack.add(noop));
                }
              }));
            }));
            self.writeIndex(cstack.add(noop));
            self.writeAPIMeta(cstack.add(noop));

            cstack.done(function () {
              var endtime = (new Date()).getTime();
              var timer = ((endtime - starttime) / 1000) + ' seconds';
              Y.log('Finished writing ' + self.files + ' files in ' + timer, 'info', 'builder');
              if (typeof cb === 'function') cb();
            });
          });
        });
      });
    }
  };
});

```
