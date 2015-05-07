
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:121`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Register a &#x60;Y.Handlebars&#x60; helper method</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				helpers <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Object containing a hash of names and functions

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### _inlineCode() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:771`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Ported from [Selleck](https://github.com/rgrove/selleck), this handles &#x60;&#x60;&#x60;&#x27;s in fields
that are not parsed by the **Markdown** parser.</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				html HTML The HTML to parse

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:323`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Mixes the various external data soures together into the local data, augmenting
it with flags.</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
			</ul>
		</td>
	</tr>


</table>


#### _parseCode() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:758`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Parses &#x60;&lt;pre class=&quot;code prettyprint&quot;&gt;&lt;code&gt;&#x60; tags and adds the __prettyprint__ &#x60;className&#x60; to them</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				html HTML The HTML to parse

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:166`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Parse the item to be cross linked and return an HREF linked to the item</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				item <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The item to crossLink

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				raw <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Do not wrap it in HTML

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				content <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> crossLink helper content

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### addFoundAt() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:633`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Parses file and line number from an item object and build&#x27;s an HREF</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to parse

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:649`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Augments the **DocParser** meta data to provide default values for certain keys as well as parses all descriptions
with the &#x60;Markdown Parser&#x60;</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				o <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to recurse and augment

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:1734`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Compiles the templates from the meta-data provided by DocParser</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				cb Callback The callback to execute after it's completed

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### filterFileName() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:1721`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Normalizes a file path to a writable filename:

   var path = &#x27;lib/file.js&#x27;;
   returns &#x27;lib_file.js&#x27;;</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				f <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The filename to normalize

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:458`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Prep the meta data to be fed to Selleck</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
			</ul>
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:1065`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Checks an array of items (class items) to see if an item is in that list</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The Array of items to check

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The object to find

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:708`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Makes the default directories needed</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				cb Callback The callback to execute after it's completed

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### markdown() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:138`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Wrapper around the Markdown parser so it can be normalized or even side stepped</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The Markdown string to parse

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:1089`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Merge superclass data into a child class</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				info <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The item to extend

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				classItems <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The list of items to merge in

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				first <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Set for the first call

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### mixExternal() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:370`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Fetches the remote data and fires the callback when it&#x27;s all complete</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				cb Callback The callback to execute when complete

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### nameSort() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:1542`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Sort method of array of objects with a property called __name__</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> First object to compare

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				b <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Second object to compare

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:309`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Function to link an external type uses &#x60;NATIVES&#x60; object</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				name <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The name of the type to link

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:499`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Populate the meta data for classes</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:578`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Populate the meta data for files</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:532`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Populate the meta data for modules</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				opts <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The original options

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:790`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Ported from [Selleck](https://github.com/rgrove/selleck)
Renders the handlebars templates with the default View class.</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				source HTML The default template to parse

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				view Class The default view handler

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				layout HTML The HTML from the layout to use.

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				partials <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> List of partials to include in this template

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				callback Callback  

				<!-- level 2 -->
						<li>
						err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> 

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
						<li>
						html HTML The assembled template markup

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### renderAPIMeta() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:1688`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Render the API meta and return the JavaScript</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				cb Callback The callback

				<!-- level 2 -->
						<li>
						apijs <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The JavaScript code to write API meta data

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### renderClass() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:1140`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Render the class file</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete

				<!-- level 2 -->
						<li>
						html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
						<li>
						view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### renderFile() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:1623`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Render the source file</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete

				<!-- level 2 -->
						<li>
						html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
						<li>
						view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### renderIndex() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:843`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Render the index file</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete

				<!-- level 2 -->
						<li>
						html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
						<li>
						view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### renderModule() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:901`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Render a module</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				cb <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback fired when complete

				<!-- level 2 -->
						<li>
						html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to render this view

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
						<li>
						view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### writeAPIMeta() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:1675`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Write the API meta data used for the AutoComplete widget</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				cb Callback The callback to execute when complete

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### writeClasses() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:1493`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Generates the class files under &quot;out&quot;/classes/</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				cb Callback The callback to execute after it's completed

				<!-- level 2 -->
						<li>
						html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write class view

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
						<li>
						view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### writeFiles() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:1565`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Generates the syntax files under &#x60;&quot;out&quot;/files/&#x60;</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				cb Callback The callback to execute after it's completed

				<!-- level 2 -->
						<li>
						html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write file view

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
						<li>
						view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### writeIndex() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:869`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Generates the index.html file</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				cb Callback The callback to execute after it's completed

				<!-- level 2 -->
						<li>
						html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write index view

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
						<li>
						view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### writeModules() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/builder.js:1017`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Generates the module files under &quot;out&quot;/modules/</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				cb Callback The callback to execute after it's completed

				<!-- level 2 -->
						<li>
						html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The HTML to write module view

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
						<li>
						view <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The View Data

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>



