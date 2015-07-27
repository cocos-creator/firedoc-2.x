
# firedoc 1.9.2

Fireball is the game engine for the future.

### `BuilderContext` Class


Defined in: [lib/builder.js:36](../files/lib/builder.js.js)

Module: [firedoc](../modules/firedoc.md)




The Builder Context

### Index

##### Properties

  - [`ast`](#property-ast) `AST` The AST object
  - [`options`](#property-options) `Option` The command options
  - [`helpers`](#property-helpers) `Object` The view helpers function
  - [`cacheView`](#property-cacheview) `Boolean` cache the views
  - [`template`](#property-template) `Object` The template
  - [`files`](#property-files) `Number` records the files
  - [`viewExtname`](#property-viewextname) `String` The ext name of current view



##### Methods

  - [`metadata`](#method-metadata) load the metadata from theme.json
  - [`addHelper`](#method-addhelper) Add helper
  - [`addHelpers`](#method-addhelpers) Add helpers
  - [`_inlineCode`](#method-_inlinecode) Ported from [Selleck](https://github.com/rgrove/selleck), this handles ```'s in fields
that are not parsed by the **Markdown** parser.
  - [`_parseCrossLink`](#method-_parsecrosslink) Parse the item to be cross linked and return an HREF linked to the item
  - [`populateClasses`](#method-populateclasses) Populate the meta data for classes
  - [`populateModules`](#method-populatemodules) Populate the meta data for modules
  - [`populateFiles`](#method-populatefiles) Populate the meta data for files
  - [`addFoundAt`](#method-addfoundat) Parses file and line number from an item object and build's an HREF
  - [`mixExternal`](#method-mixexternal) Fetches the remote data and fires the callback when it's all complete
  - [`makeDirs`](#method-makedirs) Makes the default directories needed
  - [`init`](#method-init) Set `BuilderContext` context and return
  - [`correctTheme`](#method-correcttheme) correct the theme
  - [`compile`](#method-compile) Compule the AST
  - [`render`](#method-render) Render
  - [`writeApiMeta`](#method-writeapimeta) Write api.json
  - [`NATIVES_LINKER`](#method-natives_linker) Function to link an external type uses `NATIVES` object
  - [`compile`](#method-compile) compile





### Details


#### Properties


##### ast

> The AST object

| meta | description |
|------|-------------|
| Type | <a href="../classes/AST.html" class="crosslink">AST</a> |
| Defined | [lib/builder.js:43](../files/lib_builder.js.md#l43) |



##### options

> The command options

| meta | description |
|------|-------------|
| Type | Option |
| Defined | [lib/builder.js:48](../files/lib_builder.js.md#l48) |



##### helpers

> The view helpers function

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/builder.js:53](../files/lib_builder.js.md#l53) |



##### cacheView

> cache the views

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined | [lib/builder.js:58](../files/lib_builder.js.md#l58) |



##### template

> The template

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/builder.js:63](../files/lib_builder.js.md#l63) |



##### files

> records the files

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [lib/builder.js:68](../files/lib_builder.js.md#l68) |



##### viewExtname

> The ext name of current view

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined | [lib/builder.js:73](../files/lib_builder.js.md#l73) |






<!-- Method Block -->
#### Methods


##### metadata

load the metadata from theme.json

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:80](../files/lib_builder.js.md#l80) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### addHelper

Add helper

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:110](../files/lib_builder.js.md#l110) |

###### Parameters
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The helper name
- helper <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The helper logic


##### addHelpers

Add helpers

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:122](../files/lib_builder.js.md#l122) |

###### Parameters
- helpers <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### _inlineCode

Ported from [Selleck](https://github.com/rgrove/selleck), this handles ```'s in fields
that are not parsed by the **Markdown** parser.

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:134](../files/lib_builder.js.md#l134) |
| Return 		 | HTML 

###### Parameters
- html HTML The HTML to parse


##### _parseCrossLink

Parse the item to be cross linked and return an HREF linked to the item

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:152](../files/lib_builder.js.md#l152) |

###### Parameters
- item <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item to crossLink
- raw <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Do not wrap it in HTML
- content <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> crossLink helper content


##### populateClasses

Populate the meta data for classes

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:261](../files/lib_builder.js.md#l261) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### populateModules

Populate the meta data for modules

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:285](../files/lib_builder.js.md#l285) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### populateFiles

Populate the meta data for files

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:310](../files/lib_builder.js.md#l310) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### addFoundAt

Parses file and line number from an item object and build's an HREF

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:330](../files/lib_builder.js.md#l330) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to parse


##### mixExternal

Fetches the remote data and fires the callback when it's all complete

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:341](../files/lib_builder.js.md#l341) |
| Return 		 | Promise 

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to execute when complete


##### makeDirs

Makes the default directories needed

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:414](../files/lib_builder.js.md#l414) |



##### init

Set `BuilderContext` context and return

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:430](../files/lib_builder.js.md#l430) |
| Return 		 | <a href="../classes/BuilderContext.html" class="crosslink">BuilderContext</a> 

###### Parameters
- ast <a href="../classes/AST.html" class="crosslink">AST</a> 
- options Option 


##### correctTheme

correct the theme

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:447](../files/lib_builder.js.md#l447) |



##### compile

Compule the AST

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:469](../files/lib_builder.js.md#l469) |

###### Parameters
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback


##### render

Render

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:529](../files/lib_builder.js.md#l529) |



##### writeApiMeta

Write api.json

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:556](../files/lib_builder.js.md#l556) |

###### Parameters
- locals <a href="../classes/Locals.html" class="crosslink">Locals</a> The locals


##### NATIVES_LINKER

Function to link an external type uses `NATIVES` object

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:691](../files/lib_builder.js.md#l691) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the type to link


##### compile

compile

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:706](../files/lib_builder.js.md#l706) |

###### Parameters
- ast <a href="../classes/AST.html" class="crosslink">AST</a> The `AST` object
- options Option The options
- onfinish <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> fired when compile has completed



