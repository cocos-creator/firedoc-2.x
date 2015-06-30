<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>lib_helpers.js</title>
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
 * The helpers module
 *
 * @module helpers
 * @main helpers
 */

const _ = require(&#x27;underscore&#x27;);

/**
 * Build file tree
 * @method renderFileTree
 */
// TODO(Yorkie): remove the buildFileTree
exports.buildFileTree = function onbuildFileTree (items) {
  var out = &#x27;&lt;ul&gt;&#x27;;
  _.each(items, function (i, k) {
    out += &#x27;&lt;li&gt;&#x27;;
    if (_.isObject(i)) {
      if (!i.path) {
        out += k + &#x27;/&#x27; + onbuildFileTree(i);
      } else {
        out += &#x27;&lt;a href=&quot;../files/&#x27; + i.name + &#x27;.html&quot;&gt;&#x27; + k + &#x27;&lt;/a&gt;&#x27;;
      }
    }
    out += &#x27;&lt;/li&gt;&#x27;;
  });
  out += &#x27;&lt;/ul&gt;&#x27;;
  return out;
};
exports.renderFileTree = exports.buildFileTree;

/**
 * Create cross link
 * @method crossLink
 */
exports.crossLink = function oncrossLink (item, options) {
  var str = &#x27;&#x27;;
  if (!item) {
    item = &#x27;&#x27;;
  }
  if (item.indexOf(&#x27;|&#x27;) &gt; 0) {
    var parts = item.split(&#x27;|&#x27;),
      p = [];
    _.each(parts, function (i) {
      p.push(this._parseCrossLink.call(this, i));
    }, this);
    str = p.join(&#x27; | &#x27;);
  } else {
    str = this._parseCrossLink.call(this, item, false, options.fn(this));
  }
  return str;
};

/**
 * Create cross link module
 * @method crossLinkModule
 */
exports.crossLinkModule = function oncrossLinkModule (item, options) {
  var str = item;
  if (this.ast.modules[item]) {
    var content = options.fn(this);
    if (content === &quot;&quot;) {
      content = item;
    }
    str = &#x27;&lt;a href=&quot;../modules/&#x27; + item.replace(/\//g, &#x27;_&#x27;) +
          &#x27;.html&quot;&gt;&#x27; + content + &#x27;&lt;/a&gt;&#x27;;
  }
  return str;
};

/**
 * Create cross link to raw
 * @method crossLinkRaw
 */
exports.crossLinkRaw = function oncrossLinkRaw (item, options) {
  var str = &#x27;&#x27;;
  if (!item) {
    item = &#x27;&#x27;;
  }
  if (item.indexOf(&#x27;|&#x27;) &gt; 0) {
    var parts = item.split(&#x27;|&#x27;),
      p = [];
    _.each(parts, function (i) {
      p.push(this._parseCrossLink.call(this, i, true));
    }, this);
    str = p.join(&#x27; | &#x27;);
  } else {
    str = this._parseCrossLink.call(this, item, true);
  }
  return str;
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
