
const path = require('path');
const assert = require('assert');
const utils = require('../lib/utils.js');

describe('firedoc.utils', function () {

  describe('.escapeHTML', function () {
    it('should escape some htmls', function () {
      assert.equal('&lt;a&gt;&lt;&#x2F;a&gt;', utils.escapeHTML('<a></a>'));
      assert.equal('&amp;', utils.escapeHTML('&'));
      assert.equal('&#x60;', utils.escapeHTML('`'));
      assert.equal('&quot;', utils.escapeHTML('"'));
    });
  });

  describe('.safetrim', function () {
    it('should trim strings', function () {
      assert.equal('abc', utils.safetrim(' abc '));
    });
    it('should trim unknown object', function () {
      assert.equal('true', utils.safetrim(true));
      assert.equal('', utils.safetrim(null));
      assert.equal('', utils.safetrim(undefined));
      assert.equal('1', utils.safetrim(1));
    });
  });

  describe('.unindent', function () {
    it('should return unidented string', function () {
      assert.equal('* foobar', utils.unindent('  * foobar'));
    });
  });

  describe('.filterFileName', function () {
    it('should return filename', function () {
      var actual = utils.filterFileName('path/to/file');
      assert.equal('path_to_file', actual);
    });
  });

  describe('.getLayouts', function () {
    it('should get layouts', function () {
      var layouts = utils.getLayouts(path.join(__dirname, '../themes/default'));
      assert.ok(layouts.main);
      assert.ok(layouts.xhr);
    });
  });

  describe('.getPages', function () {
    var themedir = path.join(__dirname, '../themes/default');
    it('should get layouts', function () {
      var layouts = utils.getLayouts(themedir);
      assert.ok(layouts.main);
      assert.ok(layouts.xhr);
    });
    it('should get partials', function () {
      var partials = utils.getPartials(themedir);
      assert.ok(partials['index']);
      assert.ok(partials['enum']);
      assert.ok(partials['class']);
      assert.ok(partials['module']);
    });
  });

  describe('.prepare', function () {
    var themedir = path.join(__dirname, '../themes/default');
    it('should call prepare function', function () {
      var actual = utils.prepare([themedir], {});
      assert.ok(actual.meta);
      assert.ok(actual.layouts);
      assert.ok(actual.partials);
    });
  });

  describe('.fixType', function () {
    it('should fix types', function () {
      assert.equal('String', utils.fixType('string'));
      assert.equal('Object', utils.fixType('object'));
    });
  });

  describe('.webpath', function () {
    it('should return web(http) path from local', function () {
      assert.equal('path/to/file', utils.webpath('path\\to\\file'));
    });
  });

  describe('.localize', function () {
    it('should localize a string', function () {
      var raw = ''+
        '!#en english'+
        '!#zh 中文';
      var en = utils.localize(raw);
      var zh = utils.localize(raw, 'zh');
      assert.equal('english', utils.localize(raw));
      assert.equal('中文', utils.localize(raw, 'zh'));
    });
  });

  describe('.markdownLink', function () {
    it('should call markdownLink', function () {
      assert.equal('foobarx-10-20', utils.markdownLink('foobar(x,10,20)'));
    });
  });

});