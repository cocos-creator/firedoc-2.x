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

  Handlebars.registerHelper('equal', function(lvalue, rvalue, options) {
    if (arguments.length < 3)
        throw new Error("Handlebars Helper equal needs 2 parameters");
    if( lvalue!=rvalue ) {
        return options.inverse(this);
    } else {
        return options.fn(this);
    }
  });

  Handlebars.registerHelper('is_not', function(lvalue, rvalue, options) {
    if (arguments.length < 3)
        throw new Error("Handlebars Helper equal needs 2 parameters");
    if( lvalue==rvalue ) {
        return options.inverse(this);
    } else {
        return options.fn(this);
    }
  });

// no need, but keep for helper template
  // Handlebars.registerHelper('is_in', function(name, collection, options) {
  //   if (arguments.length < 2)
  //       throw new Error("Handlebars Helper is_in needs 2 parameters");
  //   for (var i = 0; i < collection.length; ++i) {
  //       if (collection[i].name === name) return options.fn(this);
  //   }
  //   return options.inverse(this);
  // });

  // Handlebars.registerHelper('fromClass', function(name, collection) {
  //   if (arguments.length < 2)
  //       throw new Error("Handlebars Helper is_in needs 2 parameters");
  //   for (var i = 0; i < collection.length; ++i) {
  //       if (collection[i].name === name) {
  //           return collection[i].clazz;
  //       }
  //   }
  //   return '';
  // });
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
