

const _ = require('underscore');
const path = require('path');
const assert = require('assert');
const sinon = require('sinon');
const builder = require('../lib/builder');
const Firedoc = require('../lib/firedoc').Firedoc;

describe('firedoc.Firedoc', function () {

  var src = path.join(__dirname, './targets/basic');

  it('should create new Firedoc', function () {
    var doc = new Firedoc({'path': src});
    assert.deepEqual(doc.options, {
      path: src,
      quiet: false,
      writeJSON: true,
      extensions: '.js',
      excludes: '.DS_Store,.svn,CVS,.git,build_rollup_tmp,build_tmp,node_modules',
      norecurse: false,
      version: '0.1.0',
      theme: '/Users/yorkie/workspace/firebox/firedoc/themes/default',
      dest: '/Users/yorkie/workspace/firebox/firedoc/out',
      syntaxtype: 'js'
    });
  });

  it('should create new Firedoc without the keyword new', function () {
    var doc = Firedoc({'path': src});
    assert.deepEqual(doc.options, {
      path: src,
      quiet: false,
      writeJSON: true,
      extensions: '.js',
      excludes: '.DS_Store,.svn,CVS,.git,build_rollup_tmp,build_tmp,node_modules',
      norecurse: false,
      version: '0.1.0',
      theme: '/Users/yorkie/workspace/firebox/firedoc/themes/default',
      dest: '/Users/yorkie/workspace/firebox/firedoc/out',
      syntaxtype: 'js'
    });
  });

  it('should call build', function (next) {
    var stub = sinon.stub(builder, 'compile');
    var doc = Firedoc({'path': src});
    stub.callsArg(2);
    doc.build(function () {
      var arg = stub.args[0];
      var ast = arg[0];
      var options = arg[1];
      assert.deepEqual(ast, require('../lib/ast').AST);
      assert.deepEqual(options.path, src);
      assert.deepEqual(options.excludes, [
        '.git',
        '.svn',
        'CVS',
        'build_rollup_tmp',
        'build_tmp',
        'node_modules'
      ]);
      stub.restore();
      next();
    });
  });

  it('parse only and lint', function (next) {
    var doc = Firedoc({
      'path': src,
      'parseOnly': true
    });
    doc.build(function (err, ast, options) {
      assert.deepEqual(ast, require('../lib/ast').AST);
      assert.deepEqual(options.path, src);
      next();
    });
  });

});