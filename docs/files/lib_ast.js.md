<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>lib_ast.js</title>
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
 * @module firedoc
 */

const _ = require(&#x27;underscore&#x27;);
const fs = require(&#x27;graceful-fs&#x27;);
const path = require(&#x27;path&#x27;);
const utils = require(&#x27;./utils&#x27;);
const debug = require(&#x27;debug&#x27;)(&#x27;firedoc:ast&#x27;);
const ParserContext = require(&#x27;./context&#x27;).ParserContext;
const CWD = process.cwd();
const REGEX_TYPE = /(.*?)\{(.*?)\}(.*)/;
const REGEX_LINES = /\r\n|\n/;
const REGEX_GLOBAL_LINES = /\r\n|\n/g;
const REGEX_FIRSTWORD = /^\s*?(\[([^\[\]]+)\]\*?|[^\s]+)\s*\-?\s*(.*)/;
const REGEX_OPTIONAL = /^\[(.*)\]$/;
const REGEX_START_COMMENT = {
  js: /^\s*\/\*\*/,
  coffee: /^\s*###\*/
};
const REGEX_END_COMMENT = {
  js: /\*\/\s*$/,
  coffee: /###\s*$/
};
const REGEX_LINE_HEAD_CHAR = {
  js: /^\s*\*/,
  coffee: /^\s*[#\*]/
};

/**
 * A list of ignored tags. These tags should be ignored because there is
 * likely to be used for purposes other than JSDoc tags in JavaScript comments.
 * @property IGNORE_TAGLIST
 * @type Array
 * @final
 * @for DocParser
 */
const IGNORE_TAGLIST = [&#x27;media&#x27;];

/**
 * Common errors will get scrubbed instead of being ignored.
 * @property CORRECTIONS
 * @type Object
 * @final
 */
const CORRECTIONS = {
  &#x27;augments&#x27;: &#x27;uses&#x27;, // YUI convention for prototype mixins
  &#x27;depreciated&#x27;: &#x27;deprecated&#x27;, // subtle difference
  &#x27;desciption&#x27;: &#x27;description&#x27;, // shouldn&#x27;t need the @description tag at all
  &#x27;extend&#x27;: &#x27;extends&#x27;, // typo
  &#x27;function&#x27;: &#x27;method&#x27;, // we may want standalone inner functions at some point
  &#x27;member&#x27;: &#x27;method&#x27;, // probably meant method
  &#x27;parm&#x27;: &#x27;param&#x27;, // typo
  &#x27;params&#x27;: &#x27;param&#x27;, // typo
  &#x27;pamra&#x27;: &#x27;param&#x27;, // typo
  &#x27;parma&#x27;: &#x27;param&#x27;, // typo
  &#x27;propery&#x27;: &#x27;property&#x27;, // typo
  &#x27;prop&#x27;: &#x27;property&#x27;, // probably meant property
  &#x27;returns&#x27;: &#x27;return&#x27; // need to standardize on one or the other
};

/**
 *
 */
const SHORT_TAGS = {
  &#x27;async&#x27;: 1,
  &#x27;beta&#x27;: 1,
  &#x27;chainable&#x27;: 1,
  &#x27;extends&#x27;: 1,
  &#x27;final&#x27;: 1,
  &#x27;static&#x27;: 1,
  &#x27;optional&#x27;: 1,
  &#x27;required&#x27;: 1
};


/**
 * A list of known tags.  This populates a member variable
 * during initialization, and will be updated if additional
 * digesters are added.
 *
 * @property TAGLIST
 * @type Array
 * @final
 * @for DocParser
 */
const TAGLIST = [
  &quot;async&quot;,        // bool, custom events can fire the listeners in a setTimeout
  &quot;author&quot;,       // author best for projects and modules, but can be used anywhere // multi
  &quot;attribute&quot;,    // YUI attributes -- get/set with change notification, etc
  &quot;beta&quot;,         // module maturity identifier
  &quot;broadcast&quot;,    // bool, events
  &quot;bubbles&quot;,      // custom events that bubble
  &quot;callback&quot;,     // callback defines
  &quot;category&quot;,     // modules can be in multiple categories
  &quot;chainable&quot;,    // methods that return the host object
  &quot;class&quot;,        // pseudo class
  &quot;conditional&quot;,  // conditional module
  &quot;config&quot;,       // a config param (not an attribute, so no change events)
  &quot;const&quot;,        // not standardized yet, converts to final property
  &quot;constructs&quot;,   // factory methods (not yet used)
  &quot;constructor&quot;,  // this is a constructor
  &quot;contributor&quot;,  // like author
  &quot;default&quot;,      // property/attribute default value
  &quot;deprecated&quot;,   // please specify what to use instead
  &quot;description&quot;,  // can also be free text at the beginning of a comment is
  &quot;emitfacade&quot;,   // bool, YUI custom event can have a dom-like event facade
  &quot;enum&quot;,         // pseudo enum
  &quot;event&quot;,        // YUI custom event
  &quot;evil&quot;,         // uses eval
  &quot;extension&quot;,    // this is an extension for [entity]
  &quot;extensionfor&quot;, // this is an extension for [entity]
  &quot;extension_for&quot;,// this is an extension for [entity]
  &quot;example&quot;,      // 0..n code snippets.  snippets can also be embedded in the desc
  &quot;experimental&quot;, // module maturity identifier
  &quot;extends&quot;,      // pseudo inheritance
  &quot;file&quot;,         // file name (used by the parser)
  &quot;final&quot;,        // not meant to be changed
  &quot;fireonce&quot;,     // bool, YUI custom event config allows
  &quot;for&quot;,          // used to change class context
  &quot;global&quot;,       // declare your globals
  &quot;icon&quot;,         // project icon(s)
  &quot;in&quot;,           // indicates module this lives in (obsolete now)
  &quot;initonly&quot;,     // attribute writeonce value
  &quot;injects&quot;,      // injects {HTML|script|CSS}
  &quot;knownissue&quot;,   // 0..n known issues for your consumption
  &quot;line&quot;,         // line number for the comment block (used by the parser)
  &quot;method&quot;,       // a method
  &quot;module&quot;,       // YUI module name
  &quot;main&quot;,         // Description for the module
  &quot;optional&quot;,     // For optional attributes
  &quot;required&quot;,     // For required attributes
  &quot;param&quot;,        // member param
  &quot;plugin&quot;,       // this is a plugin for [entityl]
  &quot;preventable&quot;,  // YUI custom events can be preventable ala DOM events
  &quot;private&quot;,      // &gt; access
  &#x27;process&#x27;,      // instance runtime
  &quot;project&quot;,      // project definition, one per source tree allowed
  &#x27;logo&#x27;,         // project logo
  &quot;property&quot;,     // a regular-ole property
  &quot;protected&quot;,    // &gt; access
  &quot;public&quot;,       // &gt; access
  &quot;queuable&quot;,     // bool, events
  &quot;readonly&quot;,     // YUI attribute config
  &quot;requires&quot;,     // YUI module requirements
  &quot;return&quot;,       // {type} return desc -- returns is converted to this
  &quot;see&quot;,          // 0..n things to look at
  &quot;since&quot;,        // when it was introduced
  &quot;static&quot;,       // static
  &quot;submodule&quot;,    // YUI submodule
  &quot;throws&quot;,       // {execption type} description
  &quot;title&quot;,        // this should be something for the project description
  &quot;todo&quot;,         // 0..n things to revisit eventually (hopefully)
  &quot;type&quot;,         // the var type
  &quot;url&quot;,          // project url(s)
  &quot;uses&quot;,         // 0..n compents mixed (usually, via augment) into the prototype
  &quot;value&quot;,        // the value of a constant
  &quot;writeonce&quot;     // YUI attribute config
];

var InitialAST;

/**
 * The AST(Abstract syntax tree) of the comment
 *
 * @class AST
 */
var AST = {
  
  /**
   * @property {Object} project - About the project
   */
  project: {},

  /**
   * @property {Object} files - The files
   */
  files: {},

  /**
   * @property {Object} codes - The source codes
   */
  codes: {},

  /**
   * @property {Object} modules - The modules
   */
  modules: {},

  /**
   * @property {Object} classes - The classes
   */
  classes: {},

  /**
   * @property {Array} members - The members
   */
  members: [],

  /**
   * @property {Array} inheritedMembers - The inherited members
   */
  inheritedMembers: [],

  /**
   * @property {Object} namespacesMap - The namespaces map object
   */
  namespacesMap: {},

  /**
   * @property {Object} commentsMap - The comments map object
   */
  commentsMap: {},

  /**
   * @property {String} syntaxType - The syntax type
   */
  syntaxType: &#x27;js&#x27;,

  /**
   * @property {Context} context - The context object
   */
  context: null,

  /**
   * @proerty {Array} warnings - The parser warnings
   */
  warnings: [],

  /**
   * Create a AST object
   *
   * @method create
   * @param {Object} files - The files
   * @param {Object} dirs - The directorys
   * @param {String} [syntaxType] - The syntax type: &#x60;coffee&#x60; or &#x60;js&#x60;
   * @return {AST} the created AST object
   */
  create: function (files, dirs, syntaxType) {
    var instance = AST;
    instance.syntaxType = syntaxType || instance.syntaxType;
    instance.context = ParserContext;
    instance.context.ast = instance;
    instance.extract(files, dirs);
    instance.transform();
    return instance;
  },

  /**
   * Reset the AST instance
   *
   * @method reset
   */
  reset: function () {
    AST.project = {};
    AST.files = {};
    AST.codes = {};
    AST.modules = {};
    AST.classes = {};
    AST.members = [];
    AST.inheritedMembers = [];
    AST.commentsMap = {};
    AST.syntaxType = &#x27;js&#x27;;
    AST.warnings = [];
    if (AST.context &amp;&amp; AST.context.reset) {
      AST.context.reset();
      AST.context = null;
    }
    return AST;
  },

  /**
   *
   * @method oncomment
   * @param {String} comment
   * @param {String} filename
   * @param {String} linenum
   * @return {Object}
   */
  oncomment: function (comment, filename, linenum) {
    var lines = comment.split(REGEX_LINES);
    const len = lines.length;
    const lineHeadCharRegex = REGEX_LINE_HEAD_CHAR[this.syntaxType];
    const hasLineHeadChar = lines[0] &amp;&amp; lineHeadCharRegex.test(lines[0]);
    const r = new RegExp(&#x27;(?:^|\\n)\\s*((?!@&#x27; + IGNORE_TAGLIST.join(&#x27;)(?!@&#x27;) + &#x27;)@\\w*)&#x27;);

    var results = [
      {
        &#x27;tag&#x27;: &#x27;file&#x27;,
        &#x27;value&#x27;: filename
      },
      {
        &#x27;tag&#x27;: &#x27;line&#x27;,
        &#x27;value&#x27;: linenum
      }
    ];

    if (hasLineHeadChar) {
      lines = _.map(lines, function (line) {
        return line.trim().replace(lineHeadCharRegex, &#x27;&#x27;);
      });
    }

    const unidented = utils.unindent(lines.join(&#x27;\n&#x27;));
    const parts = unidented.split(r);

    var cursor = 0;
    for (; cursor &lt; parts.length; cursor++) {
      var skip;
      var val = &#x27;&#x27;;
      var part = parts[cursor];
      if (part === &#x27;&#x27;) continue;

      skip = false;
      // the first token may be the description, otherwise it should be a tag
      if (cursor === 0 &amp;&amp; part.substr(0, 1) !== &#x27;@&#x27;) {
        if (part) {
          tag = &#x27;@description&#x27;;
          val = part;
        } else {
          skip = true;
        }
      } else {
        tag = part;
        // lookahead for the tag value
        var peek = parts[cursor + 1];
        if (peek) {
          val = peek;
          cursor += 1;
        }
      }
      if (!skip &amp;&amp; tag) {
        results.push({
          tag: tag.substr(1).toLowerCase(),
          value: val || &#x27;&#x27;
        });
      }
    }
    return results;
  },

  /**
   * Processes all the tags in a single comment block
   * @method onblock
   * @param {Array} an array of the tag/text pairs
   */
  onblock: function (block) {
    this.context.block = {
      &#x27;self&#x27;: block,
      &#x27;target&#x27;: {
        &#x27;file&#x27;: this.context.file,
        &#x27;line&#x27;: block[1].value,
        &#x27;_raw&#x27;: _.reduce(block, onreduce, {})
      },
      &#x27;host&#x27;: null,
      &#x27;digesters&#x27;: []
    };

    function onreduce (map, item) {
      var key = utils.safetrim(item.tag);
      var val = utils.safetrim(item.value);
      map[key] = _.isString(val) ? utils.safetrim(val) : val;
      return map;
    }

    // handle tags and push digesters to context.block.digesters
    _.each(block, this.ontag, this);
    // run digiesters
    _.each(this.context.block.digesters, ondigester, this);

    function ondigester (ctx) {
      var ret = ctx.fn.call(this, ctx.name, ctx.value,
        this.context.block.target, this.context.block.self);
      this.context.block.host = this.context.block.host || ret;
    }

    // post process
    if (this.context.block.host) {
      _.extend(this.context.block.host, this.context.block.target);
    } else {
      var target = this.context.block.target;
      target.clazz = this.context.clazz;
      target.module = this.context.module;
      target.isGlobal = (this.context.clazz === &#x27;&#x27;);
      target.submodule = this.context.submodule;

      // set namespace
      var ns = utils.getNamespace(target);
      if (ns) {
        this.namespacesMap[ns] = target;
        target.namespace = ns;

        var parent = this.classes[target.clazz] || this.modules[target.module];
        Object.defineProperty(target, &#x27;parent&#x27;, {
          enumerable: true,
          get: function () {
            return parent;
          }
        });

        target.process = target.process || parent.process;
      }

      if (target.itemtype) {
        this.members.push(target);
      } else if (target.isTypeDef) {
        var parent = this.classes[this.context.clazz] ||
          this.modules[this.context.module];
        if (!parent) return;
        parent.types[target.name] = target;
      }
    }
  },

  /**
   * Process tag
   * @method ontag
   * @param {Object} item
   * @param {String} item.tag
   * @param {Object} item.value
   */
  ontag: function (item) {
    var name = utils.safetrim(item.tag);
    var value = utils.safetrim(item.value);

    if (SHORT_TAGS[name] &amp;&amp; value === &#x27;&#x27;) {
      value = 1;
    }

    if (TAGLIST.indexOf(name) === -1) {
      if (_.has(CORRECTIONS, name)) {
        // correction part
        // TODO(Yorkie): log the correction
        name = CORRECTIONS[name];
        item.tag = name;
      } else {
        // TODO(Yorkie): report the unknown correction
      }
    }

    if (_.has(DIGESTERS, name) === -1) {
      this.context.block.target[name] = value;
    } else {
      var digest = DIGESTERS[name];
      if (_.isString(digest)) {
        digest = DIGESTERS[digest];
      }
      var block = this.context.block;
      _.each(block.self, function (item) {
        if (item.tag === &#x27;description&#x27;) {
          block.target.description = item.value;
        } else if (item.tag === &#x27;type&#x27;) {
          block.target.type = utils.fixType(item.value);
        } else if (item.tag === &#x27;extends&#x27;) {
          block.target.extends = utils.fixType(item.value);
        }
      });
      if (_.isFunction(digest)) {
        // here we only push and run later
        // because CORRECTION perhaps doesn&#x27;t apply the later tags.
        block.digesters.push({
          fn: digest,
          name: name,
          value: value
        });
      }
    }
  },

  /**
   * Accepts a map of filenames to file content.  Returns
   * a map of filenames to an array of API comment block
   * text.  This expects the comment to start with / **
   * on its own line, and end with * / on its own
   * line.  Override this function to provide an
   * alternative comment parser.
   *
   * @method extract
   * @param {Object} files
   * @param {Object} dirs
   */
  extract: function (files, dirs) {
    _.each(files, function (code, filename) {
      filename = path.relative(CWD, filename);
      this.codes[filename] = code;
      const lines = code.split(REGEX_LINES);
      const len = lines.length;
      var comment;
      var cursor = 0;
      for (; cursor &lt; len; cursor++) {
        var line = lines[cursor];
        if (REGEX_START_COMMENT[this.syntaxType].test(line)) {
          var comments = [];
          var linenum = cursor + 1;
          while (cursor &lt; len &amp;&amp;
            (!REGEX_END_COMMENT[this.syntaxType].test(line))) {
            comments.push(line);
            cursor += 1;
            line = lines[cursor];
          }
          comments.shift();
          comment = comments.join(&#x27;\n&#x27;);
          this.commentsMap[filename] = this.commentsMap[filename] || [];
          this.commentsMap[filename].push(this.oncomment(comment, filename, linenum));
        }
      }
    }, this);
  },

  /**
   * Transforms a map of filenames to arrays of comment blocks into a
   * JSON structure that represents the entire processed API doc info
   * and relationships between elements for the entire project.
   *
   * @method transform
   * @param {Object} commentmap The hash of files and parsed comment blocks
   * @return {Object} The transformed data for the project
   */
  transform: function () {
    _.each(this.commentsMap, function (blocks, filename) {
      this.context.file = filename;
      _.each(blocks, this.onblock, this);
    }, this);
  }

};

/**
 * A map of the default tag processors, keyed by the
 * tag name.  Multiple tags can use the same digester
 * by supplying the string name that points to the
 * implementation rather than a function.
 * @property DIGESTERS
 * @type Object
 * @final
 * @for DocParser
 */
const DIGESTERS = {
  &#x27;param&#x27;: function (tagname, value, target, block) {
    target.params = target.params || [];
    if (!value) {
      this.warnings.push({
        message: &#x27;param name/type/descript missing&#x27;,
        line: utils.stringlog(block)
      });
      console.warn(&#x27;param name/type/descript missing: &#x27; + utils.stringlog(block));
      return;
    }

    var type, name, parts, optional, optdefault, parent, multiple, len, result,
      desc = implodeString(utils.safetrim(value)),
      match = REGEX_TYPE.exec(desc),
      host = target.params,
      type_;

    // Extract {type}
    if (match) {
      type_ = utils.safetrim(match[2]);
      type = utils.safetrim(match[2]);
      desc = utils.safetrim(match[1] + match[3]);
    }

    // extract the first word, this is the param name
    match = REGEX_FIRSTWORD.exec(desc);
    if (match) {
      name = utils.safetrim(explodeString(match[1]));
      desc = utils.safetrim(match[3]);
    }

    if (!name) {
      if (value &amp;&amp; value.match(/callback/i)) {
        this.warnings.push({
          message: &#x27;Fixing missing name for callback&#x27;,
          line: utils.stringlog(block)
        });
        console.warn(&#x27;Fixing missing name for callback:&#x27; + utils.stringlog(block));
        name = &#x27;callback&#x27;;
        type = &#x27;Callback&#x27;;
      } else {
        this.warnings.push({
          message: &#x27;param name missing: &#x27; + value,
          line: utils.stringlog(block)
        });
        console.warn(&#x27;param name missing: &#x27; + value + &#x27;:&#x27; + utils.stringlog(block));
        name = &#x27;UNKNOWN&#x27;;
      }
    }

    len = name.length - 1;
    if (name.charAt(len) === &#x27;*&#x27;) {
        multiple = true;
        name = name.substr(0, len);
    }

    // extract [name], optional param
    if (name.indexOf(&#x27;[&#x27;) &gt; -1) {
      match = REGEX_OPTIONAL.exec(name);
      if (match) {
        optional = true;
        name = utils.safetrim(match[1]);
        // extract optional=defaultvalue
        parts = name.split(&#x27;=&#x27;);
        if (parts.length &gt; 1) {
          name = parts[0];
          optdefault = parts[1];
          //Add some shortcuts for object/array defaults
          if (optdefault.toLowerCase() === &#x27;object&#x27;) {
            optdefault = &#x27;{}&#x27;;
          }
          if (optdefault.toLowerCase() === &#x27;array&#x27;) {
            optdefault = &#x27;[]&#x27;;
          }
        }
      }
    }

    // This should run after the check for optional parameters
    // and before the check for child parameters
    // because the signature for 0..n params is [...args]
    if (name.substr(0, 3) === &#x27;...&#x27;) {
      multiple = true;
      name = name.substr(3);
    }

    // parse object.prop, indicating a child property for object
    if (name.indexOf(&#x27;.&#x27;) &gt; -1) {
      match = name.split(&#x27;.&#x27;);
      parent = utils.safetrim(match[0]);
      _.each(target.params, function (param) {
        if (param.name === parent) {
          param.props = param.props || [];
          host = param.props;
          match.shift();
          name = utils.safetrim(match.join(&#x27;.&#x27;));
          if (match.length &gt; 1) {
            var pname = name.split(&#x27;.&#x27;)[0], par;
            _.each(param.props, function (o) {
              if (o.name === pname) {
                par = o;
              }
            });
            if (par) {
              match = name.split(&#x27;.&#x27;);
              match.shift();
              name = match.join(&#x27;.&#x27;);
              par.props = par.props || [];
              host = par.props;
            }
          }
        }
      });
    }

    result = {
      name: name,
      description: explodeString(desc)
    };

    if (type) {
      // find types from classitems
      var item = _.findWhere(this.members, {&#x27;name&#x27;: type});
      if (!item &amp;&amp; this.context.clazz) {
        item = this.classes[this.context.clazz].types[type];
      }
      if (!item &amp;&amp; this.context.module) {
        item = this.modules[this.context.module].types[type];
      }
      // finded the type
      if (item &amp;&amp; item.params) {
        // Dont remove the clone, because the item.params will be
        // used by multiple results, so that we need to clone a new
        // one for its own usage.
        result.description = result.description || item.description;
        result.props = _.clone(item.params);
        result.type = type_;
      } else {
        result.type = type;
      }
    }

    if (optional) {
      result.optional = true;
      if (optdefault) {
        result.optdefault = optdefault;
      }
    }

    if (multiple) {
      result.multiple = true;
    }

    // localize the description
    result.description = utils.localize(result.description);

    // push localized result to host
    host.push(result);
  },

  // @return {type} description // methods
  // @returns {type} description // methods
  // @injects {HTML|CSS|script} description
  // can be used by anthing that has an optional {type} and a description
  &#x27;return&#x27;: function (tagname, value, target, block) {
    var desc = implodeString(utils.safetrim(value)),
      type,
      match = REGEX_TYPE.exec(desc),
      result = {};

    if (match) {
      type = utils.safetrim(match[2]);
      desc = utils.safetrim(match[1] + match[3]);
    }

    result = {
      description: utils.unindent(explodeString(desc))
    };

    if (type) {
      result.type = type;
    }

    // remove the fist char &#x27;-&#x27; for @return tag
    result.description = result.description.replace(/^\s?-\s?/, &#x27;&#x27;);

    // localize the description
    result.description = utils.localize(result.description);

    target[tagname] = result;
  },

  // @throws {type} description
  &#x27;throws&#x27;: &#x27;return&#x27;,

  &#x27;injects&#x27;: &#x27;return&#x27;,

  // trying to overwrite the constructor value is a bad idea
  &#x27;constructor&#x27;: function (tagname, value, target, block) {
    target.isConstructor = true;
  },

  // A key bock type for declaring modules and submodules
  // subsequent class and member blocks will be assigned
  // to this module.
  &#x27;module&#x27;: function (tagname, value, target, block) {
    this.context.module = value;
    if (target._raw.process) {
      target.process = utils.fmtProcess(target._raw.process);
    }
    if (!target._raw.submodule) {
      if (!this.context.mainModule) {
        this.context.mainModule = {
          tag: tagname,
          name: value,
          file: target.file,
          line: target.line,
          type: &#x27;modules&#x27;,
          description: utils.localize(target.description)
        };
      }
      target.file = this.context.mainModule.file;
      target.line = this.context.mainModule.line;
      return this.modules[value];
    }
    return null;
  },

  //Setting the description for the module..
  &#x27;main&#x27;: function (tagname, value, target, block) {
    var o = target;
    o.mainName = value;
    o.tag = tagname;
    o.itemtype = &#x27;main&#x27;;
    o.description = utils.localize(o.description);
    o._main = true;
    this.context.mainModule = o;
  },

  // accepts a single project definition for the source tree
  &#x27;project&#x27;: function (tagname, value, target, block) {
    this.project.name = value;
    this.project.description = this.project.description || value;
  },
  
  // accepts a single project logo definition
  &#x27;logo&#x27;: function (tagname, value, target, block) {
    this.project.logo = value;
  },

  // A key bock type for declaring submodules.  subsequent class and
  // member blocks will be assigned to this submodule.
  &#x27;submodule&#x27;: function (tagname, value, target, block) {
    this.context.submodule = value;

    var host = this.modules[value];
    var clazz = this.context.clazz;
    var parent = this.context.module;
    if (parent) {
      host.module = parent;
      var parentModule = this.context.ast.modules[parent];
      if (parentModule) {
        this.context.ast.modules[parent].submodules[host.name] = host;
      }
    }
    if (clazz &amp;&amp; this.classes[clazz]) {
      this.classes[clazz].submodule = value;
    }
    return host;
  },

  // this is a way to abstract the definitions of callback arguments
  &#x27;callback&#x27;: function (tagname, value, target, block) {
    target.name = value;
    target.isTypeDef = true;
  },

  // A key bock type for declaring classes, subsequent
  // member blocks will be assigned to this class
  &#x27;class&#x27;: function (tagname, value, target, block) {
    var self = this;
    var fullname, host, parent;

    // set the process and attach the process on &#x60;target&#x60;
    if (target._raw.process) {
      target.process = utils.fmtProcess(target._raw.process);
    } else {
      var modProcess = this.modules[this.context.module].process;
      target.process = modProcess;
    }

    if (target._raw.extends) {
      var extended = target._raw.extends;
      if (!extended) {
        console.warn(&#x27;usage: &#x60;@extends &lt;class&gt;&#x60;, but only found &#x60;@extends&#x60;&#x27;);
      } else if (!this.inheritedMembers.length) {
        this.inheritedMembers.push([extended, value]);
      } else {
        var needNewItem = true;
        var item, at;
        _.some(this.inheritedMembers, function (member) {
          item = member;
          at = member.indexOf(extended);
          if (member.length - 1 === at) {
            return true;  // break
          }
          if (member[at + 1] === value) {
            needNewItem = false;
            return true;
          }
          if (at !== -1) {
            return true;
          }
        }, this);
        if (needNewItem) {
          if (extended !== item[item.length - 1]) {
            var newItem = item.slice(0, at + 1);
            newItem.push(value);
            self.inheritedMembers.push(newItem);
          } else {
            item.push(value);
          }
        }
      }
    }
    
    this.context.clazz = value;

    fullname = this.context.clazz;
    host = this.classes[fullname];
    parent = this.context.module;

    if (parent) {
      host.module = parent;
    }

    // set &#x60;is_enum&#x60; when the tagname is &quot;enum&quot;
    if (tagname === &#x27;enum&#x27;) {
      host.isEnum = true;
      host.type = &#x27;enums&#x27;;
    } else {
      host.isEnum = false;
      host.type = &#x27;classes&#x27;;
    }

    //Merge host and target in case the class was defined in a &quot;for&quot; tag
    //before it was defined in a &quot;class&quot; tag
    host = _.extend(host, target);
    this.classes[fullname] = host;
    parent = this.context.submodule;
    if (parent) {
      host.submodule = parent;
    }

    // localize
    host.description = utils.localize(host.description);
    return host;
  },

  // just defer from class in their names
  &#x27;enum&#x27;: &#x27;class&#x27;,

  // change &#x27;const&#x27; to final property
  &#x27;const&#x27;: function (tagname, value, target, block) {
    target.itemtype = &#x27;property&#x27;;
    target.name = value;
    /*jshint sub:true */
    target[&#x27;final&#x27;] = &#x27;&#x27;;
  },

  // supported classitems
  &#x27;property&#x27;: function (tagname, value, target, block) {
    var match, name, desc, type;

    target.itemtype = tagname;
    target.name = value;

    if (target._raw.process) {
      target.process = utils.fmtProcess(target._raw.process);
    }

    if (tagname === &#x27;property&#x27;) {
      var propM = value.match(/^\{(.+)\} ([a-zA-Z0-9_]+)\s*\-?\s*(.+)?$/);
      if (propM &amp;&amp; propM.length === 4) {
        value = propM[2];
        target.type = propM[1];
        target.name = propM[2];
        target.description = propM[3];
      }
    }

    if (!target.type) {
      desc = implodeString(utils.safetrim(value));
      match = REGEX_TYPE.exec(desc);

      // Extract {type}
      if (match) {
        type = trim(match[2]);
        name = trim(match[1] + match[3]);
        target.type = type;
        target.name = name;
      }
    }

    // localize the description
    target.description = utils.localize(target.description);
  },
  &#x27;method&#x27;: &#x27;property&#x27;,
  &#x27;attribute&#x27;: &#x27;property&#x27;,
  &#x27;config&#x27;: &#x27;property&#x27;,
  &#x27;event&#x27;: &#x27;property&#x27;,

  // access fields
  &#x27;public&#x27;: function (tagname, value, target, block) {
    target.access = tagname;
    target.tagname = value;
  },
  &#x27;private&#x27;: &#x27;public&#x27;,
  &#x27;protected&#x27;: &#x27;public&#x27;,
  &#x27;inner&#x27;: &#x27;public&#x27;,

  // tags that can have multiple occurances in a single block
  &#x27;todo&#x27;: function (tagname, value, target, block) {
    if (!_.isArray(target[tagname])) {
      target[tagname] = [];
    }
    //If the item is @tag one,two
    if (value.indexOf(&#x27;,&#x27;) &gt; -1) {
      value = value.split(&#x27;,&#x27;);
    } else {
      value = [value];
    }

    value.forEach(function (v) {
      v = trim(v);
      target[tagname].push(v);
    });
  },
  &#x27;extension_for&#x27;: &#x27;extensionfor&#x27;,
  &#x27;extensionfor&#x27;: function (tagname, value, target, block) {
    var clazz = this.context.clazz;
    if (this.classes[clazz]) {
      this.classes[clazz].extension_for.push(value);
    }
  },
  &#x27;example&#x27;: function (tagname, value, target, block) {
    if (value) {
      var linkMatch = value.match(/\{@link (.+)\}/);
      if (linkMatch &amp;&amp; linkMatch.length === 2) {
        var relative = utils.safetrim(linkMatch[1]);
        var examplePath = process.cwd() + &#x27;/&#x27; + relative;
        if (fs.existsSync(examplePath)) {
          value = fs.readFileSync(examplePath, &#x27;utf8&#x27;);
          value = &#x27;&#x60;&#x60;&#x60;&#x27; + value;
        } else {
          value = &#x27;&#x60;&#x60;&#x60;Not found for the example path: &#x27; + relative;
        }
      }
    }

    if (!_.isArray(target[tagname])) {
      target[tagname] = [];
    }

    var e = value;
    block.forEach(function (v) {
      if (v.tag === &#x27;example&#x27;) {
        if (v.value.indexOf(value) &gt; -1) {
          e = v.value;
        }
      }
    });

    target[tagname].push(e);
  },
  &#x27;url&#x27;: &#x27;todo&#x27;,
  &#x27;icon&#x27;: &#x27;todo&#x27;,
  &#x27;see&#x27;: &#x27;todo&#x27;,
  &#x27;requires&#x27;: &#x27;todo&#x27;,
  &#x27;knownissue&#x27;: &#x27;todo&#x27;,
  &#x27;uses&#x27;: &#x27;todo&#x27;,
  &#x27;category&#x27;: &#x27;todo&#x27;,
  &#x27;unimplemented&#x27;: &#x27;todo&#x27;,

  genericValueTag: function (tagname, value, target, block) {
    target[tagname] = value;
  },

  &#x27;author&#x27;: &#x27;genericValueTag&#x27;,
  &#x27;contributor&#x27;: &#x27;genericValueTag&#x27;,
  &#x27;since&#x27;: &#x27;genericValueTag&#x27;,

  &#x27;deprecated&#x27;: function (tagname, value, target, block) {
    target.deprecated = true;
    if (typeof value === &#x27;string&#x27; &amp;&amp; value.length) {
      target.deprecationMessage = value;
    }
  },

  // updates the current class only (doesn&#x27;t create
  // a new class definition)
  &#x27;for&#x27;: function (tagname, value, target, block) {
    var ns, file, mod;
    this.context.clazz = value;

    ns = ((this.classes[value]) ? this.classes[value].namespace : &#x27;&#x27;);
    this.context.namespace = ns;

    file = this.context.file;
    if (file) {
      this.files[file].fors[value] = 1;
    }

    mod = this.context.module;
    if (mod) {
      this.modules[mod].fors[value] = 1;
    }

    mod = this.context.submodule;
    if (mod) {
      this.modules[mod].fors[value] = 1;
    }
  }

};

/**
 * Flatten a string, remove all line breaks and replace them with a token
 * @method implodeString
 * @private
 * @param {String} str The string to operate on
 * @return {String} The modified string
 */
function implodeString (str) {
  return (str || &#x27;&#x27;).replace(REGEX_GLOBAL_LINES, &#x27;!~FIREDOC_LINE~!&#x27;);
}

/**
 * Un-flatten a string, replace tokens injected with &#x60;implodeString&#x60;
 * @method implodeString
 * @private
 * @param {String} str The string to operate on
 * @return {String} The modified string
 */
function explodeString (str) {
  return (str || &#x27;&#x27;).replace(/!~FIREDOC_LINE~!/g, &#x27;\n&#x27;);
}

exports.InitialAST = _.clone(AST);
exports.AST = AST;
exports.DIGESTERS = DIGESTERS;
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
