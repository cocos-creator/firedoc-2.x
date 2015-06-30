
# firedoc 1.8.2

Fireball is the game engine for the future.


### File: ``

```js

/**
 * This module is used to test members
 *
 * @module testmembers
 */

/**
 * common callback
 * @callback commoncall
 * @param {Error} err - The error as first argument
 * @param {Object} obj - The returned object
 */

/**
 * example method
 * @method example_optional
 * @param {Number} [x=10] The default value is 10(test)
 * @param {Object} [y=object]
 * @param {Array} [z=array]
 * @param {commoncall} callback
 * @constructor
 * @return {Number}
 * @example
 * ```
 * example
 * ```
 */

/**
 * example method 2
 * @method example_sub_params
 * @param {Object} o
 * @param {Number} o.x
 * @param {Object} [o.y=object]
 * @param {Boolean} o.y.a
 * @public
 * @return {Number}
 * @example {@link test/examples/ex0.js}
 * @example {@link test/examples/ex1.js}
 */

/**
 * const test
 * @property const_property
 * @const
 * @deprecated this is just deprecated
 */

/**
 * markdown link in method parameter description
 * @method md_link_in_method_params_desc
 * @param {Object} [webContents] - A [WebContents](https://github.com/atom/electron/blob/master/docs/api/browser-window.md#class-webcontents) object
 */

/**
 * html example
 * @method html_example
 * @example
 * ```
 * // index.html
 * <html>
 * <body>
 *   <script>
 *     require('ipc').on('foo:bar', function(message) {
 *       console.log(message);  // Prints "Hello World!"
 *     });
 *     require("look");
 *   </script>
 * </body>
 * </html>
 */


```
