
/**
 * The firedoc module
 * @module firedoc
 */

const _ = require('underscore');
const path = require('path');
const utils = require('./utils');
const debug = require('debug')('firedoc:context');
const AST = require('./ast').AST;

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
        'name': val,
        'classes': {},
        'modules': {},
        'fors': {},
        'namespaces': {},
        'code': this.ast.codes[val]
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
        if (this.ast.modules[name].tag === 'main') {
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
    if (!val) {
      return;
    } else {
      val = utils.safetrim(val);
      this._module = val;
      this._clazz = '';
    }
    this.submodule = '';
    this.namespace = '';

    var main = this.mainModule;
    if (main && main.name !== val) {
      this.mainModule = '';
    }
    var clazz = this.ast.classes[this.clazz];
    if (clazz) {
      if (clazz.module !== val) {
        if (this.ast.modules[this.module]) {
          delete this.ast.modules[clazz.module].submodules[clazz.submodules];
          delete this.ast.modules[clazz.module].classes[clazz.name];
        }
        if (clazz.submodule && this.ast.modules[clazz.submodule]) {
          delete this.ast.modules[clazz.submodule].submodules[clazz.submodule];
          delete this.ast.modules[clazz.submodule].classes[clazz.name];
        }
        clazz.module = val;
        if (this.ast.modules[val]) {
          this.ast.modules[val].submodules[clazz.submodule] = 1;
          this.ast.modules[val].classes[clazz.name] = 1;
        }
        if (clazz.submodule && this.ast.modules[clazz.submodule]) {
          this.ast.modules[clazz.submodule].module = val;
        }
      }
    }
    if (!_.has(this.ast.modules, val)) {
      this.ast.modules[val] = {
        'name': val,
        'classes': {},
        'submodules': {},
        'fors': {},
        'namespaces': {},
        'types': {}
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
    var ns, clazz;
    var name = val;
    if (!_.has(this.ast.classes, val)) {
      ns = this.namespace;
      if (ns && ns !== '' && 
        (val.indexOf(ns + '.') !== 0)) {
        name = ns + '.' + val;
      }
      clazz = {
        'name': name,
        'shortname': val,
        'members': [],
        'plugins': [],
        'pluginFor': [],
        'extensions': [],
        'types': {}
      };
      clazz.module = ParserContext.module;
      clazz.submodule = ParserContext.submodule || null;
      clazz.namespace = ns;
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
        'name': val,
        'classes': {},
        'submodules': {},
        'fors': {},
        'isSubmodule': true,
        'namespaces': {},
        'types': {}
      };
      mod.module = this.module;
      mod.namespace = this.namespace;
      this.ast.modules[val] = mod;
    }
    this._submodule = val;
  },

  /**
   * @property {Any} block
   */
  block: null,

  /**
   * @property {Any} namespace
   */
  namespace: null,

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
    this.namespace = null;
  }

};

exports.ParserContext = ParserContext;
