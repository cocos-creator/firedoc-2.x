/* global YUI */

'use strict';

var _ = require('underscore');
var path = require('path');
var Handlebars = require('handlebars');

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
    return path.join(self.cwd, item);
  });
}

DocView.prototype = {
  /**
   * **Mustache** `lambda` method for setting the HTML title
   * @method htmlTitle
   */
  htmlTitle: function () {
    var name = this.displayName || this.name,
      title = name;

    if (title) {
      if (this.projectName) {
        title += ' - ' + this.projectName;
      }
    } else {
      title = this.projectName;
    }
    return title;
  },

  /**
   * **Mustache** `lambda` method for setting the title
   * @method title
   */
  title: function () {
    var name = this.displayName || this.name,
      title = this.projectName;

    if (name) {
      title += ': ' + name;
    }
    return title;
  }

};

exports.DocView = DocView;
