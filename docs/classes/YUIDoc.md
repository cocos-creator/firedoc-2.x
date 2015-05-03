
# yuidoc-root 0.6.21

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


`dirmap`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `lib/yuidoc.js:87`



---------------------

Holder for the list of directories we are processing.




`endtime`: `Timestamp`

Defined in `lib/yuidoc.js:387`



---------------------

Timestamp holder so we know when YUIDoc has finished the parse process.




`filecount`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `lib/yuidoc.js:66`



---------------------

Holds the number of files that we are processing.




`filemap`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `lib/yuidoc.js:80`



---------------------

Holder for the list of files we are processing.




`OPTIONS`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `lib/yuidoc.js:29`



---------------------

The default list of configuration options




`options`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `lib/yuidoc.js:95`



---------------------

Internal holder for configuration options.




`selleck`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `lib/yuidoc.js:73`



---------------------

Hash map of dirnames to selleck config options.




`starttime`: `Timestamp`

Defined in `lib/yuidoc.js:366`



---------------------

Timestamp holder so we know when YUIDoc started the parse process.







<!-- Method Block -->
#### Methods

##### Constructor

--------------------------
#### YUIDoc() 

Defined in `lib/yuidoc.js:49`



> 

**Parameters**
- config `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` The config object




--------------------------
#### _processConfig() 

Defined in `lib/yuidoc.js:127`



> Does post process on self.options.




--------------------------
#### _setDefaultExcludes() 

Defined in `lib/yuidoc.js:112`



> Always exclude these directories




--------------------------
#### parsedir() 

Defined in `lib/yuidoc.js:149`



> Walks the passed directory and grabs all the files recursively.

**Parameters**
- dir `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` The directory to parse the contents of.



--------------------------
#### parsefiles() 

Defined in `lib/yuidoc.js:189`



> Gathers all the file data and populates the filemap and dirmap hashes.

**Parameters**
- dir `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` The directory to start from.
- files `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` List of files to parse.



--------------------------
#### run() 

Defined in `lib/yuidoc.js:360`



> Process the config, walk the file tree and write out the JSON data.


**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` 


--------------------------
#### runPreprocessors() 

Defined in `lib/yuidoc.js:243`



> Applies preprocessors to the data tree. 
This function first clones the data and operates on the clone.


**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` 


--------------------------
#### walk() 

Defined in `lib/yuidoc.js:138`



> Walks the paths and parses the directory contents




--------------------------
#### writeJSON() 

Defined in `lib/yuidoc.js:278`



> Writes the parser JSON data to disk.
Applies preprocessors, if any.

**Parameters**
- parser `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` The DocParser instance to use

**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` 



