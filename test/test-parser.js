
const _ = require('underscore');
const path = require('path');
const assert = require('assert');
const parser = require('../lib/docparser');
const Firedoc = require('../lib/firedoc').Firedoc;

describe('firedoc.parser', function () {

  describe('basic', function () {

    var src = path.join(__dirname, './targets/basic');
    var doc = new Firedoc({'path': src});
    var ast;

    before(function (next) {
      doc._processConfig();
      doc.walk(next);
    });

    before(function () {
      ast = parser.parse('js', doc.filemap, doc.dirmap);
    });

    it('should check project', function () {
      // TODO(Yorkie): check project
      assert.deepEqual(ast.project, {});
      assert.equal('js', ast.syntaxType);
    });
    it('should check files', function () {
      _.each(ast.files, function (file, name) {
        assert.equal('test/targets/basic/index.js', name);
        assert.equal('test/targets/basic/index.js', file.name);
        assert.ok(file.code);
      });
    });
    it('should check modules', function () {
      _.each(ast.modules, function (mod, name) {
        assert.equal('exampleModule', name);
        assert.equal('exampleModule', mod.name);
        assert.equal('module', mod.tag);
        assert.equal('test/targets/basic/index.js', mod.file);
        assert.equal(2, mod.line);
        assert.equal('modules', mod.type);
      });
    });
    it('should check classes', function () {
      _.each(ast.classes, function (clazz, name) {
        assert.equal('ExampleClass', name);
        assert.equal('ExampleClass', clazz.name);
        assert.equal('test/targets/basic/index.js', clazz.file);
        assert.equal(2, clazz.line);
        assert.equal('classes', clazz.type);
      });
    });
    it('should check members', function () {
      _.each(ast.members, function (member) {
        assert.equal('test/targets/basic/index.js', member.file);
        assert.equal(9, member.line);
        assert.equal('method', member.itemtype);
        assert.equal('method1', member.name);
        assert.equal('ExampleClass', member.clazz);
        assert.equal('exampleModule', member.module);
        assert.equal(false, member.isGlobal);
        assert.deepEqual([
          { 
            name: 'num', 
            description: 'The Number', 
            type: 'Number' 
          }
        ], member.params);
      });
    });
    it('should check inherited members', function () {
      assert.deepEqual([], ast.inheritedMembers);
    });
  });

  describe('modules', function () {
    var src = path.join(__dirname, './targets/module');
    var doc = new Firedoc({'path': src});
    var ast;

    before(function (next) {
      doc._processConfig();
      doc.walk(next);
    });

    before(function () {
      ast = parser.parse('js', doc.filemap, doc.dirmap);
    });

    var submodule1, submodule2;
    it('should check files and codes', function () {
      assert.equal(4, _.keys(ast.files).length);
      assert.equal(4, _.keys(ast.codes).length);
    });
    it('should check mod1', function () {
      var mod1 = ast.modules.mod1;
      assert.equal('mod1', mod1.name);
      assert.equal('mod1', mod1.mainName);
      assert.equal('main', mod1.tag);
      assert.equal('main', mod1.itemtype);
      assert.equal('Module Description 1', mod1.description);
      assert.ok(mod1.submodules.submod1);
      assert.ok(mod1.submodules.submod2);
      submodule1 = mod1.submodules.submod1;
      submodule2 = mod1.submodules.submod2;
    });
    it('should check mod2', function () {
      var mod2 = ast.modules.mod2;
      assert.equal('mod2', mod2.name);
      assert.equal('mod2', mod2.mainName);
      assert.equal('main', mod2.tag);
      assert.equal('main', mod2.itemtype);
      assert.equal('Module Description 2', mod2.description);
    });
    it('should check submodules', function () {
      assert.deepEqual(submodule1, ast.modules.submod1);
      assert.deepEqual(submodule2, ast.modules.submod2);
    });
  });


});
