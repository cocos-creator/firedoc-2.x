
/**
 * The helpers module
 *
 * @module helpers
 * @main helpers
 */

const _ = require('underscore');

/**
 * Build file tree
 * @method buildFileTree
 */
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
    });
    str = p.join(' | ');
  } else {
    str = this._parseCrossLink.call(this, item, true);
  }
  return str;
};
