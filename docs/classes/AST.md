
# firedoc 1.9.1

Fireball is the game engine for the future.

### `AST` Class


Defined in: [lib/ast.js:65](../files/lib/ast.js.js)

Module: [firedoc](../modules/firedoc.md)




The AST(Abstract syntax tree) of the comment

### Index

##### Properties

  - [`project`](#property-project) `Object` About the project
  - [`files`](#property-files) `Object` The files
  - [`codes`](#property-codes) `Object` The source codes
  - [`modules`](#property-modules) `Object` The modules
  - [`classes`](#property-classes) `Object` The classes
  - [`members`](#property-members) `Array` The members
  - [`inheritedMembers`](#property-inheritedmembers) `Array` The inherited members
  - [`namespacesMap`](#property-namespacesmap) `Object` The namespaces map object
  - [`commentsMap`](#property-commentsmap) `Object` The comments map object
  - [`syntaxType`](#property-syntaxtype) `String` The syntax type
  - [`context`](#property-context) `Context` The context object



##### Methods

  - [`create`](#method-create) Create a AST object
  - [`reset`](#method-reset) Reset the AST instance
  - [`oncomment`](#method-oncomment) 
  - [`onblock`](#method-onblock) Processes all the tags in a single comment block
  - [`ontag`](#method-ontag) Process tag
  - [`extract`](#method-extract) Accepts a map of filenames to file content.  Returns
a map of filenames to an array of API comment block
text.  This expects the comment to start with / **
on its own line, and end with * / on its own
line.  Override this function to provide an
alternative comment parser.
  - [`transform`](#method-transform) Transforms a map of filenames to arrays of comment blocks into a
JSON structure that represents the entire processed API doc info
and relationships between elements for the entire project.





### Details


#### Properties


##### project

> About the project

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/ast.js:72](../files/lib_ast.js.md#l72) |



##### files

> The files

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/ast.js:77](../files/lib_ast.js.md#l77) |



##### codes

> The source codes

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/ast.js:82](../files/lib_ast.js.md#l82) |



##### modules

> The modules

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/ast.js:87](../files/lib_ast.js.md#l87) |



##### classes

> The classes

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/ast.js:92](../files/lib_ast.js.md#l92) |



##### members

> The members

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| Defined | [lib/ast.js:97](../files/lib_ast.js.md#l97) |



##### inheritedMembers

> The inherited members

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| Defined | [lib/ast.js:102](../files/lib_ast.js.md#l102) |



##### namespacesMap

> The namespaces map object

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/ast.js:107](../files/lib_ast.js.md#l107) |



##### commentsMap

> The comments map object

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/ast.js:112](../files/lib_ast.js.md#l112) |



##### syntaxType

> The syntax type

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> |
| Defined | [lib/ast.js:117](../files/lib_ast.js.md#l117) |



##### context

> The context object

| meta | description |
|------|-------------|
| Type | Context |
| Defined | [lib/ast.js:122](../files/lib_ast.js.md#l122) |






<!-- Method Block -->
#### Methods


##### create

Create a AST object

| meta | description |
|------|-------------|
| Defined | [lib/ast.js:132](../files/lib_ast.js.md#l132) |
| Return 		 | <a href="../classes/AST.html" class="crosslink">AST</a> 

###### Parameters
- files <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The files
- dirs <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The directorys
- syntaxType <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The syntax type: `coffee` or `js`


##### reset

Reset the AST instance

| meta | description |
|------|-------------|
| Defined | [lib/ast.js:151](../files/lib_ast.js.md#l151) |



##### oncomment



| meta | description |
|------|-------------|
| Defined | [lib/ast.js:174](../files/lib_ast.js.md#l174) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- comment <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- filename <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
- linenum <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


##### onblock

Processes all the tags in a single comment block

| meta | description |
|------|-------------|
| Defined | [lib/ast.js:244](../files/lib_ast.js.md#l244) |

###### Parameters
- an <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> array of the tag/text pairs


##### ontag

Process tag

| meta | description |
|------|-------------|
| Defined | [lib/ast.js:327](../files/lib_ast.js.md#l327) |

###### Parameters
- item <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
	- tag <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
	- value <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### extract

Accepts a map of filenames to file content.  Returns
a map of filenames to an array of API comment block
text.  This expects the comment to start with / **
on its own line, and end with * / on its own
line.  Override this function to provide an
alternative comment parser.

| meta | description |
|------|-------------|
| Defined | [lib/ast.js:383](../files/lib_ast.js.md#l383) |

###### Parameters
- files <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
- dirs <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### transform

Transforms a map of filenames to arrays of comment blocks into a
JSON structure that represents the entire processed API doc info
and relationships between elements for the entire project.

| meta | description |
|------|-------------|
| Defined | [lib/ast.js:423](../files/lib_ast.js.md#l423) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- commentmap <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The hash of files and parsed comment blocks



