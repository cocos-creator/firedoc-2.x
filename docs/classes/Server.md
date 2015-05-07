
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
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/server.js:129`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>&#x60;/classes&#x60; endpoint</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				req Request Express request object

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				res Response Express response object

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### files() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/server.js:106`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>&#x60;/files&#x60; endpoint</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				req Request Express request object

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				res Response Express response object

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### home() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/server.js:161`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>&#x60;/&#x60; endpoint</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				req Request Express request object

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				res Response Express response object

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### init() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/server.js:173`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Creates the Express server and prep&#x27;s YUI for serving</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
			</ul>
		</td>
	</tr>


</table>


#### modules() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/server.js:145`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>&#x60;/modules&#x60; endpoint</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				req Request Express request object

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				res Response Express response object

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### parse() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/server.js:22`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Middleware to parse the API docs per request</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				req Request Express request object

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				res Response Express response object

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
				<li> 
				next <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> Express next callback

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>


#### routes() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/server.js:40`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Create the routes used to serve YUIDoc files dynamically</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
			</ul>
		</td>
	</tr>


</table>


#### start() 

<table>
	<tr>
		<th></th>
		<th>description</th>
	</tr>
	<tr>
		<th>type</th>
		<td></td>
	</tr>
	

  <tr>
		<th>defined</th>
		<td>`lib/server.js:191`</td>
	</tr>
	
	


	<tr>
		<th>description</th>
		<td>Start the server with the supplied options.</td>
	</tr>

	<tr>
		<th>Parameters</th>
		<td>
			<ul>
				<li> 
				options <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> Server options

				<!-- level 2 -->
				<!-- level 2 -->

				</li>
			</ul>
		</td>
	</tr>


</table>



