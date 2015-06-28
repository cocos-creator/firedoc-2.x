/*jshint onevar:false */

/**
 * Utilities modules
 * @module utils
 */

const _ = require('underscore');
const fs = require('graceful-fs');
const path = require('path');
const minimatch = require('minimatch');
const HTML_CHARS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;',
  '`': '&#x60;'
};

/**
 * Escapes HTML characters in _html_.
 *
 * @method escapeHTML
 * @param {String} html String to escape.
 * @return {String} Escaped string.
 **/
function escapeHTML (html) {
  return html.replace(/[&<>"'\/`]/g, function (m) {
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
  if (str && _.isFunction(str.trim)) {
    return str.trim();
  } else {
    return String(str || '').trim();
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
    contents = contents.replace(new RegExp('^' + indent[1], 'gm'), '');
  }
  return contents;
}
exports.unindent = unindent;

/**
 * Normalizes a file path to a writable filename:
 *
 *    var path = 'lib/file.js';
 *    returns 'lib_file.js';
 *
 * @method filterFileName
 * @param {String} f The filename to normalize
 * @return {String} The filtered file path
 */
function filterFileName (f) {
  return (f || '').replace(/[\/\\]/g, '_');
}
exports.filterFileName = filterFileName;

/**
 * Parses file and line number from an item object and build's an HREF
 * @method getFoundAt
 * @param {Object} obj - The item to parse
 * @param {Object} options - The options
 * @param {Boolean} options.markdown - If in markdown mode
 * @param {Boolean} options.nocode - If no code
 * @return {String} The parsed HREF
 */
function getFoundAt (obj, options) {
  var ext = options.markdown ? '.md' : '.html';
  var ret = '';
  if (obj.file && obj.line && !options.nocode) {
    if (obj.path) {
      ret = obj.path + '#l' + obj.line;
    } else {
      ret = '../files/' + filterFileName(obj.file) + ext + '#l' + obj.line;
    }
  }
  return ret;
}
exports.getFoundAt = getFoundAt;

/**
 * Like `getPages()`, but returns only the files under the `layout/` subdirectory
 * of the specified _dir_.
 *
 * @method getLayouts
 * @param {String} dir Directory path.
 * @return {Object} Mapping of layout names to layout content.
 **/
function getLayouts (dir) {
  if (!_.isString(dir)) return {};
  return getPages(path.join(dir, 'layouts'));
}
exports.getLayouts = getLayouts;

/**
 * Loads and returns the content of the specified page file.
 *
 * @method getPage
 * @param {String} p - Path to a single `.handlebars` page.
 * @return {String|null} Page content, or `null` if not found.
 **/
function getPage (p) {
  var stat = fs.statSync(p);
  if (stat.isFile()) {
    return fs.readFileSync(p, 'utf8');
  } else {
    return null;
  }
}
exports.getPage = getPage;

/**
 * Loads pages (files with a `.handlebars` extension) in the specified directory and
 * returns an object containing a mapping of page names (the part of the filename)
 * preceding the `.handlebars` extension) to page content.
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
      var ext = useMarkdown ? '.mdt' : '.handlebars';
      if (path.extname(name) === ext && fs.statSync(p).isFile()) {
        var name = path.basename(name, ext);
        var text = fs.readFileSync(p, 'utf8');
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
 * Like `getPages()`, but returns only the files under the `partial/` subdirectory
 * of the specified _dir_.
 *
 * @method getPartials
 * @param {String} dir Directory path.
 * @return {Object} Mapping of partial names to partial content.
 **/
function getPartials (dir) {
  if (!_.isString(dir)) return {};
  return getPages(path.join(dir, 'partials'));
}
exports.getPartials = getPartials;

/**
 * Mix/merge/munge data into the template.
 *
 * @method prepare
 * @param {String} inDir The starting directory
 * @param {Object} options The `options` for the meta data.
 * @param {callback} callback The callback to excecute when complete
 * @param {Error} callback.err
 * @param {Object} callback.options Merged options.
 **/
var defaults = {
  'meta': {
    'project': {},
    'component': {}
  },
  'pages': {},
  'layouts': {},
  'partials': {},
  'viewClass': require('./docview').DocView
};
function prepare (inDirs, options, callback) {
  var layouts, partials, type = 'project';
  if (options && options.skipLoad) {
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
    options = _.extend(defaults, {
      'layouts': layouts,
      'partials': partials,
    });
  }

  // Set a default asset path if one isn't specified in the metadata.
  if (!options.meta.project.assets) {
    options.meta.project.assets = options.component ? '../assets' : 'assets';
  }
  if (!options.meta.component.assets && options.component) {
    options.meta.component.assets = '../assets/' + options.meta.name;
  }
  if (_.isUndefined(options.meta.layout)) {
    options.meta.layout = options.layouts[type] ? type : 'main';
  }
  if (_.isFunction(callback)) {
    callback(null, options);
  }
  return options;
}
exports.prepare = prepare;

/**
 * Takes a type string and converts it to a "First letter upper cased" type. 
 * e.g. `(string -> String, object -> Object)`
 *
 * @method fixType
 * @param {String} t The type string to convert
 * @return {String} The fixed string
 */
function fixType (t) {
  t = safetrim(t);
  if (t && t.indexOf('.') === -1) {
    t = t.replace(/{/g, '').replace(/}/g, '');
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
 * Courtesy of [Mojito's utils](https://github.com/yahoo/mojito/)
 *
 * @method webpath
 * @param {Array|String*} url the list of parts to be joined and normalized
 * @return {String} The joined and normalized url
 **/
function webpath (url) {
  var args = [].concat.apply([], arguments),
    parts = path.join.apply(path, args).split(/[\\\/]/);
  return parts.join('/');
}
exports.webpath = webpath;

/**
 * Localize the string via current Y.options
 *
 * @method localize
 * @param str {String} the original string that you want to input
 * @param lang {String} the language
 * @return {String} localized string from the param `str`
 */
function localize (str, lang) {
  var splitedStrArr = (str || '').split('!#');
  var supportedLang = ['en', 'zh'];
  return splitedStrArr.map(function(block) {
    var langFlag = block.slice(0, 2);
    var selectedLang = supportedLang.indexOf(langFlag);
    if (selectedLang === -1) {
      // default language is 'en'
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
    return block.lang === (lang || 'en');
  }).map(function(block) {
    return block.raw.trim();
  }).join('\n');
}
exports.localize = localize;

/**
 * convert string to markdown link
 *
 * @method markdownLink
 * @param {String} str - The original string that you want to input
 * @return {String} marked string from the param `str`
 */
function markdownLink (str) {
  return str
    .replace(/[:,]/g, '-')
    .replace(/[\s\(\)\[\]=]/g, '')
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
    var p = v.name.split('/');
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
 * filename and line number: `/file/name.js:123`
 * @method stringlog
 * @private
 * @param {Object} data The data block from the parser
 * @return {String} The formatted string.
 * @for DocParser
 */
function stringlog(data) {
  var line, file;
  if (data.file && data.line) {
    file = data.file;
    line = data.line;
  } else {
    data.forEach(function (d) {
      if (d.tag === 'file') {
        file = d.value;
      }
      if (d.tag === 'line') {
        line = d.value;
      }
    });
  }
  return ' ' + file + ':' + line;
}
exports.stringlog = stringlog;

