
# Fireball Engine API

Fireball is the game engine for the future.

### `DocBuilder` Class


Defined in: [lib/builder.js:13](../files/lib/builder.js.js)

Module: [yuidoc](../modules/yuidoc.md)




Takes the `JSON` data from the `DocParser` class, creates and parses markdown and handlebars
based templates to generate static HTML content

### Index

##### Properties

  - [`NATIVES`](#property-natives)
  - [`files`](#property-files)
  - [`_meta`](#property-_meta)
  - [`project`](#property-project)
  - [`i18n`](#property-i18n)
  - [`modules`](#property-modules)
  - [`classes`](#property-classes)
  - [`files`](#property-files)
  - [`_mergeCounter`](#property-_mergecounter)



##### Methods

  - [`_addHelpers`](#method-_addhelpers)
  - [`markdown`](#method-markdown)
  - [`_parseCrossLink`](#method-_parsecrosslink)
  - [`NATIVES_LINKER`](#method-natives_linker)
  - [`_mixExternal`](#method-_mixexternal)
  - [`mixExternal`](#method-mixexternal)
  - [`getProjectMeta`](#method-getprojectmeta)
  - [`populateClasses`](#method-populateclasses)
  - [`populateModules`](#method-populatemodules)
  - [`populateFiles`](#method-populatefiles)
  - [`addFoundAt`](#method-addfoundat)
  - [`augmentData`](#method-augmentdata)
  - [`makeDirs`](#method-makedirs)
  - [`_parseCode`](#method-_parsecode)
  - [`_inlineCode`](#method-_inlinecode)
  - [`buildAPI`](#method-buildapi)
  - [`buildMembers`](#method-buildmembers)
  - [`extendMembers`](#method-extendmembers)
  - [`buildMember`](#method-buildmember)
  - [`getExpandIterator`](#method-getexpanditerator)
  - [`expandMembersFromModules`](#method-expandmembersfrommodules)
  - [`expandMembersFromModules`](#method-expandmembersfrommodules)
  - [`getMethodName`](#method-getmethodname)
  - [`getViewType`](#method-getviewtype)
  - [`getClassInheritanceTree`](#method-getclassinheritancetree)
  - [`appendClassToModule`](#method-appendclasstomodule)
  - [`render`](#method-render)
  - [`renderIndex`](#method-renderindex)
  - [`writeIndex`](#method-writeindex)
  - [`renderModule`](#method-rendermodule)
  - [`writeModules`](#method-writemodules)
  - [`hasProperty`](#method-hasproperty)
  - [`mergeExtends`](#method-mergeextends)
  - [`renderClass`](#method-renderclass)
  - [`writeClasses`](#method-writeclasses)
  - [`nameSort`](#method-namesort)
  - [`writeFiles`](#method-writefiles)
  - [`renderFile`](#method-renderfile)
  - [`writeAPIMeta`](#method-writeapimeta)
  - [`renderAPIMeta`](#method-renderapimeta)
  - [`filterFileName`](#method-filterfilename)
  - [`compile`](#method-compile)





### Details


#### Properties



##### property: `NATIVES`



| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/builder.js:271](../files/lib_builder.js.md#l271) |




##### property: `files`



| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [lib/builder.js:446](../files/lib_builder.js.md#l446) |




##### property: `_meta`



| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/builder.js:452](../files/lib_builder.js.md#l452) |




##### property: `project`



| meta | description |
|------|-------------|
| Type | Unknown |
| Defined | [lib/builder.js:1073](../files/lib_builder.js.md#l1073) |




##### property: `i18n`



| meta | description |
|------|-------------|
| Type | Unknown |
| Defined | [lib/builder.js:1088](../files/lib_builder.js.md#l1088) |




##### property: `modules`



| meta | description |
|------|-------------|
| Type | Unknown |
| Defined | [lib/builder.js:1107](../files/lib_builder.js.md#l1107) |




##### property: `classes`



| meta | description |
|------|-------------|
| Type | Unknown |
| Defined | [lib/builder.js:1129](../files/lib_builder.js.md#l1129) |




##### property: `files`



| meta | description |
|------|-------------|
| Type | Unknown |
| Defined | [lib/builder.js:1156](../files/lib_builder.js.md#l1156) |




##### property: `_mergeCounter`



| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [lib/builder.js:1342](../files/lib_builder.js.md#l1342) |






<!-- Method Block -->
#### Methods


##### method: `_addHelpers`

Register a `Y.Handlebars` helper method

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:120](../files/lib_builder.js.md#l120) |

###### Parameters
- helpers <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Object containing a hash of names and functions


##### method: `markdown`

Wrapper around the Markdown parser so it can be normalized or even side stepped

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:137](../files/lib_builder.js.md#l137) |
| Return 		 | HTML 

###### Parameters
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The Markdown string to parse


##### method: `_parseCrossLink`

Parse the item to be cross linked and return an HREF linked to the item

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:165](../files/lib_builder.js.md#l165) |

###### Parameters
- item <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item to crossLink
- raw <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Do not wrap it in HTML
- content <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> crossLink helper content


##### method: `NATIVES_LINKER`

Function to link an external type uses `NATIVES` object

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:310](../files/lib_builder.js.md#l310) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the type to link


##### method: `_mixExternal`

Mixes the various external data soures together into the local data, augmenting
it with flags.

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:324](../files/lib_builder.js.md#l324) |



##### method: `mixExternal`

Fetches the remote data and fires the callback when it's all complete

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:371](../files/lib_builder.js.md#l371) |

###### Parameters
- cb Callback The callback to execute when complete


##### method: `getProjectMeta`

Prep the meta data to be fed to Selleck

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:459](../files/lib_builder.js.md#l459) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### method: `populateClasses`

Populate the meta data for classes

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:500](../files/lib_builder.js.md#l500) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### method: `populateModules`

Populate the meta data for modules

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:533](../files/lib_builder.js.md#l533) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### method: `populateFiles`

Populate the meta data for files

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:579](../files/lib_builder.js.md#l579) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### method: `addFoundAt`

Parses file and line number from an item object and build's an HREF

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:634](../files/lib_builder.js.md#l634) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to parse


##### method: `augmentData`

Augments the **DocParser** meta data to provide default values for certain keys as well as parses all descriptions
with the `Markdown Parser`

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:651](../files/lib_builder.js.md#l651) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- o <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to recurse and augment


##### method: `makeDirs`

Makes the default directories needed

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:710](../files/lib_builder.js.md#l710) |

###### Parameters
- cb Callback The callback to execute after it's completed


##### method: `_parseCode`

Parses `<pre class="code prettyprint"><code>` tags and adds the __prettyprint__ `className` to them

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:760](../files/lib_builder.js.md#l760) |
| Return 		 | HTML 

###### Parameters
- html HTML The HTML to parse


##### method: `_inlineCode`

Ported from [Selleck](https://github.com/rgrove/selleck), this handles ```'s in fields
that are not parsed by the **Markdown** parser.

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:773](../files/lib_builder.js.md#l773) |
| Return 		 | HTML 

###### Parameters
- html HTML The HTML to parse


##### method: `buildAPI`

build the uniform API to export the theme context

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:793](../files/lib_builder.js.md#l793) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### method: `buildMembers`

build the members

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:827](../files/lib_builder.js.md#l827) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### method: `extendMembers`

extends members array

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:852](../files/lib_builder.js.md#l852) |
| Return 		 |  



##### method: `buildMember`

build the member

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:869](../files/lib_builder.js.md#l869) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- memeber <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The member object
- forceBeMethod <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> force make the build process be for method
- parent <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The parent context


##### method: `getExpandIterator`

generate expand function

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:929](../files/lib_builder.js.md#l929) |

###### Parameters
- parent <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to be set


##### method: `expandMembersFromModules`

extends modules

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:953](../files/lib_builder.js.md#l953) |



##### method: `expandMembersFromModules`

extends members from classes

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:971](../files/lib_builder.js.md#l971) |



##### method: `getMethodName`

build the method name by its name and parameters

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:989](../files/lib_builder.js.md#l989) |

###### Parameters
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The function/method name
- params <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The function/method parameters list
	- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the parameter


##### method: `getViewType`

get dest view type md or html

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1003](../files/lib_builder.js.md#l1003) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



##### method: `getClassInheritanceTree`

get class inheritance tree

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1017](../files/lib_builder.js.md#l1017) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### method: `appendClassToModule`

append the clazz to its module

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1057](../files/lib_builder.js.md#l1057) |

###### Parameters
- clazz <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The class object
	- module <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The module name of this clazz object


##### method: `render`

Ported from [Selleck](https://github.com/rgrove/selleck)
Renders the handlebars templates with the default View class.

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1171](../files/lib_builder.js.md#l1171) |

###### Parameters
- source HTML The default template to parse
- view Class The default view handler
- layout HTML The HTML from the layout to use.
- partials <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> List of partials to include in this template
- callback Callback 
	- err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> 
	- html HTML The assembled template markup


##### method: `renderIndex`

Render the index file

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1222](../files/lib_builder.js.md#l1222) |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `writeIndex`

Generates the index.html file

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1238](../files/lib_builder.js.md#l1238) |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write index view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `renderModule`

Render a module

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1270](../files/lib_builder.js.md#l1270) |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `writeModules`

Generates the module files under "out"/modules/

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1286](../files/lib_builder.js.md#l1286) |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write module view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `hasProperty`

Checks an array of items (class items) to see if an item is in that list

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1325](../files/lib_builder.js.md#l1325) |
| Return 		 |  

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The Array of items to check
- b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to find


##### method: `mergeExtends`

Merge superclass data into a child class

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1349](../files/lib_builder.js.md#l1349) |

###### Parameters
- info <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to extend
- classItems <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The list of items to merge in
- first <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Set for the first call


##### method: `renderClass`

Render the class file

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1403](../files/lib_builder.js.md#l1403) |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `writeClasses`

Generates the class files under "out"/classes/

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1420](../files/lib_builder.js.md#l1420) |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write class view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `nameSort`

Sort method of array of objects with a property called __name__

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1460](../files/lib_builder.js.md#l1460) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> First object to compare
- b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Second object to compare


##### method: `writeFiles`

Generates the syntax files under `"out"/files/`

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1483](../files/lib_builder.js.md#l1483) |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write file view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `renderFile`

Render the source file

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1541](../files/lib_builder.js.md#l1541) |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `writeAPIMeta`

Write the API meta data used for the AutoComplete widget

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1593](../files/lib_builder.js.md#l1593) |

###### Parameters
- cb Callback The callback to execute when complete


##### method: `renderAPIMeta`

Render the API meta and return the JavaScript

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1606](../files/lib_builder.js.md#l1606) |

###### Parameters
- cb Callback The callback
	- apijs <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The JavaScript code to write API meta data


##### method: `filterFileName`

Normalizes a file path to a writable filename:

   var path = 'lib/file.js';
   returns 'lib_file.js';

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1638](../files/lib_builder.js.md#l1638) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- f <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The filename to normalize


##### method: `compile`

Compiles the templates from the meta-data provided by DocParser

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1651](../files/lib_builder.js.md#l1651) |

###### Parameters
- cb Callback The callback to execute after it's completed



