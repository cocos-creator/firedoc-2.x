<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>lib_builder.js</title>
    <link rel="stylesheet" href="../assets/vendor/prettify/prettify-min.css">
    <link rel="stylesheet" href="../assets/css/main.css" id="site_styles">
    <link rel="shortcut icon" type="image/png" href="../assets/favicon.png">
    <script src="../assets/vendor/yui-min.js"></script>
</head>
<body>

<div id="doc">
    <header class="main-header">
        <div class="content">
            <div class="project-title">
                <a href="http://docs-zh.fireball-x.com">
                        <img class="logo" src="http://docs-zh.fireball-x.com/images/logo.png" title="Fireball Engine API">
                </a>
                    <h1 class="project-name">Fireball Engine API</h1>
                    <p class="description">Fireball is the game engine for the future.</p>
            </div>
            <ul class="jump-links">
                <li><a href="#index" class="index-jump-link">index</a></li>
                <li><a href="#top" class="top-jump-link">top</a></li>
            </ul>
        </div>
    </header>
    <div id="bd" class="main-body">

        <div id="docs-sidebar" class="sidebar apidocs"><div id="api-list">
    <div id="api-tabview" class="tabview">
        <ul class="tabs">
            <li><a href="#api-classes">Classes</a></li>
            <li><a href="#api-modules">Modules</a></li>
            <li><a href="#api-enums">Enums</a></li>
        </ul>

        <div id="api-tabview-filter">
            <input type="search" id="api-filter" placeholder="Type to filter APIs">
        </div>

        <div id="api-tabview-panel">

            <ul id="api-classes" class="apis classes">
                <li>
                    <a class="class" href="/Users/yorkie/workspace/fireball-x/firedoc/docs/classes/AST.html">firedoc.AST</a>
                    <a href="/Users/yorkie/workspace/fireball-x/firedoc/docs/modules/firedoc.html" class="api-list-item-module">@firedoc</a>
                </li>
                <li>
                    <a class="class" href="/Users/yorkie/workspace/fireball-x/firedoc/docs/classes/BuilderContext.html">firedoc.BuilderContext</a>
                    <a href="/Users/yorkie/workspace/fireball-x/firedoc/docs/modules/firedoc.html" class="api-list-item-module">@firedoc</a>
                </li>
                <li>
                    <a class="class" href="/Users/yorkie/workspace/fireball-x/firedoc/docs/classes/DocParser.html">firedoc.DocParser</a>
                    <a href="/Users/yorkie/workspace/fireball-x/firedoc/docs/modules/firedoc.html" class="api-list-item-module">@firedoc</a>
                </li>
                <li>
                    <a class="class" href="/Users/yorkie/workspace/fireball-x/firedoc/docs/classes/DocView.html">firedoc.DocView</a>
                    <a href="/Users/yorkie/workspace/fireball-x/firedoc/docs/modules/firedoc.html" class="api-list-item-module">@firedoc</a>
                </li>
                <li>
                    <a class="class" href="/Users/yorkie/workspace/fireball-x/firedoc/docs/classes/Firedoc.html">firedoc.Firedoc</a>
                    <a href="/Users/yorkie/workspace/fireball-x/firedoc/docs/modules/firedoc.html" class="api-list-item-module">@firedoc</a>
                </li>
                <li>
                    <a class="class" href="/Users/yorkie/workspace/fireball-x/firedoc/docs/classes/Locals.html">firedoc.Locals</a>
                    <a href="/Users/yorkie/workspace/fireball-x/firedoc/docs/modules/firedoc.html" class="api-list-item-module">@firedoc</a>
                </li>
                <li>
                    <a class="class" href="/Users/yorkie/workspace/fireball-x/firedoc/docs/classes/ParserContext.html">firedoc.ParserContext</a>
                    <a href="/Users/yorkie/workspace/fireball-x/firedoc/docs/modules/firedoc.html" class="api-list-item-module">@firedoc</a>
                </li>
            </ul>

            <ul id="api-modules" class="apis modules">
                <li><a class="module" href="/modules/firedoc.html">firedoc</a></li>
                <li><a class="module" href="/modules/helpers.html">helpers</a></li>
                <li><a class="module" href="/modules/utils.html">utils</a></li>
            </ul>

            <ul id="api-enums" class="apis enums">
            </ul>
        </div>
    </div>
</div>
</div>

        <div id="docs-main" class="apidocs">
            <div class="content container"><h1 class="file-heading">File: </h1>

<div class="file">
  <pre class="code prettyprint linenums">
/**
 * The firedoc module
 * @module firedoc
 */

