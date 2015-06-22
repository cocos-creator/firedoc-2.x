
# firedoc 1.5.12

Fireball is the game engine for the future.

### `Server` Class


Defined in: [lib/server.js:9](../files/lib/server.js.js)

Module: [yuidoc](../modules/yuidoc.md)




Provides the `--server` server option for YUIDoc

### Index

##### Properties

  - [`_externalData`](#property-_externaldata) `Object` Cache for external mixed in data.



##### Methods

  - [`parse`](#method-parse) Middleware to parse the API docs per request
  - [`routes`](#method-routes) Create the routes used to serve YUIDoc files dynamically
  - [`files`](#method-files) `/files` endpoint
  - [`clazz`](#method-clazz) `/classes` endpoint
  - [`modules`](#method-modules) `/modules` endpoint
  - [`home`](#method-home) `/` endpoint
  - [`init`](#method-init) Creates the Express server and prep's YUI for serving
  - [`start`](#method-start) Start the server with the supplied options.





### Details


#### Properties


##### _externalData

> Cache for external mixed in data.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/server.js:15](../files/lib_server.js.md#l15) |






<!-- Method Block -->
#### Methods


##### parse

Middleware to parse the API docs per request

| meta | description |
|------|-------------|
| Defined | [lib/server.js:22](../files/lib_server.js.md#l22) |

###### Parameters
- req Request Express request object
- res Response Express response object
- next <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Express next callback


##### routes

Create the routes used to serve YUIDoc files dynamically

| meta | description |
|------|-------------|
| Defined | [lib/server.js:40](../files/lib_server.js.md#l40) |



##### files

`/files` endpoint

| meta | description |
|------|-------------|
| Defined | [lib/server.js:106](../files/lib_server.js.md#l106) |

###### Parameters
- req Request Express request object
- res Response Express response object


##### clazz

`/classes` endpoint

| meta | description |
|------|-------------|
| Defined | [lib/server.js:129](../files/lib_server.js.md#l129) |

###### Parameters
- req Request Express request object
- res Response Express response object


##### modules

`/modules` endpoint

| meta | description |
|------|-------------|
| Defined | [lib/server.js:145](../files/lib_server.js.md#l145) |

###### Parameters
- req Request Express request object
- res Response Express response object


##### home

`/` endpoint

| meta | description |
|------|-------------|
| Defined | [lib/server.js:161](../files/lib_server.js.md#l161) |

###### Parameters
- req Request Express request object
- res Response Express response object


##### init

Creates the Express server and prep's YUI for serving

| meta | description |
|------|-------------|
| Defined | [lib/server.js:173](../files/lib_server.js.md#l173) |



##### start

Start the server with the supplied options.

| meta | description |
|------|-------------|
| Defined | [lib/server.js:191](../files/lib_server.js.md#l191) |

###### Parameters
- options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Server options



