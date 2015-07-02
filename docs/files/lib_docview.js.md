
# firedoc 1.8.7

Fireball is the game engine for the future.


### File: ``

```js
/* global YUI */

/**
 * The firedoc module
 * @module firedoc
 */

const _ = require('underscore');
const path = require('path');
const Handlebars = require('handlebars');

/**
 * View class borrowed from [Selleck](https://github.com/rgrove/selleck)  
 * The view class is a **`handlebars`** template helper.
 *
 * @class DocView
 * @constructor
 * @param {Object} data Meta data to use in this template
 * @param {String} templateName The name of the template file to render.
 **/
function DocView (data, templateName, cwd) {
  this.templateName = templateName;
  this.cwd = path.join(cwd || '');
  this.assets = path.join(cwd || '', 'assets');
  _.extend(this, data);

  // register helpers
  var self = this;
  Handlebars.registerHelper('relink', function (item, options) {
    item = item || '';
    if (self.project.local) {
      return '//' + self.project.root + '/' + item;
    } else {
      return self.project.baseurl + '/' + item;
    }
  });
}

DocView.prototype = {
  /**
   * **Mustache** `lambda` method for setting the HTML title
   * @method htmlTitle
   */
  htmlTitle: function () {
    var name = this.name;
    var title = name;
    try {
      if (title) {
        if (this.project.name) {
          title += ' - ' + this.project.name;
        }
      } else {
        title = this.project.name;
      }
    } catch (e) {}
    return title;
  },

  /**
   * **Mustache** `lambda` method for setting the title
   * @method title
   */
  title: function () {
    var name = this.name;
    var title = name;
    try {
      title = this.project.name;
      if (name) {
        title += ': ' + name;
      }
    } catch (e) {}
    return title;
  }

};

exports.DocView = DocView;

```
