
const _ = require('underscore');
const path = require('path');
const utils = require('./utils');

const CWD = process.cwd();
const CURRENT_NAMESPACE = 'currentnamespace';
const CURRENT_MODULE = 'currentmodule';
const MAIN_MODULE = 'mainmodule';
const CURRENT_SUBMODULE = 'currentsubmodule';
const CURRENT_FILE = 'currentfile';
const CURRENT_CLASS = 'currentclass';

const REGEX_TYPE = /(.*?)\{(.*?)\}(.*)/;
const REGEX_FIRSTWORD = /^\s*?(\[.+\]\*?|[^\s]+)\s*\-?\s*(.*)/;
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
const REGEX_LINES = /\r\n|\n/;
const REGEX_GLOBAL_LINES = /\r\n|\n/g;
const SHORT_TAGS = {
  'async': 1,
  'beta': 1,
  'chainable': 1,
  'extends': 1,
  'final': 1,
  'static': 1,
  'optional': 1,
  'required': 1
};

/**
 * The ParserContext
 *
 * @class ParserContext
 */
var ParserContext = {
  /**
   * @property {Any} file
   */
  file: null,

  /**
   * @property {Any} module
   */
  module: null,

  /**
   * @property {Any} process
   */
  clazz: null,

  /**
   * @property {Any} block
   */
  block: null,

  /**
   * @property {Any} submodule
   */
  submodule: null,

  /**
   * @property {Any} namespace
   */
  namespace: null
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
  "async",        // bool, custom events can fire the listeners in a setTimeout
  "author",       // author best for projects and modules, but can be used anywhere // multi
  "attribute",    // YUI attributes -- get/set with change notification, etc
  "beta",         // module maturity identifier
  "broadcast",    // bool, events
  "bubbles",      // custom events that bubble
  "callback",     // callback defines
  "category",     // modules can be in multiple categories
  "chainable",    // methods that return the host object
  "class",        // pseudo class
  "conditional",  // conditional module
  "config",       // a config param (not an attribute, so no change events)
  "const",        // not standardized yet, converts to final property
  "constructs",   // factory methods (not yet used)
  "constructor",  // this is a constructor
  "contributor",  // like author
  "default",      // property/attribute default value
  "deprecated",   // please specify what to use instead
  "description",  // can also be free text at the beginning of a comment is
  "emitfacade",   // bool, YUI custom event can have a dom-like event facade
  "enum",         // pseudo enum
  "event",        // YUI custom event
  "evil",         // uses eval
  "extension",    // this is an extension for [entity]
  "extensionfor", // this is an extension for [entity]
  "extension_for",// this is an extension for [entity]
  "example",      // 0..n code snippets.  snippets can also be embedded in the desc
  "experimental", // module maturity identifier
  "extends",      // pseudo inheritance
  "file",         // file name (used by the parser)
  "final",        // not meant to be changed
  "fireonce",     // bool, YUI custom event config allows
  "for",          // used to change class context
  "global",       // declare your globals
  "icon",         // project icon(s)
  "in",           // indicates module this lives in (obsolete now)
  "initonly",     // attribute writeonce value
  "injects",      // injects {HTML|script|CSS}
  "knownissue",   // 0..n known issues for your consumption
  "line",         // line number for the comment block (used by the parser)
  "method",       // a method
  "module",       // YUI module name
  "main",         // Description for the module
  "namespace",    // Y.namespace, used to fully qualify class names
  "optional",     // For optional attributes
  "required",     // For required attributes
  "param",        // member param
  "plugin",       // this is a plugin for [entityl]
  "preventable",  // YUI custom events can be preventable ala DOM events
  "private",      // > access
  'process',      // instance runtime
  "project",      // project definition, one per source tree allowed
  "property",     // a regular-ole property
  "protected",    // > access
  "public",       // > access
  "queuable",     // bool, events
  "readonly",     // YUI attribute config
  "requires",     // YUI module requirements
  "return",       // {type} return desc -- returns is converted to this
  "see",          // 0..n things to look at
  "since",        // when it was introduced
  "static",       // static
  "submodule",    // YUI submodule
  "throws",       // {execption type} description
  "title",        // this should be something for the project description
  "todo",         // 0..n things to revisit eventually (hopefully)
  "type",         // the var type
  "url",          // project url(s)
  "uses",         // 0..n compents mixed (usually, via augment) into the prototype
  "value",        // the value of a constant
  "writeonce"     // YUI attribute config
];

