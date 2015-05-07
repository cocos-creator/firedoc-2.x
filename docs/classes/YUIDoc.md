
# firedoc 0.8.15

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `YUIDoc` Class


Defined in: [lib/yuidoc.js:49](../files/lib/yuidoc.js.js)

Module: [yuidoc](../modules/yuidoc.md)




YUIDoc main class

     var options = {
         paths: [ './lib' ],
         outdir: './out'
     };

     var Y = require('yuidoc');
     var json = (new Y.YUIDoc(options)).run();

### Index

##### Properties

  - `dirmap`
  - `endtime`
  - `filecount`
  - `filemap`
  - `OPTIONS`
  - `options`
  - `selleck`
  - `starttime`



##### Methods

  - `YUIDoc` **constructor**
  - `_processConfig`
  - `_setDefaultExcludes`
  - `parsedir`
  - `parsefiles`
  - `run`
  - `runPreprocessors`
  - `walk`
  - `writeJSON`





### Details


#### Properties



- `dirmap`

|      | description |
|------|-------------|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| defined | `lib/yuidoc.js:87` |
| description | Holder for the list of directories we are processing. |




- `endtime`

|      | description |
|------|-------------|
| type | Timestamp |
| defined | `lib/yuidoc.js:387` |
| description | Timestamp holder so we know when YUIDoc has finished the parse process. |




- `filecount`

|      | description |
|------|-------------|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| defined | `lib/yuidoc.js:66` |
| description | Holds the number of files that we are processing. |




- `filemap`

|      | description |
|------|-------------|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| defined | `lib/yuidoc.js:80` |
| description | Holder for the list of files we are processing. |




- `OPTIONS`

|      | description |
|------|-------------|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| defined | `lib/yuidoc.js:29` |
| description | The default list of configuration options |




- `options`

|      | description |
|------|-------------|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| defined | `lib/yuidoc.js:95` |
| description | Internal holder for configuration options. |




- `selleck`

|      | description |
|------|-------------|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| defined | `lib/yuidoc.js:73` |
| description | Hash map of dirnames to selleck config options. |




- `starttime`

|      | description |
|------|-------------|
| type | Timestamp |
| defined | `lib/yuidoc.js:366` |
| description | Timestamp holder so we know when YUIDoc started the parse process. |






<!-- Method Block -->
#### Methods

##### Constructor

#### YUIDoc() 

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
		<td>`lib/yuidoc.js:49`</td>
	</tr>
	
	



	<tr>
		<td>Parameters</td>
		<td>
		- config <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The config object
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### _processConfig() 

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
		<td>`lib/yuidoc.js:127`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Does post process on self.options.</td>
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


#### _setDefaultExcludes() 

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
		<td>`lib/yuidoc.js:112`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Always exclude these directories</td>
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


#### parsedir() 

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
		<td>`lib/yuidoc.js:149`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Walks the passed directory and grabs all the files recursively.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The directory to parse the contents of.
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### parsefiles() 

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
		<td>`lib/yuidoc.js:189`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Gathers all the file data and populates the filemap and dirmap hashes.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The directory to start from.
		- files <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> List of files to parse.
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### run() 

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
		<td>`lib/yuidoc.js:360`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Process the config, walk the file tree and write out the JSON data.</td>
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


#### runPreprocessors() 

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
		<td>`lib/yuidoc.js:243`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Applies preprocessors to the data tree. 
This function first clones the data and operates on the clone.</td>
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


#### walk() 

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
		<td>`lib/yuidoc.js:138`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Walks the paths and parses the directory contents</td>
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


#### writeJSON() 

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
		<td>`lib/yuidoc.js:278`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Writes the parser JSON data to disk.
Applies preprocessors, if any.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- parser <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The DocParser instance to use
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
			<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 
		</td>
	</tr>

</table>