const _ = require(&#x27;underscore&#x27;);
const path = require(&#x27;path&#x27;);
const fs = require(&#x27;graceful-fs&#x27;);
const fse = require(&#x27;fs-extra&#x27;);
const mkdirp = require(&#x27;mkdirp&#x27;).sync;
const inspect = require(&#x27;util&#x27;).inspect;
const request = require(&#x27;needle&#x27;);
const Promise = require(&#x27;bluebird&#x27;);
const Handlebars = require(&#x27;handlebars&#x27;);
const EventEmitter = require(&#x27;events&#x27;).EventEmitter;

const debug = require(&#x27;debug&#x27;)(&#x27;firedoc:build&#x27;);
const utils = require(&#x27;./utils&#x27;);
const DocView = require(&#x27;./docview&#x27;).DocView;
const Locals = require(&#x27;./locals&#x27;).Locals;
const defaultHelpers = require(&#x27;./helpers&#x27;);

/**
 * List of native types to cross link to MDN
 * @property NATIVES
 * @type Object
 */
const NATIVES = require(&#x27;./natives.json&#x27;);

// Promisify
Promise.promisifyAll(request);
Promise.promisifyAll(fs);
Promise.promisifyAll(fse);

/**
 * The Builder Context
 * @class BuilderContext
 * @extend EventEmitter
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
   * @property {String} viewExtname - The ext name of current view
   */
  get extname () {
    return this.options.markdown ? &#x27;.md&#x27; : &#x27;.html&#x27;;
  },

  /**
   * load the metadata from theme.json
   * @method metadata
   * @return {Object} metadata object
   */
  metadata: function () {
    if (!this._metadata) {
      try {
        var metadata;
        var themeJSON = path.join(this.options.theme, &#x27;theme.json&#x27;);
        if (fs.existsSync(themeJSON)) {
          debug(&#x27;loading theme from &#x27; + themeJSON);
          metadata = require(themeJSON);
        } else {
          debug(&#x27;loading the default theme&#x27;);
          metadata = require(&#x27;../themes/default/theme.json&#x27;);
        }
        this._metadata = metadata;
      } catch (err) {
        this._metadata = {};
        console.error(err.stack);
      }
    }
    return this._metadata;
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
   * Ported from [Selleck](https://github.com/rgrove/selleck), this handles &#x60;&#x60;&#x60;&#x27;s in fields
   * that are not parsed by the **Markdown** parser.
   * @method _inlineCode
   * @private
   * @param {HTML} html The HTML to parse
   * @return {HTML} The parsed HTML
   */
  inlineCode: function (html) {
    if (this.options.markdown) return html;
    html = html.replace(/\\&#x60;/g, &#x27;__{{SELLECK_BACKTICK}}__&#x27;);
    html = html.replace(/&#x60;(.+?)&#x60;/g, function (match, code) {
      return &#x27;&lt;code&gt;&#x27; + utils.escapeHTML(code) + &#x27;&lt;/code&gt;&#x27;;
    });
    html = html.replace(/__\{\{SELLECK_BACKTICK\}\}__/g, &#x27;&#x60;&#x27;);
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
    item = item || &#x27;unknown&#x27;;
    var self = this;
    var base = &#x27;../&#x27;;
    var baseItem;
    var newWin = false;
    var className = &#x27;crosslink&#x27;;

    // TODO(@yorkie): now remove the unnecessary fixType
    // will remove this absolutely if this is working for weeks
    // item = fixType(item);
    item = baseItem = utils.safetrim(item.replace(&#x27;{&#x27;, &#x27;&#x27;).replace(&#x27;}&#x27;, &#x27;&#x27;));
    item = item.replace(&#x27;*&#x27;, &#x27;&#x27;).replace(&#x27;[&#x27;, &#x27;&#x27;).replace(&#x27;]&#x27;, &#x27;&#x27;);
    var link = false, href;

    if (self.ast.classes[item]) {
      link = true;
    } else {
      if (self.ast.classes[item.replace(&#x27;.&#x27;, &#x27;&#x27;)]) {
        link = true;
        item = item.replace(&#x27;.&#x27;, &#x27;&#x27;);
      }
    }
    if (self.options.externalData) {
      if (self.ast.classes[item]) {
        if (self.ast.classes[item].external) {
          href = self.ast.classes[item].path;
          base = self.options.externalData.base;
          className += &#x27; external&#x27;;
          newWin = true;
          link = true;
        }
      }
    }

    if (item.indexOf(&#x27;/&#x27;) &gt; -1) {
      //We have a class + method to parse
      var parts = item.split(&#x27;/&#x27;),
        cls = parts[0],
        method = parts[1],
        type = &#x27;method&#x27;;

      if (method.indexOf(&#x27;:&#x27;) &gt; -1) {
        parts = method.split(&#x27;:&#x27;);
        method = parts[0];
        type = parts[1];
        if (type.indexOf(&#x27;attr&#x27;) === 0) {
          type = &#x27;attribute&#x27;;
        }
      }

      if (cls &amp;&amp; method) {
        if (self.ast.classes[cls]) {
          self.ast.members.forEach(function (i) {
            if (i.itemtype === type &amp;&amp; i.name === method &amp;&amp; i.clazz === cls) {
              link = true;
              baseItem = method;
              var t = type;
              if (t === &#x27;attribute&#x27;) {
                t = &#x27;attr&#x27;;
              }
              href = utils.webpath(base, &#x27;classes&#x27;, cls + &#x27;.html#&#x27; + t + &#x27;_&#x27; + method);
            }
          });
        }
      }
    }

    if (item === &#x27;Object&#x27; || item === &#x27;Array&#x27;) {
      link = false;
    }
    if (!href) {
      href = utils.webpath(base, &#x27;classes&#x27;, item + &#x27;.html&#x27;);
      if (base.match(/^https?:\/\//)) {
        href = base + utils.webpath(&#x27;classes&#x27;, item + &#x27;.html&#x27;);
      }
    }
    if (!link &amp;&amp; self.options.linkNatives) {
      if (NATIVES &amp;&amp; NATIVES[item]) {
        href = linkNativeType(item);
        if (href) {
          className += &#x27; external&#x27;;
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
      item = &#x27;&lt;a href=&quot;&#x27; + href + &#x27;&quot; class=&quot;&#x27; + className + &#x27;&quot;&#x27; + ((newWin) ? &#x27; target=&quot;_blank&quot;&#x27; : &#x27;&#x27;) + &#x27;&gt;&#x27; + content + &#x27;&lt;/a&gt;&#x27;;
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
        clazz.type = &#x27;enums&#x27;;
        enums.push(clazz);
      } else {
        clazz.type = &#x27;classes&#x27;;
        classes.push(clazz);
      }
    });
    opts.meta.classes = _.sortBy(classes, &#x27;name&#x27;);
    opts.meta.enums = _.sortBy(enums, &#x27;name&#x27;);
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
      if (!mod.isSubmodule &amp;&amp; mod.submodules) {
        var submodules = [];
        _.each(mod.submodules, function (val, name) {
          var mod = self.ast.modules[name];
          if (val &amp;&amp; mod) submodules.push(mod);
        });
        mod.type = &#x27;modules&#x27;;
        mod.submodules = _.sortBy(submodules, &#x27;name&#x27;);
      }
    });
    opts.meta.modules = _.sortBy(modules, &#x27;name&#x27;);
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
    files = _.sortBy(files, &#x27;name&#x27;);
    opts.meta.fileTree = utils.buildFileTree(files);
    return opts;
  },
  
  /**
   * Parses file and line number from an item object and build&#x27;s an HREF
   * @method addFoundAt
   * @param {Object} a The item to parse
   * @return {String} The parsed HREF
   */
  addFoundAt: function (a) {
    a.foundAt = utils.getFoundAt(a, this.options);
    return a;
  },

  /**
   * Fetches the remote data and fires the callback when it&#x27;s all complete
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

    external.merge = external.merge || &#x27;mix&#x27;;
    if (!external.data) {
      console.warn(&#x27;External config found but no data path defined, skipping import.&#x27;);
      if (_.isFunction(callback)) {
        callback();
      }
      return current;
    }
    if (!_.isArray(external.data)) {
      external.data = [external.data];
    }
    debug(&#x27;Importing external documentation data&#x27;);

    return Promise.map(external.data, function (item) {
      var base;
      if (_.isObject(item)) {
        base = item.base;
        item = item.json;
      }
      if (item.match(/^https?:\/\//)) {
        if (!base) {
          base = item.replace(&#x27;data.json&#x27;, &#x27;&#x27;);
        }
        return current.then(function () {
          debug(&#x27;fetching &#x27; + item);
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
        mixExternal(&#x27;files&#x27;, exdata);
        mixExternal(&#x27;classes&#x27;, exdata);
        mixExternal(&#x27;modules&#x27;, exdata);
        mixExternal(&#x27;members&#x27;, exdata);
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
    var dirs = [&#x27;assets&#x27;, &#x27;classes&#x27;, &#x27;modules&#x27;, &#x27;enums&#x27;, &#x27;files&#x27;];
    var root = this.options.dest || &#x27;out&#x27;;
    debug(&#x27;Making default directories: &#x27; + dirs.join(&#x27;,&#x27;));
    mkdirp(path.join(root, dirs[0]));
    mkdirp(path.join(root, dirs[1]));
    mkdirp(path.join(root, dirs[2]));
    mkdirp(path.join(root, dirs[3]));
    mkdirp(path.join(root, dirs[4]));
    return dirs;
  },

  /**
   * Set &#x60;BuilderContext&#x60; context and return
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
    this.removeAllListeners();
    return this;
  },

  /**
   * correct the theme
   * @method correctTheme
   */
  correctTheme: function () {
    var root = path.join(__dirname, &#x27;../themes&#x27;);
    var theme = root + &#x27;/firedoc-theme-&#x27; + this.options.theme;
    if (fs.existsSync(theme))
      return this.options.theme = theme;
    theme = root + &#x27;/firedoc-plugin-&#x27; + this.options.theme;
    if (fs.existsSync(theme))
      return this.options.theme = theme;
    theme = root + &#x27;/&#x27; + this.options.theme;
    if (fs.existsSync(theme))
      return this.options.theme = theme;
    this.options.theme = root + &#x27;/default&#x27;;
    return this.options.theme;
  },

  /**
   * Compule the AST
   * @method compile
   * @static
   * @param {Function} callback - The callback
   */
  compile: function (callback) {
    debug(&#x27;Compiling templates...&#x27;);
    var self = this;
    this
      .mixExternal()
      .then(function makeDestDirs () {
        debug(&#x27;make dest directories&#x27;);
        self.makeDirs.call(self);
      })
      .then(function checkThemeDir () {
        debug(&#x27;Checking theme folder&#x27;);
        var theme = self.correctTheme.call(self);
        var metadata = self.metadata();
        debug(&#x27;Using corrected theme: &#x27; + theme);
        debug(&#x27;Using the following metadata:&#x27; + inspect(metadata, {
          colors: true
        }));
      })
      .then(function copyAssets () {
        debug(&#x27;Copying assets...&#x27;);
        var src = self.options.theme + &#x27;/assets&#x27;;
        var dest = self.options.dest + &#x27;/assets&#x27;;
        return fse.copyAsync(src, dest);
      })
      .then(function createLocalsForTheme () {
        debug(&#x27;Creating locals for theme...&#x27;);
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
        debug(&#x27;Finished the build work&#x27;);
        if (_.isFunction(callback)) {
          callback();
        }
      })
      .caught(callback);
    return this;
  },

  /**
   * Render
   * @method render
   */
  render: function (name, view, locals) {
    var html = [];
    var partials = _.extend(locals.partials, {
      &#x27;layout_content&#x27;: &#x27;{{&gt;&#x27; + name + &#x27;}}&#x27;
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

  /**
   * Write api.json
   * @method writeApiMeta
   * @param {Locals} locals - The locals
   */
  writeApiMeta: function (locals) {
    var self = this;
    var apimeta = {
      enums: [],
      classes: [],
      modules: []
    };
    _.each(
      [&#x27;classes&#x27;, &#x27;modules&#x27;, &#x27;enums&#x27;],
      function (id) {
        var items = locals.meta[id];
        var g = function (item) {
          apimeta[id].push({
            &#x27;name&#x27;: item.name,
            &#x27;namespace&#x27;: item.namespace,
            &#x27;module&#x27;: item.module,
            &#x27;description&#x27;: item.description,
            &#x27;access&#x27;: item.access
          });
        };
        _.each(locals.meta[id], g);
        apimeta[id] = _.sortBy(apimeta[id], &#x27;name&#x27;);
      }
    );
    return fs.writeFileAsync(
      this.options.dest + &#x27;/api.js&#x27;,
      &#x27;window.apimeta = &#x27; + JSON.stringify(apimeta, null, 2),
      &#x27;utf8&#x27;
    ).then(function () {
      self.emit(&#x27;apimeta&#x27;, apimeta);
      debug(&#x27;api.json finished&#x27;);
    });
  },

  writeIndex: function (locals) {
    debug(&#x27;Start writing index&#x27;);
    var self = this;
    var view = new DocView(locals.meta);
    var html = this.render(&#x27;index&#x27;, view, locals);
    var filename = this.options.markdown ? &#x27;/readme.md&#x27; : &#x27;/index.html&#x27;;
    var dest = this.options.dest + filename;
    return fs.writeFileAsync(dest, html, &#x27;utf8&#x27;).then(function () {
      self.emit(&#x27;index&#x27;, view, html, dest);
      debug(&#x27;index.html finished&#x27;);
    });
  },

  writeFiles: function (locals) {
    debug(&#x27;Start writing files&#x27;);
    var self = this;
    return Promise.map(
      locals.meta.files,
      function (file) {
        file.globals = locals.meta;
        var view = new DocView(file, null, &#x27;../&#x27;);
        var html = self.render(&#x27;file&#x27;, view, locals);
        var dest = path.join(self.options.dest, &#x27;files&#x27;, file.name.replace(/\//g, &#x27;_&#x27;) + self.extname);
        return fs.writeFileAsync(dest, html, &#x27;utf8&#x27;).then(function () {
          self.emit(&#x27;file&#x27;, view, html, dest);
          debug(dest + &#x27; finished&#x27;);
        });
      }
    );
  },

  writeEnums: function (locals) {
    debug(&#x27;Start writing enums&#x27;);
    var self = this;
    return Promise.map(
      locals.meta.enums,
      function (e) {
        e.globals = locals.meta;
        var view = new DocView(e, null, &#x27;../&#x27;);
        var html = self.render(&#x27;enum&#x27;, view, locals);
        var dest = path.join(self.options.dest, &#x27;enums&#x27;, e.name + self.extname);
        return fs.writeFileAsync(dest, html, &#x27;utf8&#x27;).then(function () {
          self.emit(&#x27;enum&#x27;, view, html, dest);
          debug(dest + &#x27; finished&#x27;);
        });
      }
    );
  },

  writeClasses: function (locals) {
    debug(&#x27;Start writing classes&#x27;);
    var self = this;
    return Promise.map(
      locals.meta.classes,
      function (clazz) {
        clazz.globals = locals.meta;
        var view = new DocView(clazz, null, &#x27;../&#x27;);
        var html = self.render(&#x27;class&#x27;, view, locals);
        var dest = path.join(self.options.dest, &#x27;classes&#x27;, clazz.name + self.extname);
        return fs.writeFileAsync(dest, html, &#x27;utf8&#x27;).then(function () {
          self.emit(&#x27;class&#x27;, view, html, dest);
          debug(dest + &#x27; finished&#x27;);
        });
      }
    );
  },

  writeModules: function (locals) {
    debug(&#x27;Start writing modules&#x27;);
    var self = this;
    return Promise.map(
      locals.meta.modules,
      function (mod) {
        mod.globals = locals.meta;
        var view = new DocView(mod, null, &#x27;../&#x27;);
        var html = self.render(&#x27;module&#x27;, view, locals);
        var dest = path.join(self.options.dest, &#x27;modules&#x27;, mod.name + self.extname);
        return fs.writeFileAsync(dest, html, &#x27;utf8&#x27;).then(function () {
          self.emit(&#x27;module&#x27;, view, html, dest);
          debug(dest + &#x27; finished&#x27;);
        });
      }
    );
  }

};

// Extends the &#x60;BuilderContext&#x60; with &#x60;EventEmitter&#x60;.
var emitter = new EventEmitter();
BuilderContext = _.extend(BuilderContext, emitter);

/**
 * Function to link an external type uses &#x60;NATIVES&#x60; object
 * @method NATIVES_LINKER
 * @private
 * @param {String} name The name of the type to link
 * @return {String} The combined URL
 */
function linkNativeType (name) {
  name = utils.fixType(name);
  var url = &#x27;https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/&#x27;;
  if (NATIVES[name] !== 1) {
    url = NATIVES[name];
  }
  return url + name;
}

/**
 * compile
 *
 * @method compile
 * @param {AST} ast - The &#x60;AST&#x60; object
 * @param {Option} options - The options
 * @param {Function} onfinish - fired when compile has completed
 */
function compile (ast, options, onfinish) {
  var context = BuilderContext.init(ast, options);
  setImmediate(function () {
    context.compile(onfinish);
  });
  return context;
}
exports.compile = compile;
</pre>
</div>
</div>
        </div>

    </div>
</div>
<script src="../assets/vendor/prettify/prettify-min.js"></script>
<script>prettyPrint();</script>
<script src="../assets/vendor/jquery.min.js"></script>
<script src="../assets/js/jquery-offscreen-trigger.js"></script>
<script src="../assets/js/yui-prettify.js"></script>
<script src="../assets/../api.js"></script>
<script src="../assets/js/api-filter.js"></script>
<script src="../assets/js/api-list.js"></script>
<script src="../assets/js/api-search.js"></script>
<script src="../assets/js/apidocs.js"></script>
</body>
</html>
