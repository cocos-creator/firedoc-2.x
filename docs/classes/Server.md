
# firedoc 1.1.3

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `Server` Class


Defined in: [lib/server.js:9](../files/lib/server.js.js)

Module: [yuidoc](../modules/yuidoc.md)




Provides the `--server` server option for YUIDoc

### Index

##### Properties

  - [`_externalData`](#property-_externaldata)



##### Methods

  - [`clazz(req, res)`](#method-clazzreq-res)
  - [`files(req, res)`](#method-filesreq-res)
  - [`home(req, res)`](#method-homereq-res)
  - [`init()`](#method-init)
  - [`modules(req, res)`](#method-modulesreq-res)
  - [`parse(req, res, next)`](#method-parsereq-res-next)
  - [`routes()`](#method-routes)
  - [`start(options)`](#method-startoptions)





### Details


#### Properties



##### property: `_externalData`

Cache for external mixed in data.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/server.js:15](../files/lib_server.js.md#l15) |






<!-- Method Block -->
#### Methods


##### method: `clazz(req, res)`

`/classes` endpoint

| meta | description |
|------|-------------|
| Defined | [lib/server.js:129](../files/lib_server.js.md#l129) |

###### Parameters
- req Request Express request object
- res Response Express response object


##### method: `files(req, res)`

`/files` endpoint

| meta | description |
|------|-------------|
| Defined | [lib/server.js:106](../files/lib_server.js.md#l106) |

###### Parameters
- req Request Express request object
- res Response Express response object


##### method: `home(req, res)`

`/` endpoint

| meta | description |
|------|-------------|
| Defined | [lib/server.js:161](../files/lib_server.js.md#l161) |

###### Parameters
- req Request Express request object
- res Response Express response object


##### method: `init()`

Creates the Express server and prep's YUI for serving

| meta | description |
|------|-------------|
| Defined | [lib/server.js:173](../files/lib_server.js.md#l173) |



##### method: `modules(req, res)`

`/modules` endpoint

| meta | description |
|------|-------------|
| Defined | [lib/server.js:145](../files/lib_server.js.md#l145) |

###### Parameters
- req Request Express request object
- res Response Express response object


##### method: `parse(req, res, next)`

Middleware to parse the API docs per request

| meta | description |
|------|-------------|
| Defined | [lib/server.js:22](../files/lib_server.js.md#l22) |

###### Parameters
- req Request Express request object
- res Response Express response object
- next <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Express next callback


##### method: `routes()`

Create the routes used to serve YUIDoc files dynamically

| meta | description |
|------|-------------|
| Defined | [lib/server.js:40](../files/lib_server.js.md#l40) |



##### method: `start(options)`

Start the server with the supplied options.

| meta | description |
|------|-------------|
| Defined | [lib/server.js:191](../files/lib_server.js.md#l191) |

###### Parameters
- options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Server options



