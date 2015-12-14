
/**
 * The helpers module
 *
 * @module helpers
 * @main helpers
 */

const _ = require('underscore');
const Handlebars = require('handlebars');

/**
 * Build file tree
 * @method renderFileTree
 */
// TODO(Yorkie): remove the buildFileTree
exports.buildFileTree = function onbuildFileTree (items) {
  var out = '<ul>';
  _.each(items, function (i, k) {
    out += '<li>';
    if (_.isObject(i)) {
      if (!i.path) {
        out += k + '/' + onbuildFileTree(i);
      } else {
        out += '<a href="../files/' + i.name + '.html">' + k + '</a>';
      }
    }
    out += '</li>';
  });
  out += '</ul>';
  return out;
};
exports.renderFileTree = exports.buildFileTree;

/**
 * Create cross link
 * @method crossLink
 */
exports.crossLink = function oncrossLink (item, options) {
  var str = '';
  if (!item) {
    item = '';
  }
  if (item.indexOf('|') > 0) {
    var parts = item.split('|'),
      p = [];
    _.each(parts, function (i) {
      p.push(this._parseCrossLink.call(this, i));
    }, this);
    str = p.join(' | ');
  } else {
    var ctx = '';
    if (typeof options.fn === 'function') {
      ctx = options.fn(this);
    }
    str = this._parseCrossLink.call(this, item, false, ctx);
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
    if (content === "") {
      content = item;
    }
    str = '<a href="../modules/' + item.replace(/\//g, '_') +
          '.html">' + content + '</a>';
  }
  return str;
};

/**
 * Create cross link to raw
 * @method crossLinkRaw
 */
exports.crossLinkRaw = function oncrossLinkRaw (item, options) {
  var str = '';
  if (!item) {
    item = '';
  }
  if (item.indexOf('|') > 0) {
    var parts = item.split('|'),
      p = [];
    _.each(parts, function (i) {
      p.push(this._parseCrossLink.call(this, i, true));
    }, this);
    str = p.join(' | ');
  } else {
    str = this._parseCrossLink.call(this, item, true);
  }
  return str;
};

exports.shouldShowInherit = function shouldShowInherit (item, options) {
  var classObj = this.ast.classes[item];
  if (classObj && !classObj.access) {
    classObj.access = 'public';
  }
  if (classObj && classObj.access !== 'private') {
    // console.log('show inherit for ' + item);
    return options.fn(this);
  } else {
    // console.log('hide inherit for ' + item);
    return options.inverse(this);
  }
};
