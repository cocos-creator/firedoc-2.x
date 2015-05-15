
# firedoc 0.8.30

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `DocParser` Class

Extends `Base`

Defined in: [lib/docparser.js:836](../files/lib/docparser.js.js)

Module: [yuidoc](../modules/yuidoc.md)




The doc parser accepts a **map** of files to file content.
Once `parse()` is called, various properties will be populated
with the parsers data (aggregated in the `'data'` property).

### Index

##### Properties

  - [`CORRECTIONS`](#property-corrections)
  - [`DIGESTERS`](#property-digesters)
  - [`IGNORE_TAGLIST`](#property-ignore_taglist)
  - [`TAGLIST`](#property-taglist)


##### Attributes

  - [`currentclass`](#attribute-currentclass)
  - [`currentfile`](#attribute-currentfile)
  - [`currentmodule`](#attribute-currentmodule)
  - [`currentsubmodule`](#attribute-currentsubmodule)
  - [`digesters`](#attribute-digesters)
  - [`dirmap`](#attribute-dirmap)
  - [`emitters`](#attribute-emitters)
  - [`filemap`](#attribute-filemap)
  - [`mainmodule`](#attribute-mainmodule)
  - [`syntaxtype`](#attribute-syntaxtype)


##### Methods

  - [`DocParser(o)` **constructor**](#method-docparsero)
  - [`_resolveFor(value)`](#method-_resolveforvalue)
  - [`extract(filemap, dirmap)`](#method-extractfilemap-dirmap)
  - [`handlecomment(comment, file, line)`](#method-handlecommentcomment-file-line)
  - [`implodeString(str)`](#method-implodestringstr)
  - [`implodeString(str)`](#method-implodestringstr)
  - [`parse(filemap, dirmap)`](#method-parsefilemap-dirmap)
  - [`processblock(an)`](#method-processblockan)
  - [`stringlog(data)`](#method-stringlogdata)
  - [`transform(commentmap)`](#method-transformcommentmap)
  - [`unindent(content)`](#method-unindentcontent)




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
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/docparser.js:187](../files/lib_docparser.js.md#l187) |




##### property: `DIGESTERS`

A map of the default tag processors, keyed by the
tag name.  Multiple tags can use the same digester
by supplying the string name that points to the
implementation rather than a function.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/docparser.js:210](../files/lib_docparser.js.md#l210) |




##### property: `IGNORE_TAGLIST`

A list of ignored tags. These tags should be ignored because there is
likely to be used for purposes other than JSDoc tags in JavaScript comments.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| Defined | [lib/docparser.js:175](../files/lib_docparser.js.md#l175) |




##### property: `TAGLIST`

A list of known tags.  This populates a member variable
during initialization, and will be updated if additional
digesters are added.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| Defined | [lib/docparser.js:93](../files/lib_docparser.js.md#l93) |





#### Attributes


`currentclass`: <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>

Defined in `lib/docparser.js:1076`



---------------------




##### Fires event `currentclassChange`

Fires when the value for the configuration attribute `currentclass` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`currentfile`: <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>

Defined in `lib/docparser.js:924`



---------------------




##### Fires event `currentfileChange`

Fires when the value for the configuration attribute `currentfile` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`currentmodule`: <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>

Defined in `lib/docparser.js:981`



---------------------




##### Fires event `currentmoduleChange`

Fires when the value for the configuration attribute `currentmodule` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`currentsubmodule`: <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>

Defined in `lib/docparser.js:1040`



---------------------




##### Fires event `currentsubmoduleChange`

Fires when the value for the configuration attribute `currentsubmodule` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`digesters`: 

Defined in `lib/docparser.js:864`



---------------------




##### Fires event `digestersChange`

Fires when the value for the configuration attribute `digesters` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`dirmap`: 

Defined in `lib/docparser.js:914`



---------------------




##### Fires event `dirmapChange`

Fires when the value for the configuration attribute `dirmap` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`emitters`: 

Defined in `lib/docparser.js:886`



---------------------




##### Fires event `emittersChange`

Fires when the value for the configuration attribute `emitters` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`filemap`: 

Defined in `lib/docparser.js:906`



---------------------




##### Fires event `filemapChange`

Fires when the value for the configuration attribute `filemap` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`mainmodule`: <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>

Defined in `lib/docparser.js:945`



---------------------




##### Fires event `mainmoduleChange`

Fires when the value for the configuration attribute `mainmodule` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`syntaxtype`: <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>

Defined in `lib/docparser.js:897`



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

##### method: `DocParser(o)`



| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:836](../files/lib_docparser.js.md#l836) |

###### Parameters
- o <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> the config object


##### method: `_resolveFor(value)`

Takes a non-namespaced classname and resolves it to a namespace (to support `@for`)

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:1115](../files/lib_docparser.js.md#l1115) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- value <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The classname to resolve


##### method: `extract(filemap, dirmap)`

Accepts a map of filenames to file content.  Returns
a map of filenames to an array of API comment block
text.  This expects the comment to start with / **
on its own line, and end with * / on its own
line.  Override this function to provide an
alternative comment parser.

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:1285](../files/lib_docparser.js.md#l1285) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- filemap <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> A map of filenames to file content
- dirmap <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> A map of file names to directory name


##### method: `handlecomment(comment, file, line)`

Transforms a JavaDoc style comment block (less the start and end of it)
into a list of tag/text pairs. The leading space and '*' are removed,
but the remaining whitespace is preserved so that the output should be
friendly for both markdown and html parsers.

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:1207](../files/lib_docparser.js.md#l1207) |

###### Parameters
- comment <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The comment to parse
- file <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The file it was parsed from
- line <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The line number it was found on


##### method: `implodeString(str)`

Flatten a string, remove all line breaks and replace them with a token

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:37](../files/lib_docparser.js.md#l37) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- str <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The string to operate on


##### method: `implodeString(str)`

Un-flatten a string, replace tokens injected with `implodeString`

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:47](../files/lib_docparser.js.md#l47) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- str <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The string to operate on


##### method: `parse(filemap, dirmap)`

Extracts and transforms the filemap provided to constructor

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:1531](../files/lib_docparser.js.md#l1531) |
| Return 		 | <a href="../classes/DocParser.html" class="crosslink">DocParser</a> 

###### Parameters
- filemap <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> A map of filenames to file content
- dirmap <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> A map of file names to directory name


##### method: `processblock(an)`

Processes all the tags in a single comment block

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:1341](../files/lib_docparser.js.md#l1341) |

###### Parameters
- an <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> array of the tag/text pairs


##### method: `stringlog(data)`

Parses the JSON data and formats it into a nice log string for
filename and line number: `/file/name.js:123`

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:11](../files/lib_docparser.js.md#l11) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The data block from the parser


##### method: `transform(commentmap)`

Transforms a map of filenames to arrays of comment blocks into a
JSON structure that represents the entire processed API doc info
and relationships between elements for the entire project.

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:1415](../files/lib_docparser.js.md#l1415) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- commentmap <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The hash of files and parsed comment blocks


##### method: `unindent(content)`

Normalizes the initial indentation of the given _content_ so that the first line
is unindented, and all other lines are unindented to the same degree as the
first line. So if the first line has four spaces at the beginning, then all
lines will be unindented four spaces. Ported from [Selleck](https://github.com/rgrove/selleck)

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:1186](../files/lib_docparser.js.md#l1186) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- content <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Text to unindent.



