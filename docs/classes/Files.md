
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
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/files.js:360`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Copy the theme assets directory</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- from Path The source directory
		- dest Path The destination directory
		- deleteFirst <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Should the directory be deleted if it exists
		- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to be executed
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### copyDirectory() 

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
		<td>`lib/files.js:37`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Copy a directory from one location to another</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- source Path The source directory
		- dest Path The destination directory
		- overwrite <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether or not to overwrite destination files
    if they already exist.
		- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to be executed when complete.
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### copyFile() 

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
		<td>`lib/files.js:125`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Copy a file from one location to another</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- source Path The source file
		- dest Path The destination file
		- overwrite <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether or not to overwrite destination files
    if they already exist.
		- callback Callback The callback to be executed when complete.
			- err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The Error returned from Node
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### copyPath() 

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
		<td>`lib/files.js:178`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
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
		<td>Parameters</td>
		<td>
		- source <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Source path.
		- dest <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Destination path.
		- overwrite <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether or not to overwrite destination files
if they already exist.
		- callback Callback The callback to execute when completed.
			- err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> 
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### deletePath() 

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
		<td>`lib/files.js:224`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>If _path_ is a file, deletes it. If _path_ is a directory, recursively deletes
it and all files and directories it contains.

This method is synchronous.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> File or directory to delete.
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### getJSON() 

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
		<td>`lib/files.js:407`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Helper method for getting JSON data from a local file</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- filename Path The filename to parse JSON from
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
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/files.js:248`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Check to see if this is a directory</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- path Path The path to check
		- link <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Also validate a symlink
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
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/files.js:278`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Check to see if this is a File</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- path Path The path to check
		- link <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Also validate a symlink
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
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/files.js:305`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Check to see if this is a SymLink</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- path Path The path to check
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
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/files.js:319`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Like &#x60;fs.lstatSync()&#x60;, but returns &#x60;null&#x60; instead of throwing when _path_
doesn&#x27;t exist. Will still throw on other types of errors.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Path to stat.
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
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/files.js:340`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Like &#x60;fs.statSync()&#x60;, but returns &#x60;null&#x60; instead of throwing when _path_
doesn&#x27;t exist. Will still throw on other types of errors.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Path to stat.
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
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/files.js:422`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Helper method for writing files to disk. It wraps the NodeJS file API</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- file Path The filename to write to
		- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The data to write
		- callback Callback  
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>



