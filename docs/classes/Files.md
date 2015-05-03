
# firedoc 0.8.1

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


--------------------------
#### copyAssets() 

Defined in `lib/files.js:360`



> Copy the theme assets directory

**Parameters**
- from Path The source directory
- dest Path The destination directory
- deleteFirst <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Should the directory be deleted if it exists
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to be executed



--------------------------
#### copyDirectory() 

Defined in `lib/files.js:37`



> Copy a directory from one location to another

**Parameters**
- source Path The source directory
- dest Path The destination directory
- overwrite <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether or not to overwrite destination files
    if they already exist.
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to be executed when complete.



--------------------------
#### copyFile() 

Defined in `lib/files.js:125`



> Copy a file from one location to another

**Parameters**
- source Path The source file
- dest Path The destination file
- overwrite <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether or not to overwrite destination files
    if they already exist.
- callback Callback The callback to be executed when complete.
	- err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The Error returned from Node



--------------------------
#### copyPath() 

Defined in `lib/files.js:178`



> If _source_ is a file, copies it to _dest_. If it's a directory, recursively
copies it and all files and directories it contains to _dest_.

Note that when attempting to copy a file into a directory, you should specify
the full path to the new file (including the new filename). Otherwise, it will
be interpreted as an attempt to copy the _source_ file *over* the _dest_
directory instead of *into* it.

Known issues:
- Doesn't preserve ownership or permissions on copied files/directories.

**Parameters**
- source <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Source path.
- dest <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Destination path.
- overwrite <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether or not to overwrite destination files
if they already exist.
- callback Callback The callback to execute when completed.
	- err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> 



--------------------------
#### deletePath() 

Defined in `lib/files.js:224`



> If _path_ is a file, deletes it. If _path_ is a directory, recursively deletes
it and all files and directories it contains.

This method is synchronous.

**Parameters**
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> File or directory to delete.



--------------------------
#### getJSON() 

Defined in `lib/files.js:407`



> Helper method for getting JSON data from a local file

**Parameters**
- filename Path The filename to parse JSON from

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


--------------------------
#### isDirectory() 

Defined in `lib/files.js:248`



> Check to see if this is a directory

**Parameters**
- path Path The path to check
- link <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Also validate a symlink

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


--------------------------
#### isFile() 

Defined in `lib/files.js:278`



> Check to see if this is a File

**Parameters**
- path Path The path to check
- link <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Also validate a symlink

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


--------------------------
#### isSymbolicLink() 

Defined in `lib/files.js:305`



> Check to see if this is a SymLink

**Parameters**
- path Path The path to check

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 


--------------------------
#### lstatSync() 

Defined in `lib/files.js:319`



> Like `fs.lstatSync()`, but returns `null` instead of throwing when _path_
doesn't exist. Will still throw on other types of errors.

**Parameters**
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Path to stat.

**Returns**
fs.Stats | Null 


--------------------------
#### statSync() 

Defined in `lib/files.js:340`



> Like `fs.statSync()`, but returns `null` instead of throwing when _path_
doesn't exist. Will still throw on other types of errors.

**Parameters**
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Path to stat.

**Returns**
fs.Stats | Null 


--------------------------
#### writeFile() 

Defined in `lib/files.js:422`



> Helper method for writing files to disk. It wraps the NodeJS file API

**Parameters**
- file Path The filename to write to
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The data to write
- callback Callback  




