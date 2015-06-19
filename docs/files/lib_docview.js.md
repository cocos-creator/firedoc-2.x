
# firedoc 1.5.9

Fireball is the game engine for the future.


### File: `lib/docview.js`

```js
/* global YUI */
/**
 * Copyright (c) 2011, Yahoo! Inc. All rights reserved.
 * Code licensed under the BSD License:
 * https://github.com/yui/yuidoc/blob/master/LICENSE
 */
YUI.add('docview', function (Y) {

  /*
   * Selleck
   * Copyright (c) 2011 Yahoo! Inc.
   * Licensed under the BSD License.
  */

  var path = require('path');

  /**
   * View class borrowed from [Selleck](https://github.com/rgrove/selleck)  
   * The view class is a **`handlebars`** template helper.
   * @class DocView
   * @constructor
   * @param {Object} data Meta data to use in this template
   * @param {String} templateName The name of the template file to render.
   **/
  function DocView(data, templateName, cwd) {
    this.templateName = templateName;
    this.cwd = path.join(cwd || '');
    this.assets = path.join(cwd || '', 'assets');
    Y.mix(this, data);

    // register helpers
    var self = this;
    Y.Handlebars.registerHelper('relink', function (item, options) {
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

  Y.DocView = DocView;
});

```
