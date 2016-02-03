'use strict';
/**
 * A map of the default tag processors, keyed by the
 * tag name.  Multiple tags can use the same digester
 * by supplying the string name that points to the
 * implementation rather than a function.
 * @module digesters
 * @main digesters
 */

const _ = require('underscore');
const fs = require('graceful-fs');
const utils = require('../utils');

const REGEX_TYPE = /(.*?)\{(.*?)\}(.*)/;
const REGEX_GLOBAL_LINES = /\r\n|\n/g;
const REGEX_FIRSTWORD = /^\s*?(\[([^\[\]]+)\]\*?|[^\s]+)\s*\-?\s*(.*)/;
const REGEX_OPTIONAL = /^\[(.*)\]$/;

/**
 * Flatten a string, remove all line breaks and replace them with a token
 * @method implodeString
 * @private
 * @param {String} str The string to operate on
 * @return {String} The modified string
 */
function implodeString (str) {
  return (str || '').replace(REGEX_GLOBAL_LINES, '!~FIREDOC_LINE~!');
}

/**
 * Un-flatten a string, replace tokens injected with `implodeString`
 * @method implodeString
 * @private
 * @param {String} str The string to operate on
 * @return {String} The modified string
 */
function explodeString (str) {
  return (str || '').replace(/!~FIREDOC_LINE~!/g, '\n');
}

