
/**
 * @module firedoc
 */

const _ = require('underscore');
const fs = require('graceful-fs');
const path = require('path');
const utils = require('./utils');
const debug = require('debug')('firedoc:ast');
const ParserContext = require('./ast/context').ParserContext;
const CWD = process.cwd();
const REGEX_LINES = /\r\n|\n/;
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
 */
const IGNORE_TAGLIST = ['media'];

/**
 * Common errors will get scrubbed instead of being ignored.
 * @property CORRECTIONS
 * @type Object
 * @final
 */
const CORRECTIONS = require('./ast/corrections');

/**
 * Short tags
 * @property SHORT_TAGS
 * @type Object
 * @final
 */
const SHORT_TAGS = require('./ast/short-tags');

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
const TAGLIST = require('./ast/tags');
const DIGESTERS = require('./ast/digesters');

/**
 * !#en
 * The AST(Abstract syntax tree) of the comment
 * !#zh
 * 注释的抽象语法树
 *
 * {{#crossLink "AST"}}{{/crossLink}}
 *
 * @class AST
 */
var AST = {
  
  /**
   * !#en the project !#zh 项目
   * @property {Object} project
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
   * @property {Object} classes - The classes
   */
  enums: {},

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
  syntaxType: 'js',

  /**
   * @property {Context} context - The context object
   */
  context: null,

  /**
   * @proerty {Array} warnings - The parser warnings
   */
  warnings: [],

  /**
   * !#en
   * Create an AST object
   * !#zh
   * 创建一个抽象语法树对象
   *
   * @method create
   * @param {Object} files - The files
   * @param {Object} dirs - The directorys
   * @param {String} [syntaxType] - The syntax type: `coffee` or `js`
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
    AST.enums = {};
    AST.members = [];
    AST.inheritedMembers = [];
    AST.commentsMap = {};
    AST.syntaxType = 'js';
    AST.warnings = [];
    if (AST.context && AST.context.reset) {
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
    const hasLineHeadChar = lines[0] && lineHeadCharRegex.test(lines[0]);
    // match all tags except ignored ones
    const r = new RegExp('(?:^|\\n)\\s*((?!@' + IGNORE_TAGLIST.join(')(?!@') + ')@\\w*)');

    var results = [
      {
        'tag': 'file',
        'value': filename
      },
      {
        'tag': 'line',
        'value': linenum
      }
    ];

    if (hasLineHeadChar) {
      lines = _.map(lines, function (line) {
        return line.trim().replace(lineHeadCharRegex, '');
      });
    }

    const unidented = utils.unindent(lines.join('\n'));
    const parts = unidented.split(r); // with capturing parentheses, tags are also included in the result array

    var cursor = 0;
    for (; cursor < parts.length; cursor++) {
      var skip;
      var val = '';
      var part = parts[cursor];
      if (part === '') continue;

      skip = false;
      // the first token may be the description, otherwise it should be a tag
      if (cursor === 0 && part.substr(0, 1) !== '@') { //description ahead
        if (part) {
          tag = '@description';
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
      if (!skip && tag) {
        results.push({
          tag: tag.substr(1).toLowerCase(),
          value: val || ''
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
    var raw = _.reduce(block, onreduce, {});
    raw.line = Number(raw.line);

    this.context.block = {
      'self': block,
      'target': {
        'file': raw.file,
        'line': raw.line,
        '_raw': raw
      },
      'host': null,
      'digesters': []
    };

    function onreduce (map, item) {
      var key = utils.safetrim(item.tag);
      var val = utils.safetrim(item.value);
      if (!map[key]) {
        map[key] = val;
      } else if (!_.isArray(map[key])) {
        map[key] = [map[key], val];
      } else {
        map[key].push(val);
      }
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
      this.context.block.host = _.extend(
        this.context.block.host, this.context.block.target);
    } else {
      var target = this.context.block.target;
      target.clazz = this.context.clazz;
      target.module = this.context.module;
      target.isGlobal = (this.context.clazz === '');
      target.submodule = this.context.submodule;

      // set namespace
      var ns = utils.getNamespace(target);
      if (ns) {
        this.namespacesMap[ns] = target;
        target.namespace = ns;

        var parent = this.classes[target.clazz] || this.modules[target.module];
        Object.defineProperty(target, 'parent', {
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
    var file = this.context.block.target.file;

    if (SHORT_TAGS[name] && value === '') {
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
      var target = block.target;
      if (target._raw.description)
        target.description = target._raw.description;
      if (target._raw.type)
        target.type = utils.fixType(target._raw.type);
      if (target._raw.extends)
        target.extends = utils.fixType(target._raw.extends);

      if (_.isFunction(digest)) {
        // here we only push and run later
        // because CORRECTION perhaps doesn't apply the later tags.
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
      for (; cursor < len; cursor++) {
        var line = lines[cursor];
        if (REGEX_START_COMMENT[this.syntaxType].test(line)) {
          var comments = [];
          var linenum = cursor + 1;
          while (cursor < len &&
            (!REGEX_END_COMMENT[this.syntaxType].test(line))) {
            comments.push(line);
            cursor += 1;
            line = lines[cursor];
          }
          comments.shift();
          comment = comments.join('\n');
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

exports.AST = AST;
exports.DIGESTERS = DIGESTERS;
