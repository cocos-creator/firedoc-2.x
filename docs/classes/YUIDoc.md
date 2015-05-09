
# firedoc 0.8.21

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

  - [`dirmap`](#property-dirmap)
  - [`endtime`](#property-endtime)
  - [`filecount`](#property-filecount)
  - [`filemap`](#property-filemap)
  - [`OPTIONS`](#property-options)
  - [`options`](#property-options)
  - [`selleck`](#property-selleck)
  - [`starttime`](#property-starttime)



##### Methods

  - [`` **constructor**]()
  - [`_processConfig()`](#_processconfig)
  - [`_setDefaultExcludes()`](#_setdefaultexcludes)
  - [`parsedir(dir)`](#parsedirdir)
  - [`parsefiles(dir, files)`](#parsefilesdir-files)
  - [`run()`](#run)
  - [`runPreprocessors()`](#runpreprocessors)
  - [`walk()`](#walk)
  - [`writeJSON(parser)`](#writejsonparser)





### Details


#### Properties



##### property: `dirmap`

Holder for the list of directories we are processing.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | `lib/yuidoc.js:87` |




##### property: `endtime`

Timestamp holder so we know when YUIDoc has finished the parse process.

| meta | description |
|------|-------------|
| Type | Timestamp |
| Defined | `lib/yuidoc.js:387` |




##### property: `filecount`

Holds the number of files that we are processing.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined | `lib/yuidoc.js:66` |




##### property: `filemap`

Holder for the list of files we are processing.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | `lib/yuidoc.js:80` |




##### property: `OPTIONS`

The default list of configuration options

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | `lib/yuidoc.js:29` |




##### property: `options`

Internal holder for configuration options.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | `lib/yuidoc.js:95` |




##### property: `selleck`

Hash map of dirnames to selleck config options.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | `lib/yuidoc.js:73` |




##### property: `starttime`

Timestamp holder so we know when YUIDoc started the parse process.

| meta | description |
|------|-------------|
| Type | Timestamp |
| Defined | `lib/yuidoc.js:366` |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: ``



| meta | description |
|------|-------------|
| Defined | `lib/yuidoc.js:49` |

###### Parameters
- config <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The config object


##### method: `_processConfig()`

Does post process on self.options.

| meta | description |
|------|-------------|
| Defined | `lib/yuidoc.js:127` |



##### method: `_setDefaultExcludes()`

Always exclude these directories

| meta | description |
|------|-------------|
| Defined | `lib/yuidoc.js:112` |



##### method: `parsedir(dir)`

Walks the passed directory and grabs all the files recursively.

| meta | description |
|------|-------------|
| Defined | `lib/yuidoc.js:149` |

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The directory to parse the contents of.


##### method: `parsefiles(dir, files)`

Gathers all the file data and populates the filemap and dirmap hashes.

| meta | description |
|------|-------------|
| Defined | `lib/yuidoc.js:189` |

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The directory to start from.
- files <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> List of files to parse.


##### method: `run()`

Process the config, walk the file tree and write out the JSON data.

| meta | description |
|------|-------------|
| Defined | `lib/yuidoc.js:360` |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### method: `runPreprocessors()`

Applies preprocessors to the data tree. 
This function first clones the data and operates on the clone.

| meta | description |
|------|-------------|
| Defined | `lib/yuidoc.js:243` |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### method: `walk()`

Walks the paths and parses the directory contents

| meta | description |
|------|-------------|
| Defined | `lib/yuidoc.js:138` |



##### method: `writeJSON(parser)`

Writes the parser JSON data to disk.
Applies preprocessors, if any.

| meta | description |
|------|-------------|
| Defined | `lib/yuidoc.js:278` |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- parser <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The DocParser instance to use



