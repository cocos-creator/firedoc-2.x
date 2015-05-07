
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


#### _addHelpers() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:121`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Register a &#x60;Y.Handlebars&#x60; helper method</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- helpers <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Object containing a hash of names and functions
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### _inlineCode() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:771`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Ported from [Selleck](https://github.com/rgrove/selleck), this handles &#x60;&#x60;&#x60;&#x27;s in fields
that are not parsed by the **Markdown** parser.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- html HTML The HTML to parse
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			HTML 
		</td>
	</tr>

</table>


#### _mixExternal() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:323`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Mixes the various external data soures together into the local data, augmenting
it with flags.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### _parseCode() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:758`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Parses &#x60;&lt;pre class=&quot;code prettyprint&quot;&gt;&lt;code&gt;&#x60; tags and adds the __prettyprint__ &#x60;className&#x60; to them</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- html HTML The HTML to parse
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			HTML 
		</td>
	</tr>

</table>


#### _parseCrossLink() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:166`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Parse the item to be cross linked and return an HREF linked to the item</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- item <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item to crossLink
		- raw <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Do not wrap it in HTML
		- content <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> crossLink helper content
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### addFoundAt() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:633`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Parses file and line number from an item object and build&#x27;s an HREF</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to parse
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
		</td>
	</tr>

</table>


#### augmentData() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:649`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Augments the **DocParser** meta data to provide default values for certain keys as well as parses all descriptions
with the &#x60;Markdown Parser&#x60;</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- o <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to recurse and augment
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
		</td>
	</tr>

</table>


#### compile() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:1734`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Compiles the templates from the meta-data provided by DocParser</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- cb Callback The callback to execute after it's completed
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### filterFileName() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:1721`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Normalizes a file path to a writable filename:

   var path = &#x27;lib/file.js&#x27;;
   returns &#x27;lib_file.js&#x27;;</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- f <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The filename to normalize
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
		</td>
	</tr>

</table>


#### getProjectMeta() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:458`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Prep the meta data to be fed to Selleck</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
		</td>
	</tr>

</table>


#### hasProperty() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:1065`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Checks an array of items (class items) to see if an item is in that list</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The Array of items to check
		- b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to find
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			 
		</td>
	</tr>

</table>


#### makeDirs() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:708`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Makes the default directories needed</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- cb Callback The callback to execute after it's completed
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### markdown() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:138`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Wrapper around the Markdown parser so it can be normalized or even side stepped</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The Markdown string to parse
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			HTML 
		</td>
	</tr>

</table>


#### mergeExtends() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:1089`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Merge superclass data into a child class</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- info <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to extend
		- classItems <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The list of items to merge in
		- first <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Set for the first call
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### mixExternal() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:370`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Fetches the remote data and fires the callback when it&#x27;s all complete</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- cb Callback The callback to execute when complete
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### nameSort() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:1542`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Sort method of array of objects with a property called __name__</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> First object to compare
		- b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Second object to compare
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> 
		</td>
	</tr>

</table>


#### NATIVES_LINKER() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:309`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Function to link an external type uses &#x60;NATIVES&#x60; object</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the type to link
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
		</td>
	</tr>

</table>


#### populateClasses() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:499`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Populate the meta data for classes</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
		</td>
	</tr>

</table>


#### populateFiles() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:578`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Populate the meta data for files</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
		</td>
	</tr>

</table>


#### populateModules() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:532`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Populate the meta data for modules</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
		</td>
	</tr>

</table>


#### render() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:790`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Ported from [Selleck](https://github.com/rgrove/selleck)
Renders the handlebars templates with the default View class.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- source HTML The default template to parse
		- view Class The default view handler
		- layout HTML The HTML from the layout to use.
		- partials <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> List of partials to include in this template
		- callback Callback  
			- err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> 
			- html HTML The assembled template markup
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### renderAPIMeta() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:1688`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Render the API meta and return the JavaScript</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- cb Callback The callback
			- apijs <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The JavaScript code to write API meta data
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### renderClass() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:1140`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Render the class file</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
			- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
			- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### renderFile() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:1623`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Render the source file</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
			- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
			- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### renderIndex() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:843`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Render the index file</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
			- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
			- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### renderModule() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:901`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Render a module</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete
			- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view
			- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### writeAPIMeta() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:1675`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Write the API meta data used for the AutoComplete widget</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- cb Callback The callback to execute when complete
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### writeClasses() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:1493`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Generates the class files under &quot;out&quot;/classes/</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- cb Callback The callback to execute after it's completed
			- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write class view
			- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### writeFiles() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:1565`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Generates the syntax files under &#x60;&quot;out&quot;/files/&#x60;</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- cb Callback The callback to execute after it's completed
			- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write file view
			- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### writeIndex() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:869`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Generates the index.html file</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- cb Callback The callback to execute after it's completed
			- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write index view
			- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### writeModules() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/builder.js:1017`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Generates the module files under &quot;out&quot;/modules/</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- cb Callback The callback to execute after it's completed
			- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write module view
			- view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>



