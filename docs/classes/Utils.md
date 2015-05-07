
# firedoc 0.8.15

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `Utils` Class


Defined in: [lib/utils.js:11](../files/lib/utils.js.js)

Module: [yuidoc](../modules/yuidoc.md)




Utilities Class

### Index



##### Methods

  - `escapeHTML`
  - `fixType`
  - `getDirs`
  - `getLayouts`
  - `getPage`
  - `getPages`
  - `getPartials`
  - `getProjectData`
  - `localize`
  - `prepare`
  - `unindent`
  - `validatePaths`
  - `webpath`





### Details




<!-- Method Block -->
#### Methods


#### escapeHTML() 

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
		<td>`lib/utils.js:31`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Escapes HTML characters in _html_.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> String to escape.
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
		</td>
	</tr>

</table>


#### fixType() 

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
		<td>`lib/utils.js:452`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Takes a type string and converts it to a &quot;First letter upper cased&quot; type. e.g. &#x60;(string -&gt; String, object -&gt; Object)&#x60;</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- t <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type string to convert
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
		</td>
	</tr>

</table>


#### getDirs() 

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
		<td>`lib/utils.js:338`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Walks the tree from this dir and returns all the subdirs</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The dir to begin at
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> 
		</td>
	</tr>

</table>


#### getLayouts() 

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
		<td>`lib/utils.js:63`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Like &#x60;getPages()&#x60;, but returns only the files under the &#x60;layout/&#x60; subdirectory
of the specified _dir_.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Directory path.
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
		</td>
	</tr>

</table>


#### getPage() 

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
		<td>`lib/utils.js:76`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Loads and returns the content of the specified page file.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- pagePath <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Path to a single `.handlebars` page.
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> | Null 
		</td>
	</tr>

</table>


#### getPages() 

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
		<td>`lib/utils.js:91`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Loads pages (files with a &#x60;.handlebars&#x60; extension) in the specified directory and
returns an object containing a mapping of page names (the part of the filename)
preceding the &#x60;.handlebars&#x60; extension) to page content.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Directory path.
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
		</td>
	</tr>

</table>


#### getPartials() 

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
		<td>`lib/utils.js:125`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Like &#x60;getPages()&#x60;, but returns only the files under the &#x60;partial/&#x60; subdirectory
of the specified _dir_.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Directory path.
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
		</td>
	</tr>

</table>


#### getProjectData() 

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
		<td>`lib/utils.js:224`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Walk the directory tree to locate the yuidoc.json file.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- dir Path The directory to start from
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### localize() 

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
		<td>`lib/utils.js:492`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Localize the string via current Y.options</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- str <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the original string that you want to input
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
		</td>
	</tr>

</table>


#### prepare() 

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
		<td>`lib/utils.js:139`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Mix/merge/munge data into the template.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- inDir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The starting directory
		- options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The `options` for the meta data.
		- callback Callback The callback to excecute when complete
			- err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> 
			- options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Merged options.
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### unindent() 

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
		<td>`lib/utils.js:44`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Normalizes the initial indentation of the given _content_ so that the first line
is unindented, and all other lines are unindented to the same degree as the
first line. So if the first line has four spaces at the beginning, then all
lines will be unindented four spaces.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- content <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Text to unindent.
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
		</td>
	</tr>

</table>


#### validatePaths() 

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
		<td>`lib/utils.js:364`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Make sure all the paths passed are directories and that they are not in the ignore list.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- paths <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The array of paths to validate
		- ignore <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string to call `.indexOf` on a path to determine if it should be ignored
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### webpath() 

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
		<td>`lib/utils.js:474`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Produces a normalized web path by joining all the parts and normalizing the
filesystem-like path into web compatible url.
Supports relative and absolute paths.
Courtesy of [Mojito&#x27;s utils](https://github.com/yahoo/mojito/)</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- url <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String*</a> the list of parts to be joined and normalized
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 
		</td>
	</tr>

</table>



