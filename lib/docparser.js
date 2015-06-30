
/**
 * The firedoc module
 * @module firedoc
 */

const debug = require('debug')('firedoc:parser');
const AST = require('./ast').AST;

/**
 * parse and generate the `AST` object
 *
 * @method parse
 * @param {String} syntaxtype
 * @param {Array} files
 * @param {Array} dirs
 * @return {AST} the ast object
 */
function parse (syntaxtype, files, dirs) {
  return AST.reset().create(files, dirs, syntaxtype);
}

exports.parse = parse;
