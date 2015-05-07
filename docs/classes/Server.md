
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

|      | description |
|------|-------------|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| defined | `lib/server.js:15` |
| description | Cache for external mixed in data. |






<!-- Method Block -->
#### Methods


##### `clazz()`

|      | description |
|------|-------------|
| defined | `lib/server.js:129` |
| description | `/classes` endpoint |

###### Parameters
- req Request Express request object
- res Response Express response object



##### `files()`

|      | description |
|------|-------------|
| defined | `lib/server.js:106` |
| description | `/files` endpoint |

###### Parameters
- req Request Express request object
- res Response Express response object



##### `home()`

|      | description |
|------|-------------|
| defined | `lib/server.js:161` |
| description | `/` endpoint |

###### Parameters
- req Request Express request object
- res Response Express response object



##### `init()`

|      | description |
|------|-------------|
| defined | `lib/server.js:173` |
| description | Creates the Express server and prep's YUI for serving |




##### `modules()`

|      | description |
|------|-------------|
| defined | `lib/server.js:145` |
| description | `/modules` endpoint |

###### Parameters
- req Request Express request object
- res Response Express response object



##### `parse()`

|      | description |
|------|-------------|
| defined | `lib/server.js:22` |
| description | Middleware to parse the API docs per request |

###### Parameters
- req Request Express request object
- res Response Express response object
- next <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Express next callback



##### `routes()`

|      | description |
|------|-------------|
| defined | `lib/server.js:40` |
| description | Create the routes used to serve YUIDoc files dynamically |




##### `start()`

|      | description |
|------|-------------|
| defined | `lib/server.js:191` |
| description | Start the server with the supplied options. |

###### Parameters
- options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Server options




