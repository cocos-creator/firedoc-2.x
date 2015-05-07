
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/utils.js:31`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Escapes HTML characters in _html_.</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				html <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> String to escape.

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


#### fixType() 

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
		<td>`lib/utils.js:452`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Takes a type string and converts it to a &quot;First letter upper cased&quot; type. e.g. &#x60;(string -&gt; String, object -&gt; Object)&#x60;</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				t <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The type string to convert

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


#### getDirs() 

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
		<td>`lib/utils.js:338`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Walks the tree from this dir and returns all the subdirs</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The dir to begin at

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/utils.js:63`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Like &#x60;getPages()&#x60;, but returns only the files under the &#x60;layout/&#x60; subdirectory
of the specified _dir_.</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Directory path.

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


#### getPage() 

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
		<td>`lib/utils.js:76`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Loads and returns the content of the specified page file.</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				pagePath <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Path to a single `.handlebars` page.

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/utils.js:91`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Loads pages (files with a &#x60;.handlebars&#x60; extension) in the specified directory and
returns an object containing a mapping of page names (the part of the filename)
preceding the &#x60;.handlebars&#x60; extension) to page content.</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Directory path.

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


#### getPartials() 

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
		<td>`lib/utils.js:125`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Like &#x60;getPages()&#x60;, but returns only the files under the &#x60;partial/&#x60; subdirectory
of the specified _dir_.</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Directory path.

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


#### getProjectData() 

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
		<td>`lib/utils.js:224`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Walk the directory tree to locate the yuidoc.json file.</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				dir Path The directory to start from

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### localize() 

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
		<td>`lib/utils.js:492`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Localize the string via current Y.options</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				str <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> the original string that you want to input

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


#### prepare() 

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
		<td>`lib/utils.js:139`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Mix/merge/munge data into the template.</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				inDir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The starting directory

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The `options` for the meta data.

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				callback Callback The callback to excecute when complete

				<!-- level 2 -->
						<li>
						err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> 

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
						<li>
						options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Merged options.

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### unindent() 

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
		<td>`lib/utils.js:44`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Normalizes the initial indentation of the given _content_ so that the first line
is unindented, and all other lines are unindented to the same degree as the
first line. So if the first line has four spaces at the beginning, then all
lines will be unindented four spaces.</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				content <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Text to unindent.

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


#### validatePaths() 

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
		<td>`lib/utils.js:364`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Make sure all the paths passed are directories and that they are not in the ignore list.</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				paths <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> The array of paths to validate

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				ignore <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> A string to call `.indexOf` on a path to determine if it should be ignored

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### webpath() 

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
		<td>`lib/utils.js:474`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Produces a normalized web path by joining all the parts and normalizing the
filesystem-like path into web compatible url.
Supports relative and absolute paths.
Courtesy of [Mojito&#x27;s utils](https://github.com/yahoo/mojito/)</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				url <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String*</a> the list of parts to be joined and normalized

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



