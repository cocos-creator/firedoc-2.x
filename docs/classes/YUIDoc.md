
# firedoc 0.8.16

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



##### property: `dirmap`

Holder for the list of directories we are processing.

| meta |  |
|------|--|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| defined | `lib/yuidoc.js:87` |
| description |  |




##### property: `endtime`

Timestamp holder so we know when YUIDoc has finished the parse process.

| meta |  |
|------|--|
| type | Timestamp |
| defined | `lib/yuidoc.js:387` |
| description |  |




##### property: `filecount`

Holds the number of files that we are processing.

| meta |  |
|------|--|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| defined | `lib/yuidoc.js:66` |
| description |  |




##### property: `filemap`

Holder for the list of files we are processing.

| meta |  |
|------|--|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| defined | `lib/yuidoc.js:80` |
| description |  |




##### property: `OPTIONS`

The default list of configuration options

| meta |  |
|------|--|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| defined | `lib/yuidoc.js:29` |
| description |  |




##### property: `options`

Internal holder for configuration options.

| meta |  |
|------|--|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| defined | `lib/yuidoc.js:95` |
| description |  |




##### property: `selleck`

Hash map of dirnames to selleck config options.

| meta |  |
|------|--|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| defined | `lib/yuidoc.js:73` |
| description |  |




##### property: `starttime`

Timestamp holder so we know when YUIDoc started the parse process.

| meta |  |
|------|--|
| type | Timestamp |
| defined | `lib/yuidoc.js:366` |
| description |  |






<!-- Method Block -->
#### Methods

##### Constructor

##### method: `YUIDoc()`



| name |  |
|------|--|
| defined | `lib/yuidoc.js:49` |

###### Parameters
- config <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The config object



##### method: `_processConfig()`

Does post process on self.options.

| name |  |
|------|--|
| defined | `lib/yuidoc.js:127` |




##### method: `_setDefaultExcludes()`

Always exclude these directories

| name |  |
|------|--|
| defined | `lib/yuidoc.js:112` |




##### method: `parsedir()`

Walks the passed directory and grabs all the files recursively.

| name |  |
|------|--|
| defined | `lib/yuidoc.js:149` |

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The directory to parse the contents of.



##### method: `parsefiles()`

Gathers all the file data and populates the filemap and dirmap hashes.

| name |  |
|------|--|
| defined | `lib/yuidoc.js:189` |

###### Parameters
- dir <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The directory to start from.
- files <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> List of files to parse.



##### method: `run()`

Process the config, walk the file tree and write out the JSON data.

| name |  |
|------|--|
| defined | `lib/yuidoc.js:360` |


**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### method: `runPreprocessors()`

Applies preprocessors to the data tree. 
This function first clones the data and operates on the clone.

| name |  |
|------|--|
| defined | `lib/yuidoc.js:243` |


**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 


##### method: `walk()`

Walks the paths and parses the directory contents

| name |  |
|------|--|
| defined | `lib/yuidoc.js:138` |




##### method: `writeJSON()`

Writes the parser JSON data to disk.
Applies preprocessors, if any.

| name |  |
|------|--|
| defined | `lib/yuidoc.js:278` |

###### Parameters
- parser <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The DocParser instance to use

**Returns**
<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> 



