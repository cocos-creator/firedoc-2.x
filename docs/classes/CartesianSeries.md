
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `CartesianSeries` Class


Defined in: [tests/input/charts/CartesianSeries.js:1](../files/tests/input/charts/CartesianSeries.js.js)

Module: [charts](../modules/charts.md)




The CartesianSeries class creates a chart with horizontal and vertical axes.

### Index

##### Properties

  - `_bottomOrigin`
  - `_defaultBorderColors`
  - `_defaultFillColors`
  - `_defaultLineColors`
  - `_defaultPlaneOffset`
  - `_defaultSliceColors`
  - `_leftOrigin`
  - `_xDisplayName`
  - `_yDisplayName`
  - `GUID`


##### Attributes

  - `categoryDisplayName`
  - `chart`
  - `direction`
  - `graph`
  - `graphOrder`
  - `groupMarkers`
  - `height`
  - `order`
  - `rendered`
  - `type`
  - `valueDisplayName`
  - `visible`
  - `xAxis`
  - `xcoords`
  - `xData`
  - `xDisplayName`
  - `xKey`
  - `xMarkerPlane`
  - `xMarkerPlaneOffset`
  - `yAxis`
  - `ycoords`
  - `yData`
  - `yDisplayName`
  - `yKey`
  - `yMarkerPlane`
  - `yMarkerPlaneOffset`


##### Methods


  - `_getDefaultColor`
  - `_getDefaultStyles`
  - `_handleVisibleChange`
  - `_setCanvas`
  - `_updateAxisData`
  - `_xAxisChangeHandler`
  - `_xDataChangeHandler`
  - `_yAxisChangeHandler`
  - `_yDataChangeHandler`
  - `addListeners`
  - `destructor`
  - `draw`
  - `getTotalValues`
  - `render`
  - `setAreaData`
  - `validate`





### Inheritance tree


### Details


#### Properties


`_bottomOrigin`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianSeries.js:38`



---------------------

The y-coordinate for the bottom edge of the series.




`_defaultBorderColors`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/CartesianSeries.js:407`



---------------------

Collection of default colors used for marker borders in a series when not specified by user.




`_defaultFillColors`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/CartesianSeries.js:398`



---------------------

Collection of default colors used for marker fills in a series when not specified by user.




`_defaultLineColors`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/CartesianSeries.js:389`



---------------------

Collection of default colors used for lines in a series when not specified by user.




`_defaultPlaneOffset`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/CartesianSeries.js:362`



---------------------

Default value for plane offsets when the parent chart's `interactiveType` is `planar`.




`_defaultSliceColors`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/CartesianSeries.js:416`



---------------------

Collection of default colors used for area fills, histogram fills and pie fills in a series when not specified by user.




`_leftOrigin`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianSeries.js:29`



---------------------

Th x-coordinate for the left edge of the series.




`_xDisplayName`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianSeries.js:11`



---------------------

Storage for `xDisplayName` attribute.




`_yDisplayName`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianSeries.js:20`



---------------------

Storage for `yDisplayName` attribute.




`GUID`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianSeries.js:133`



---------------------

Constant used to generate unique id.






#### Attributes


`categoryDisplayName`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianSeries.js:539`



---------------------




##### Fires event `categoryDisplayNameChange`

Fires when the value for the configuration attribute `categoryDisplayName` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`chart`: `<a href="../classes/ChartBase.html" class="crosslink">ChartBase</a>`

Defined in `tests/input/charts/CartesianSeries.js:614`



---------------------




##### Fires event `chartChange`

Fires when the value for the configuration attribute `chart` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`direction`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianSeries.js:803`



---------------------




##### Fires event `directionChange`

Fires when the value for the configuration attribute `direction` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`graph`: `<a href="../classes/Graph.html" class="crosslink">Graph</a>`

Defined in `tests/input/charts/CartesianSeries.js:630`



---------------------




##### Fires event `graphChange`

Fires when the value for the configuration attribute `graph` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`graphOrder`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/CartesianSeries.js:590`



---------------------




##### Fires event `graphOrderChange`

Fires when the value for the configuration attribute `graphOrder` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`groupMarkers`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/CartesianSeries.js:813`



---------------------




##### Fires event `groupMarkersChange`

Fires when the value for the configuration attribute `groupMarkers` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`height`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/CartesianSeries.js:725`



---------------------




##### Fires event `heightChange`

Fires when the value for the configuration attribute `height` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`order`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/CartesianSeries.js:582`



---------------------




##### Fires event `orderChange`

Fires when the value for the configuration attribute `order` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`rendered`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/CartesianSeries.js:700`



---------------------




##### Fires event `renderedChange`

Fires when the value for the configuration attribute `rendered` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`type`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianSeries.js:571`



---------------------



**Default**: cartesian

##### Fires event `typeChange`

Fires when the value for the configuration attribute `type` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`valueDisplayName`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianSeries.js:555`



---------------------




##### Fires event `valueDisplayNameChange`

Fires when the value for the configuration attribute `valueDisplayName` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`visible`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/CartesianSeries.js:740`



---------------------



**Default**: true

##### Fires event `visibleChange`

