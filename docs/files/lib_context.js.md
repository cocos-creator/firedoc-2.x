<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>lib_context.js</title>
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
const utils = require(&#x27;./utils&#x27;);
const debug = require(&#x27;debug&#x27;)(&#x27;firedoc:context&#x27;);
const AST = require(&#x27;./ast&#x27;).AST;

/**
 * The ParserContext
 *
 * @class ParserContext
 */
var ParserContext = {
  /**
   * @property {Any} file - The file
   */
  get file () {
    return this._file;
  },
  set file (val) {
    val = utils.safetrim(val);
    if (!_.has(this.ast.files, val)) {
      this.ast.files[val] = {
        &#x27;name&#x27;: val,
        &#x27;classes&#x27;: {},
        &#x27;modules&#x27;: {},
        &#x27;fors&#x27;: {},
        &#x27;namespaces&#x27;: {},
        &#x27;code&#x27;: this.ast.codes[val]
      };
    }
    this._file = val;
  },

  /**
   * @property {Any} mainModule
   */
  get mainModule () {
    return this._mainModule;
  },
  set mainModule (val) {
    if (!val) {
      return;
    } else {
      this._mainModule = val;
    }
    var write = true;
    var name = val.mainName || val.name;
    if (this.module === name) {
      if (_.has(this.ast.modules, name)) {
        if (this.ast.modules[name].tag === &#x27;main&#x27;) {
          write = false;
        }
        if (write) {
          this.ast.modules[name] = _.extend(this.ast.modules[name], val);
        }
      } else {
        if (val._main) {
          this.ast.modules[name] = val;
        }
      }
    }
  },

  /**
   * @property {Any} module
   */
  get module () {
    return this._module;
  },
  set module (val) {
    var last = {};
    if (!val) {
      return;
    } else {
      last.module = this.ast.modules[this.module];
      last.clazz = this.ast.classes[this.clazz];
      val = utils.safetrim(val);
      this._module = val;
      this._clazz = &#x27;&#x27;;
    }
    this.submodule = &#x27;&#x27;;

    var main = this.mainModule;
    if (main &amp;&amp; main.name !== val) {
      this.mainModule = &#x27;&#x27;;
    }

    if (last.clazz &amp;&amp; last.clazz.module !== val) {
      last.module.classes[last.clazz.name] = last.clazz;
      if (this.ast.modules[last.clazz.submodule]) {
        this.ast.modules[last.clazz.submodule].module = last.module.name;
      }
    }

    if (!_.has(this.ast.modules, val)) {
      this.ast.modules[val] = {
        &#x27;name&#x27;: val,
        &#x27;namespace&#x27;: val,
        &#x27;classes&#x27;: {},
        &#x27;submodules&#x27;: {},
        &#x27;fors&#x27;: {},
        &#x27;namespaces&#x27;: {},
        &#x27;types&#x27;: {}
      };
    }
  },

  /**
   * @property {Any} process
   */
  get clazz () {
    return this._clazz;
  },
  set clazz (val) {
    if (!val) {
      return;
    } else {
      val = utils.safetrim(val);
      this._clazz = val;
    }
    var clazz;
    var name = val;
    if (!_.has(this.ast.classes, val)) {
      clazz = {
        &#x27;name&#x27;: name,
        &#x27;shortname&#x27;: val,
        &#x27;members&#x27;: [],
        &#x27;plugins&#x27;: [],
        &#x27;pluginFor&#x27;: [],
        &#x27;extensions&#x27;: [],
        &#x27;types&#x27;: {}
      };
      clazz.module = this.module;
      clazz.submodule = this.submodule || null;
      clazz.namespace = utils.getNamespace(this);
      this.ast.classes[name] = clazz;
    }
  },

  /**
   * @property {Any} submodule
   */
  get submodule () {
    return this._submodule;
  },
  set submodule (val) {
    if (!val) return;
    val = utils.safetrim(val);

    if (!_.has(this.ast.modules, val)) {
      var mod = {
        &#x27;name&#x27;: val,
        &#x27;classes&#x27;: {},
        &#x27;submodules&#x27;: {},
        &#x27;fors&#x27;: {},
        &#x27;isSubmodule&#x27;: true,
        &#x27;namespaces&#x27;: {},
        &#x27;types&#x27;: {}
      };
      mod.module = this.module;
      this.ast.modules[val] = mod;
    }
    this._submodule = val;
  },

  /**
   * @property {Any} block
   */
  block: null,

  /**
   * reset the context
   * @method reset
   */
  reset: function () {
    this._file = null;
    this._mainModule = null;
    this._main = null;
    this._module = null;
    this._clazz = null;
    this._submodule = null;
    this.block = null;
  }

};

exports.ParserContext = ParserContext;
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
