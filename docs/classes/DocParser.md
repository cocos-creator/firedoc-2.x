
# firedoc 1.5.9

Fireball is the game engine for the future.

### `DocParser` Class

Extends `Base`

Defined in: [lib/docparser.js:850](../files/lib/docparser.js.js)

Module: [yuidoc](../modules/yuidoc.md)




The doc parser accepts a **map** of files to file content.
Once `parse()` is called, various properties will be populated
with the parsers data (aggregated in the `'data'` property).

### Index

##### Properties

  - [`TAGLIST`](#property-taglist) `Array` A list of known tags.  This populates a member variable
during initialization, and will be updated if additional
digesters are added.
  - [`IGNORE_TAGLIST`](#property-ignore_taglist) `Array` A list of ignored tags. These tags should be ignored because there is
likely to be used for purposes other than JSDoc tags in JavaScript comments.
  - [`CORRECTIONS`](#property-corrections) `Object` Common errors will get scrubbed instead of being ignored.
  - [`DIGESTERS`](#property-digesters) `Object` A map of the default tag processors, keyed by the
tag name.  Multiple tags can use the same digester
by supplying the string name that points to the
implementation rather than a function.


##### Attributes

  - [`digesters`](#attribute-digesters) Digesters process the tag/text pairs found in a
comment block.  They are looked up by tag name.
The digester gets the tagname, the value, the
target object to apply values to, and the full
block that is being processed.  Digesters can
be declared as strings instead of a function --
in that case, the program will try to look up
the key listed and use the function there instead
(it is an alias).  Digesters can return a host
object in the case the tag defines a new key
block type (modules/classes/methods/events/properties)
  - [`emitters`](#attribute-emitters) Emitters will be schemas for the types of payloads
the parser will emit.  Not implemented.
  - [`syntaxtype`](#attribute-syntaxtype) Comment syntax type.
  - [`filemap`](#attribute-filemap) The map of file names to file content.
  - [`dirmap`](#attribute-dirmap) A map of file names to directory name.  Provided in
case this needs to be used to reset the module name
appropriately -- currently not used
  - [`currentfile`](#attribute-currentfile) The file currently being parsed
  - [`mainmodule`](#attribute-mainmodule) The main documentation block for the module itself.
  - [`currentmodule`](#attribute-currentmodule) The module currently being parsed
  - [`currentsubmodule`](#attribute-currentsubmodule) The submodule currently being parsed
  - [`currentclass`](#attribute-currentclass) The class currently being parsed


##### Methods

  - [`` **constructor**](#) 
  - [`stringlog`](#method-stringlog) Parses the JSON data and formats it into a nice log string for
filename and line number: `/file/name.js:123`
  - [`implodeString`](#method-implodestring) Flatten a string, remove all line breaks and replace them with a token
  - [`implodeString`](#method-implodestring) Un-flatten a string, replace tokens injected with `implodeString`
  - [`_resolveFor`](#method-_resolvefor) Takes a non-namespaced classname and resolves it to a namespace (to support `@for`)
  - [`unindent`](#method-unindent) Normalizes the initial indentation of the given _content_ so that the first line
is unindented, and all other lines are unindented to the same degree as the
first line. So if the first line has four spaces at the beginning, then all
lines will be unindented four spaces. Ported from [Selleck](https://github.com/rgrove/selleck)
  - [`handlecomment`](#method-handlecomment) Transforms a JavaDoc style comment block (less the start and end of it)
into a list of tag/text pairs. The leading space and '*' are removed,
but the remaining whitespace is preserved so that the output should be
friendly for both markdown and html parsers.
  - [`extract`](#method-extract) Accepts a map of filenames to file content.  Returns
a map of filenames to an array of API comment block
text.  This expects the comment to start with / **
on its own line, and end with * / on its own
line.  Override this function to provide an
alternative comment parser.
  - [`processblock`](#method-processblock) Processes all the tags in a single comment block
  - [`transform`](#method-transform) Transforms a map of filenames to arrays of comment blocks into a
JSON structure that represents the entire processed API doc info
and relationships between elements for the entire project.
  - [`parse`](#method-parse) Extracts and transforms the filemap provided to constructor




### Inherited members

##### Properties


##### Attributes


##### Methods


##### Events




### Details


#### Properties


##### TAGLIST

> A list of known tags.  This populates a member variable
during initialization, and will be updated if additional
digesters are added.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| Defined | [lib/docparser.js:93](../files/lib_docparser.js.md#l93) |



##### IGNORE_TAGLIST

> A list of ignored tags. These tags should be ignored because there is
likely to be used for purposes other than JSDoc tags in JavaScript comments.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| Defined | [lib/docparser.js:175](../files/lib_docparser.js.md#l175) |



##### CORRECTIONS

> Common errors will get scrubbed instead of being ignored.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/docparser.js:187](../files/lib_docparser.js.md#l187) |



##### DIGESTERS

> A map of the default tag processors, keyed by the
tag name.  Multiple tags can use the same digester
by supplying the string name that points to the
implementation rather than a function.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/docparser.js:210](../files/lib_docparser.js.md#l210) |





#### Attributes


`digesters`: Unknown

Defined in `lib/docparser.js:878`



---------------------

Digesters process the tag/text pairs found in a
comment block.  They are looked up by tag name.
The digester gets the tagname, the value, the
target object to apply values to, and the full
block that is being processed.  Digesters can
be declared as strings instead of a function --
in that case, the program will try to look up
the key listed and use the function there instead
(it is an alias).  Digesters can return a host
object in the case the tag defines a new key
block type (modules/classes/methods/events/properties)


##### Fires event `digestersChange`

Fires when the value for the configuration attribute `digesters` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`emitters`: Unknown

Defined in `lib/docparser.js:900`



---------------------

Emitters will be schemas for the types of payloads
the parser will emit.  Not implemented.


##### Fires event `emittersChange`

Fires when the value for the configuration attribute `emitters` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`syntaxtype`: <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>

Defined in `lib/docparser.js:911`



---------------------

Comment syntax type.


##### Fires event `syntaxtypeChange`

Fires when the value for the configuration attribute `syntaxtype` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`filemap`: Unknown

Defined in `lib/docparser.js:920`



---------------------

The map of file names to file content.


##### Fires event `filemapChange`

Fires when the value for the configuration attribute `filemap` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`dirmap`: Unknown

Defined in `lib/docparser.js:928`



---------------------

A map of file names to directory name.  Provided in
case this needs to be used to reset the module name
appropriately -- currently not used


##### Fires event `dirmapChange`

Fires when the value for the configuration attribute `dirmap` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`currentfile`: <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>

Defined in `lib/docparser.js:938`



---------------------

The file currently being parsed


##### Fires event `currentfileChange`

Fires when the value for the configuration attribute `currentfile` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`mainmodule`: <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>

Defined in `lib/docparser.js:959`



---------------------

The main documentation block for the module itself.


##### Fires event `mainmoduleChange`

Fires when the value for the configuration attribute `mainmodule` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`currentmodule`: <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>

Defined in `lib/docparser.js:995`



---------------------

The module currently being parsed


##### Fires event `currentmoduleChange`

Fires when the value for the configuration attribute `currentmodule` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`currentsubmodule`: <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>

Defined in `lib/docparser.js:1054`



---------------------

The submodule currently being parsed


##### Fires event `currentsubmoduleChange`

Fires when the value for the configuration attribute `currentsubmodule` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`currentclass`: <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>

Defined in `lib/docparser.js:1090`



---------------------

The class currently being parsed


##### Fires event `currentclassChange`

Fires when the value for the configuration attribute `currentclass` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods

##### Constructor

##### 



| meta | description |
|------|-------------|
| Defined | [:]() |



##### stringlog

Parses the JSON data and formats it into a nice log string for
filename and line number: `/file/name.js:123`

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:11](../files/lib_docparser.js.md#l11) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The data block from the parser


##### implodeString

Flatten a string, remove all line breaks and replace them with a token

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:37](../files/lib_docparser.js.md#l37) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- str <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The string to operate on


##### implodeString

Un-flatten a string, replace tokens injected with `implodeString`

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:47](../files/lib_docparser.js.md#l47) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- str <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The string to operate on


##### _resolveFor

Takes a non-namespaced classname and resolves it to a namespace (to support `@for`)

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:1129](../files/lib_docparser.js.md#l1129) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- value <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The classname to resolve


##### unindent

Normalizes the initial indentation of the given _content_ so that the first line
is unindented, and all other lines are unindented to the same degree as the
first line. So if the first line has four spaces at the beginning, then all
lines will be unindented four spaces. Ported from [Selleck](https://github.com/rgrove/selleck)

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:1200](../files/lib_docparser.js.md#l1200) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- content <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Text to unindent.


##### handlecomment

Transforms a JavaDoc style comment block (less the start and end of it)
into a list of tag/text pairs. The leading space and '*' are removed,
but the remaining whitespace is preserved so that the output should be
friendly for both markdown and html parsers.

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:1221](../files/lib_docparser.js.md#l1221) |

###### Parameters
- comment <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The comment to parse
- file <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The file it was parsed from
- line <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The line number it was found on


##### extract

Accepts a map of filenames to file content.  Returns
a map of filenames to an array of API comment block
text.  This expects the comment to start with / **
on its own line, and end with * / on its own
line.  Override this function to provide an
alternative comment parser.

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:1299](../files/lib_docparser.js.md#l1299) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- filemap <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> A map of filenames to file content
- dirmap <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> A map of file names to directory name


##### processblock

Processes all the tags in a single comment block

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:1355](../files/lib_docparser.js.md#l1355) |

###### Parameters
- an <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> array of the tag/text pairs


##### transform

Transforms a map of filenames to arrays of comment blocks into a
JSON structure that represents the entire processed API doc info
and relationships between elements for the entire project.

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:1429](../files/lib_docparser.js.md#l1429) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- commentmap <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The hash of files and parsed comment blocks


##### parse

Extracts and transforms the filemap provided to constructor

| meta | description |
|------|-------------|
| Defined | [lib/docparser.js:1545](../files/lib_docparser.js.md#l1545) |
| Return 		 | <a href="../classes/DocParser.html" class="crosslink">DocParser</a> 

###### Parameters
- filemap <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> A map of filenames to file content
- dirmap <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> A map of file names to directory name



