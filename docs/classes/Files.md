
# firedoc 0.8.15

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `Files` Class


Defined in: [lib/files.js:8](../files/lib/files.js.js)

Module: [yuidoc](../modules/yuidoc.md)




Ported fileutils methods from [Selleck](http://github.com/rgrove/selleck)

### Index



##### Methods

  - `copyAssets`
  - `copyDirectory`
  - `copyFile`
  - `copyPath`
  - `deletePath`
  - `getJSON`
  - `isDirectory`
  - `isFile`
  - `isSymbolicLink`
  - `lstatSync`
  - `statSync`
  - `writeFile`





### Details




<!-- Method Block -->
#### Methods


#### copyAssets() 

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
		<td>`lib/files.js:360`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Copy the theme assets directory</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				from Path The source directory

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				dest Path The destination directory

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				deleteFirst <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Should the directory be deleted if it exists

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to be executed

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### copyDirectory() 

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
		<td>`lib/files.js:37`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Copy a directory from one location to another</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				source Path The source directory

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				dest Path The destination directory

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				overwrite <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether or not to overwrite destination files
    if they already exist.

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to be executed when complete.

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### copyFile() 

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
		<td>`lib/files.js:125`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Copy a file from one location to another</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				source Path The source file

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				dest Path The destination file

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				overwrite <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether or not to overwrite destination files
    if they already exist.

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				callback Callback The callback to be executed when complete.

				<!-- level 2 -->
						<li>
						err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The Error returned from Node

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### copyPath() 

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
		<td>`lib/files.js:178`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>If _source_ is a file, copies it to _dest_. If it&#x27;s a directory, recursively
copies it and all files and directories it contains to _dest_.

Note that when attempting to copy a file into a directory, you should specify
the full path to the new file (including the new filename). Otherwise, it will
be interpreted as an attempt to copy the _source_ file *over* the _dest_
directory instead of *into* it.

Known issues:
- Doesn&#x27;t preserve ownership or permissions on copied files/directories.</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				source <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Source path.

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				dest <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Destination path.

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				overwrite <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether or not to overwrite destination files
if they already exist.

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				callback Callback The callback to execute when completed.

				<!-- level 2 -->
						<li>
						err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> 

						<!-- level 3 -->
						<!-- level 3 -->

						</li>
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### deletePath() 

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
		<td>`lib/files.js:224`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>If _path_ is a file, deletes it. If _path_ is a directory, recursively deletes
it and all files and directories it contains.

This method is synchronous.</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> File or directory to delete.

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### getJSON() 

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
		<td>`lib/files.js:407`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Helper method for getting JSON data from a local file</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				filename Path The filename to parse JSON from

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


#### isDirectory() 

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
		<td>`lib/files.js:248`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Check to see if this is a directory</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				path Path The path to check

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				link <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Also validate a symlink

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
		</td>
	</tr>

</table>


#### isFile() 

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
		<td>`lib/files.js:278`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Check to see if this is a File</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				path Path The path to check

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				link <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Also validate a symlink

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
		</td>
	</tr>

</table>


#### isSymbolicLink() 

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
		<td>`lib/files.js:305`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Check to see if this is a SymLink</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				path Path The path to check

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 
		</td>
	</tr>

</table>


#### lstatSync() 

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
		<td>`lib/files.js:319`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Like &#x60;fs.lstatSync()&#x60;, but returns &#x60;null&#x60; instead of throwing when _path_
doesn&#x27;t exist. Will still throw on other types of errors.</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Path to stat.

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			fs.Stats | Null 
		</td>
	</tr>

</table>


#### statSync() 

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
		<td>`lib/files.js:340`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Like &#x60;fs.statSync()&#x60;, but returns &#x60;null&#x60; instead of throwing when _path_
doesn&#x27;t exist. Will still throw on other types of errors.</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Path to stat.

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			fs.Stats | Null 
		</td>
	</tr>

</table>


#### writeFile() 

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
		<td>`lib/files.js:422`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Helper method for writing files to disk. It wraps the NodeJS file API</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				file Path The filename to write to

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The data to write

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				callback Callback  

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>