/**
 * A list of ignored tags. These tags should be ignored because there is
 * likely to be used for purposes other than JSDoc tags in JavaScript comments.
 * @property IGNORE_TAGLIST
 * @type Array
 * @final
 * @for DocParser
 */
const IGNORE_TAGLIST = ['media'];

/**
 * Common errors will get scrubbed instead of being ignored.
 * @property CORRECTIONS
 * @type Object
 * @final
 * @for DocParser
 */
const CORRECTIONS = {
  'augments': 'uses', // YUI convention for prototype mixins
  'depreciated': 'deprecated', // subtle difference
  'desciption': 'description', // shouldn't need the @description tag at all
  'extend': 'extends', // typo
  'function': 'method', // we may want standalone inner functions at some point
  'member': 'method', // probably meant method
  'parm': 'param', // typo
  'params': 'param', // typo
  'pamra': 'param', // typo
  'parma': 'param', // typo
  'propery': 'property', // typo
  'prop': 'property', // probably meant property
  'returns': 'return' // need to standardize on one or the other
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
  'param': function (tagname, value, target, block) {
    target.params = target.params || [];
    if (!value) {
      this.warnings.push({
        message: 'param name/type/descript missing',
        line: stringlog(block)
      });
      Y.log('param name/type/descript missing: ' + stringlog(block), 'warn', 'docparser');
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
      desc = utils.safetrim(match[2]);
    }

    if (!name) {
      if (value && value.match(/callback/i)) {
        this.warnings.push({
          message: 'Fixing missing name for callback',
          line: stringlog(block)
        });
        Y.log('Fixing missing name for callback:' + stringlog(block), 'warn', 'docparser');
        name = 'callback';
        type = 'Callback';
      } else {
        this.warnings.push({
          message: 'param name missing: ' + value,
          line: stringlog(block)
        });
        Y.log('param name missing: ' + value + ':' + stringlog(block), 'warn', 'docparser');
        name = 'UNKNOWN';
      }
    }

    len = name.length - 1;
    if (name.charAt(len) === '*') {
        multiple = true;
        name = name.substr(0, len);
    }

    // extract [name], optional param
    if (name.indexOf('[') > -1) {
      match = REGEX_OPTIONAL.exec(name);
      if (match) {
        optional = true;
        name = utils.safetrim(match[1]);
        // extract optional=defaultvalue
        parts = name.split('=');
        if (parts.length > 1) {
          name = parts[0];
          optdefault = parts[1];
          //Add some shortcuts for object/array defaults
          if (optdefault.toLowerCase() === 'object') {
            optdefault = '{}';
          }
          if (optdefault.toLowerCase() === 'array') {
            optdefault = '[]';
          }
        }
      }
    }

    // This should run after the check for optional parameters
    // and before the check for child parameters
    // because the signature for 0..n params is [...args]
    if (name.substr(0, 3) === '...') {
      multiple = true;
      name = name.substr(3);
    }

    // parse object.prop, indicating a child property for object
    if (name.indexOf('.') > -1) {
      match = name.split('.');
      parent = utils.safetrim(match[0]);
      _.each(target.params, function (param) {
        if (param.name === parent) {
          param.props = param.props || [];
          host = param.props;
          match.shift();
          name = utils.safetrim(match.join('.'));
          if (match.length > 1) {
            var pname = name.split('.')[0], par;
            Y.each(param.props, function (o) {
              if (o.name === pname) {
                par = o;
              }
            });
            if (par) {
              match = name.split('.');
              match.shift();
              name = match.join('.');
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
      var item = this.members.filter(function (i) {
        return i.is_type && i.name === type;
      })[0];
      // finded the type
      if (item && item.params) {
        // Dont remove the clone, because the item.params will be
        // used by multiple results, so that we need to clone a new
        // one for its own usage.
        result.props = Y.clone(item.params);
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
  'return': function (tagname, value, target, block) {
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

    // remove the fist char '-' for @return tag
    result.description = result.description.replace(/^\s?-\s?/, '');

    // localize the description
    result.description = utils.localize(result.description);

    target[tagname] = result;
  },

  // @throws {type} description
  'throws': 'return',

  'injects': 'return',

  // trying to overwrite the constructor value is a bad idea
  'constructor': function (tagname, value, target, block) {
    target.is_constructor = 1;
  },

  // @author {twitter: @arthurdent | github: ArthurDent}
  //    Arthur Dent adent@h2g2.earth #23, multiple // modules/class/method
  // 'author': function(tagname, value, target, block) {
  //     // Y.log('author digester');
  // },

  // A key bock type for declaring modules and submodules
  // subsequent class and member blocks will be assigned
  // to this module.
  'module': function (tagname, value, target, block) {
    this.set(CURRENT_MODULE, value);
    var go = true;
    Y.some(block, function (o) {
      if (trim(o.tag) === 'submodule') {
        go = false;
        return true;
      }
    });
    if (go) {
      if (!this.get(MAIN_MODULE)) {
        this.set(MAIN_MODULE, {
          tag: tagname,
          name: value,
          file: target.file,
          line: target.line,
          type: 'modules',
          // localize the description
          description: utils.localize(target.description)
        });
      }
      return this.modules[value];
    }
    return null;
  },

  //Setting the description for the module..
  'main': function (tagname, value, target, block) {
    var o = target;
    o.mainName = value;
    o.tag = tagname;
    o.itemtype = 'main';
    o.description = utils.localize(o.description);
    o._main = true;
    this.set(MAIN_MODULE, o);
  },

  // accepts a single project definition for the source tree
  'project': function (tagname, value, target, block) {
    return this.project;
  },

  // A key bock type for declaring submodules.  subsequent class and
  // member blocks will be assigned to this submodule.
  'submodule': function (tagname, value, target, block) {
    //console.log('Setting current submodule: ', value, 'on class');
    this.set(CURRENT_SUBMODULE, value);
    var host = this.modules[value],
      clazz = this.get(CURRENT_CLASS),
      parent = this.get(CURRENT_MODULE);
    if (parent) {
      host.module = parent;
    }
    if (clazz && this.classes[clazz]) {
      //console.log('Adding submodule', value , 'to class', clazz, ' it has submodule', this.classes[clazz].submodule);
      //if (!this.classes[clazz].submodule) {
      //console.log('REALLY Adding submodule', value , 'to class', clazz);
      this.classes[clazz].submodule = value;
      //}
    }
    return host;
  },

  // this is a way to abstract the definitions of callback arguments
  'callback': function (tagname, value, target, block) {
    target.name = value;
    target.is_type = true;
  },

  // A key bock type for declaring classes, subsequent
  // member blocks will be assigned to this class
  'class': function (tagname, value, target, block) {
    var self = this;
    var namespace, fullname, host, parent;

    block.forEach(function (def) {
      if (def.tag === 'namespace') {
        //We have a namespace, augment the name
        var name = trim(def.value) + '.' + value;
        if (value.indexOf(trim(def.value) + '.') === -1) {
          value = name;
          namespace = trim(def.value);
        }
      }
      if (def.tag === 'extends') {
        var extended = trim(def.value);
        if (!self.classinherits.length) {
          self.classinherits.push([extended, value]);
        } else {
          var item, at;
          var needNewItem = true;
          for (var i = 0; i < self.classinherits.length; i++) {
            item = self.classinherits[i];
            at = item.indexOf(extended);
            if (item.length - 1 === at) {
              break;
            }
            if (item[at + 1] === value) {
              needNewItem = false;
              break;
            }
            if (at !== -1) {
              break;
            }
          }
          if (needNewItem) {
            if (extended !== item[item.length - 1]) {
              var newItem = item.slice(0, at + 1);
              newItem.push(value);
              self.classinherits.push(newItem);
            } else {
              item.push(value);
            }
          }
        }
      }
    });

    if (namespace) {
      ParserContext.namespace = namespace;
    }
    ParserContext.clazz = value;

    fullname = ParserContext.clazz;
    host = this.classes[fullname];
    parent = ParserContext.module;

    if (namespace) {
      host.namespace = namespace;
    }
    if (parent) {
      host.module = parent;
    }

    // set `is_enum` when the tagname is "enum"
    if (tagname === 'enum') {
      host['is_enum'] = true;
      host.type = 'enums';
    } else {
      host['is_enum'] = false;
      host.type = 'classes';
    }

    //Merge host and target in case the class was defined in a "for" tag
    //before it was defined in a "class" tag
    host = Y.merge(host, target);
    this.classes[fullname] = host;
    parent = this.get(CURRENT_SUBMODULE);
    if (parent) {
      //this.set(CURRENT_SUBMODULE, parent);
      host.submodule = parent;
    }

    // localize
    host.description = utils.localize(host.description);
    return host;
  },

  // just defer from class in their names
  'enum': 'class',

  // change 'const' to final property
  'const': function (tagname, value, target, block) {
    target.itemtype = 'property';
    target.name = value;
    /*jshint sub:true */
    target['final'] = '';
  },

  // supported classitems
  'property': function (tagname, value, target, block) {
    var match, name, desc, type;

    target.itemtype = tagname;
    target.name = value;
    if (tagname === 'property') {
      var propM = value.match(/^\{(.+)\} ([a-zA-Z0-0_]+)\s*\-?\s*(.+)$/);
      if (propM && propM.length === 4) {
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
    if (target.type && target.type.toLowerCase() === 'object') {
      block.forEach(function (i, k) {
        if (i.tag === 'property') {
          i.value = trim(i.value);
          i.tag = 'param';
          block[k] = i;
        }
      });
    }

    // localize the description
    target.description = utils.localize(target.description);
  },
  'method': 'property',
  'attribute': 'property',
  'config': 'property',
  'event': 'property',

  // access fields
  'public': function (tagname, value, target, block) {
    target.access = tagname;
    target.tagname = value;
  },
  'private': 'public',
  'protected': 'public',
  'inner': 'public',

  // tags that can have multiple occurances in a single block
  'todo': function (tagname, value, target, block) {
    if (!Lang.isArray(target[tagname])) {
      target[tagname] = [];
    }
    //If the item is @tag one,two
    if (value.indexOf(',') > -1) {
      value = value.split(',');
    } else {
      value = [value];
    }

    value.forEach(function (v) {
      v = trim(v);
      target[tagname].push(v);
    });
  },
  'extension_for': 'extensionfor',
  'extensionfor': function (tagname, value, target, block) {
    if (this.classes[this.get(CURRENT_CLASS)]) {
      this.classes[this.get(CURRENT_CLASS)].extension_for.push(value);
    }
  },
  'example': function (tagname, value, target, block) {

    if (value) {
      var linkMatch = value.match(/\{@link (.+)\}/);
      if (linkMatch && linkMatch.length === 2) {
        var examplePath = process.cwd() + '/' + linkMatch[1].trim();
        if (Y.Files.exists(examplePath)) {
          value = Y.Files.readFileSync(examplePath, 'utf8');
          value = '```' + value;
        }
      }
    }

    if (!Lang.isArray(target[tagname])) {
      target[tagname] = [];
    }

    var e = value;
    block.forEach(function (v) {
      if (v.tag === 'example') {
        if (v.value.indexOf(value) > -1) {
          e = v.value;
        }
      }
    });

    target[tagname].push(e);
  },
  'url': 'todo',
  'icon': 'todo',
  'see': 'todo',
  'requires': 'todo',
  'knownissue': 'todo',
  'uses': 'todo',
  'category': 'todo',
  'unimplemented': 'todo',

  genericValueTag: function (tagname, value, target, block) {
    target[tagname] = value;
  },

  'author': 'genericValueTag',
  'contributor': 'genericValueTag',
  'since': 'genericValueTag',

  'deprecated': function (tagname, value, target, block) {
    target.deprecated = true;
    if (typeof value === 'string' && value.length) {
      target.deprecationMessage = value;
    }
  },

  // updates the current namespace
  'namespace': function (tagname, value, target, block) {
    this.set(CURRENT_NAMESPACE, value);
    if (value === '') {
      //Shortcut this if namespace is an empty string.
      return;
    }
    var m,
      mod,
      name,
      lastNS,
      file = this.get(CURRENT_FILE);
    if (file) {
      this.files[file].namespaces[value] = 1;
    }
    mod = this.get(CURRENT_MODULE);
    if (mod) {
      this.modules[mod].namespaces[value] = 1;
    }

    mod = this.get(CURRENT_SUBMODULE);
    if (mod) {
      this.modules[mod].namespaces[value] = 1;
    }

    mod = this.get(CURRENT_CLASS);
    if (mod) {
      lastNS = this.get('lastnamespace');
      if (lastNS && lastNS !== value && (value.indexOf(lastNS + '.') !== 0)) {
        if (this.classes[mod]) {
          m = this.classes[mod];
          delete this.classes[mod];
          mod = value + '.' + mod.replace(lastNS + '.', '');
          m.name = mod;
          m.namespace = value;
          this.classes[mod] = m;
          this.set(CURRENT_CLASS, m.name);
        }
      }
      if (this.classes[mod]) {
        this.classes[mod].namespace = value;
        if (mod === value) {
          return;
        }
        if (mod.indexOf(value + '.') === -1) {
          if (mod.indexOf('.') === -1) {
            m = this.classes[mod];
            delete this.classes[mod];
            name = m.namespace + '.' + m.name;
            m.name = name;
            this.classes[name] = m;
            this.set(CURRENT_CLASS, name);
          } else {
            if (mod.indexOf(this.classes[mod].namespace + '.') === -1) {
              m = this.classes[mod];
              delete this.classes[mod];
              name = m.namespace + '.' + m.shortname;
              m.name = name;
              this.classes[name] = m;
              this.set(CURRENT_CLASS, name);
            }
          }
        }
      }
    }
  },

  // updates the current class only (doesn't create
  // a new class definition)
  'for': function (tagname, value, target, block) {
    var ns, file, mod;

    value = this._resolveFor(value);
    ParserContext.clazz = value;

    ns = ((this.classes[value]) ? this.classes[value].namespace : '');
    this.set(CURRENT_NAMESPACE, ns);

    file = this.get(CURRENT_FILE);
    if (file) {
      this.files[file].fors[value] = 1;
    }

    mod = this.get(CURRENT_MODULE);
    if (mod) {
      this.modules[mod].fors[value] = 1;
    }

    mod = this.get(CURRENT_SUBMODULE);
    if (mod) {
      this.modules[mod].fors[value] = 1;
    }
  },

  'process': function (tagname, value, target, block) {
    target.process = value.split(',').map(function (val) {
      return val.trim();
    });
  }
};

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
   * @property {Object} commentsMap - The comments map object
   */
  commentsMap: {},

  /**
   * @property {String} _syntaxType - The syntax type
   */
  syntaxType: 'js',

  /**
   * Create a AST object
   *
   * @method create
   * @param {Object} files
   * @param {Object} dirs
   * @param {String} [syntaxType]
   * @return {AST} the created AST object
   */
  create: function (files, dirs, syntaxType) {
    var instance = Object.create(AST);
    instance.syntaxType = syntaxType || instance.syntaxType;
    instance.extract(files, dirs);
    instance.transform();
    return instance;
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
    const lines = comment.split(REGEX_LINES);
    const len = lines.length;
    const lineHeadCharRegex = REGEX_LINE_HEAD_CHAR[this.syntaxType];
    const hasLineHeadChar = lines[0] && lineHeadCharRegex.test(lines[0]);
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
        return line.replace(lineHeadCharRegex, '');
      });
    }

    const unidented = utils.unindent(lines.join('\n'));
    const parts = unidented.split(r);
    
    var cursor = 0;
    for (; cursor < parts.length; cursor++) {
      var skip;
      var val = '';
      var part = parts[cursor];
      if (part === '') continue;

      skip = false;
      // the first token may be the description, otherwise it should be a tag
      if (cursor === 0 && part.substr(0, 1) !== '@') {
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
    ParserContext.block = {
      'self': block,
      'target': {},
      'host': null
    };
    _.each(block, this.ontag, this);

    // post process
    if (ParserContext.block.host) {
      _.extend(ParserContext.block.host, ParserContext.block.target);
    } else {
      var target = ParserContext.block.target;
      target.clazz = ParserContext.clazz;
      target.module = ParserContext.module;
      target.isGlobal = (ParserContext.clazz === '');
      target.submodule = ParserContext.submodule;
      target.namespace = ParserContext.namespace;
      this.members.push(target);
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

    if (SHORT_TAGS[name] && value === '') {
      value = 1;
    }

    if (TAGLIST.indexOf(name) === -1) {
      if (CORRECTIONS.indexOf(name) !== -1) {
        // correction part
        // TODO(Yorkie): log the correction
        name = CORRECTIONS[name];
      } else {
        // TODO(Yorkie): report the unknown correction
      }
    }

    if (_.has(DIGESTERS, name) === -1) {
      ParserContext.block.target[name] = value;
    } else {
      var digest = DIGESTERS[name];
      if (_.isString(digest)) {
        digest = DIGESTERS[digest];
      }
      var block = ParserContext.block;
      if (_.isFunction(digest)) {
        var ret = digest.call(this, name, value, block.target, block.self);
        ParserContext.block.host = block.host || ret;
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
      ParserContext.file = filename;
      _.each(blocks, this.onblock, this);
    }, this);
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
  return (str || '').replace(REGEX_GLOBAL_LINES, '!~YUIDOC_LINE~!');
}

/**
 * Un-flatten a string, replace tokens injected with `implodeString`
 * @method implodeString
 * @private
 * @param {String} str The string to operate on
 * @return {String} The modified string
 */
explodeString = function (str) {
  return (str || '').replace(/!~YUIDOC_LINE~!/g, '\n');
}

function parse (syntaxtype, files, dirs) {
  return AST.create(files, dirs);
}

exports.parse = parse;



