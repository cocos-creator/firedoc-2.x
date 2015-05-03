
# firedoc 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `Server` Class


Defined in: [lib/server.js:9](../files/lib/server.js.js)

Module: [yuidoc](../modules/yuidoc.md)




Provides the `--server` server option for YUIDoc

### Index

##### Properties

  - `_externalData`



##### Methods

  - `clazz`
  - `files`
  - `home`
  - `init`
  - `modules`
  - `parse`
  - `routes`
  - `start`





### Details


#### Properties


`_externalData`: <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>

Defined in `lib/server.js:15`



---------------------

Cache for external mixed in data.







<!-- Method Block -->
#### Methods


--------------------------
#### clazz() 

Defined in `lib/server.js:129`



> `/classes` endpoint

**Parameters**
- req Request Express request object
- res Response Express response object



--------------------------
#### files() 

Defined in `lib/server.js:106`



> `/files` endpoint

**Parameters**
- req Request Express request object
- res Response Express response object



--------------------------
#### home() 

Defined in `lib/server.js:161`



> `/` endpoint

**Parameters**
- req Request Express request object
- res Response Express response object



--------------------------
#### init() 

Defined in `lib/server.js:173`



> Creates the Express server and prep's YUI for serving




--------------------------
#### modules() 

Defined in `lib/server.js:145`



> `/modules` endpoint

**Parameters**
- req Request Express request object
- res Response Express response object



--------------------------
#### parse() 

Defined in `lib/server.js:22`



> Middleware to parse the API docs per request

**Parameters**
- req Request Express request object
- res Response Express response object
- next <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Express next callback



--------------------------
#### routes() 

Defined in `lib/server.js:40`



> Create the routes used to serve YUIDoc files dynamically




--------------------------
#### start() 

Defined in `lib/server.js:191`



> Start the server with the supplied options.

**Parameters**
- options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Server options




