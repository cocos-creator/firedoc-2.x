
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
    var last = {};
    if (!val) {
      return;
    } else {
      last.module = this.ast.modules[this.module];
      last.clazz = this.ast.classes[this.clazz];
      val = utils.safetrim(val);
      this._module = val;
      this._clazz = '';
    }
    this.submodule = '';

    var main = this.mainModule;
    if (main && main.name !== val) {
      this.mainModule = '';
    }

    if (last.clazz && last.clazz.module !== val) {
      last.module.classes[last.clazz.name] = last.clazz;
      if (this.ast.modules[last.clazz.submodule]) {
        this.ast.modules[last.clazz.submodule].module = last.module.name;
      }
    }

    if (!_.has(this.ast.modules, val)) {
      this.ast.modules[val] = {
        'name': val,
        'namespace': val,
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
    // console.trace(val);
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
        'name': name,
        'shortname': val,
        'members': [],
        'plugins': [],
        'pluginFor': [],
        'extensions': [],
        'types': {}
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
        'name': val,
        'classes': {},
        'submodules': {},
        'fors': {},
        'isSubmodule': true,
        'namespaces': {},
        'types': {}
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
