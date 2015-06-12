
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
| Defined | [lib/builder.js:272](../files/lib_builder.js.md#l272) |




##### property: `files`



| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [lib/builder.js:447](../files/lib_builder.js.md#l447) |




##### property: `_meta`



| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/builder.js:453](../files/lib_builder.js.md#l453) |




##### property: `project`



| meta | description |
|------|-------------|
| Type | Unknown |
| Defined | [lib/builder.js:1068](../files/lib_builder.js.md#l1068) |




##### property: `i18n`



| meta | description |
|------|-------------|
| Type | Unknown |
| Defined | [lib/builder.js:1083](../files/lib_builder.js.md#l1083) |




##### property: `modules`



| meta | description |
|------|-------------|
| Type | Unknown |
| Defined | [lib/builder.js:1102](../files/lib_builder.js.md#l1102) |




##### property: `classes`



| meta | description |
|------|-------------|
| Type | Unknown |
| Defined | [lib/builder.js:1124](../files/lib_builder.js.md#l1124) |




##### property: `files`



| meta | description |
|------|-------------|
| Type | Unknown |
| Defined | [lib/builder.js:1151](../files/lib_builder.js.md#l1151) |




##### property: `_mergeCounter`



| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [lib/builder.js:1337](../files/lib_builder.js.md#l1337) |






<!-- Method Block -->
#### Methods


##### method: `_addHelpers`

Register a `Y.Handlebars` helper method

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:121](../files/lib_builder.js.md#l121) |

###### Parameters
- helpers <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Object containing a hash of names and functions


##### method: `markdown`

Wrapper around the Markdown parser so it can be normalized or even side stepped

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:138](../files/lib_builder.js.md#l138) |
| Return 		 | HTML 

###### Parameters
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The Markdown string to parse


##### method: `_parseCrossLink`

Parse the item to be cross linked and return an HREF linked to the item

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:166](../files/lib_builder.js.md#l166) |

###### Parameters
- item <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item to crossLink
- raw <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Do not wrap it in HTML
- content <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> crossLink helper content


##### method: `NATIVES_LINKER`

Function to link an external type uses `NATIVES` object

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:311](../files/lib_builder.js.md#l311) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the type to link


##### method: `_mixExternal`

Mixes the various external data soures together into the local data, augmenting
it with flags.

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:325](../files/lib_builder.js.md#l325) |



##### method: `mixExternal`

Fetches the remote data and fires the callback when it's all complete

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:372](../files/lib_builder.js.md#l372) |

###### Parameters
- cb Callback The callback to execute when complete


##### method: `getProjectMeta`

Prep the meta data to be fed to Selleck

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:460](../files/lib_builder.js.md#l460) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### method: `populateClasses`

Populate the meta data for classes

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:501](../files/lib_builder.js.md#l501) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### method: `populateModules`

Populate the meta data for modules

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:534](../files/lib_builder.js.md#l534) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### method: `populateFiles`

Populate the meta data for files

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:580](../files/lib_builder.js.md#l580) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### method: `addFoundAt`

Parses file and line number from an item object and build's an HREF

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:635](../files/lib_builder.js.md#l635) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to parse


##### method: `augmentData`

Augments the **DocParser** meta data to provide default values for certain keys as well as parses all descriptions
with the `Markdown Parser`

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:652](../files/lib_builder.js.md#l652) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- o <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to recurse and augment


##### method: `makeDirs`

Makes the default directories needed

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:711](../files/lib_builder.js.md#l711) |

###### Parameters
- cb Callback The callback to execute after it's completed


##### method: `_parseCode`

Parses `<pre class="code prettyprint"><code>` tags and adds the __prettyprint__ `className` to them

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:761](../files/lib_builder.js.md#l761) |
| Return 		 | HTML 

###### Parameters
- html HTML The HTML to parse


##### method: `_inlineCode`

Ported from [Selleck](https://github.com/rgrove/selleck), this handles ```'s in fields
that are not parsed by the **Markdown** parser.

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:774](../files/lib_builder.js.md#l774) |
| Return 		 | HTML 

###### Parameters
- html HTML The HTML to parse


##### method: `buildAPI`

build the uniform API to export the theme context

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:794](../files/lib_builder.js.md#l794) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### method: `buildMembers`

build the members

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:828](../files/lib_builder.js.md#l828) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 



##### method: `extendMembers`

extends members array

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:853](../files/lib_builder.js.md#l853) |
| Return 		 |  



##### method: `buildMember`

build the member

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:870](../files/lib_builder.js.md#l870) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- memeber <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The member object
- forceBeMethod <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> force make the build process be for method
- parent <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The parent context


##### method: `getExpandIterator`

generate expand function

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:924](../files/lib_builder.js.md#l924) |

###### Parameters
- parent <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to be set


##### method: `expandMembersFromModules`

extends modules

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:948](../files/lib_builder.js.md#l948) |



##### method: `expandMembersFromModules`

extends members from classes

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:966](../files/lib_builder.js.md#l966) |



##### method: `getMethodName`

build the method name by its name and parameters

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:984](../files/lib_builder.js.md#l984) |

###### Parameters
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The function/method name
- params <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The function/method parameters list
	- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the parameter


##### method: `getViewType`

get dest view type md or html

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:998](../files/lib_builder.js.md#l998) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 



##### method: `getClassInheritanceTree`

get class inheritance tree

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1012](../files/lib_builder.js.md#l1012) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### method: `appendClassToModule`

append the clazz to its module

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1052](../files/lib_builder.js.md#l1052) |

###### Parameters
- clazz <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The class object
	- module <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The module name of this clazz object


##### method: `render`

Ported from [Selleck](https://github.com/rgrove/selleck)
Renders the handlebars templates with the default View class.

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1166](../files/lib_builder.js.md#l1166) |

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
| Defined | [lib/builder.js:1217](../files/lib_builder.js.md#l1217) |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `writeIndex`

Generates the index.html file

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1233](../files/lib_builder.js.md#l1233) |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write index view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `renderModule`

Render a module

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1265](../files/lib_builder.js.md#l1265) |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `writeModules`

Generates the module files under "out"/modules/

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1281](../files/lib_builder.js.md#l1281) |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write module view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `hasProperty`

Checks an array of items (class items) to see if an item is in that list

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1320](../files/lib_builder.js.md#l1320) |
| Return 		 |  

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The Array of items to check
- b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to find


##### method: `mergeExtends`

Merge superclass data into a child class

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1344](../files/lib_builder.js.md#l1344) |

###### Parameters
- info <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to extend
- classItems <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The list of items to merge in
- first <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Set for the first call


##### method: `renderClass`

Render the class file

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1398](../files/lib_builder.js.md#l1398) |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `writeClasses`

Generates the class files under "out"/classes/

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1415](../files/lib_builder.js.md#l1415) |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write class view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `nameSort`

Sort method of array of objects with a property called __name__

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1455](../files/lib_builder.js.md#l1455) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> First object to compare
- b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Second object to compare


##### method: `writeFiles`

Generates the syntax files under `"out"/files/`

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1478](../files/lib_builder.js.md#l1478) |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write file view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `renderFile`

Render the source file

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1536](../files/lib_builder.js.md#l1536) |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `writeAPIMeta`

Write the API meta data used for the AutoComplete widget

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1588](../files/lib_builder.js.md#l1588) |

###### Parameters
- cb Callback The callback to execute when complete


##### method: `renderAPIMeta`

Render the API meta and return the JavaScript

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1601](../files/lib_builder.js.md#l1601) |

###### Parameters
- cb Callback The callback
	- apijs <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The JavaScript code to write API meta data


##### method: `filterFileName`

Normalizes a file path to a writable filename:

   var path = 'lib/file.js';
   returns 'lib_file.js';

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1633](../files/lib_builder.js.md#l1633) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- f <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The filename to normalize


##### method: `compile`

Compiles the templates from the meta-data provided by DocParser

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1646](../files/lib_builder.js.md#l1646) |

###### Parameters
- cb Callback The callback to execute after it's completed



