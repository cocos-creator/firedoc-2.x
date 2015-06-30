<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>lib_utils.js</title>
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
  <pre class="code prettyprint linenums">/*jshint onevar:false */

/**
 * Utilities modules
 * @module utils
 */

const _ = require(&#x27;underscore&#x27;);
const fs = require(&#x27;graceful-fs&#x27;);
const path = require(&#x27;path&#x27;);
const minimatch = require(&#x27;minimatch&#x27;);
const HTML_CHARS = {
  &#x27;&amp;&#x27;: &#x27;&amp;amp;&#x27;,
  &#x27;&lt;&#x27;: &#x27;&amp;lt;&#x27;,
  &#x27;&gt;&#x27;: &#x27;&amp;gt;&#x27;,
  &#x27;&quot;&#x27;: &#x27;&amp;quot;&#x27;,
  &quot;&#x27;&quot;: &#x27;&amp;#x27;&#x27;,
  &#x27;/&#x27;: &#x27;&amp;#x2F;&#x27;,
  &#x27;&#x60;&#x27;: &#x27;&amp;#x60;&#x27;
};

/**
 * Format the process string to array
 * @method fmtProcess
 * @param {String} process
 * @return {Array} The process array
 */
function fmtProcess (process) {
  return process.split(&#x27;,&#x27;).map(safetrim);
}
exports.fmtProcess = fmtProcess;

/**
 * Get the namespace string from a target object
 * @method getNamespace
 * @param {Object} target
 * @param {String} target.module
 * @param {String} target.clazz
 * @param {String} target.name
 * @return {String} The namespace string
 */
function getNamespace (target) {
  var nssource = [target.module, target.clazz, target.name];
  return nssource.filter(function (item) {
    return !!item;
  }).join(&#x27;.&#x27;);
}
exports.getNamespace = getNamespace;

/**
 * Escapes HTML characters in _html_.
 *
 * @method escapeHTML
 * @param {String} html String to escape.
 * @return {String} Escaped string.
 **/
function escapeHTML (html) {
  return html.replace(/[&amp;&lt;&gt;&quot;&#x27;\/&#x60;]/g, function (m) {
    return HTML_CHARS[m];
  });
}
exports.escapeHTML = escapeHTML;

/**
 * Trim in safe mode
 *
 * @method safetrim
 * @param {String} str
 * @return {String} trimed string or other types if invalid
 */
function safetrim (str) {
  if (str &amp;&amp; _.isFunction(str.trim)) {
    return str.trim();
  } else {
    return String(str || &#x27;&#x27;).trim();
  }
}
exports.safetrim = safetrim;

/**
 * Normalizes the initial indentation of the given _content_ so that the first line
 * is unindented, and all other lines are unindented to the same degree as the
 * first line. So if the first line has four spaces at the beginning, then all
 * lines will be unindented four spaces. Ported from [Selleck](https://github.com/rgrove/selleck)
 *
 * @method unindent
 * @param {String} content Text to unindent.
 * @return {String} Unindented text.
**/
function unindent (contents) {
  var indent = contents.match(/^(\s+)/);
  if (indent) {
    contents = contents.replace(new RegExp(&#x27;^&#x27; + indent[1], &#x27;gm&#x27;), &#x27;&#x27;);
  }
  return contents;
}
exports.unindent = unindent;

/**
 * Normalizes a file path to a writable filename:
 *
 *    var path = &#x27;lib/file.js&#x27;;
 *    returns &#x27;lib_file.js&#x27;;
 *
 * @method filterFileName
 * @param {String} f The filename to normalize
 * @return {String} The filtered file path
 */
function filterFileName (f) {
  return (f || &#x27;&#x27;).replace(/[\/\\]/g, &#x27;_&#x27;);
}
exports.filterFileName = filterFileName;

/**
 * Parses file and line number from an item object and build&#x27;s an HREF
 * @method getFoundAt
 * @param {Object} obj - The item to parse
 * @param {Object} options - The options
 * @param {Boolean} options.markdown - If in markdown mode
 * @param {Boolean} options.nocode - If no code
 * @return {String} The parsed HREF
 */
function getFoundAt (obj, options) {
  var ext = options.markdown ? &#x27;.md&#x27; : &#x27;.html&#x27;;
  var ret = &#x27;&#x27;;
  if (obj.file &amp;&amp; obj.line &amp;&amp; !options.nocode) {
    if (obj.path) {
      ret = obj.path + &#x27;#l&#x27; + obj.line;
    } else {
      ret = &#x27;../files/&#x27; + filterFileName(obj.file) + ext + &#x27;#l&#x27; + obj.line;
    }
  }
  return ret;
}
exports.getFoundAt = getFoundAt;

/**
 * Like &#x60;getPages()&#x60;, but returns only the files under the &#x60;layout/&#x60; subdirectory
 * of the specified _dir_.
 *
 * @method getLayouts
 * @param {String} dir Directory path.
 * @return {Object} Mapping of layout names to layout content.
 **/
function getLayouts (dir) {
  if (!_.isString(dir)) return {};
  return getPages(path.join(dir, &#x27;layouts&#x27;));
}
exports.getLayouts = getLayouts;

/**
 * Loads and returns the content of the specified page file.
 *
 * @method getPage
 * @param {String} p - Path to a single &#x60;.handlebars&#x60; page.
 * @return {String|null} Page content, or &#x60;null&#x60; if not found.
 **/
function getPage (p) {
  var stat = fs.statSync(p);
  if (stat.isFile()) {
    return fs.readFileSync(p, &#x27;utf8&#x27;);
  } else {
    return null;
  }
}
exports.getPage = getPage;

/**
 * Loads pages (files with a &#x60;.handlebars&#x60; extension) in the specified directory and
 * returns an object containing a mapping of page names (the part of the filename)
 * preceding the &#x60;.handlebars&#x60; extension) to page content.
 *
 * @method getPages
 * @param {String} dir Directory path.
 * @return {Object} Mapping of page names to page content.
 **/
var cache = {};
function getPages (dir, useMarkdown) {
  if (cache[dir]) {
    return cache[dir];
  }
  var pages = {};
  var stat = fs.statSync(dir);
  if (!stat.isDirectory()) {
    return pages;
  }

  _.each(
    fs.readdirSync(dir),
    function (name) {
      var p = path.join(dir, name);
      var ext = useMarkdown ? &#x27;.mdt&#x27; : &#x27;.handlebars&#x27;;
      if (path.extname(name) === ext &amp;&amp; fs.statSync(p).isFile()) {
        var name = path.basename(name, ext);
        var text = fs.readFileSync(p, &#x27;utf8&#x27;);
        Object.defineProperty(pages, name, {
          enumerable: true,
          get: function () {
            return text
          },
          set: function () {}
        });
      }
    }
  );
  cache[dir] = pages;
  return pages;
}
exports.getPages = getPages;

/**
 * Like &#x60;getPages()&#x60;, but returns only the files under the &#x60;partial/&#x60; subdirectory
 * of the specified _dir_.
 *
 * @method getPartials
 * @param {String} dir Directory path.
 * @return {Object} Mapping of partial names to partial content.
 **/
function getPartials (dir) {
  if (!_.isString(dir)) return {};
  return getPages(path.join(dir, &#x27;partials&#x27;));
}
exports.getPartials = getPartials;

/**
 * Mix/merge/munge data into the template.
 *
 * @method prepare
 * @param {String} inDir The starting directory
 * @param {Object} options The &#x60;options&#x60; for the meta data.
 * @param {callback} callback The callback to excecute when complete
 * @param {Error} callback.err
 * @param {Object} callback.options Merged options.
 **/
function prepare (inDirs, options, callback) {
  var layouts, partials, type = &#x27;project&#x27;;
  var defaults = {
    &#x27;meta&#x27;: {
      &#x27;project&#x27;: options.project,
      &#x27;component&#x27;: {}
    },
    &#x27;pages&#x27;: {},
    &#x27;layouts&#x27;: {},
    &#x27;partials&#x27;: {},
    &#x27;viewClass&#x27;: require(&#x27;./docview&#x27;).DocView
  };

  if (options &amp;&amp; options.skipLoad) {
    // Skip loading layouts, metadata, pages, and partials and assume that
    // the caller has provided them if they want them.
    options = _.extend(defaults, options);
  } else {
    // Gather layouts, metadata, pages, and partials from the specified
    // input directory, then merge them into the provided options (if any).
    //
    // Gathered data will override provided data if there are conflicts, in
    // order to support a use case where global data are provided by the
    // caller and overridden by more specific component-level data gathered
    // from the input directory.
    //
    // The metadata inheritance chain looks like this:
    //
    //   - override metadata specified via CLI (highest precedence)
    //   - component metadata (if this is a component)
    //   - project-level component default metadata (if specified and this is a component)
    //   - theme-level component default metadata (if specified and this is a component)
    //   - project metadata
    //   - theme metadata (lowest precedence)
    if (inDirs[0] === inDirs[1]) {
      layouts = getLayouts(inDirs[0]);
      partials = getPartials(inDirs[0]);
    } else {
      layouts = _.extend(
        getLayouts(inDirs[0]), 
        getLayouts(inDirs[1])
      );
      partials = _.extend(
        getPartials(inDirs[0]),
        getPartials(inDirs[1])
      );
    }
    options = _.extend(defaults, options);
    options = _.extend(options, {
      &#x27;layouts&#x27;: layouts,
      &#x27;partials&#x27;: partials,
    });
  }

  // Set a default asset path if one isn&#x27;t specified in the metadata.
  if (!options.meta.component.assets &amp;&amp; options.component) {
    options.meta.component.assets = &#x27;../assets/&#x27; + options.meta.name;
  }
  if (_.isUndefined(options.meta.layout)) {
    options.meta.layout = options.layouts[type] ? type : &#x27;main&#x27;;
  }
  if (_.isFunction(callback)) {
    callback(null, options);
  }
  return options;
}
exports.prepare = prepare;

/**
 * Takes a type string and converts it to a &quot;First letter upper cased&quot; type. 
 * e.g. &#x60;(string -&gt; String, object -&gt; Object)&#x60;
 *
 * @method fixType
 * @param {String} t The type string to convert
 * @return {String} The fixed string
 */
function fixType (t) {
  t = safetrim(t);
  if (t &amp;&amp; t.indexOf(&#x27;.&#x27;) === -1) {
    t = t.replace(/{/g, &#x27;&#x27;).replace(/}/g, &#x27;&#x27;);
    var firstChar = t.charAt(0),
      upperFirstChar = firstChar.toUpperCase();

    if (firstChar !== upperFirstChar) {
      return upperFirstChar + t.substring(1);
    }
  }
  return t;
};
exports.fixType = fixType;

/**
 * Produces a normalized web path by joining all the parts and normalizing the
 * filesystem-like path into web compatible url.
 * Supports relative and absolute paths.
 * Courtesy of [Mojito&#x27;s utils](https://github.com/yahoo/mojito/)
 *
 * @method webpath
 * @param {Array|String*} url the list of parts to be joined and normalized
 * @return {String} The joined and normalized url
 **/
function webpath (url) {
  var args = [].concat.apply([], arguments),
    parts = path.join.apply(path, args).split(/[\\\/]/);
  return parts.join(&#x27;/&#x27;);
}
exports.webpath = webpath;

/**
 * Localize the string via current Y.options
 *
 * @method localize
 * @param str {String} the original string that you want to input
 * @param lang {String} the language
 * @return {String} localized string from the param &#x60;str&#x60;
 */
function localize (str, lang) {
  var splitedStrArr = (str || &#x27;&#x27;).split(&#x27;!#&#x27;);
  var supportedLang = [&#x27;en&#x27;, &#x27;zh&#x27;];
  return splitedStrArr.map(function(block) {
    var langFlag = block.slice(0, 2);
    var selectedLang = supportedLang.indexOf(langFlag);
    if (selectedLang === -1) {
      // default language is &#x27;en&#x27;
      return {
        raw: block,
        all: true
      };
    } else {
      return {
        raw: block.slice(2),
        lang: supportedLang[selectedLang]
      };
    }
  }).filter(function(block) {
    if (!block || !block.raw) {
      return false;
    }
    if (block.all) {
      return true;
    }
    return block.lang === (lang || &#x27;en&#x27;);
  }).map(function(block) {
    return block.raw.trim();
  }).join(&#x27;\n&#x27;);
}
exports.localize = localize;

/**
 * convert string to markdown link
 *
 * @method markdownLink
 * @param {String} str - The original string that you want to input
 * @return {String} marked string from the param &#x60;str&#x60;
 */
function markdownLink (str) {
  return str
    .replace(/[:,]/g, &#x27;-&#x27;)
    .replace(/[\s\(\)\[\]=]/g, &#x27;&#x27;)
    .toLowerCase();
}
exports.markdownLink = markdownLink;

/**
 * build file tree object
 *
 * @method buildFileTree
 * @param {Array} files
 * @return {Object}
 */
function buildFileTree (files) {
  var tree = {};
  _.each(files, function (v) {
    var p = v.name.split(&#x27;/&#x27;);
    var par;
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
            path: v.name,
            name: filterFileName(v.name)
          };
        }
        par = par[i];
      }
    });
  });
  return tree;
}
exports.buildFileTree = buildFileTree;

/**
 * Parses the JSON data and formats it into a nice log string for
 * filename and line number: &#x60;/file/name.js:123&#x60;
 * @method stringlog
 * @private
 * @param {Object} data The data block from the parser
 * @return {String} The formatted string.
 * @for DocParser
 */
function stringlog(data) {
  var line, file;
  if (data.file &amp;&amp; data.line) {
    file = data.file;
    line = data.line;
  } else {
    data.forEach(function (d) {
      if (d.tag === &#x27;file&#x27;) {
        file = d.value;
      }
      if (d.tag === &#x27;line&#x27;) {
        line = d.value;
      }
    });
  }
  return &#x27; &#x27; + file + &#x27;:&#x27; + line;
}
exports.stringlog = stringlog;

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
