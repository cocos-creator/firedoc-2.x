
# firedoc 1.5.9

Fireball is the game engine for the future.

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

  - [`OPTIONS`](#property-options)
  - [`filecount`](#property-filecount)
  - [`selleck`](#property-selleck)
  - [`filemap`](#property-filemap)
  - [`dirmap`](#property-dirmap)
  - [`options`](#property-options)
  - [`starttime`](#property-starttime)
  - [`endtime`](#property-endtime)



##### Methods

  - [`` **constructor**](#)
  - [`_setDefaultExcludes`](#method-_setdefaultexcludes)
  - [`_processConfig`](#method-_processconfig)
  - [`walk`](#method-walk)
  - [`parsedir`](#method-parsedir)
  - [`parsefiles`](#method-parsefiles)
  - [`runPreprocessors`](#method-runpreprocessors)
  - [`writeJSON`](#method-writejson)
  - [`run`](#method-run)





### Details


#### Properties


The default list of configuration options

|------|-------------|
| Name | OPTIONS    |
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/yuidoc.js:28](../files/lib_yuidoc.js.md#l28) |



Holds the number of files that we are processing.

|------|-------------|
| Name | filecount    |
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined | [lib/yuidoc.js:65](../files/lib_yuidoc.js.md#l65) |



Hash map of dirnames to selleck config options.

|------|-------------|
| Name | selleck    |
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/yuidoc.js:72](../files/lib_yuidoc.js.md#l72) |



Holder for the list of files we are processing.

|------|-------------|
| Name | filemap    |
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/yuidoc.js:79](../files/lib_yuidoc.js.md#l79) |



Holder for the list of directories we are processing.

|------|-------------|
| Name | dirmap    |
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/yuidoc.js:86](../files/lib_yuidoc.js.md#l86) |



Internal holder for configuration options.

|------|-------------|
| Name | options    |
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/yuidoc.js:94](../files/lib_yuidoc.js.md#l94) |



Timestamp holder so we know when YUIDoc started the parse process.

|------|-------------|
| Name | starttime    |
| Type | Timestamp |
| Defined | [lib/yuidoc.js:365](../files/lib_yuidoc.js.md#l365) |



Timestamp holder so we know when YUIDoc has finished the parse process.

|------|-------------|
| Name | endtime    |
| Type | Timestamp |
| Defined | [lib/yuidoc.js:386](../files/lib_yuidoc.js.md#l386) |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: ``



| meta | description |
|------|-------------|
| Defined | [:]() |



##### method: `_setDefaultExcludes`

Always exclude these directories

| meta | description |
|------|-------------|
| Defined | [lib/yuidoc.js:111](../files/lib_yuidoc.js.md#l111) |



##### method: `_processConfig`

Does post process on self.options.

| meta | description |
|------|-------------|
| Defined | [lib/yuidoc.js:126](../files/lib_yuidoc.js.md#l126) |



##### method: `walk`

Walks the paths and parses the directory contents

| meta | description |
|------|-------------|
| Defined | [lib/yuidoc.js:137](../files/lib_yuidoc.js.md#l137) |



##### method: `parsedir`

Walks the passed directory and grabs all the files recursively.

| meta | description |
|------|-------------|
| Defined | [lib/yuidoc.js:148](../files/lib_yuidoc.js.md#l148) |

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The directory to parse the contents of.


##### method: `parsefiles`

Gathers all the file data and populates the filemap and dirmap hashes.

| meta | description |
|------|-------------|
| Defined | [lib/yuidoc.js:188](../files/lib_yuidoc.js.md#l188) |

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The directory to start from.
- files <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> List of files to parse.


##### method: `runPreprocessors`

Applies preprocessors to the data tree. 
This function first clones the data and operates on the clone.

| meta | description |
|------|-------------|
| Defined | [lib/yuidoc.js:242](../files/lib_yuidoc.js.md#l242) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



##### method: `writeJSON`

Writes the parser JSON data to disk.
Applies preprocessors, if any.

| meta | description |
|------|-------------|
| Defined | [lib/yuidoc.js:277](../files/lib_yuidoc.js.md#l277) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 

###### Parameters
- parser <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The DocParser instance to use


##### method: `run`

Process the config, walk the file tree and write out the JSON data.

| meta | description |
|------|-------------|
| Defined | [lib/yuidoc.js:359](../files/lib_yuidoc.js.md#l359) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 




