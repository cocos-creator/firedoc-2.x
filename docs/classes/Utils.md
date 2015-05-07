
# firedoc 0.8.16

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `Utils` Class


Defined in: [lib/utils.js:11](../files/lib/utils.js.js)

Module: [yuidoc](../modules/yuidoc.md)




Utilities Class

### Index



##### Methods

  - `escapeHTML`
  - `fixType`
  - `getDirs`
  - `getLayouts`
  - `getPage`
  - `getPages`
  - `getPartials`
  - `getProjectData`
  - `localize`
  - `prepare`
  - `unindent`
  - `validatePaths`
  - `webpath`





### Details




<!-- Method Block -->
#### Methods


##### method: `escapeHTML()`

Escapes HTML characters in _html_.

| meta |   |
|------|---|
| defined | `lib/utils.js:31` |

###### Parameters
- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> String to escape.

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### method: `fixType()`

Takes a type string and converts it to a &quot;First letter upper cased&quot; type. e.g. &#x60;(string -&gt; String, object -&gt; Object)&#x60;

| meta |   |
|------|---|
| defined | `lib/utils.js:452` |

###### Parameters
- t <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type string to convert

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### method: `getDirs()`

Walks the tree from this dir and returns all the subdirs

| meta |   |
|------|---|
| defined | `lib/utils.js:338` |

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The dir to begin at

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 


##### method: `getLayouts()`

Like &#x60;getPages()&#x60;, but returns only the files under the &#x60;layout/&#x60; subdirectory
of the specified _dir_.

| meta |   |
|------|---|
| defined | `lib/utils.js:63` |

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Directory path.

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### method: `getPage()`

Loads and returns the content of the specified page file.

| meta |   |
|------|---|
| defined | `lib/utils.js:76` |

###### Parameters
- pagePath <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Path to a single `.handlebars` page.

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> | Null 


##### method: `getPages()`

Loads pages (files with a &#x60;.handlebars&#x60; extension) in the specified directory and
returns an object containing a mapping of page names (the part of the filename)
preceding the &#x60;.handlebars&#x60; extension) to page content.

| meta |   |
|------|---|
| defined | `lib/utils.js:91` |

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Directory path.

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### method: `getPartials()`

Like &#x60;getPages()&#x60;, but returns only the files under the &#x60;partial/&#x60; subdirectory
of the specified _dir_.

| meta |   |
|------|---|
| defined | `lib/utils.js:125` |

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Directory path.

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### method: `getProjectData()`

Walk the directory tree to locate the yuidoc.json file.

| meta |   |
|------|---|
| defined | `lib/utils.js:224` |

###### Parameters
- dir Path The directory to start from



##### method: `localize()`

Localize the string via current Y.options

| meta |   |
|------|---|
| defined | `lib/utils.js:492` |

###### Parameters
- str <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the original string that you want to input

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### method: `prepare()`

Mix/merge/munge data into the template.

| meta |   |
|------|---|
| defined | `lib/utils.js:139` |

###### Parameters
- inDir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The starting directory
- options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The `options` for the meta data.
- callback Callback The callback to excecute when complete
	- err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> 
	- options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Merged options.



##### method: `unindent()`

Normalizes the initial indentation of the given _content_ so that the first line
is unindented, and all other lines are unindented to the same degree as the
first line. So if the first line has four spaces at the beginning, then all
lines will be unindented four spaces.

| meta |   |
|------|---|
| defined | `lib/utils.js:44` |

###### Parameters
- content <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Text to unindent.

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### method: `validatePaths()`

Make sure all the paths passed are directories and that they are not in the ignore list.

| meta |   |
|------|---|
| defined | `lib/utils.js:364` |

###### Parameters
- paths <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The array of paths to validate
- ignore <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string to call `.indexOf` on a path to determine if it should be ignored



##### method: `webpath()`

Produces a normalized web path by joining all the parts and normalizing the
filesystem-like path into web compatible url.
Supports relative and absolute paths.
Courtesy of [Mojito&#x27;s utils](https://github.com/yahoo/mojito/)

| meta |   |
|------|---|
| defined | `lib/utils.js:474` |

###### Parameters
- url <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String*</a> the list of parts to be joined and normalized

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



