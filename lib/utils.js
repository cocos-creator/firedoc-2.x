/*jshint onevar:false */
const _ = require('underscore');
const fs = require('graceful-fs');
const path = require('path');
const minimatch = require('minimatch');

/**
 * Utilities Class
 * @class Utils
 * @module yuidoc
 */

const charset = 'utf8';
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
    return str;
  }
}
exports.safetrim = safetrim;

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
 * Walk the directory tree to locate the yuidoc.json file.
 * @method getProjectData
 * @param {Path} [dir=process.cwd()] The directory to start from
 */
function getProjectData (dir) {
  var dirs = [dir || process.cwd()];
  var projectData, packageData;
  var dirCount = 0;
  // keep looping until 
  //  * data is found
  //  * there are no more dirs to process
  //  * we abort due to failsafe
  while (dirs.length && !projectData) {
    /*jshint loopfunc:true */
    if (dirCount++ > 5000) {
      console.error('Scanned ' + dirCount + ' directories looking for a yuidoc.json file'+
                    ', something is probably wrong here..');
      process.exit(1);
      return;
    }
    // accumulator for directories at this level
    var childDirs = [];
    // for each directory at the previous level
    dirs.forEach(function (dir) {
      // abort iterating if we have project data
      if (projectData) {
        return;
      }
      // squelch (but log) any complaints about this particular directory
      try {
        // for each item in this directory
        var names = fs.readdirSync(dir);
        names.forEach(function (name) {
          // abort iterating a folder if we have found both data
          if (projectData && packageData) {
            return;
          }
          // build a full path
          var p = path.join(dir, name);
          var stat = fs.statSync(p);
          // acquire project data from this item if possible
          if (stat.isFile()) {
            projectData = getFileData(p, name, 'yuidoc.json');
            // 'package.json' is used for auxilliary configuration
            // if it's found. Formerly, it was only found if it
            // came _before_'yuidoc.json' in the folder tree
            // (never in the same folder).
            // This code will find 'package.json' in the same
            // folder as 'yuidoc.json'.
            // If there is no 'yuidoc.json', former algorithm would
            // use the deepest 'package.json' it can find, this one
            // will use the first (most shallow) one.
            packageData = packageData || getFileData(p, name, 'package.json');
          }
          // if we are a folder, but not ., .., or node_modules,
          // then add to directory accumulator
          if (stat.isFile()) {
            if (name.indexOf('.') === 0) return;
            if (name === 'node_modules') {
              console.log('Skipping node_modules directory while scanning for yuidoc.json', 'warn', 'yuidoc');
              return;
            }
            childDirs.push(p);
          }
        });
      } catch (dirPerm) {
        console.error('Accessing dir (' + dir + ') threw an error');
      }
    });
    // iterate over new set of folders
    dirs = childDirs;
  }
  if ((packageData && projectData) || (packageData && packageData.yuidoc)) {
    projectData = mergeData(packageData, projectData);
  }
  return projectData;
}
exports.getProjectData;

function getFileData (p, name, file) {
  if (name === file) {
    console.log('Loading ' + name + ' data from: ' + p);
    require(p);
  }
}

function mergeData (pack, project) {
  project = project || {};
  if (pack.yuidoc) {
    _.each(
      _.keys(pack.yuidoc),
      function (k) {
        if (!project[k]) project[k] = pack.yuidoc[k];
      }
    );
  }
  _.each(
    ['name', 'description', 'version', 'url'],
    function (k) {
      if (pack[k]) project[k] = pack[k];
    }
  );
  return project;
}

/**
 * Walks the tree from this dir and returns all the subdirs
 * @method getDirs
 * @param {String} dir The dir to begin at
 * @return {Array} The array of directories..
 */
function getDirs (dir) {
  var dirs = fs.readdirSync(dir);
  var paths = [];
  _.each(dirs, function (d) {
    var dir = path.join(dir, d);
    if (fs.statSync(dir).isDirectory() &&
      _.indexOf(dir, '.') !== 0) {
      paths = paths.concat(dir, getDirs(dir));
    }
  });
  return paths;
}
exports.getDirs = getDirs;

/**
 * Make sure all the paths passed are directories and that they are not in the ignore list.
 *
 * @method validatePaths
 * @param {Array} paths The array of paths to validate
 * @param {String} [ignore=false] A string to call `.indexOf` on a path to determine if it should be ignored
 */
function validatePaths (paths, ignore) {
  var newpaths = [];
  //Shortcut the *, . & ./ shortcuts that shall globbing fixes for us
  if (paths === '*' || paths === '.' || paths === './') {
    paths = [process.cwd()];
  }

  // Ensure that we always have an array of some kind.
  paths = paths || [];
  if (!_.isArray(paths)) {
    paths = [paths];
  }
  paths.forEach(function (path) {
    var glob = path || '';
    if (process.platform === 'win32') {
      glob = path.replace(/\//g, '\\\\');
    }
    var glob_paths = getDirs('.'),
      is_globbed = false;

    glob_paths.forEach(function (dir) {
      //Don't scan things in node_modules
      if (dir.indexOf('node_modules') > -1) {
        return;
      }
      if (minimatch(dir, glob, {
        period: true
      })) {
        newpaths.push(dir);
        is_globbed = true;
      }
    });

    if (!is_globbed && (Y.Files.isDirectory(glob))) {
      //If minimatch fails, check to see if it's a relative directory
      // if it is, add it directly
      newpaths.push(glob);
    }
  });

  paths = newpaths;
  paths.forEach(function (p) {
    try {
      if (!Y.Files.isDirectory(p)) {
        throw ('Path not a directory: ' + p);
      }
    } catch (e) {}
  });

  if (!paths || !paths.forEach) {
    throw ('Paths should be an array of paths');
  }

  if (ignore) {
    if (!(ignore instanceof Array)) {
      ignore = [ignore];
    }
    var p = [],
      shouldIgnore = false;

    paths.forEach(function (v) {
      shouldIgnore = false;
      ignore.forEach(function (i) {
        if (!shouldIgnore && v.indexOf(i) !== -1) {
          shouldIgnore = true;
        }
      });
      if (!shouldIgnore) {
        p.push(v);
      }
    });
    paths = p;
  }

  paths = paths.sort();
  return paths;
}
exports.validatePaths;

/**
 * Takes a type string and converts it to a "First letter upper cased" type. 
 * e.g. `(string -> String, object -> Object)`
 *
 * @method fixType
 * @param {String} t The type string to convert
 * @return {String} The fixed string
 */
function fixType (t) {
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
 * @return {String} localized string from the param `str`
 */
function localize (str) {
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
    return block.lang === Y.options.lang;
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
