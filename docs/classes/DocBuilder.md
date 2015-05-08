
# firedoc 0.8.18

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `DocBuilder` Class


Defined in: [lib/builder.js:13](../files/lib/builder.js.js)

Module: [yuidoc](../modules/yuidoc.md)




Takes the `JSON` data from the `DocParser` class, creates and parses markdown and handlebars
based templates to generate static HTML content

### Index

##### Properties

  - `_mergeCounter`
  - `_meta`
  - `files`
  - `NATIVES`



##### Methods

  - `_addHelpers`
  - `_inlineCode`
  - `_mixExternal`
  - `_parseCode`
  - `_parseCrossLink`
  - `addFoundAt`
  - `augmentData`
  - `compile`
  - `filterFileName`
  - `getProjectMeta`
  - `hasProperty`
  - `makeDirs`
  - `markdown`
  - `mergeExtends`
  - `mixExternal`
  - `nameSort`
  - `NATIVES_LINKER`
  - `populateClasses`
  - `populateFiles`
  - `populateModules`
  - `render`
  - `renderAPIMeta`
  - `renderClass`
  - `renderFile`
  - `renderIndex`
  - `renderModule`
  - `writeAPIMeta`
  - `writeClasses`
  - `writeFiles`
  - `writeIndex`
  - `writeModules`





### Details


#### Properties



##### property: `_mergeCounter`

Counter for stepping into merges

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | `lib/builder.js:1082` |




##### property: `_meta`

Holder for project meta data

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | `lib/builder.js:451` |




##### property: `files`

File counter

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| Defined | `lib/builder.js:445` |




##### property: `NATIVES`

List of native types to cross link to MDN

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | `lib/builder.js:270` |






<!-- Method Block -->
#### Methods


##### method: `_addHelpers()`

Register a `Y.Handlebars` helper method

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:121` |

###### Parameters
- helpers <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Object containing a hash of names and functions


##### method: `_inlineCode()`

Ported from [Selleck](https://github.com/rgrove/selleck), this handles ```'s in fields
that are not parsed by the **Markdown** parser.

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:771` |
| Return 		 | HTML 

###### Parameters
- html HTML The HTML to parse


##### method: `_mixExternal()`

Mixes the various external data soures together into the local data, augmenting
it with flags.

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:323` |



##### method: `_parseCode()`

Parses `<pre class="code prettyprint"><code>` tags and adds the __prettyprint__ `className` to them

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:758` |
| Return 		 | HTML 

###### Parameters
- html HTML The HTML to parse


##### method: `_parseCrossLink()`

Parse the item to be cross linked and return an HREF linked to the item

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:166` |

###### Parameters
- item <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item to crossLink
- raw <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Do not wrap it in HTML
- content <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> crossLink helper content


##### method: `addFoundAt()`

Parses file and line number from an item object and build's an HREF

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:633` |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to parse


##### method: `augmentData()`

Augments the **DocParser** meta data to provide default values for certain keys as well as parses all descriptions
with the `Markdown Parser`

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:649` |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- o <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to recurse and augment


##### method: `compile()`

Compiles the templates from the meta-data provided by DocParser

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:1734` |

###### Parameters
- cb Callback The callback to execute after it's completed


##### method: `filterFileName()`

Normalizes a file path to a writable filename:

   var path = 'lib/file.js';
   returns 'lib_file.js';

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:1721` |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- f <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The filename to normalize


##### method: `getProjectMeta()`

Prep the meta data to be fed to Selleck

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:458` |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### method: `hasProperty()`

Checks an array of items (class items) to see if an item is in that list

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:1065` |
| Return 		 |  

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The Array of items to check
- b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to find


##### method: `makeDirs()`

Makes the default directories needed

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:708` |

###### Parameters
- cb Callback The callback to execute after it's completed


##### method: `markdown()`

Wrapper around the Markdown parser so it can be normalized or even side stepped

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:138` |
| Return 		 | HTML 

###### Parameters
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The Markdown string to parse


##### method: `mergeExtends()`

Merge superclass data into a child class

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:1089` |

###### Parameters
- info <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to extend
- classItems <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The list of items to merge in
- first <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Set for the first call


##### method: `mixExternal()`

Fetches the remote data and fires the callback when it's all complete

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:370` |

###### Parameters
- cb Callback The callback to execute when complete


##### method: `nameSort()`

Sort method of array of objects with a property called __name__

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:1542` |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 

###### Parameters
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> First object to compare
- b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Second object to compare


##### method: `NATIVES_LINKER()`

Function to link an external type uses `NATIVES` object

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:309` |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the type to link


##### method: `populateClasses()`

Populate the meta data for classes

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:499` |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### method: `populateFiles()`

Populate the meta data for files

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:578` |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### method: `populateModules()`

Populate the meta data for modules

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:532` |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options


##### method: `render()`

Ported from [Selleck](https://github.com/rgrove/selleck)
Renders the handlebars templates with the default View class.

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:790` |

###### Parameters
- source HTML The default template to parse
- view Class The default view handler
- layout HTML The HTML from the layout to use.
- partials <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> List of partials to include in this template
- callback Callback  
	- err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> 
	- html HTML The assembled template markup


##### method: `renderAPIMeta()`

Render the API meta and return the JavaScript

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:1688` |

###### Parameters
- cb Callback The callback
	- apijs <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The JavaScript code to write API meta data


##### method: `renderClass()`

Render the class file

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:1140` |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `renderFile()`

Render the source file

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:1623` |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `renderIndex()`

Render the index file

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:843` |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `renderModule()`

Render a module

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:901` |

###### Parameters
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `writeAPIMeta()`

Write the API meta data used for the AutoComplete widget

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:1675` |

###### Parameters
- cb Callback The callback to execute when complete


##### method: `writeClasses()`

Generates the class files under "out"/classes/

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:1493` |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write class view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `writeFiles()`

Generates the syntax files under `"out"/files/`

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:1565` |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write file view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `writeIndex()`

Generates the index.html file

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:869` |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write index view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data


##### method: `writeModules()`

Generates the module files under "out"/modules/

| meta | description |
|------|-------------|
| Defined | `lib/builder.js:1017` |

###### Parameters
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write module view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data



