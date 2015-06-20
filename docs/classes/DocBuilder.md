
# firedoc 1.5.10

Fireball is the game engine for the future.

### `DocBuilder` Class


Defined in: [lib/builder.js:13](../files/lib/builder.js.js)

Module: [yuidoc](../modules/yuidoc.md)




Takes the `JSON` data from the `DocParser` class, creates and parses markdown and handlebars
based templates to generate static HTML content

### Index

##### Properties

  - [`NATIVES`](#property-natives) `Object` List of native types to cross link to MDN
  - [`filesCount`](#property-filescount) `Number` File counter
  - [`_meta`](#property-_meta) `Object` Holder for project meta data
  - [`project`](#property-project) `Unknown` Get the project to export
  - [`i18n`](#property-i18n) `Unknown` Get i18n object
  - [`modules`](#property-modules) `Unknown` Get modules object to export
  - [`classes`](#property-classes) `Unknown` Get classes object to export
  - [`files`](#property-files) `Unknown` Get files object to export
  - [`_mergeCounter`](#property-_mergecounter) `Number` Counter for stepping into merges



##### Methods

  - [`_addHelpers`](#method-_addhelpers) Register a `Y.Handlebars` helper method
  - [`markdown`](#method-markdown) Wrapper around the Markdown parser so it can be normalized or even side stepped
  - [`_parseCrossLink`](#method-_parsecrosslink) Parse the item to be cross linked and return an HREF linked to the item
  - [`NATIVES_LINKER`](#method-natives_linker) Function to link an external type uses `NATIVES` object
  - [`_mixExternal`](#method-_mixexternal) Mixes the various external data soures together into the local data, augmenting
it with flags.
  - [`mixExternal`](#method-mixexternal) Fetches the remote data and fires the callback when it's all complete
  - [`getProjectMeta`](#method-getprojectmeta) Prep the meta data to be fed to Selleck
  - [`populateClasses`](#method-populateclasses) Populate the meta data for classes
  - [`populateModules`](#method-populatemodules) Populate the meta data for modules
  - [`populateFiles`](#method-populatefiles) Populate the meta data for files
  - [`addFoundAt`](#method-addfoundat) Parses file and line number from an item object and build's an HREF
  - [`augmentData`](#method-augmentdata) Augments the **DocParser** meta data to provide default values for certain keys as well as parses all descriptions
with the `Markdown Parser`
  - [`makeDirs`](#method-makedirs) Makes the default directories needed
  - [`_parseCode`](#method-_parsecode) Parses `<pre class="code prettyprint"><code>
` tags and adds the __prettyprint__ `className` to them
  - [`_inlineCode`](#method-_inlinecode) Ported from [Selleck](https://github.com/rgrove/selleck), this handles ```'s in fields
that are not parsed by the **Markdown** parser.
  - [`buildAPI`](#method-buildapi) build the uniform API to export the theme context
  - [`buildMembers`](#method-buildmembers) build the members
  - [`extendMembers`](#method-extendmembers) extends members array
  - [`buildMember`](#method-buildmember) build the member
  - [`getExpandIterator`](#method-getexpanditerator) generate expand function
  - [`expandMembersFromModules`](#method-expandmembersfrommodules) extends modules
  - [`expandMembersFromModules`](#method-expandmembersfrommodules) extends members from classes
  - [`getMethodName`](#method-getmethodname) build the method name by its name and parameters
  - [`getViewType`](#method-getviewtype) get dest view type md or html
  - [`getClassInheritanceTree`](#method-getclassinheritancetree) get class inheritance tree
  - [`appendClassToModule`](#method-appendclasstomodule) append the clazz to its module
  - [`render`](#method-render) Ported from [Selleck](https://github.com/rgrove/selleck)
Renders the handlebars templates with the default View class.
  - [`renderIndex`](#method-renderindex) Render the index file
  - [`writeIndex`](#method-writeindex) Generates the index.html file
  - [`renderModule`](#method-rendermodule) Render a module
  - [`writeModules`](#method-writemodules) Generates the module files under "out"/modules/
  - [`hasProperty`](#method-hasproperty) Checks an array of items (class items) to see if an item is in that list
  - [`mergeExtends`](#method-mergeextends) Merge superclass data into a child class
  - [`renderClass`](#method-renderclass) Render the class file
  - [`writeClasses`](#method-writeclasses) Generates the class files under "out"/classes/
  - [`nameSort`](#method-namesort) Sort method of array of objects with a property called __name__
  - [`writeFiles`](#method-writefiles) Generates the syntax files under `"out"/files/`
  - [`renderFile`](#method-renderfile) Render the source file
  - [`writeAPIMeta`](#method-writeapimeta) Write the API meta data used for the AutoComplete widget
  - [`renderAPIMeta`](#method-renderapimeta) Render the API meta and return the JavaScript
  - [`filterFileName`](#method-filterfilename) Normalizes a file path to a writable filename:

   var path = 'lib/file.js';
   returns 'lib_file.js';
  - [`compile`](#method-compile) Compiles the templates from the meta-data provided by DocParser





### Details


#### Properties


##### NATIVES

> List of native types to cross link to MDN

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/builder.js:271](../files/lib_builder.js.md#l271) |



##### filesCount

> File counter

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [lib/builder.js:446](../files/lib_builder.js.md#l446) |



##### _meta

> Holder for project meta data

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/builder.js:452](../files/lib_builder.js.md#l452) |



##### project

> Get the project to export

| meta | description |
|------|-------------|
| Type | Unknown |
| Defined | [lib/builder.js:1075](../files/lib_builder.js.md#l1075) |



##### i18n

> Get i18n object

| meta | description |
|------|-------------|
| Type | Unknown |
| Defined | [lib/builder.js:1090](../files/lib_builder.js.md#l1090) |



##### modules

> Get modules object to export

| meta | description |
|------|-------------|
| Type | Unknown |
| Defined | [lib/builder.js:1109](../files/lib_builder.js.md#l1109) |



##### classes

> Get classes object to export

| meta | description |
|------|-------------|
| Type | Unknown |
| Defined | [lib/builder.js:1131](../files/lib_builder.js.md#l1131) |



##### files

> Get files object to export

| meta | description |
|------|-------------|
| Type | Unknown |
| Defined | [lib/builder.js:1158](../files/lib_builder.js.md#l1158) |



##### _mergeCounter

> Counter for stepping into merges

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [lib/builder.js:1344](../files/lib_builder.js.md#l1344) |






<!-- Method Block -->
#### Methods


##### _addHelpers

Register a `Y.Handlebars` helper method

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:119](../files/lib_builder.js.md#l119) |

###### Parameters
- helpers <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Object containing a hash of names and functions


##### markdown

Wrapper around the Markdown parser so it can be normalized or even side stepped

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:136](../files/lib_builder.js.md#l136) |
| Return 		 | HTML 

###### Parameters
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The Markdown string to parse


##### _parseCrossLink

Parse the item to be cross linked and return an HREF linked to the item

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:164](../files/lib_builder.js.md#l164) |

###### Parameters
- item <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item to crossLink
- raw <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Do not wrap it in HTML
- content <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> crossLink helper content


##### NATIVES_LINKER

Function to link an external type uses `NATIVES` object

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:310](../files/lib_builder.js.md#l310) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the type to link


##### _mixExternal

Mixes the various external data soures together into the local data, augmenting
it with flags.

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:324](../files/lib_builder.js.md#l324) |



##### mixExternal

Fetches the remote data and fires the callback when it's all complete

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:371](../files/lib_builder.js.md#l371) |

###### Parameters
- cb Callback The callback to execute when complete


##### getProjectMeta

Prep the meta data to be fed to Selleck

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:459](../files/lib_builder.js.md#l459) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### populateClasses

Populate the meta data for classes

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:500](../files/lib_builder.js.md#l500) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### populateModules

Populate the meta data for modules

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:533](../files/lib_builder.js.md#l533) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### populateFiles

Populate the meta data for files

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:579](../files/lib_builder.js.md#l579) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### addFoundAt

Parses file and line number from an item object and build's an HREF

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:634](../files/lib_builder.js.md#l634) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to parse


##### augmentData

Augments the **DocParser** meta data to provide default values for certain keys as well as parses all descriptions
with the `Markdown Parser`

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:651](../files/lib_builder.js.md#l651) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- o <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to recurse and augment


##### makeDirs

Makes the default directories needed

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:710](../files/lib_builder.js.md#l710) |

###### Parameters
- cb Callback The callback to execute after it's completed


##### _parseCode

Parses `<pre class="code prettyprint"><code>
` tags and adds the __prettyprint__ `className` to them

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:760](../files/lib_builder.js.md#l760) |
| Return 		 | HTML 

###### Parameters
- html HTML The HTML to parse


##### _inlineCode

Ported from [Selleck](https://github.com/rgrove/selleck), this handles ```'s in fields
that are not parsed by the **Markdown** parser.

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:775](../files/lib_builder.js.md#l775) |
| Return 		 | HTML 

###### Parameters
- html HTML The HTML to parse


##### buildAPI

build the uniform API to export the theme context

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:795](../files/lib_builder.js.md#l795) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### buildMembers

build the members

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:829](../files/lib_builder.js.md#l829) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### extendMembers

extends members array

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:854](../files/lib_builder.js.md#l854) |
| Return 		 | unknown 



##### buildMember

build the member

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:871](../files/lib_builder.js.md#l871) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- memeber <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The member object
- forceBeMethod <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> force make the build process be for method
- parent <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The parent context


##### getExpandIterator

generate expand function

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:931](../files/lib_builder.js.md#l931) |

###### Parameters
- parent <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to be set


##### expandMembersFromModules

extends modules

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:955](../files/lib_builder.js.md#l955) |



##### expandMembersFromModules

extends members from classes

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:973](../files/lib_builder.js.md#l973) |



##### getMethodName

build the method name by its name and parameters

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:991](../files/lib_builder.js.md#l991) |

###### Parameters
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The function/method name
- params <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The function/method parameters list
	- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the parameter


##### getViewType

get dest view type md or html

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1005](../files/lib_builder.js.md#l1005) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



##### getClassInheritanceTree

get class inheritance tree

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1019](../files/lib_builder.js.md#l1019) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### appendClassToModule

append the clazz to its module

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1059](../files/lib_builder.js.md#l1059) |

###### Parameters
- clazz <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The class object
	- module <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The module name of this clazz object


##### render

Ported from [Selleck](https://github.com/rgrove/selleck)
Renders the handlebars templates with the default View class.

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1173](../files/lib_builder.js.md#l1173) |

###### Parameters
- source HTML The default template to parse
- view Class The default view handler
- layout HTML The HTML from the layout to use.
- partials <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> List of partials to include in this template
- callback Callback 
	- err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> 
	- html HTML The assembled template markup


##### renderIndex

Render the index file

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1224](../files/lib_builder.js.md#l1224) |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### writeIndex

Generates the index.html file

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1240](../files/lib_builder.js.md#l1240) |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write index view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### renderModule

Render a module

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1272](../files/lib_builder.js.md#l1272) |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### writeModules

Generates the module files under "out"/modules/

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1288](../files/lib_builder.js.md#l1288) |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write module view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### hasProperty

Checks an array of items (class items) to see if an item is in that list

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1327](../files/lib_builder.js.md#l1327) |
| Return 		 | unknown 

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The Array of items to check
- b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to find


##### mergeExtends

Merge superclass data into a child class

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1351](../files/lib_builder.js.md#l1351) |

###### Parameters
- info <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to extend
- classItems <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The list of items to merge in
- first <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Set for the first call


##### renderClass

Render the class file

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1405](../files/lib_builder.js.md#l1405) |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### writeClasses

Generates the class files under "out"/classes/

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1422](../files/lib_builder.js.md#l1422) |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write class view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### nameSort

Sort method of array of objects with a property called __name__

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1462](../files/lib_builder.js.md#l1462) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> First object to compare
- b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Second object to compare


##### writeFiles

Generates the syntax files under `"out"/files/`

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1485](../files/lib_builder.js.md#l1485) |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write file view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### renderFile

Render the source file

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1543](../files/lib_builder.js.md#l1543) |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### writeAPIMeta

Write the API meta data used for the AutoComplete widget

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1595](../files/lib_builder.js.md#l1595) |

###### Parameters
- cb Callback The callback to execute when complete


##### renderAPIMeta

Render the API meta and return the JavaScript

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1608](../files/lib_builder.js.md#l1608) |

###### Parameters
- cb Callback The callback
	- apijs <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The JavaScript code to write API meta data


##### filterFileName

Normalizes a file path to a writable filename:

   var path = 'lib/file.js';
   returns 'lib_file.js';

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1640](../files/lib_builder.js.md#l1640) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- f <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The filename to normalize


##### compile

Compiles the templates from the meta-data provided by DocParser

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1653](../files/lib_builder.js.md#l1653) |

###### Parameters
- cb Callback The callback to execute after it's completed



