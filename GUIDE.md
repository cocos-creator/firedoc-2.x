# Firedoc Syntax Guide

Firedoc is compatible with all YUIDoc tags (http://yui.github.io/yuidoc/syntax/). 
If you find some tags not working with Firedoc feel free to [submit an issue](https://github.com/fireball-x/firedoc/issues).

Firedoc is based on YUIDoc so it only process comments, not actual code.

Firedoc has the following enhanced features:

## Contents

- [Members for Module](#members-for-module)
- [Callback Function](#callback-function)
- [Multi-language Description](#multi-language-description)
- [Single-line Property/Parameter Declaration](#single-line-propertyparameter-declaration)
- [Enum](#enum)
- [Example Link to File](#example-link-to-file)
- [Detailed Properties of Object Parameter](#detailed-properties-of-object-parameter)

## Members for Module

In both JSDoc and YUIDoc, properties and methods can only exists under `@class`. Firedoc supports direct member of modules. 
You can declare members under module like this:
```js
/**
 * @module FireDoc
 */
/**
 * Prop description
 * @property test2
 * @type {String}
 */
var test2;
```

The property `test2` will be listed under `FireDoc` module page. No need to create psuedo classes just for hoding global methods and properties.

## Callback Function

Firedoc added `@callback` tag for declaring callback function signature that you can reuse in many methods.

```js
/**
 * @callback ExampleCallback
 * @param {String} html The HTML to write module view.
 * @param {Object} view The View Data.
 */
 /**
 * Generates the module files undert "out"/modules/
 * @method test2
 * @param {ExampleCallback} cb The callback to execute after it's completed
 */
 /**
 * Generates the module files undert "out"/modules/
 * @method test3
 * @param {String} id
 * @param {ExampleCallback} cb The callback to execute after it's completed
 */
```
In the above example, both method `test2` and `test3` reuses callback function `ExampleCallback` (although in real code it perhaps will be an anonymous function, we give it a name only for convenience of commenting callbacks with the same signatures) .

## Multi-language Description

Firedoc supports multi-language description for any module, class, method, property, parameter. Use language tag `!#en` or `!#zh` to mark the description in a certain language. Then use `firedoc source --zh` to generate api docs for that language.

You can use two patterns for inserting language tags:

### Multilines

```js
/**
 * !#en
 * English class description
 * !#zh
 * 中文类型描述
 * @class FLogic
 */
```

### Inline

```js
/**
 * !#en English class description !#zh 中文类型描述
 * @class FLogic
 */
```

## Single-line Property/Parameter Declaration

Same as JSDoc syntax:
```js
/**
 * @property {Vec2} position - The local position in its parent's coordinate system
 */
```     

## Enum

Use `@enum` with `@property` to document enum definitions.

```js
/**
 * Enum description
 * @enum NumberableBool
 */
var NumberableBool = {
  /**
   * @property {number} TRUE - stands for true
   */
  TRUE: 1,
  /**
   * @property {number} FALSE - stands for false
   */
  FALSE: -1,
};
```

You can write all `@property` in the same comment block as the enum declaration.

## Example Link to File

Use `@example` with `@link` to display code in a file as example.

```js
/**
* @method example
* @example {@link path/to/example.js }
*/
```

The path `path/to/example.js` is based at your execution path (or cwd). 

## Detailed Properties of Object Parameter

If you want to detail the properties of a object parameter for a method, use the following pattern:

```js
/**
 * @method star
 * @param {String} command The command to run
 * @param {Array} args List of string arguments
 * @param {Object} options
 * @param {String} options.cwd
 * @param {Object} options.env
 * @param {Array|String} options.stdio
 * @param {Array} options.customFds
 */
```
