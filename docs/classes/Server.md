
# firedoc 0.8.19

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `Server` Class


Defined in: [lib/server.js:9](../files/lib/server.js.js)

Module: [yuidoc](../modules/yuidoc.md)




Provides the `--server` server option for YUIDoc

### Index

##### Properties

  - [`_externalData`](#property-_externaldata)



##### Methods

  - [`clazz`](#method-clazz)
  - [`files`](#method-files)
  - [`home`](#method-home)
  - [`init`](#method-init)
  - [`modules`](#method-modules)
  - [`parse`](#method-parse)
  - [`routes`](#method-routes)
  - [`start`](#method-start)





### Details


#### Properties



##### property: `_externalData`

Cache for external mixed in data.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | `lib/server.js:15` |






<!-- Method Block -->
#### Methods


##### method: `clazz()`

`/classes` endpoint

| meta | description |
|------|-------------|
| Defined | `lib/server.js:129` |

###### Parameters
- req Request Express request object
- res Response Express response object


##### method: `files()`

`/files` endpoint

| meta | description |
|------|-------------|
| Defined | `lib/server.js:106` |

###### Parameters
- req Request Express request object
- res Response Express response object


##### method: `home()`

`/` endpoint

| meta | description |
|------|-------------|
| Defined | `lib/server.js:161` |

###### Parameters
- req Request Express request object
- res Response Express response object


##### method: `init()`

Creates the Express server and prep's YUI for serving

| meta | description |
|------|-------------|
| Defined | `lib/server.js:173` |



##### method: `modules()`

`/modules` endpoint

| meta | description |
|------|-------------|
| Defined | `lib/server.js:145` |

###### Parameters
- req Request Express request object
- res Response Express response object


##### method: `parse()`

Middleware to parse the API docs per request

| meta | description |
|------|-------------|
| Defined | `lib/server.js:22` |

###### Parameters
- req Request Express request object
- res Response Express response object
- next <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Express next callback


##### method: `routes()`

Create the routes used to serve YUIDoc files dynamically

| meta | description |
|------|-------------|
| Defined | `lib/server.js:40` |



##### method: `start()`

Start the server with the supplied options.

| meta | description |
|------|-------------|
| Defined | `lib/server.js:191` |

###### Parameters
- options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Server options



