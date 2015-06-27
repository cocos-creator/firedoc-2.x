
const assert = require('assert');
const DocView = require('../lib/docview').DocView;

describe('firedoc.DocView', function () {

  it('should construct', function () {
    var data = {foo: 'bar'};
    var view = new DocView(data, 'main');
    assert.equal('main', view.templateName);
    assert.equal('.', view.cwd);
    assert.equal('assets', view.assets);
    assert.equal('bar', view.foo);
    assert.ok(view.htmlTitle);
    assert.ok(view.title);
  });

  it('shoud get html title', function () {
    var data = {
      'name': 'name1',
      'project': {
        'name': 'project a'
      }
    };
    var view = new DocView(data, 'main');
    var actual = view.htmlTitle();
    assert.equal('name1 - project a', actual);
    actual = view.title();
    assert.equal('project a: name1', actual);
  });

  it('shoud get html title without project', function () {
    var data = {
      'name': 'name1'
    };
    var view = new DocView(data, 'main');
    var actual = view.htmlTitle();
    var expect = 'name1';
    assert.equal(expect, actual);
    actual = view.title();
    assert.equal(expect, actual);
  });

  it('shoud get html title without name', function () {
    var data = {
      'project': {
        'name': 'project a'
      }
    };
    var view = new DocView(data, 'main');
    var actual = view.htmlTitle();
    var expect = 'project a';
    assert.equal(expect, actual);
    actual = view.title();
    assert.equal(expect, actual);
  });

});