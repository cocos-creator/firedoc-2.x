
# firedoc 0.8.15

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



- `_mergeCounter`

|      | description |
|------|-------------|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| defined | `lib/builder.js:1082` |
| description | Counter for stepping into merges |




- `_meta`

|      | description |
|------|-------------|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| defined | `lib/builder.js:451` |
| description | Holder for project meta data |




- `files`

|      | description |
|------|-------------|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> |
| defined | `lib/builder.js:445` |
| description | File counter |




- `NATIVES`

|      | description |
|------|-------------|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| defined | `lib/builder.js:270` |
| description | List of native types to cross link to MDN |






<!-- Method Block -->
#### Methods


--------------------------
#### _addHelpers() 

Defined in `lib/builder.js:121`



> Register a `Y.Handlebars` helper method

**Parameters**
- helpers <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Object containing a hash of names and functions



--------------------------
#### _inlineCode() 

Defined in `lib/builder.js:771`



> Ported from [Selleck](https://github.com/rgrove/selleck), this handles ```'s in fields
that are not parsed by the **Markdown** parser.

**Parameters**
- html HTML The HTML to parse

**Returns**
HTML 


--------------------------
#### _mixExternal() 

Defined in `lib/builder.js:323`



> Mixes the various external data soures together into the local data, augmenting
it with flags.




--------------------------
#### _parseCode() 

Defined in `lib/builder.js:758`



> Parses `<pre class="code prettyprint"><code>` tags and adds the __prettyprint__ `className` to them

**Parameters**
- html HTML The HTML to parse

**Returns**
HTML 


--------------------------
#### _parseCrossLink() 

Defined in `lib/builder.js:166`



> Parse the item to be cross linked and return an HREF linked to the item

**Parameters**
- item <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item to crossLink
- raw <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Do not wrap it in HTML
- content <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> crossLink helper content



--------------------------
#### addFoundAt() 

Defined in `lib/builder.js:633`



> Parses file and line number from an item object and build's an HREF

**Parameters**
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to parse

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


--------------------------
#### augmentData() 

Defined in `lib/builder.js:649`



> Augments the **DocParser** meta data to provide default values for certain keys as well as parses all descriptions
with the `Markdown Parser`

**Parameters**
- o <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to recurse and augment

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


--------------------------
#### compile() 

Defined in `lib/builder.js:1734`



> Compiles the templates from the meta-data provided by DocParser

**Parameters**
- cb Callback The callback to execute after it's completed



--------------------------
#### filterFileName() 

Defined in `lib/builder.js:1721`



> Normalizes a file path to a writable filename:

   var path = 'lib/file.js';
   returns 'lib_file.js';

**Parameters**
- f <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The filename to normalize

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


--------------------------
#### getProjectMeta() 

Defined in `lib/builder.js:458`



> Prep the meta data to be fed to Selleck


**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


--------------------------
#### hasProperty() 

Defined in `lib/builder.js:1065`



> Checks an array of items (class items) to see if an item is in that list

**Parameters**
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The Array of items to check
- b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to find

**Returns**
 


--------------------------
#### makeDirs() 

Defined in `lib/builder.js:708`



> Makes the default directories needed

**Parameters**
- cb Callback The callback to execute after it's completed



--------------------------
#### markdown() 

Defined in `lib/builder.js:138`



> Wrapper around the Markdown parser so it can be normalized or even side stepped

**Parameters**
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The Markdown string to parse

**Returns**
HTML 


--------------------------
#### mergeExtends() 

Defined in `lib/builder.js:1089`



> Merge superclass data into a child class

**Parameters**
- info <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to extend
- classItems <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The list of items to merge in
- first <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Set for the first call



--------------------------
#### mixExternal() 

Defined in `lib/builder.js:370`



> Fetches the remote data and fires the callback when it's all complete

**Parameters**
- cb Callback The callback to execute when complete



--------------------------
#### nameSort() 

Defined in `lib/builder.js:1542`



> Sort method of array of objects with a property called __name__

**Parameters**
- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> First object to compare
- b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Second object to compare

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 


--------------------------
#### NATIVES_LINKER() 

Defined in `lib/builder.js:309`



> Function to link an external type uses `NATIVES` object

**Parameters**
- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the type to link

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 


--------------------------
#### populateClasses() 

Defined in `lib/builder.js:499`



> Populate the meta data for classes

**Parameters**
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


--------------------------
#### populateFiles() 

Defined in `lib/builder.js:578`



> Populate the meta data for files

**Parameters**
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


--------------------------
#### populateModules() 

Defined in `lib/builder.js:532`



> Populate the meta data for modules

**Parameters**
- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


--------------------------
#### render() 

Defined in `lib/builder.js:790`



> Ported from [Selleck](https://github.com/rgrove/selleck)
Renders the handlebars templates with the default View class.

**Parameters**
- source HTML The default template to parse
- view Class The default view handler
- layout HTML The HTML from the layout to use.
- partials <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> List of partials to include in this template
- callback Callback  
	- err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> 
	- html HTML The assembled template markup



--------------------------
#### renderAPIMeta() 

Defined in `lib/builder.js:1688`



> Render the API meta and return the JavaScript

**Parameters**
- cb Callback The callback
	- apijs <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The JavaScript code to write API meta data



--------------------------
#### renderClass() 

Defined in `lib/builder.js:1140`



> Render the class file

**Parameters**
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data



--------------------------
#### renderFile() 

Defined in `lib/builder.js:1623`



> Render the source file

**Parameters**
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data



--------------------------
#### renderIndex() 

Defined in `lib/builder.js:843`



> Render the index file

**Parameters**
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data



--------------------------
#### renderModule() 

Defined in `lib/builder.js:901`



> Render a module

**Parameters**
- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data



--------------------------
#### writeAPIMeta() 

Defined in `lib/builder.js:1675`



> Write the API meta data used for the AutoComplete widget

**Parameters**
- cb Callback The callback to execute when complete



--------------------------
#### writeClasses() 

Defined in `lib/builder.js:1493`



> Generates the class files under "out"/classes/

**Parameters**
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write class view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data



--------------------------
#### writeFiles() 

Defined in `lib/builder.js:1565`



> Generates the syntax files under `"out"/files/`

**Parameters**
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write file view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data



--------------------------
#### writeIndex() 

Defined in `lib/builder.js:869`



> Generates the index.html file

**Parameters**
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write index view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data



--------------------------
#### writeModules() 

Defined in `lib/builder.js:1017`



> Generates the module files under "out"/modules/

**Parameters**
- cb Callback The callback to execute after it's completed
	- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write module view
	- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data




