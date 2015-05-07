
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


##### `escapeHTML()`

|      | description |
|------|-------------|
| defined | `lib/utils.js:31` |
| description | Escapes HTML characters in _html_. |

###### Parameters
- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> String to escape.

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### `fixType()`

|      | description |
|------|-------------|
| defined | `lib/utils.js:452` |
| description | Takes a type string and converts it to a "First letter upper cased" type. e.g. `(string -> String, object -> Object)` |

###### Parameters
- t <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type string to convert

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### `getDirs()`

|      | description |
|------|-------------|
| defined | `lib/utils.js:338` |
| description | Walks the tree from this dir and returns all the subdirs |

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The dir to begin at

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 


##### `getLayouts()`

|      | description |
|------|-------------|
| defined | `lib/utils.js:63` |
| description | Like `getPages()`, but returns only the files under the `layout/` subdirectory
of the specified _dir_. |

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Directory path.

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### `getPage()`

|      | description |
|------|-------------|
| defined | `lib/utils.js:76` |
| description | Loads and returns the content of the specified page file. |

###### Parameters
- pagePath <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Path to a single `.handlebars` page.

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> | Null 


##### `getPages()`

|      | description |
|------|-------------|
| defined | `lib/utils.js:91` |
| description | Loads pages (files with a `.handlebars` extension) in the specified directory and
returns an object containing a mapping of page names (the part of the filename)
preceding the `.handlebars` extension) to page content. |

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Directory path.

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### `getPartials()`

|      | description |
|------|-------------|
| defined | `lib/utils.js:125` |
| description | Like `getPages()`, but returns only the files under the `partial/` subdirectory
of the specified _dir_. |

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Directory path.

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### `getProjectData()`

|      | description |
|------|-------------|
| defined | `lib/utils.js:224` |
| description | Walk the directory tree to locate the yuidoc.json file. |

###### Parameters
- dir Path The directory to start from



##### `localize()`

|      | description |
|------|-------------|
| defined | `lib/utils.js:492` |
| description | Localize the string via current Y.options |

###### Parameters
- str <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the original string that you want to input

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### `prepare()`

|      | description |
|------|-------------|
| defined | `lib/utils.js:139` |
| description | Mix/merge/munge data into the template. |

###### Parameters
- inDir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The starting directory
- options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The `options` for the meta data.
- callback Callback The callback to excecute when complete
	- err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> 
	- options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Merged options.



##### `unindent()`

|      | description |
|------|-------------|
| defined | `lib/utils.js:44` |
| description | Normalizes the initial indentation of the given _content_ so that the first line
is unindented, and all other lines are unindented to the same degree as the
first line. So if the first line has four spaces at the beginning, then all
lines will be unindented four spaces. |

###### Parameters
- content <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Text to unindent.

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### `validatePaths()`

|      | description |
|------|-------------|
| defined | `lib/utils.js:364` |
| description | Make sure all the paths passed are directories and that they are not in the ignore list. |

###### Parameters
- paths <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The array of paths to validate
- ignore <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string to call `.indexOf` on a path to determine if it should be ignored



##### `webpath()`

|      | description |
|------|-------------|
| defined | `lib/utils.js:474` |
| description | Produces a normalized web path by joining all the parts and normalizing the
filesystem-like path into web compatible url.
Supports relative and absolute paths.
Courtesy of [Mojito's utils](https://github.com/yahoo/mojito/) |

###### Parameters
- url <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String*</a> the list of parts to be joined and normalized

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



