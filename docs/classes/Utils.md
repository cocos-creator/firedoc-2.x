
# firedoc 1.5.9

Fireball is the game engine for the future.

### `Utils` Class


Defined in: [lib/utils.js:11](../files/lib/utils.js.js)

Module: [yuidoc](../modules/yuidoc.md)




Utilities Class

### Index



##### Methods

  - [`escapeHTML`](#method-escapehtml) Escapes HTML characters in _html_.
  - [`unindent`](#method-unindent) Normalizes the initial indentation of the given _content_ so that the first line
is unindented, and all other lines are unindented to the same degree as the
first line. So if the first line has four spaces at the beginning, then all
lines will be unindented four spaces.
  - [`getLayouts`](#method-getlayouts) Like `getPages()`, but returns only the files under the `layout/` subdirectory
of the specified _dir_.
  - [`getPage`](#method-getpage) Loads and returns the content of the specified page file.
  - [`getPages`](#method-getpages) Loads pages (files with a `.handlebars` extension) in the specified directory and
returns an object containing a mapping of page names (the part of the filename)
preceding the `.handlebars` extension) to page content.
  - [`getPartials`](#method-getpartials) Like `getPages()`, but returns only the files under the `partial/` subdirectory
of the specified _dir_.
  - [`prepare`](#method-prepare) Mix/merge/munge data into the template.
  - [`getProjectData`](#method-getprojectdata) Walk the directory tree to locate the yuidoc.json file.
  - [`getDirs`](#method-getdirs) Walks the tree from this dir and returns all the subdirs
  - [`validatePaths`](#method-validatepaths) Make sure all the paths passed are directories and that they are not in the ignore list.
  - [`fixType`](#method-fixtype) Takes a type string and converts it to a "First letter upper cased" type. e.g. `(string -> String, object -> Object)`
  - [`webpath`](#method-webpath) Produces a normalized web path by joining all the parts and normalizing the
filesystem-like path into web compatible url.
Supports relative and absolute paths.
Courtesy of [Mojito's utils](https://github.com/yahoo/mojito/)
  - [`localize`](#method-localize) Localize the string via current Y.options
  - [`markdownLink`](#method-markdownlink) convert string to markdown link





### Details




<!-- Method Block -->
#### Methods


##### escapeHTML

Escapes HTML characters in _html_.

| meta | description |
|------|-------------|
| Defined | [lib/utils.js:31](../files/lib_utils.js.md#l31) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> String to escape.


##### unindent

Normalizes the initial indentation of the given _content_ so that the first line
is unindented, and all other lines are unindented to the same degree as the
first line. So if the first line has four spaces at the beginning, then all
lines will be unindented four spaces.

| meta | description |
|------|-------------|
| Defined | [lib/utils.js:44](../files/lib_utils.js.md#l44) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- content <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Text to unindent.


##### getLayouts

Like `getPages()`, but returns only the files under the `layout/` subdirectory
of the specified _dir_.

| meta | description |
|------|-------------|
| Defined | [lib/utils.js:63](../files/lib_utils.js.md#l63) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Directory path.


##### getPage

Loads and returns the content of the specified page file.

| meta | description |
|------|-------------|
| Defined | [lib/utils.js:76](../files/lib_utils.js.md#l76) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> | null 

###### Parameters
- pagePath <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Path to a single `.handlebars` page.


##### getPages

Loads pages (files with a `.handlebars` extension) in the specified directory and
returns an object containing a mapping of page names (the part of the filename)
preceding the `.handlebars` extension) to page content.

| meta | description |
|------|-------------|
| Defined | [lib/utils.js:91](../files/lib_utils.js.md#l91) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Directory path.


##### getPartials

Like `getPages()`, but returns only the files under the `partial/` subdirectory
of the specified _dir_.

| meta | description |
|------|-------------|
| Defined | [lib/utils.js:125](../files/lib_utils.js.md#l125) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Directory path.


##### prepare

Mix/merge/munge data into the template.

| meta | description |
|------|-------------|
| Defined | [lib/utils.js:139](../files/lib_utils.js.md#l139) |

###### Parameters
- inDir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The starting directory
- options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The `options` for the meta data.
- callback Callback The callback to excecute when complete
	- err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> 
	- options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Merged options.


##### getProjectData

Walk the directory tree to locate the yuidoc.json file.

| meta | description |
|------|-------------|
| Defined | [lib/utils.js:227](../files/lib_utils.js.md#l227) |

###### Parameters
- dir Path The directory to start from


##### getDirs

Walks the tree from this dir and returns all the subdirs

| meta | description |
|------|-------------|
| Defined | [lib/utils.js:341](../files/lib_utils.js.md#l341) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The dir to begin at


##### validatePaths

Make sure all the paths passed are directories and that they are not in the ignore list.

| meta | description |
|------|-------------|
| Defined | [lib/utils.js:367](../files/lib_utils.js.md#l367) |

###### Parameters
- paths <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The array of paths to validate
- ignore <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string to call `.indexOf` on a path to determine if it should be ignored


##### fixType

Takes a type string and converts it to a "First letter upper cased" type. e.g. `(string -> String, object -> Object)`

| meta | description |
|------|-------------|
| Defined | [lib/utils.js:455](../files/lib_utils.js.md#l455) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- t <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type string to convert


##### webpath

Produces a normalized web path by joining all the parts and normalizing the
filesystem-like path into web compatible url.
Supports relative and absolute paths.
Courtesy of [Mojito's utils](https://github.com/yahoo/mojito/)

| meta | description |
|------|-------------|
| Defined | [lib/utils.js:477](../files/lib_utils.js.md#l477) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- url <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String*</a> the list of parts to be joined and normalized


##### localize

Localize the string via current Y.options

| meta | description |
|------|-------------|
| Defined | [lib/utils.js:495](../files/lib_utils.js.md#l495) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- str <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the original string that you want to input


##### markdownLink

convert string to markdown link

| meta | description |
|------|-------------|
| Defined | [lib/utils.js:535](../files/lib_utils.js.md#l535) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- str <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the original string that you want to input



