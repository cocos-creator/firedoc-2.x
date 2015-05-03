
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `CartesianChart` Class


Defined in: [tests/input/charts/CartesianChart.js:1](../files/tests/input/charts/CartesianChart.js.js)

Module: [charts](../modules/charts.md)




The CartesianChart class creates a chart with horizontal and vertical axes.

### Index

##### Properties

  - `_itemRenderQueue`
  - `_type`


##### Attributes

  - `allowContentOverflow`
  - `axes`
  - `axesStyles`
  - `bottomAxesCollection`
  - `categoryAxis`
  - `categoryAxisName`
  - `direction`
  - `graphStyles`
  - `horizontalGridlines`
  - `leftAxesCollection`
  - `rightAxesCollection`
  - `seriesCollection`
  - `seriesStyles`
  - `showAreaFill`
  - `showLines`
  - `showMarkers`
  - `stacked`
  - `styles`
  - `topAxesCollection`
  - `type`
  - `valueAxisName`
  - `verticalGridlines`


##### Methods


  - `_addAxes`
  - `_addGridlines`
  - `_addSeries`
  - `_addToAxesCollection`
  - `_addToAxesRenderQueue`
  - `_getAllKeys`
  - `_getAriaMessage`
  - `_getBaseAttribute`
  - `_getBottomOverflow`
  - `_getCategoryAxis`
  - `_getDefaultAxes`
  - `_getDefaultAxisPosition`
  - `_getDefaultSeriesCollection`
  - `_getLeftOverflow`
  - `_getRightOverflow`
  - `_getSeriesAxis`
  - `_getTopOverflow`
  - `_parseAxes`
  - `_parseSeriesAxes`
  - `_parseSeriesCollection`
  - `_planarEventDispatcher`
  - `_redraw`
  - `_setAxes`
  - `_setBaseAttribute`
  - `_sizeChanged`
  - `destructor`
  - `getSeriesItems`
  - `renderUI`



##### Events

  - `planarEvent:mouseout`
  - `planarEvent:mouseover`




### Details


#### Properties


`_itemRenderQueue`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/CartesianChart.js:205`



---------------------

Queue of axes instances that will be updated. This method is used internally to determine when all axes have been updated.




`_type`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianChart.js:196`



---------------------

Indicates the default series type for the chart.






#### Attributes


`allowContentOverflow`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/CartesianChart.js:1658`



---------------------




##### Fires event `allowContentOverflowChange`

Fires when the value for the configuration attribute `allowContentOverflow` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`axes`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/CartesianChart.js:1866`



---------------------




##### Fires event `axesChange`

Fires when the value for the configuration attribute `axes` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`axesStyles`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/CartesianChart.js:1668`



---------------------




##### Fires event `axesStylesChange`

Fires when the value for the configuration attribute `axesStyles` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`bottomAxesCollection`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/CartesianChart.js:1907`



---------------------




##### Fires event `bottomAxesCollectionChange`

Fires when the value for the configuration attribute `bottomAxesCollection` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`categoryAxis`: `<a href="../classes/Axis.html" class="crosslink">Axis</a>`

Defined in `tests/input/charts/CartesianChart.js:2123`



---------------------




##### Fires event `categoryAxisChange`

Fires when the value for the configuration attribute `categoryAxis` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`categoryAxisName`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianChart.js:1998`



---------------------




##### Fires event `categoryAxisNameChange`

Fires when the value for the configuration attribute `categoryAxisName` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`direction`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianChart.js:1944`



---------------------




##### Fires event `directionChange`

Fires when the value for the configuration attribute `direction` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`graphStyles`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/CartesianChart.js:1775`



---------------------




##### Fires event `graphStylesChange`

Fires when the value for the configuration attribute `graphStyles` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`horizontalGridlines`: `<a href="../classes/Gridlines.html" class="crosslink">Gridlines</a>`

Defined in `tests/input/charts/CartesianChart.js:2018`



---------------------




##### Fires event `horizontalGridlinesChange`

Fires when the value for the configuration attribute `horizontalGridlines` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`leftAxesCollection`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/CartesianChart.js:1898`



---------------------




##### Fires event `leftAxesCollectionChange`

Fires when the value for the configuration attribute `leftAxesCollection` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`rightAxesCollection`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/CartesianChart.js:1916`



---------------------




##### Fires event `rightAxesCollectionChange`

Fires when the value for the configuration attribute `rightAxesCollection` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`seriesCollection`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/CartesianChart.js:1882`



---------------------




##### Fires event `seriesCollectionChange`

Fires when the value for the configuration attribute `seriesCollection` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`seriesStyles`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/CartesianChart.js:1712`



---------------------




##### Fires event `seriesStylesChange`

Fires when the value for the configuration attribute `seriesStyles` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`showAreaFill`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/CartesianChart.js:1974`



---------------------




##### Fires event `showAreaFillChange`