Fires when the value for the configuration attribute `visible` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`xAxis`: `<a href="../classes/Axis.html" class="crosslink">Axis</a>`

Defined in `tests/input/charts/CartesianSeries.js:638`



---------------------




##### Fires event `xAxisChange`

Fires when the value for the configuration attribute `xAxis` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`xcoords`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/CartesianSeries.js:598`



---------------------




##### Fires event `xcoordsChange`

Fires when the value for the configuration attribute `xcoords` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`xData`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/CartesianSeries.js:684`



---------------------




##### Fires event `xDataChange`

Fires when the value for the configuration attribute `xData` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`xDisplayName`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianSeries.js:501`



---------------------




##### Fires event `xDisplayNameChange`

Fires when the value for the configuration attribute `xDisplayName` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`xKey`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianSeries.js:656`



---------------------




##### Fires event `xKeyChange`

Fires when the value for the configuration attribute `xKey` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`xMarkerPlane`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/CartesianSeries.js:751`



---------------------




##### Fires event `xMarkerPlaneChange`

Fires when the value for the configuration attribute `xMarkerPlane` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`xMarkerPlaneOffset`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/CartesianSeries.js:769`



---------------------




##### Fires event `xMarkerPlaneOffsetChange`

Fires when the value for the configuration attribute `xMarkerPlaneOffset` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`yAxis`: `<a href="../classes/Axis.html" class="crosslink">Axis</a>`

Defined in `tests/input/charts/CartesianSeries.js:647`



---------------------




##### Fires event `yAxisChange`

Fires when the value for the configuration attribute `yAxis` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`ycoords`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/CartesianSeries.js:606`



---------------------




##### Fires event `ycoordsChange`

Fires when the value for the configuration attribute `ycoords` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`yData`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/CartesianSeries.js:692`



---------------------




##### Fires event `yDataChange`

Fires when the value for the configuration attribute `yData` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`yDisplayName`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianSeries.js:520`



---------------------




##### Fires event `yDisplayNameChange`

Fires when the value for the configuration attribute `yDisplayName` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`yKey`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianSeries.js:670`



---------------------




##### Fires event `yKeyChange`

Fires when the value for the configuration attribute `yKey` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`yMarkerPlane`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/CartesianSeries.js:760`



---------------------




##### Fires event `yMarkerPlaneChange`

Fires when the value for the configuration attribute `yMarkerPlane` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`yMarkerPlaneOffset`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/CartesianSeries.js:786`



---------------------




##### Fires event `yMarkerPlaneOffsetChange`

Fires when the value for the configuration attribute `yMarkerPlaneOffset` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods



--------------------------
#### _getDefaultColor() 

Defined in `tests/input/charts/CartesianSeries.js:425`



> Parses a color based on a series order and type.

**Parameters**
- index `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Index indicating the series order.
- type `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Indicates which type of object needs the color.

**Returns**
`` 


--------------------------
#### _getDefaultStyles() 

Defined in `tests/input/charts/CartesianSeries.js:371`



> Gets the default value for the `styles` attribute. Overrides
base implementation.


**Returns**
`` 


--------------------------
#### _handleVisibleChange() 

Defined in `tests/input/charts/CartesianSeries.js:453`



> Shows/hides contents of the series.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _setCanvas() 

Defined in `tests/input/charts/CartesianSeries.js:222`



> Creates a `Graphic` instance.




--------------------------
#### _updateAxisData() 

Defined in `tests/input/charts/CartesianSeries.js:174`



> Checks to ensure that both xAxis and yAxis data are available. If so, set the `xData` and `yData` attributes and return `true`. Otherwise, return `false`.


**Returns**
`` 


--------------------------
#### _xAxisChangeHandler() 

Defined in `tests/input/charts/CartesianSeries.js:105`



> Event handler for the xAxisChange event.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _xDataChangeHandler() 

Defined in `tests/input/charts/CartesianSeries.js:142`



> Event handler for xDataChange event.

**Parameters**
- event `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _yAxisChangeHandler() 

Defined in `tests/input/charts/CartesianSeries.js:119`



> Event handler the yAxisChange event.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _yDataChangeHandler() 

Defined in `tests/input/charts/CartesianSeries.js:158`



> Event handler for yDataChange event.

**Parameters**
- event `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### addListeners() 

Defined in `tests/input/charts/CartesianSeries.js:59`



> Adds event listeners.




--------------------------
#### destructor() 

Defined in `tests/input/charts/CartesianSeries.js:477`



> Destructor implementation for the CartesianSeries class. Calls destroy on all Graphic instances.




--------------------------
#### draw() 

Defined in `tests/input/charts/CartesianSeries.js:321`



> Draws the series.




--------------------------
#### getTotalValues() 

Defined in `tests/input/charts/CartesianSeries.js:465`



> Returns the sum of all values for the series.


**Returns**
`` 


--------------------------
#### render() 

Defined in `tests/input/charts/CartesianSeries.js:47`



> 




--------------------------
#### setAreaData() 

Defined in `tests/input/charts/CartesianSeries.js:235`



> Calculates the coordinates for the series.




--------------------------
#### validate() 

Defined in `tests/input/charts/CartesianSeries.js:204`



> Draws the series is the xAxis and yAxis data are both available.





