
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
    it('should check direct methods', function () {
      assert.equal('Direct method', ast.members[0].description);
      assert.equal('method', ast.members[0].itemtype);
      assert.equal('directMethod', ast.members[0].name);
      assert.equal('', ast.members[0].clazz);
      assert.equal('mod1', ast.members[0].module);
      assert.equal(true, ast.members[0].isGlobal);
      assert.deepEqual(
        { 
          description: '', 
          type: 'String' 
        },
        ast.members[0].return
      );
    });
  });

  describe('classes', function () {
    var src = path.join(__dirname, './targets/class');
    var doc = new Firedoc({'path': src});
    var ast;
    before(function (next) {
      doc._processConfig();
      doc.walk(next);
    });
    before(function () {
      ast = parser.parse('js', doc.filemap, doc.dirmap);
    });
    it('should check undefined module', function () {
      assert.ok(ast.modules.undefinedmodule);
    });
    it('should check class1', function () {
      var class1 = ast.classes.ClazzExample;
      assert.equal('ClazzExample', class1.name);
      assert.equal('undefinedmodule', class1.module);
      assert.equal(false, class1.isEnum);
      assert.equal('classes', class1.type);
      assert.equal('Class description', class1.description);
    });
    it('should check class2', function () {
      var class2 = ast.classes.SecondClazz;
      assert.equal('SecondClazz', class2.name);
      assert.equal('undefinedmodule', class2.module);
      assert.equal(false, class2.isEnum);
      assert.equal('classes', class2.type);
      assert.equal('The second class', class2.description);
    });
    it('should check enum', function () {
      var enumEx = ast.classes.EnumEx;
      assert.equal('EnumEx', enumEx.name);
      assert.equal(true, enumEx.isEnum);
      assert.equal('enums', enumEx.type);
      assert.equal('The enum description', enumEx.description);
    });
    it('should check members', function () {
      var members = ast.members;
      assert.equal('property', members[0].itemtype);
      assert.equal('ClazzExample', members[0].clazz);
      assert.equal('undefinedmodule', members[0].module);
      assert.equal('The prop 1', members[0].description);
      assert.equal('property', members[1].itemtype);
      assert.equal('ClazzExample', members[1].clazz);
      assert.equal('undefinedmodule', members[1].module);
      assert.equal('The name2', members[1].description);
      assert.equal('method1 description', members[2].description);
      assert.equal('method1', members[2].name);
      assert.deepEqual(
        [ 
          {
            name: 'name', 
            description: '', 
            type: 'String'
          }
        ],
        members[2].params
      );
      assert.deepEqual(
        {
          description: '', 
          type: 'String'
        },
        members[2].return
      );
      assert.equal('method2 description 2', members[3].description);
      assert.equal('method2_with_description', members[3].name);
      assert.deepEqual(
        [ 
          {
            name: 'name',
            description: 'The name description',
            type: 'String' 
          } 
        ],
        members[3].params
      );
      assert.deepEqual(
        { 
          description: 'The return value', 
          type: 'String' 
        },
        members[3].return
      );
    });
    it('should check inheritedMembers', function () {
      assert.deepEqual([
        [ 
          'ClazzExample',
          'SecondClazz'
        ],
        [
          'EnumEx'
        ]
      ], ast.inheritedMembers);
    });
  });

});
