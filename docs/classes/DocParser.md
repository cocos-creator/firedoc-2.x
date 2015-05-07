
# firedoc 0.8.16

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `DocParser` Class

Extends `Base`

Defined in: [lib/docparser.js:827](../files/lib/docparser.js.js)

Module: [yuidoc](../modules/yuidoc.md)




The doc parser accepts a **map** of files to file content.
Once `parse()` is called, various properties will be populated
with the parsers data (aggregated in the `'data'` property).

### Index

##### Properties

  - `CORRECTIONS`
  - `DIGESTERS`
  - `IGNORE_TAGLIST`
  - `TAGLIST`


##### Attributes

  - `currentclass`
  - `currentfile`
  - `currentmodule`
  - `currentsubmodule`
  - `digesters`
  - `dirmap`
  - `emitters`
  - `filemap`
  - `mainmodule`
  - `syntaxtype`


##### Methods

  - `DocParser` **constructor**
  - `_resolveFor`
  - `extract`
  - `handlecomment`
  - `implodeString`
  - `implodeString`
  - `parse`
  - `processblock`
  - `stringlog`
  - `transform`
  - `unindent`




### Inherited members

##### Properties


##### Attributes


##### Methods


##### Events




### Details


#### Properties



##### property: `CORRECTIONS`

Common errors will get scrubbed instead of being ignored.

| meta | description |
|------|-------------|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| defined | `lib/docparser.js:187` |




##### property: `DIGESTERS`

A map of the default tag processors, keyed by the
tag name.  Multiple tags can use the same digester
by supplying the string name that points to the
implementation rather than a function.

| meta | description |
|------|-------------|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| defined | `lib/docparser.js:210` |




##### property: `IGNORE_TAGLIST`

A list of ignored tags. These tags should be ignored because there is
likely to be used for purposes other than JSDoc tags in JavaScript comments.

| meta | description |
|------|-------------|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| defined | `lib/docparser.js:175` |




##### property: `TAGLIST`

A list of known tags.  This populates a member variable
during initialization, and will be updated if additional
digesters are added.

| meta | description |
|------|-------------|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| defined | `lib/docparser.js:93` |





#### Attributes


`currentclass`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `lib/docparser.js:1067`



---------------------




##### Fires event `currentclassChange`

Fires when the value for the configuration attribute `currentclass` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`currentfile`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `lib/docparser.js:915`



---------------------




##### Fires event `currentfileChange`

Fires when the value for the configuration attribute `currentfile` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`currentmodule`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `lib/docparser.js:972`



---------------------




##### Fires event `currentmoduleChange`

Fires when the value for the configuration attribute `currentmodule` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`currentsubmodule`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `lib/docparser.js:1031`



---------------------




##### Fires event `currentsubmoduleChange`

Fires when the value for the configuration attribute `currentsubmodule` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`digesters`: ``

Defined in `lib/docparser.js:855`



---------------------




##### Fires event `digestersChange`

Fires when the value for the configuration attribute `digesters` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`dirmap`: ``

Defined in `lib/docparser.js:905`



---------------------




##### Fires event `dirmapChange`

Fires when the value for the configuration attribute `dirmap` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`emitters`: ``

Defined in `lib/docparser.js:877`



---------------------




##### Fires event `emittersChange`

Fires when the value for the configuration attribute `emitters` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`filemap`: ``

Defined in `lib/docparser.js:897`



---------------------




##### Fires event `filemapChange`

Fires when the value for the configuration attribute `filemap` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`mainmodule`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `lib/docparser.js:936`



---------------------




##### Fires event `mainmoduleChange`

Fires when the value for the configuration attribute `mainmodule` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`syntaxtype`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `lib/docparser.js:888`



---------------------




##### Fires event `syntaxtypeChange`

Fires when the value for the configuration attribute `syntaxtype` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods

##### Constructor

##### method: `DocParser()`



| meta | description |
|------|-------------|
| defined | `lib/docparser.js:827` |

###### Parameters
- o <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the config object



##### method: `_resolveFor()`

Takes a non-namespaced classname and resolves it to a namespace (to support `@for`)

| meta | description |
|------|-------------|
| defined | `lib/docparser.js:1106` |

###### Parameters
- value <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The classname to resolve

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### method: `extract()`

Accepts a map of filenames to file content.  Returns
a map of filenames to an array of API comment block
text.  This expects the comment to start with / **
on its own line, and end with * / on its own
line.  Override this function to provide an
alternative comment parser.

| meta | description |
|------|-------------|
| defined | `lib/docparser.js:1276` |

###### Parameters
- filemap <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> A map of filenames to file content
- dirmap <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> A map of file names to directory name

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### method: `handlecomment()`

Transforms a JavaDoc style comment block (less the start and end of it)
into a list of tag/text pairs. The leading space and '*' are removed,
but the remaining whitespace is preserved so that the output should be
friendly for both markdown and html parsers.

| meta | description |
|------|-------------|
| defined | `lib/docparser.js:1198` |

###### Parameters
- comment <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The comment to parse
- file <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The file it was parsed from
- line <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The line number it was found on



##### method: `implodeString()`

Flatten a string, remove all line breaks and replace them with a token

| meta | description |
|------|-------------|
| defined | `lib/docparser.js:37` |

###### Parameters
- str <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The string to operate on

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### method: `implodeString()`

Un-flatten a string, replace tokens injected with `implodeString`

| meta | description |
|------|-------------|
| defined | `lib/docparser.js:47` |

###### Parameters
- str <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The string to operate on

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### method: `parse()`

Extracts and transforms the filemap provided to constructor

| meta | description |
|------|-------------|
| defined | `lib/docparser.js:1522` |

###### Parameters
- filemap <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> A map of filenames to file content
- dirmap <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> A map of file names to directory name

**Returns**
<a href="../classes/DocParser.html" class="crosslink">DocParser</a> 


##### method: `processblock()`

Processes all the tags in a single comment block

| meta | description |
|------|-------------|
| defined | `lib/docparser.js:1332` |

###### Parameters
- an <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> array of the tag/text pairs



##### method: `stringlog()`

Parses the JSON data and formats it into a nice log string for
filename and line number: `/file/name.js:123`

| meta | description |
|------|-------------|
| defined | `lib/docparser.js:11` |

###### Parameters
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The data block from the parser

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### method: `transform()`

Transforms a map of filenames to arrays of comment blocks into a
JSON structure that represents the entire processed API doc info
and relationships between elements for the entire project.

| meta | description |
|------|-------------|
| defined | `lib/docparser.js:1406` |

###### Parameters
- commentmap <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The hash of files and parsed comment blocks

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### method: `unindent()`

Normalizes the initial indentation of the given _content_ so that the first line
is unindented, and all other lines are unindented to the same degree as the
first line. So if the first line has four spaces at the beginning, then all
lines will be unindented four spaces. Ported from [Selleck](https://github.com/rgrove/selleck)

| meta | description |
|------|-------------|
| defined | `lib/docparser.js:1177` |

###### Parameters
- content <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Text to unindent.

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



