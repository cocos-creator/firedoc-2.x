
# firedoc 0.8.32

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `YUIDoc` Class


Defined in: [lib/yuidoc.js:48](../files/lib/yuidoc.js.js)

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

  - [`YUIDoc(config)` **constructor**](#method-yuidocconfig)
  - [`_processConfig()`](#method-_processconfig)
  - [`_setDefaultExcludes()`](#method-_setdefaultexcludes)
  - [`parsedir(dir)`](#method-parsedirdir)
  - [`parsefiles(dir, files)`](#method-parsefilesdir-files)
  - [`run()`](#method-run)
  - [`runPreprocessors()`](#method-runpreprocessors)
  - [`walk()`](#method-walk)
  - [`writeJSON(parser)`](#method-writejsonparser)





### Details


#### Properties



##### property: `dirmap`

Holder for the list of directories we are processing.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/yuidoc.js:86](../files/lib_yuidoc.js.md#l86) |




##### property: `endtime`

Timestamp holder so we know when YUIDoc has finished the parse process.

| meta | description |
|------|-------------|
| Type | Timestamp |
| Defined | [lib/yuidoc.js:386](../files/lib_yuidoc.js.md#l386) |




##### property: `filecount`

Holds the number of files that we are processing.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined | [lib/yuidoc.js:65](../files/lib_yuidoc.js.md#l65) |




##### property: `filemap`

Holder for the list of files we are processing.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/yuidoc.js:79](../files/lib_yuidoc.js.md#l79) |




##### property: `OPTIONS`

The default list of configuration options

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/yuidoc.js:28](../files/lib_yuidoc.js.md#l28) |




##### property: `options`

Internal holder for configuration options.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/yuidoc.js:94](../files/lib_yuidoc.js.md#l94) |




##### property: `selleck`

Hash map of dirnames to selleck config options.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/yuidoc.js:72](../files/lib_yuidoc.js.md#l72) |




##### property: `starttime`

Timestamp holder so we know when YUIDoc started the parse process.

| meta | description |
|------|-------------|
| Type | Timestamp |
| Defined | [lib/yuidoc.js:365](../files/lib_yuidoc.js.md#l365) |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `YUIDoc(config)`



| meta | description |
|------|-------------|
| Defined | [lib/yuidoc.js:48](../files/lib_yuidoc.js.md#l48) |

###### Parameters
- config <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The config object


##### method: `_processConfig()`

Does post process on self.options.

| meta | description |
|------|-------------|
| Defined | [lib/yuidoc.js:126](../files/lib_yuidoc.js.md#l126) |



##### method: `_setDefaultExcludes()`

Always exclude these directories

| meta | description |
|------|-------------|
| Defined | [lib/yuidoc.js:111](../files/lib_yuidoc.js.md#l111) |



##### method: `parsedir(dir)`

Walks the passed directory and grabs all the files recursively.

| meta | description |
|------|-------------|
| Defined | [lib/yuidoc.js:148](../files/lib_yuidoc.js.md#l148) |

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The directory to parse the contents of.


##### method: `parsefiles(dir, files)`

Gathers all the file data and populates the filemap and dirmap hashes.

| meta | description |
|------|-------------|
| Defined | [lib/yuidoc.js:188](../files/lib_yuidoc.js.md#l188) |

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The directory to start from.
- files <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> List of files to parse.


##### method: `run()`

Process the config, walk the file tree and write out the JSON data.

| meta | description |
|------|-------------|
| Defined | [lib/yuidoc.js:359](../files/lib_yuidoc.js.md#l359) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### method: `runPreprocessors()`

Applies preprocessors to the data tree. 
This function first clones the data and operates on the clone.

| meta | description |
|------|-------------|
| Defined | [lib/yuidoc.js:242](../files/lib_yuidoc.js.md#l242) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### method: `walk()`

Walks the paths and parses the directory contents

| meta | description |
|------|-------------|
| Defined | [lib/yuidoc.js:137](../files/lib_yuidoc.js.md#l137) |



##### method: `writeJSON(parser)`

Writes the parser JSON data to disk.
Applies preprocessors, if any.

| meta | description |
|------|-------------|
| Defined | [lib/yuidoc.js:277](../files/lib_yuidoc.js.md#l277) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- parser <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The DocParser instance to use



