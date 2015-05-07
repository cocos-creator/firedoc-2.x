
# firedoc 0.8.16

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



##### `_externalData`

Cache for external mixed in data.

| meta |  |
|------|--|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| defined | `lib/server.js:15` |
| description |  |






<!-- Method Block -->
#### Methods


##### `clazz()`

`/classes` endpoint

| name |  |
|------|--|
| defined | `lib/server.js:129` |

###### Parameters
- req Request Express request object
- res Response Express response object



##### `files()`

`/files` endpoint

| name |  |
|------|--|
| defined | `lib/server.js:106` |

###### Parameters
- req Request Express request object
- res Response Express response object



##### `home()`

`/` endpoint

| name |  |
|------|--|
| defined | `lib/server.js:161` |

###### Parameters
- req Request Express request object
- res Response Express response object



##### `init()`

Creates the Express server and prep's YUI for serving

| name |  |
|------|--|
| defined | `lib/server.js:173` |




##### `modules()`

`/modules` endpoint

| name |  |
|------|--|
| defined | `lib/server.js:145` |

###### Parameters
- req Request Express request object
- res Response Express response object



##### `parse()`

Middleware to parse the API docs per request

| name |  |
|------|--|
| defined | `lib/server.js:22` |

###### Parameters
- req Request Express request object
- res Response Express response object
- next <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Express next callback



##### `routes()`

Create the routes used to serve YUIDoc files dynamically

| name |  |
|------|--|
| defined | `lib/server.js:40` |




##### `start()`

Start the server with the supplied options.

| name |  |
|------|--|
| defined | `lib/server.js:191` |

###### Parameters
- options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Server options