Fires when the value for the configuration attribute `showAreaFill` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`showLines`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/CartesianChart.js:1990`



---------------------




##### Fires event `showLinesChange`

Fires when the value for the configuration attribute `showLines` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`showMarkers`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/CartesianChart.js:1982`



---------------------




##### Fires event `showMarkersChange`

Fires when the value for the configuration attribute `showMarkers` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`stacked`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/CartesianChart.js:1934`



---------------------




##### Fires event `stackedChange`

Fires when the value for the configuration attribute `stacked` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`styles`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/CartesianChart.js:1801`



---------------------




##### Fires event `stylesChange`

Fires when the value for the configuration attribute `styles` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`topAxesCollection`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/CartesianChart.js:1925`



---------------------




##### Fires event `topAxesCollectionChange`

Fires when the value for the configuration attribute `topAxesCollection` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`type`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianChart.js:2086`



---------------------




##### Fires event `typeChange`

Fires when the value for the configuration attribute `type` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`valueAxisName`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CartesianChart.js:2008`



---------------------




##### Fires event `valueAxisNameChange`

Fires when the value for the configuration attribute `valueAxisName` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`verticalGridlines`: `<a href="../classes/Gridlines.html" class="crosslink">Gridlines</a>`

Defined in `tests/input/charts/CartesianChart.js:2052`



---------------------




##### Fires event `verticalGridlinesChange`

Fires when the value for the configuration attribute `verticalGridlines` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods



--------------------------
#### _addAxes() 

Defined in `tests/input/charts/CartesianChart.js:619`



> Adds axes to the chart.




--------------------------
#### _addGridlines() 

Defined in `tests/input/charts/CartesianChart.js:690`



> Adds gridlines to the chart.




--------------------------
#### _addSeries() 

Defined in `tests/input/charts/CartesianChart.js:676`



> Renders the Graph.




--------------------------
#### _addToAxesCollection() 

Defined in `tests/input/charts/CartesianChart.js:233`



> Adds axis instance to the appropriate array based on position

**Parameters**
- position `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` The position of the axis
- axis `<a href="../classes/Axis.html" class="crosslink">Axis</a>` The `Axis` instance



--------------------------
#### _addToAxesRenderQueue() 

Defined in `tests/input/charts/CartesianChart.js:214`



> Adds an `Axis` instance to the `_itemRenderQueue`.

**Parameters**
- axis `<a href="../classes/Axis.html" class="crosslink">Axis</a>` An `Axis` instance.



--------------------------
#### _getAllKeys() 

Defined in `tests/input/charts/CartesianChart.js:763`



> Returns all the keys contained in a  `dataProvider`.

**Parameters**
- dp `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Collection of objects to be parsed.

**Returns**
`` 


--------------------------
#### _getAriaMessage() 

Defined in `tests/input/charts/CartesianChart.js:1575`



> Returns the appropriate message based on the key press.

**Parameters**
- key `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The keycode that was pressed.

**Returns**
`` 


--------------------------
#### _getBaseAttribute() 

Defined in `tests/input/charts/CartesianChart.js:456`



> Gets an attribute from an object, using a getter for Base objects and a property for object
literals. Used for determining attributes from series/axis references which can be an actual class instance
or a hash of properties that will be used to create a class instance.

**Parameters**
- item `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Object or instance in which the attribute resides.
- key `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Attribute whose value will be returned.

**Returns**
`` 


--------------------------
#### _getBottomOverflow() 

Defined in `tests/input/charts/CartesianChart.js:1216`



> Returns the maximum distance in pixels that the extends outside the bottom bounds of all vertical axes.

**Parameters**
- set1 `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Collection of axes to check.
- set2 `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Seconf collection of axes to check.
- height `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Height of the axes

**Returns**
`` 


--------------------------
#### _getCategoryAxis() 

Defined in `tests/input/charts/CartesianChart.js:401`



> Returns the category axis instance for the chart.


**Returns**
`` 


--------------------------
#### _getDefaultAxes() 

Defined in `tests/input/charts/CartesianChart.js:791`



> Default Function for the axes attribute.


**Returns**
`` 


--------------------------
#### _getDefaultAxisPosition() 

Defined in `tests/input/charts/CartesianChart.js:970`



> Determines the position of an axis when one is not specified.

**Parameters**
- axis `<a href="../classes/Axis.html" class="crosslink">Axis</a>` `Axis` instance.
- valueAxes `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Array of `Axis` instances.
- position `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Default position depending on the direction of the chart and type of axis.

**Returns**
`` 


--------------------------
#### _getDefaultSeriesCollection() 

Defined in `tests/input/charts/CartesianChart.js:251`



> Returns the default value for the `seriesCollection` attribute.

