
# firedoc 1.0.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `DocBuilder` Class


Defined in: [lib/builder.js:13](../files/lib/builder.js.js)

Module: [yuidoc](../modules/yuidoc.md)




Takes the `JSON` data from the `DocParser` class, creates and parses markdown and handlebars
based templates to generate static HTML content

### Index

##### Properties

  - [`_mergeCounter`](#property-_mergecounter)
  - [`_meta`](#property-_meta)
  - [`files`](#property-files)
  - [`NATIVES`](#property-natives)



##### Methods

  - [`_addHelpers(helpers)`](#method-_addhelpershelpers)
  - [`_inlineCode(html)`](#method-_inlinecodehtml)
  - [`_mixExternal()`](#method-_mixexternal)
  - [`_parseCode(html)`](#method-_parsecodehtml)
  - [`_parseCrossLink(item, [raw=false], [content])`](#method-_parsecrosslinkitem-rawfalse-content)
  - [`addFoundAt(a)`](#method-addfoundata)
  - [`augmentData(o)`](#method-augmentdatao)
  - [`compile(cb)`](#method-compilecb)
  - [`filterFileName(f)`](#method-filterfilenamef)
  - [`getProjectMeta()`](#method-getprojectmeta)
  - [`hasProperty(a, b)`](#method-haspropertya-b)
  - [`makeDirs(cb)`](#method-makedirscb)
  - [`markdown(data)`](#method-markdowndata)
  - [`mergeExtends(info, classItems, first)`](#method-mergeextendsinfo-classitems-first)
  - [`mixExternal(cb)`](#method-mixexternalcb)
  - [`nameSort(a, b)`](#method-namesorta-b)
  - [`NATIVES_LINKER(name)`](#method-natives_linkername)
  - [`populateClasses(opts)`](#method-populateclassesopts)
  - [`populateFiles(opts)`](#method-populatefilesopts)
  - [`populateModules(opts)`](#method-populatemodulesopts)
  - [`render(source, view, [layout=null], [partials={}], callback)`](#method-rendersource-view-layoutnull-partials{}-callback)
  - [`renderAPIMeta(cb)`](#method-renderapimetacb)
  - [`renderClass(cb)`](#method-renderclasscb)
  - [`renderFile(cb)`](#method-renderfilecb)
  - [`renderIndex(cb)`](#method-renderindexcb)
  - [`renderModule(cb)`](#method-rendermodulecb)
  - [`writeAPIMeta(cb)`](#method-writeapimetacb)
  - [`writeClasses(cb)`](#method-writeclassescb)
  - [`writeFiles(cb)`](#method-writefilescb)
  - [`writeIndex(cb)`](#method-writeindexcb)
  - [`writeModules(cb)`](#method-writemodulescb)





### Details


#### Properties



##### property: `_mergeCounter`

Counter for stepping into merges

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [lib/builder.js:1097](../files/lib_builder.js.md#l1097) |




##### property: `_meta`

Holder for project meta data

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/builder.js:453](../files/lib_builder.js.md#l453) |




##### property: `files`

File counter

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | [lib/builder.js:447](../files/lib_builder.js.md#l447) |




##### property: `NATIVES`

List of native types to cross link to MDN

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/builder.js:272](../files/lib_builder.js.md#l272) |






<!-- Method Block -->
#### Methods


##### method: `_addHelpers(helpers)`

Register a `Y.Handlebars` helper method

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:121](../files/lib_builder.js.md#l121) |

###### Parameters
- helpers <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Object containing a hash of names and functions


##### method: `_inlineCode(html)`

Ported from [Selleck](https://github.com/rgrove/selleck), this handles ```'s in fields
that are not parsed by the **Markdown** parser.

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:774](../files/lib_builder.js.md#l774) |
| Return 		 | HTML 

###### Parameters
- html HTML The HTML to parse


##### method: `_mixExternal()`

Mixes the various external data soures together into the local data, augmenting
it with flags.

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:325](../files/lib_builder.js.md#l325) |



##### method: `_parseCode(html)`

Parses `<pre class="code prettyprint"><code>` tags and adds the __prettyprint__ `className` to them

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:761](../files/lib_builder.js.md#l761) |
| Return 		 | HTML 

###### Parameters
- html HTML The HTML to parse


##### method: `_parseCrossLink(item, [raw=false], [content])`

Parse the item to be cross linked and return an HREF linked to the item

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:166](../files/lib_builder.js.md#l166) |

###### Parameters
- item <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item to crossLink
- raw <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Do not wrap it in HTML
- content <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> crossLink helper content


##### method: `addFoundAt(a)`

Parses file and line number from an item object and build's an HREF

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:635](../files/lib_builder.js.md#l635) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to parse


##### method: `augmentData(o)`

Augments the **DocParser** meta data to provide default values for certain keys as well as parses all descriptions
with the `Markdown Parser`

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:652](../files/lib_builder.js.md#l652) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- o <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to recurse and augment


##### method: `compile(cb)`

Compiles the templates from the meta-data provided by DocParser

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1759](../files/lib_builder.js.md#l1759) |

###### Parameters
- cb Callback The callback to execute after it's completed


##### method: `filterFileName(f)`

Normalizes a file path to a writable filename:

   var path = 'lib/file.js';
   returns 'lib_file.js';

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1746](../files/lib_builder.js.md#l1746) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- f <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The filename to normalize


##### method: `getProjectMeta()`

Prep the meta data to be fed to Selleck

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:460](../files/lib_builder.js.md#l460) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### method: `hasProperty(a, b)`

Checks an array of items (class items) to see if an item is in that list

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1080](../files/lib_builder.js.md#l1080) |
| Return 		 |  

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The Array of items to check
- b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to find


##### method: `makeDirs(cb)`

Makes the default directories needed

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:711](../files/lib_builder.js.md#l711) |

###### Parameters
- cb Callback The callback to execute after it's completed


##### method: `markdown(data)`

Wrapper around the Markdown parser so it can be normalized or even side stepped

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:138](../files/lib_builder.js.md#l138) |
| Return 		 | HTML 

###### Parameters
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The Markdown string to parse


##### method: `mergeExtends(info, classItems, first)`

Merge superclass data into a child class

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1104](../files/lib_builder.js.md#l1104) |

###### Parameters
- info <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to extend
- classItems <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The list of items to merge in
- first <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Set for the first call


##### method: `mixExternal(cb)`

Fetches the remote data and fires the callback when it's all complete

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:372](../files/lib_builder.js.md#l372) |

###### Parameters
- cb Callback The callback to execute when complete


##### method: `nameSort(a, b)`

Sort method of array of objects with a property called __name__

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1567](../files/lib_builder.js.md#l1567) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> First object to compare
- b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Second object to compare


##### method: `NATIVES_LINKER(name)`

Function to link an external type uses `NATIVES` object

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:311](../files/lib_builder.js.md#l311) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the type to link


##### method: `populateClasses(opts)`

Populate the meta data for classes

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:501](../files/lib_builder.js.md#l501) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### method: `populateFiles(opts)`

Populate the meta data for files

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:580](../files/lib_builder.js.md#l580) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### method: `populateModules(opts)`

Populate the meta data for modules

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:534](../files/lib_builder.js.md#l534) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### method: `render(source, view, [layout=null], [partials={}], callback)`

Ported from [Selleck](https://github.com/rgrove/selleck)
Renders the handlebars templates with the default View class.

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:793](../files/lib_builder.js.md#l793) |

###### Parameters
- source HTML The default template to parse
- view Class The default view handler
- layout HTML The HTML from the layout to use.
- partials <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> List of partials to include in this template
- callback Callback  
	- err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> 
	- html HTML The assembled template markup


##### method: `renderAPIMeta(cb)`

Render the API meta and return the JavaScript

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1713](../files/lib_builder.js.md#l1713) |

###### Parameters
- cb Callback The callback
	- apijs <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The JavaScript code to write API meta data


##### method: `renderClass(cb)`

Render the class file

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1155](../files/lib_builder.js.md#l1155) |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `renderFile(cb)`

Render the source file

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1648](../files/lib_builder.js.md#l1648) |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `renderIndex(cb)`

Render the index file

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:846](../files/lib_builder.js.md#l846) |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `renderModule(cb)`

Render a module

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:904](../files/lib_builder.js.md#l904) |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `writeAPIMeta(cb)`

Write the API meta data used for the AutoComplete widget

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1700](../files/lib_builder.js.md#l1700) |

###### Parameters
- cb Callback The callback to execute when complete


##### method: `writeClasses(cb)`

Generates the class files under "out"/classes/

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1518](../files/lib_builder.js.md#l1518) |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write class view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `writeFiles(cb)`

Generates the syntax files under `"out"/files/`

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1590](../files/lib_builder.js.md#l1590) |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write file view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `writeIndex(cb)`

Generates the index.html file

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:872](../files/lib_builder.js.md#l872) |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write index view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `writeModules(cb)`

Generates the module files under "out"/modules/

| meta | description |
|------|-------------|
| Defined | [lib/builder.js:1032](../files/lib_builder.js.md#l1032) |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write module view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data



