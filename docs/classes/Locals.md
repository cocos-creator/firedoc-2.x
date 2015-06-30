
# firedoc 1.8.0

test

### `Locals` Class


Defined in: [lib/locals.js:14](../files/lib/locals.js.js)

Module: [utils](../modules/utils.md)
Parent Module: [firedoc](../modules/firedoc.md)




The Theme Locals

### Index

##### Properties

  - [`context`](#property-context) `BuilderContext` Builder Context
  - [`options`](#property-options) `Option` The options
  - [`ast`](#property-ast) `AST` The AST object
  - [`project`](#property-project) `Object` Get the project to export
  - [`i18n`](#property-i18n) `Object` Get i18n object
  - [`modules`](#property-modules) `Object` Get modules object to export
  - [`classes`](#property-classes) `Object` Get classes object to export
  - [`files`](#property-files) `Object` Get files object to export
  - [`_mergeCounter`](#property-_mergecounter) `Number` Counter for stepping into merges



##### Methods

  - [`initMarkdownRulers`](#method-initmarkdownrulers) Initialize the markdownit rulers
  - [`addFoundAt`](#method-addfoundat) Parses file and line number from an item object and build's an HREF
  - [`getMethodName`](#method-getmethodname) build the method name by its name and parameters
  - [`_parseCode`](#method-_parsecode) Parses `<pre class="code prettyprint"><code>
` tags and adds the __prettyprint__ `className` to them
  - [`markdown`](#method-markdown) Wrapper around the Markdown parser so it can be normalized or even side stepped
  - [`appendClassToModule`](#method-appendclasstomodule) append the clazz to its module
  - [`getClassInheritanceTree`](#method-getclassinheritancetree) get class inheritance tree
  - [`buildMember`](#method-buildmember) build the member
  - [`buildMembers`](#method-buildmembers) build the members
  - [`augmentData`](#method-augmentdata) Augments the **DocParser** meta data to provide default values for certain keys as well as parses all descriptions
with the `Markdown Parser`
  - [`mergeExtends`](#method-mergeextends) Merge superclass data into a child class
  - [`getExpandIterator`](#method-getexpanditerator) generate expand function
  - [`extendMembers`](#method-extendmembers) extends members array
  - [`expandMembersFromModules`](#method-expandmembersfrommodules) extends modules
  - [`expandMembersFromModules`](#method-expandmembersfrommodules) extends members from classes
  - [`create`](#method-create) Create a locals object from context





### Details


#### Properties


##### context

> Builder Context

| meta | description |
|------|-------------|
| Type | <a href="../classes/BuilderContext.html" class="crosslink">BuilderContext</a> |
| Defined | [lib/locals.js:21](../files/lib_locals.js.md#l21) |



##### options

> The options

| meta | description |
|------|-------------|
| Type | Option |
| Defined | [lib/locals.js:26](../files/lib_locals.js.md#l26) |



##### ast

> The AST object

| meta | description |
|------|-------------|
| Type | <a href="../classes/AST.html" class="crosslink">AST</a> |
| Defined | [lib/locals.js:31](../files/lib_locals.js.md#l31) |



##### project

> Get the project to export

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/locals.js:36](../files/lib_locals.js.md#l36) |



##### i18n

> Get i18n object

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/locals.js:53](../files/lib_locals.js.md#l53) |



##### modules

> Get modules object to export

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/locals.js:71](../files/lib_locals.js.md#l71) |



##### classes

> Get classes object to export

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/locals.js:90](../files/lib_locals.js.md#l90) |



##### files

> Get files object to export

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/locals.js:114](../files/lib_locals.js.md#l114) |



##### _mergeCounter

> Counter for stepping into merges

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [lib/locals.js:440](../files/lib_locals.js.md#l440) |






<!-- Method Block -->
#### Methods


##### initMarkdownRulers

Initialize the markdownit rulers

| meta | description |
|------|-------------|
| Defined | [lib/locals.js:128](../files/lib_locals.js.md#l128) |



##### addFoundAt

Parses file and line number from an item object and build's an HREF

| meta | description |
|------|-------------|
| Defined | [lib/locals.js:156](../files/lib_locals.js.md#l156) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to parse


##### getMethodName

build the method name by its name and parameters

| meta | description |
|------|-------------|
| Defined | [lib/locals.js:174](../files/lib_locals.js.md#l174) |

###### Parameters
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The function/method name
- params <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The function/method parameters list
	- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the parameter


##### _parseCode

Parses `<pre class="code prettyprint"><code>
` tags and adds the __prettyprint__ `className` to them

| meta | description |
|------|-------------|
| Defined | [lib/locals.js:188](../files/lib_locals.js.md#l188) |
| Return 		 | HTML 

###### Parameters
- html HTML The HTML to parse


##### markdown

Wrapper around the Markdown parser so it can be normalized or even side stepped

| meta | description |
|------|-------------|
| Defined | [lib/locals.js:203](../files/lib_locals.js.md#l203) |
| Return 		 | HTML 

###### Parameters
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The Markdown string to parse


##### appendClassToModule

append the clazz to its module

| meta | description |
|------|-------------|
| Defined | [lib/locals.js:232](../files/lib_locals.js.md#l232) |

###### Parameters
- clazz <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The class object
	- module <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The module name of this clazz object


##### getClassInheritanceTree

get class inheritance tree

| meta | description |
|------|-------------|
| Defined | [lib/locals.js:248](../files/lib_locals.js.md#l248) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### buildMember

build the member

| meta | description |
|------|-------------|
| Defined | [lib/locals.js:288](../files/lib_locals.js.md#l288) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- memeber <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The member object
- forceBeMethod <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> force make the build process be for method
- parent <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The parent context


##### buildMembers

build the members

| meta | description |
|------|-------------|
| Defined | [lib/locals.js:353](../files/lib_locals.js.md#l353) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### augmentData

Augments the **DocParser** meta data to provide default values for certain keys as well as parses all descriptions
with the `Markdown Parser`

| meta | description |
|------|-------------|
| Defined | [lib/locals.js:380](../files/lib_locals.js.md#l380) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- o <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to recurse and augment


##### mergeExtends

Merge superclass data into a child class

| meta | description |
|------|-------------|
| Defined | [lib/locals.js:448](../files/lib_locals.js.md#l448) |

###### Parameters
- info <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to extend
- members <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The list of items to merge in
- first <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Set for the first call


##### getExpandIterator

generate expand function

| meta | description |
|------|-------------|
| Defined | [lib/locals.js:501](../files/lib_locals.js.md#l501) |

###### Parameters
- parent <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to be set


##### extendMembers

extends members array

| meta | description |
|------|-------------|
| Defined | [lib/locals.js:526](../files/lib_locals.js.md#l526) |

###### Parameters
- meta <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The meta object


##### expandMembersFromModules

extends modules

| meta | description |
|------|-------------|
| Defined | [lib/locals.js:546](../files/lib_locals.js.md#l546) |

###### Parameters
- meta <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The meta object


##### expandMembersFromModules

extends members from classes

| meta | description |
|------|-------------|
| Defined | [lib/locals.js:568](../files/lib_locals.js.md#l568) |

###### Parameters
- meta <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The meta object


##### create

Create a locals object from context

| meta | description |
|------|-------------|
| Defined | [lib/locals.js:590](../files/lib_locals.js.md#l590) |

###### Parameters
- context <a href="../classes/BuilderContext.html" class="crosslink">BuilderContext</a> The `BuilderContext` instance



