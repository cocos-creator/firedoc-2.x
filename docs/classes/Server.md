
# firedoc 0.8.15

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



- `_externalData`

|      | description |
|------|-------------|
| type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| defined | `lib/server.js:15` |
| description | Cache for external mixed in data. |






<!-- Method Block -->
#### Methods


#### clazz() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/server.js:129`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>&#x60;/classes&#x60; endpoint</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- req Request Express request object
		- res Response Express response object
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### files() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/server.js:106`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>&#x60;/files&#x60; endpoint</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- req Request Express request object
		- res Response Express response object
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### home() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/server.js:161`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>&#x60;/&#x60; endpoint</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- req Request Express request object
		- res Response Express response object
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### init() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/server.js:173`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Creates the Express server and prep&#x27;s YUI for serving</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### modules() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/server.js:145`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>&#x60;/modules&#x60; endpoint</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- req Request Express request object
		- res Response Express response object
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### parse() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/server.js:22`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Middleware to parse the API docs per request</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- req Request Express request object
		- res Response Express response object
		- next <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Express next callback
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### routes() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/server.js:40`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Create the routes used to serve YUIDoc files dynamically</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>


#### start() 

<table>
	<tr>
		<td></td>
		<td></description>
	</tr>
	<tr>
		<td>type</td>
		<td></td>
	</tr>
	

  <tr>
		<td>defined</td>
		<td>`lib/server.js:191`</td>
	</tr>
	
	


	<tr>
		<td>description</td>
		<td>Start the server with the supplied options.</td>
	</tr>

	<tr>
		<td>Parameters</td>
		<td>
		- options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Server options
		</td>
	</tr>

	<tr>
		<td>Return</td>
		<td>
		</td>
	</tr>

</table>



