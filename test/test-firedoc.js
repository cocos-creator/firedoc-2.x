

const _ = require('underscore');
const path = require('path');
const assert = require('assert');
const sinon = require('sinon');
const builder = require('../lib/builder');
const Firedoc = require('../lib/firedoc').Firedoc;

describe('firedoc.Firedoc', function () {

  var src = path.join(__dirname, './targets/basic');

  it('should create new Firedoc', function () {
    var doc = new Firedoc({'paths': [src]});
    assert.deepEqual(doc.options.paths, [src]);
    assert.equal(doc.options.extensions, '.js');
    assert.equal(doc.options.cwd, path.join(__dirname, '..'));
    assert.equal(doc.options.dest, path.join(__dirname, '../out'));
    assert.equal(doc.options.theme, path.join(__dirname, '../themes/default'));
    assert.equal(doc.options.syntaxtype, 'js');
    assert.ok(doc.options.project);
    assert.ok(doc.options.excludes);
  });

  it('should create new Firedoc without the keyword new', function () {
    var doc = Firedoc({'paths': [src]});
    assert.deepEqual(doc.options.paths, [src]);
    assert.equal(doc.options.extensions, '.js');
    assert.equal(doc.options.cwd, path.join(__dirname, '..'));
    assert.equal(doc.options.dest, path.join(__dirname, '../out'));
    assert.equal(doc.options.theme, path.join(__dirname, '../themes/default'));
    assert.equal(doc.options.syntaxtype, 'js');
    assert.ok(doc.options.project);
    assert.ok(doc.options.excludes);
  });

  it('should call build', function (next) {
    var stub = sinon.stub(builder, 'compile');
    var doc = Firedoc({'paths': [src]});
    stub.callsArg(2);
    doc.build(function () {
      var arg = stub.args[0];
      var ast = arg[0];
      var options = arg[1];
      assert.deepEqual(ast, require('../lib/ast').AST);
      assert.deepEqual(options.paths, [src]);
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

  it('parse only', function (next) {
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

  it('lint', function (next) {
    var doc = Firedoc({
      'path': path.join(__dirname, './targets/warnings'),
      'lint': true
    });
    doc.build(function (err) {
      assert.ok(err.length);
      next();
    });
  });

});