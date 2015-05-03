
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `PieSeries` Class


Defined in: [tests/input/charts/PieSeries.js:1](../files/tests/input/charts/PieSeries.js.js)

Module: [charts](../modules/charts.md)




PieSeries visualizes data as a circular chart divided into wedges which represent data as a 
percentage of a whole.

### Index

##### Properties

  - `_categoryDisplayName`
  - `_defaultBorderColors`
  - `_defaultFillColors`
  - `_defaultLineColors`
  - `_defaultSliceColors`
  - `_image`
  - `_map`
  - `_valueDisplayName`
  - `GUID`


##### Attributes

  - `categoryAxis`
  - `categoryAxis`
  - `categoryDisplayName`
  - `categoryKey`
  - `graph`
  - `order`
  - `slices`
  - `styles`
  - `type`
  - `valueDisplayName`
  - `valueKey`


##### Methods


  - `_addHotspot`
  - `_categoryAxisChangeHandler`
  - `_categoryDataChangeHandler`
  - `_createMarker`
  - `_createMarkerCache`
  - `_getDefaultColor`
  - `_getPlotDefaults`
  - `_setMap`
  - `_valueAxisChangeHandler`
  - `_valueDataChangeHandler`
  - `addListeners`
  - `draw`
  - `drawPlots`
  - `updateMarkerState`
  - `validate`





### Details


#### Properties


`_categoryDisplayName`: `Unknown`

Defined in `tests/input/charts/PieSeries.js:65`



---------------------

Storage for `categoryDisplayName` attribute.




`_defaultBorderColors`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/PieSeries.js:517`



---------------------

Collection of default colors used for marker borders in a series when not specified by user.




`_defaultFillColors`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/PieSeries.js:508`



---------------------

Collection of default colors used for marker fills in a series when not specified by user.




`_defaultLineColors`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/PieSeries.js:499`



---------------------

Collection of default colors used for lines in a series when not specified by user.




`_defaultSliceColors`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/PieSeries.js:526`



---------------------

Collection of default colors used for area fills, histogram fills and pie fills in a series when not specified by user.




`_image`: `<a href="https://developer.mozilla.org/en/Document_Object_Model_(DOM)/HTMLElement" class="crosslink external" target="_blank">HTMLElement</a>`

Defined in `tests/input/charts/PieSeries.js:20`



---------------------

Image used for image map when rendered with canvas.




`_map`: `<a href="https://developer.mozilla.org/en/Document_Object_Model_(DOM)/HTMLElement" class="crosslink external" target="_blank">HTMLElement</a>`

Defined in `tests/input/charts/PieSeries.js:11`



---------------------

Image map used for interactivity when rendered with canvas.




`_valueDisplayName`: `Unknown`

Defined in `tests/input/charts/PieSeries.js:73`



---------------------

Storage for `valueDisplayName` attribute.




`GUID`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/PieSeries.js:146`



---------------------

Constant used to generate unique id.






#### Attributes


`categoryAxis`: `<a href="../classes/Axis.html" class="crosslink">Axis</a>`

Defined in `tests/input/charts/PieSeries.js:591`



---------------------




##### Fires event `categoryAxisChange`

Fires when the value for the configuration attribute `categoryAxis` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`categoryAxis`: `<a href="../classes/Axis.html" class="crosslink">Axis</a>`

Defined in `tests/input/charts/PieSeries.js:607`



---------------------




##### Fires event `categoryAxisChange`

Fires when the value for the configuration attribute `categoryAxis` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`categoryDisplayName`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/PieSeries.js:654`



---------------------




##### Fires event `categoryDisplayNameChange`

Fires when the value for the configuration attribute `categoryDisplayName` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`categoryKey`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/PieSeries.js:623`



---------------------




##### Fires event `categoryKeyChange`

Fires when the value for the configuration attribute `categoryKey` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`graph`: `<a href="../classes/Graph.html" class="crosslink">Graph</a>`

Defined in `tests/input/charts/PieSeries.js:583`



---------------------




##### Fires event `graphChange`

Fires when the value for the configuration attribute `graph` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`order`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/PieSeries.js:575`



---------------------




##### Fires event `orderChange`

Fires when the value for the configuration attribute `order` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`slices`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/PieSeries.js:692`



---------------------




##### Fires event `slicesChange`

Fires when the value for the configuration attribute `slices` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`styles`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/PieSeries.js:699`



---------------------




##### Fires event `stylesChange`

Fires when the value for the configuration attribute `styles` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`type`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/PieSeries.js:564`



---------------------



**Default**: pie

##### Fires event `typeChange`

Fires when the value for the configuration attribute `type` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`valueDisplayName`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/PieSeries.js:673`



---------------------




##### Fires event `valueDisplayNameChange`

Fires when the value for the configuration attribute `valueDisplayName` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`valueKey`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/PieSeries.js:638`



---------------------




##### Fires event `valueKeyChange`

Fires when the value for the configuration attribute `valueKey` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods



--------------------------
#### _addHotspot() 

Defined in `tests/input/charts/PieSeries.js:345`



> Adds an interactive map when rendering in canvas.

**Parameters**
- cfg `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Object containing data used to draw the hotspot
- seriesIndex `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Index of series in the `seriesCollection`.
- index `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Index of the marker using the hotspot.



--------------------------
#### _categoryAxisChangeHandler() 

Defined in `tests/input/charts/PieSeries.js:118`



> Event handler for the categoryAxisChange event.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _categoryDataChangeHandler() 

Defined in `tests/input/charts/PieSeries.js:155`



> Event handler for categoryDataChange event.

**Parameters**
- event `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _createMarker() 

Defined in `tests/input/charts/PieSeries.js:427`



> Creates a shape to be used as a marker.

**Parameters**
- styles `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Hash of style properties.
- order `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Order of the series.
- index `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Index within the series associated with the marker.

**Returns**
`` 


--------------------------
#### _createMarkerCache() 

Defined in `tests/input/charts/PieSeries.js:448`



> Creates a cache of markers for reuse.




--------------------------
#### _getDefaultColor() 

Defined in `tests/input/charts/PieSeries.js:535`



> Colors used if style colors are not specified

**Parameters**
- index `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Index indicating the series order.
- type `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Indicates which type of object needs the color.

**Returns**
`` 


--------------------------
#### _getPlotDefaults() 

Defined in `tests/input/charts/PieSeries.js:470`



> Gets the default style values for the markers.


**Returns**
`` 


--------------------------
#### _setMap() 

Defined in `tests/input/charts/PieSeries.js:29`



> Creates or updates the image map when rendered with canvas.




--------------------------
#### _valueAxisChangeHandler() 

Defined in `tests/input/charts/PieSeries.js:132`



> Event handler for the valueAxisChange event.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _valueDataChangeHandler() 

Defined in `tests/input/charts/PieSeries.js:170`



> Event handler for valueDataChange event.

**Parameters**
- event `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### addListeners() 

Defined in `tests/input/charts/PieSeries.js:81`



> Adds event listeners.




--------------------------
#### draw() 

Defined in `tests/input/charts/PieSeries.js:185`



> Draws the series. Overrides the base implementation.




--------------------------
#### drawPlots() 

Defined in `tests/input/charts/PieSeries.js:219`



> Draws the markers




--------------------------
#### updateMarkerState() 

Defined in `tests/input/charts/PieSeries.js:402`



> Resizes and positions markers based on a mouse interaction.

**Parameters**
- type `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` state of the marker
- i `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` index of the marker



--------------------------
#### validate() 

Defined in `tests/input/charts/PieSeries.js:106`



> Draws the series.





