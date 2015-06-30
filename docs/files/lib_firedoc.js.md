<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>lib_firedoc.js</title>
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
 * This is the __module__ description for the &#x60;YUIDoc&#x60; module.
 * &#x60;&#x60;&#x60;
 * var options = {
 *   paths: [ &#x27;./lib&#x27; ],
 *   outdir: &#x27;./out&#x27;
 * };
 * &#x60;&#x60;&#x60;
 *
 * @module firedoc
 * @submodule helpers
 * @submodule utils
 * @main firedoc
 */

const _ = require(&#x27;underscore&#x27;);
const path = require(&#x27;path&#x27;);
const fs = require(&#x27;graceful-fs&#x27;);
const readdirp = require(&#x27;readdirp&#x27;);
const debug = require(&#x27;debug&#x27;)(&#x27;firedoc&#x27;);

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
  this.options = {
    writeJSON: true,
    extensions: &#x27;.js&#x27;,
    excludes: [
      &#x27;.git&#x27;,
      &#x27;.svn&#x27;,
      &#x27;CVS&#x27;,
      &#x27;build_rollup_tmp&#x27;,
      &#x27;build_tmp&#x27;,
      &#x27;node_modules&#x27;
    ],
    norecurse: false,
    path: &#x27;./&#x27;,
    cwd: process.cwd(),
    http: false,
    dest: path.join(process.cwd(), &#x27;out&#x27;),
    theme: path.join(__dirname, &#x27;../themes/default&#x27;),
    syntaxtype: &#x27;js&#x27;
  };

  // setup options
  var cwd = config.cwd || this.options.cwd;
  if (fs.existsSync(cwd + &#x27;/package.json&#x27;)) {
    var pkg = require(cwd + &#x27;/package.json&#x27;);
    var firedocOption = pkg.firedoc;
    delete pkg.firedoc;
    this.options.project = pkg;
    this.options = _.extend(this.options, firedocOption);
  } else {
    this.options.path = config.path || this.options.path;
  }

  // setup options from config
  this.options.cwd = config.cwd || this.options.cwd;
  this.options.lang = config.lang || this.options.lang;
  this.options.http = config.http || this.options.http;
  this.options.dest = config.dest || this.options.dest;
  this.options.theme = config.theme || this.options.theme;
  this.options.markdown = config.markdown || this.options.markdown;
  this.options.syntaxtype = config.syntaxtype || this.options.syntaxtype;
};
exports.Firedoc = Firedoc;

Firedoc.prototype = {

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
        fileFilter: &#x27;*.@(js|rs|ts|coffee)&#x27;,
        directoryFilter: self.options.excludes.map(
          function (ex) {
            return &#x27;!&#x27; + ex;
          }
        )
      }
    ).on(&#x27;data&#x27;, function (entry) {
      var text = fs.readFileSync(entry.fullPath, &#x27;utf8&#x27;);
      self.filecount += 1;
      self.filemap[entry.fullPath] = text.replace(/\r?\n|\r/g, &#x27;\n&#x27;);
      self.dirmap[entry.fullPath] = entry.fullParentDir;
    }).on(&#x27;end&#x27;, callback);
  },

  lint: function (warnings) {
    var code = 0, count = 0;
    if (warnings &amp;&amp; warnings.length) {
      code = 1;
      console.log(&#x27;YUIDoc found&#x27;, warnings.length, &#x27;lint errors in your docs&#x27;);
      warnings.forEach(function (item) {
        count++;
        console.log(&#x27;#&#x27; + count, item.message, item.line + &#x27;\n&#x27;);
      });
    }
  },

  /**
   * Process the config, walk the file tree and write out the JSON data.
   * @method build
   * @param {Function} callback
   */
  build: function (callback) {
    debug(&#x27;Starting from: &#x27; + this.options.path);
    var self = this;
    this.walk(function () {
      var parser = require(&#x27;./docparser&#x27;);
      var builder = require(&#x27;./builder&#x27;);
      var ast = parser.parse(
        self.options.syntaxtype,
        self.filemap,
        self.dirmap);

      debug(&#x27;Parsing completed&#x27;);
      if (self.options.lint) {
        debug(&#x27;lint the warnings from ast&#x27;);
        self.lint(ast.warnings);
        if (_.isFunction(callback)) return callback(ast.warnings);
      }
      if (self.options.parseOnly) {
        debug(&#x27;skip the build because parse only&#x27;);
        if (_.isFunction(callback)) callback(null, ast, self.options);
        return;
      }
      builder.compile(ast, self.options, callback);
    });
  }
};
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