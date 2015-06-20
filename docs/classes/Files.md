
# firedoc 1.5.9

Fireball is the game engine for the future.

### `Files` Class


Defined in: [lib/files.js:8](../files/lib/files.js.js)

Module: [yuidoc](../modules/yuidoc.md)




Ported fileutils methods from [Selleck](http://github.com/rgrove/selleck)

### Index



##### Methods

  - [`copyDirectory`](#method-copydirectory) Copy a directory from one location to another
  - [`copyFile`](#method-copyfile) Copy a file from one location to another
  - [`copyPath`](#method-copypath) If _source_ is a file, copies it to _dest_. If it's a directory, recursively
copies it and all files and directories it contains to _dest_.

Note that when attempting to copy a file into a directory, you should specify
the full path to the new file (including the new filename). Otherwise, it will
be interpreted as an attempt to copy the _source_ file *over* the _dest_
directory instead of *into* it.

Known issues:
- Doesn't preserve ownership or permissions on copied files/directories.
  - [`deletePath`](#method-deletepath) If _path_ is a file, deletes it. If _path_ is a directory, recursively deletes
it and all files and directories it contains.

This method is synchronous.
  - [`isDirectory`](#method-isdirectory) Check to see if this is a directory
  - [`isFile`](#method-isfile) Check to see if this is a File
  - [`isSymbolicLink`](#method-issymboliclink) Check to see if this is a SymLink
  - [`lstatSync`](#method-lstatsync) Like `fs.lstatSync()`, but returns `null` instead of throwing when _path_
doesn't exist. Will still throw on other types of errors.
  - [`statSync`](#method-statsync) Like `fs.statSync()`, but returns `null` instead of throwing when _path_
doesn't exist. Will still throw on other types of errors.
  - [`copyAssets`](#method-copyassets) Copy the theme assets directory
  - [`getJSON`](#method-getjson) Helper method for getting JSON data from a local file
  - [`writeFile`](#method-writefile) Helper method for writing files to disk. It wraps the NodeJS file API





### Details




<!-- Method Block -->
#### Methods


##### copyDirectory

Copy a directory from one location to another

| meta | description |
|------|-------------|
| Defined | [lib/files.js:37](../files/lib_files.js.md#l37) |

###### Parameters
- source Path The source directory
- dest Path The destination directory
- overwrite <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether or not to overwrite destination files
    if they already exist.
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to be executed when complete.


##### copyFile

Copy a file from one location to another

| meta | description |
|------|-------------|
| Defined | [lib/files.js:125](../files/lib_files.js.md#l125) |

###### Parameters
- source Path The source file
- dest Path The destination file
- overwrite <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether or not to overwrite destination files
    if they already exist.
- callback Callback The callback to be executed when complete.
	- err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> The Error returned from Node


##### copyPath

If _source_ is a file, copies it to _dest_. If it's a directory, recursively
copies it and all files and directories it contains to _dest_.

Note that when attempting to copy a file into a directory, you should specify
the full path to the new file (including the new filename). Otherwise, it will
be interpreted as an attempt to copy the _source_ file *over* the _dest_
directory instead of *into* it.

Known issues:
- Doesn't preserve ownership or permissions on copied files/directories.

| meta | description |
|------|-------------|
| Defined | [lib/files.js:178](../files/lib_files.js.md#l178) |

###### Parameters
- source <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Source path.
- dest <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Destination path.
- overwrite <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Whether or not to overwrite destination files
if they already exist.
- callback Callback The callback to execute when completed.
	- err <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a> 


##### deletePath

If _path_ is a file, deletes it. If _path_ is a directory, recursively deletes
it and all files and directories it contains.

This method is synchronous.

| meta | description |
|------|-------------|
| Defined | [lib/files.js:224](../files/lib_files.js.md#l224) |

###### Parameters
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> File or directory to delete.


##### isDirectory

Check to see if this is a directory

| meta | description |
|------|-------------|
| Defined | [lib/files.js:248](../files/lib_files.js.md#l248) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- path Path The path to check
- link <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Also validate a symlink


##### isFile

Check to see if this is a File

| meta | description |
|------|-------------|
| Defined | [lib/files.js:278](../files/lib_files.js.md#l278) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- path Path The path to check
- link <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Also validate a symlink


##### isSymbolicLink

Check to see if this is a SymLink

| meta | description |
|------|-------------|
| Defined | [lib/files.js:305](../files/lib_files.js.md#l305) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- path Path The path to check


##### lstatSync

Like `fs.lstatSync()`, but returns `null` instead of throwing when _path_
doesn't exist. Will still throw on other types of errors.

| meta | description |
|------|-------------|
| Defined | [lib/files.js:319](../files/lib_files.js.md#l319) |
| Return 		 | fs.Stats | null 

###### Parameters
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Path to stat.


##### statSync

Like `fs.statSync()`, but returns `null` instead of throwing when _path_
doesn't exist. Will still throw on other types of errors.

| meta | description |
|------|-------------|
| Defined | [lib/files.js:340](../files/lib_files.js.md#l340) |
| Return 		 | fs.Stats | null 

###### Parameters
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> Path to stat.


##### copyAssets

Copy the theme assets directory

| meta | description |
|------|-------------|
| Defined | [lib/files.js:360](../files/lib_files.js.md#l360) |

###### Parameters
- from Path The source directory
- dest Path The destination directory
- deleteFirst <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> Should the directory be deleted if it exists
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> The callback to be executed


##### getJSON

Helper method for getting JSON data from a local file

| meta | description |
|------|-------------|
| Defined | [lib/files.js:407](../files/lib_files.js.md#l407) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- filename Path The filename to parse JSON from


##### writeFile

Helper method for writing files to disk. It wraps the NodeJS file API

| meta | description |
|------|-------------|
| Defined | [lib/files.js:422](../files/lib_files.js.md#l422) |

###### Parameters
- file Path The filename to write to
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The data to write
- callback Callback 