**Parameters**
- val `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Array containing either `CartesianSeries` instances or objects containing data to construct series instances.

**Returns**
`` 


--------------------------
#### _getLeftOverflow() 

Defined in `tests/input/charts/CartesianChart.js:1178`



> Returns the maximum distance in pixels that the extends outside the left bounds of all horizontal axes.

**Parameters**
- set1 `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Collection of axes to check.
- set2 `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Seconf collection of axes to check.
- width `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Width of the axes

**Returns**
`` 


--------------------------
#### _getRightOverflow() 

Defined in `tests/input/charts/CartesianChart.js:1140`



> Returns the maximum distance in pixels that the extends outside the right bounds of all horizontal axes.

**Parameters**
- set1 `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Collection of axes to check.
- set2 `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Seconf collection of axes to check.
- width `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Width of the axes

**Returns**
`` 


--------------------------
#### _getSeriesAxis() 

Defined in `tests/input/charts/CartesianChart.js:417`



> Returns the value axis for a series.

**Parameters**
- key `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` The key value used to determine the axis instance.

**Returns**
`` 


--------------------------
#### _getTopOverflow() 

Defined in `tests/input/charts/CartesianChart.js:1102`



> Returns the maximum distance in pixels that the extends outside the top bounds of all vertical axes.

**Parameters**
- set1 `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Collection of axes to check.
- set2 `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Seconf collection of axes to check.
- width `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Width of the axes

**Returns**
`` 


--------------------------
#### _parseAxes() 

Defined in `tests/input/charts/CartesianChart.js:803`



> Generates and returns a key-indexed object containing `Axis` instances or objects used to create `Axis` instances.

**Parameters**
- axes `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Object containing `Axis` instances or `Axis` attributes.

**Returns**
`` 


--------------------------
#### _parseSeriesAxes() 

Defined in `tests/input/charts/CartesianChart.js:368`



> Parse and sets the axes for a series instance.

**Parameters**
- series `<a href="../classes/CartesianSeries.html" class="crosslink">CartesianSeries</a>` A `CartesianSeries` instance.



--------------------------
#### _parseSeriesCollection() 

Defined in `tests/input/charts/CartesianChart.js:264`



> Parses and returns a series collection from an object and default properties.

**Parameters**
- val `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Object contain properties for series being set.

**Returns**
`` 


--------------------------
#### _planarEventDispatcher() 

Defined in `tests/input/charts/CartesianChart.js:48`



> When `interactionType` is set to `planar`, listens for mouse move events and fires `planarEvent:mouseover` or `planarEvent:mouseout` depending on the position of the mouse in relation to 
data points on the `Chart`.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _redraw() 

Defined in `tests/input/charts/CartesianChart.js:1254`



> Redraws and position all the components of the chart instance.




--------------------------
#### _setAxes() 

Defined in `tests/input/charts/CartesianChart.js:503`



> Creates `Axis` instances.

**Parameters**
- val `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Object containing `Axis` instances or objects in which to construct `Axis` instances.

**Returns**
`` 


--------------------------
#### _setBaseAttribute() 

Defined in `tests/input/charts/CartesianChart.js:480`



> Sets an attribute on an object, using a setter of Base objects and a property for object
literals. Used for setting attributes on a Base class, either directly or to be stored in an object literal
for use at instantiation.

**Parameters**
- item `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Object or instance in which the attribute resides.
- key `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Attribute whose value will be assigned.
- value `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Value to be assigned to the attribute.



--------------------------
#### _sizeChanged() 

Defined in `tests/input/charts/CartesianChart.js:1080`



> Handler for sizeChanged event.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### destructor() 

Defined in `tests/input/charts/CartesianChart.js:1518`



> Destructor implementation for the CartesianChart class. Calls destroy on all axes, series and the Graph instance.
Removes the tooltip and overlay HTML elements.




--------------------------
#### getSeriesItems() 

Defined in `tests/input/charts/CartesianChart.js:1014`



> Returns an object literal containing a categoryItem and a valueItem for a given series index. Below is the structure of each:

**Parameters**
- series `<a href="../classes/CartesianSeries.html" class="crosslink">CartesianSeries</a>` Reference to a series.
- index `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Index of the specified item within a series.

**Returns**
`` 


--------------------------
#### renderUI() 

Defined in `tests/input/charts/CartesianChart.js:10`



> 






#### Events

### `planarEvent:mouseout` Event


Defined in: [tests/input/charts/CartesianChart.js:168](../files/tests/input/charts/CartesianChart.js.js)

Module: [charts](../modules/charts.md)




Broadcasts when `interactionType` is set to `planar` and a series' marker plane has received a mouseout event.

### Index







### Details




### `planarEvent:mouseover` Event


Defined in: [tests/input/charts/CartesianChart.js:148](../files/tests/input/charts/CartesianChart.js.js)

Module: [charts](../modules/charts.md)




Broadcasts when `interactionType` is set to `planar` and a series' marker plane has received a mouseover event.

### Index







### Details