module.exports = {
  /**
   * Handle with params
   * @method params
   */
  'param': function (tagname, value, target, block) {
    target.params = target.params || [];
    if (!value) {
      this.warnings.push({
        message: 'param name/type/descript missing',
        line: utils.stringlog(block)
      });
      console.warn('param name/type/descript missing: ' + utils.stringlog(block));
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
      if (value && value.match(/callback/i)) {
        this.warnings.push({
          message: 'Fixing missing name for callback',
          line: utils.stringlog(block)
        });
        console.warn('Fixing missing name for callback:' + utils.stringlog(block));
        name = 'callback';
        type = 'Callback';
      } else {
        this.warnings.push({
          message: 'param name missing: ' + value,
          line: utils.stringlog(block)
        });
        console.warn('param name missing: ' + value + ':' + utils.stringlog(block));
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
            _.each(param.props, function (o) {
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
      var item = _.findWhere(this.members, {'name': type});
      if (!item && this.context.clazz) {
        item = this.classes[this.context.clazz].types[type];
      }
      if (!item && this.context.module) {
        item = this.modules[this.context.module].types[type];
      }
      // finded the type
      if (item && item.params) {
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

    // push result to host
    host.push(result);
  },

  /**
   * Handle with return
   * @method return
   */
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
    target[tagname] = result;
  },

  /**
   * Handle with throws
   * @property throws
   */
  'throws': 'return',

  'injects': 'return',

  // trying to overwrite the constructor value is a bad idea
  'constructor': function (tagname, value, target, block) {
    target.isConstructor = true;
  },

  // A key bock type for declaring modules and submodules
  // subsequent class and member blocks will be assigned
  // to this module.
  'module': function (tagname, value, target, block) {
    this.context.module = value;
    if (target._raw.process) {
      target.process = utils.fmtProcess(target._raw.process);
    }
    if (target._raw && target._raw.main === value) {
      this.context.mainModule = {
        tag: tagname,
        name: value,
        file: target.file,
        line: target.line,
        type: 'modules',
        description: target.description
      };
    }
    var mainModule = this.context.mainModule;
    var currModule = this.modules[value];

    if (!currModule._main && target._raw.main === currModule.name) {
      utils.defineReadonly(currModule, 'file', mainModule.file);
      utils.defineReadonly(currModule, 'line', mainModule.line);
    }
    return currModule;
  },

  //Setting the description for the module..
  'main': function (tagname, value, target, block) {
    var o = target;
    o.mainName = value;
    o.tag = 'main';
    o.itemtype = 'main';
    o._main = true;
    this.context.mainModule = o;
  },

  // accepts a single project definition for the source tree
  'project': function (tagname, value, target, block) {
    this.project.name = value;
    this.project.description = this.project.description || value;
  },

  // accepts a single project logo definition
  'logo': function (tagname, value, target, block) {
    this.project.logo = value;
  },

  // A key bock type for declaring submodules.  subsequent class and
  // member blocks will be assigned to this submodule.
  'submodule': function (tagname, value, target, block) {
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
    if (clazz && this.classes[clazz]) {
      this.classes[clazz].submodule = value;
    }
    return host;
  },

  // this is a way to abstract the definitions of callback arguments
  'callback': function (tagname, value, target, block) {
    target.name = value;
    target.isTypeDef = true;
  },

  // A key bock type for declaring classes, subsequent
  // member blocks will be assigned to this class
  'class': function (tagname, value, target, block) {
    var self = this;
    var fullname, host, parent;

    // set the process and attach the process on `target`
    if (target._raw.process) {
      target.process = utils.fmtProcess(target._raw.process);
    } else {
      var mod = this.modules[this.context.module];
      if (mod) {
        target.process = mod.process;
      }
    }

    if (target._raw.extends) {
      var extended = target._raw.extends;
      if (!extended) {
        console.warn('usage: `@extends <class>`, but only found `@extends`');
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
    host = this.classes[fullname] || {};
    parent = this.context.module;

    if (parent && host) {
      host.module = parent;
    }

    // set `is_enum` when the tagname is "enum"
    if (tagname === 'enum') {
      host.isEnum = true;
      host.type = 'enums';
    } else {
      host.isEnum = false;
      host.type = 'classes';
    }

    //Merge host and target in case the class was defined in a "for" tag
    //before it was defined in a "class" tag
    host = _.extend(host, target);
    this.classes[fullname] = host;
    parent = this.context.submodule;
    if (parent) {
      host.submodule = parent;
    }

    target.description = host.description;
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

  'final': function (tagname, value, target, block) {
    /*jshint sub:true */
    target['final'] = '';
  },

  // supported classitems
  'property': function (tagname, value, target, block) {
    var match, name, desc, type;

    target.itemtype = tagname;
    target.name = value;

    if (target._raw.process) {
      target.process = utils.fmtProcess(target._raw.process);
    }

    if (tagname === 'property') {
      var propM = value.match(/^\{(.+)\} ([a-zA-Z0-9_]+)\s*\-?\s*(.+)?$/);
      if (propM && propM.length === 4) {
        value = propM[2];
        target.type = propM[1];
        target.name = propM[2];
        if (propM[3]) { // this allows in front description together with one line property and type
          target.description = propM[3];
        }
      }
    }

    if (!target.type) {
      desc = implodeString(utils.safetrim(value));
      match = REGEX_TYPE.exec(desc);

      // Extract {type}
      if (match) {
        type = utils.safetrim(match[2]);
        name = utils.safetrim(match[1] + match[3]);
        target.type = type;
        target.name = name;
      }
    }
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
    if (!_.isArray(target[tagname])) {
      target[tagname] = [];
    }
    //If the item is @tag one,two
    if (value.indexOf(',') > -1) {
      value = value.split(',');
    } else {
      value = [value];
    }

    value.forEach(function (v) {
      v = utils.safetrim(v);
      target[tagname].push(v);
    });
  },
  'extension_for': 'extensionfor',
  'extensionfor': function (tagname, value, target, block) {
    var clazz = this.context.clazz;
    if (this.classes[clazz]) {
      this.classes[clazz].extension_for.push(value);
    }
  },
  'example': function (tagname, value, target, block) {
    if (value) {
      var linkMatch = value.match(/\{@link (.+?)(?:#(.+?))*\s*\}/); // update regex to include an optional `#section` part at the end
      if (linkMatch && linkMatch.length > 1) {
        var relative = utils.safetrim(linkMatch[1]);
        var examplePath = process.cwd() + '/' + relative;
        if (fs.existsSync(examplePath)) {
          value = fs.readFileSync(examplePath, 'utf8');
          if (!linkMatch[2]) {
            value = '```js\n' + value + '\n```';
          } else {
            const r = /(\/\*+\s*@section\s*(.+?)\s*\*\/)/g;
            const section = linkMatch[2];
            var parts = value.split(r).filter(function(entry) {
              if (entry === '') return false;
              return true;
            });
            var index = parts.indexOf(section) + 1;
            value = '```js\n' + parts[index].trim() + '\n```';
          }
        } else {
          value = '```Not found for the example path: ' + relative;
        }
      } else { //auto wrap value with backtick
          value = '```js\n' + value.replace(/(?:^\s*```\w*\s*[\r\n]|```\s*\n*$)/g, '') + '\n```';
      }
    }

    if (!_.isArray(target[tagname])) {
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

  // updates the current class only (doesn't create
  // a new class definition)
  'for': function (tagname, value, target, block) {
    var ns, file, mod;
    this.context.clazz = value;

    ns = ((this.classes[value]) ? this.classes[value].namespace : '');
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
