
const _ = require('underscore');
const path = require('path');
const assert = require('assert');
const utils = require('../lib/utils');
const helpers = require('../lib/helpers');
const Firedoc = require('../lib/firedoc').Firedoc;

describe('filedoc.helpers', function () {

  describe('.renderFileTree', function () {
    it('should render 1-level file tree', function (next) {
      var src = path.join(__dirname, './targets/basic');
      var doc = new Firedoc({'path': src, 'parseOnly': true});
      doc.build(function (err, ast, options) {
        var filetree = utils.buildFileTree(_.values(ast.files));
        var html = helpers.renderFileTree(filetree);
        assert.equal(html, '<ul><li>test/<ul><li>targets/<ul><li>basic/<ul><li><a href="../files/test_targets_basic_index.js.html">index.js</a></li></ul></li></ul></li></ul></li></ul>')
        next();
      });
    });
  });

  describe('.crossLink', function () {
    it('should crossLink the link', function () {
      
    });
  });

});