
const _ = require('underscore');
const path = require('path');
const assert = require('assert');
const utils = require('../lib/utils');
const parser = require('../lib/docparser');
const builder = require('../lib/builder');
const Firedoc = require('../lib/firedoc').Firedoc;
const Handlebars = require('handlebars');

describe('filedoc.helpers', function () {

  var src = path.join(__dirname, './targets/class');
  var doc = new Firedoc({'path': src});
  var ast, ctx;
  var callOptions = {
    fn: function () {
      return '';
    }
  };

  before(function (next) {
    doc._processConfig();
    doc.walk(next);
  });
  before(function (next) {
    ast = parser.parse('js', doc.filemap, doc.dirmap);
    ctx = builder.compile(ast, doc.options, next);
  });

  describe('.renderFileTree', function () {
    it('should render 1-level file tree', function () {
      var filetree = utils.buildFileTree(_.values(ast.files));
      var html = ctx.helpers.renderFileTree.call(ctx, filetree);
      assert.ok(html);
    });
  });

  describe('.crossLink', function () {
    it('shoud return empty', function () {
      var ret = ctx.helpers.crossLink.call(ctx, null, callOptions);
      assert.equal(ret, 'unknown');
    });
    it('should crossLink with 2 links', function () {
      var ret = ctx.helpers.crossLink.call(ctx, 'Number|Object');
      assert.equal(ret, 'Number | Object');
    });
    it('should crossLink with 1 link', function () {
      var ret = ctx.helpers.crossLink.call(ctx, 'Array', callOptions);
      assert.equal(ret, 'Array');
    });
    it('should link natives', function () {
      ctx.options.linkNatives = true;
      var ret = ctx.helpers.crossLink.call(ctx, 'Array', callOptions);
      assert.equal(ret, '<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>');
    });
    it('should crosslink a dot class', function () {
      var ret = ctx.helpers.crossLink.call(ctx, 'Clazz.Example', callOptions);
      assert.equal(ret, '<a href="../classes/ClazzExample.html" class="crosslink">Clazz.Example</a>');
    });
    it('should crossLink class/name', function () {
      var ret = ctx.helpers.crossLink.call(ctx, 'ClazzExample/method1', callOptions);
      assert.equal(ret, '<a href="../classes/ClazzExample.html#method_method1" class="crosslink">method1</a>');
    });
    it('should crossLink property', function () {
      var ret = ctx.helpers.crossLink.call(ctx, 'ClazzExample/name:property', callOptions);
      assert.equal(ret, '<a href="../classes/ClazzExample.html#property_name" class="crosslink">name</a>');
    });
    it('should crossLink attribute', function () {
      var ret = ctx.helpers.crossLink.call(ctx, 'SecondClazz/attr1:attr', callOptions);
      assert.equal(ret, '<a href="../classes/SecondClazz.html#attr_attr1" class="crosslink">attr1</a>');
    });
    it('should crossLink event', function () {
      var ret = ctx.helpers.crossLink.call(ctx, 'ClazzExample/evt1:event', callOptions);
      assert.equal(ret, '<a href="../classes/ClazzExample.html#event_evt1" class="crosslink">evt1</a>');
    });
    it('should crossLink webbase', function () {
      // TODO(Yorkie)
    });
  });

  describe('.crossLinkRaw', function () {
    before(function () {
      ctx.options.linkNatives = true;
    });
    it('should return 2 links', function () {
      var ret = ctx.helpers.crossLinkRaw.call(ctx, 'Number|Object', callOptions);
      assert.equal(ret, 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number | https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object');
    });
  });

});