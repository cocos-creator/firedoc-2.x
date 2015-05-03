
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `ChartLegend` Class

Extends `Widget`

Defined in: [tests/input/charts/ChartLegend.js:1](../files/tests/input/charts/ChartLegend.js.js)

Module: [charts-legend](../modules/charts-legend.md)
Parent Module: [charts](../modules/charts.md)




ChartLegend provides a legend for a chart.

### Index

##### Properties

  - `_layout`


##### Attributes

  - `background`
  - `chart`
  - `direction`
  - `height`
  - `includeInChartLayout`
  - `position`
  - `styles`
  - `width`
  - `x`
  - `y`


##### Methods


  - `_destroyLegendItems`
  - `_drawLegend`
  - `_getDefaultStyles`
  - `_getLegendItem`
  - `_getPlotDefaults`
  - `_getShapeClass`
  - `_getStylesBySeriesType`
  - `_handleSizeChange`
  - `_positionChangeHandler`
  - `_updateBackground`
  - `_updateHandler`
  - `bindUI`
  - `destructor`
  - `initializer`
  - `renderUI`
  - `syncUI`




### Inherited members

##### Properties


##### Attributes


##### Methods


##### Events




### Details


#### Properties


`_layout`: `Unknown`

Defined in `tests/input/charts/ChartLegend.js:498`



---------------------

Maps layout classes.






#### Attributes


`background`: `Rect`

Defined in `tests/input/charts/ChartLegend.js:714`



---------------------




##### Fires event `backgroundChange`

Fires when the value for the configuration attribute `background` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`chart`: `<a href="../classes/Chart.html" class="crosslink">Chart</a>`

Defined in `tests/input/charts/ChartLegend.js:537`



---------------------




##### Fires event `chartChange`

Fires when the value for the configuration attribute `chart` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`direction`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/ChartLegend.js:551`



---------------------




##### Fires event `directionChange`

Fires when the value for the configuration attribute `direction` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`height`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/ChartLegend.js:627`



---------------------




##### Fires event `heightChange`

Fires when the value for the configuration attribute `height` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`includeInChartLayout`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/ChartLegend.js:526`



---------------------




##### Fires event `includeInChartLayoutChange`

Fires when the value for the configuration attribute `includeInChartLayout` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`position`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/ChartLegend.js:562`



---------------------




##### Fires event `positionChange`

Fires when the value for the configuration attribute `position` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`styles`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/ChartLegend.js:722`



---------------------




##### Fires event `stylesChange`

Fires when the value for the configuration attribute `styles` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`width`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/ChartLegend.js:588`



---------------------




##### Fires event `widthChange`

Fires when the value for the configuration attribute `width` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`x`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/ChartLegend.js:668`



---------------------




##### Fires event `xChange`

Fires when the value for the configuration attribute `x` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`y`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/ChartLegend.js:691`



---------------------




##### Fires event `yChange`

Fires when the value for the configuration attribute `y` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods



--------------------------
#### _destroyLegendItems() 

Defined in `tests/input/charts/ChartLegend.js:475`



> Destroys legend items.




--------------------------
#### _drawLegend() 

Defined in `tests/input/charts/ChartLegend.js:122`



> Draws the legend




--------------------------
#### _getDefaultStyles() 

Defined in `tests/input/charts/ChartLegend.js:416`



> Returns the default hash for the `styles` attribute.


**Returns**
`` 


--------------------------
#### _getLegendItem() 

Defined in `tests/input/charts/ChartLegend.js:337`



> Returns a legend item consisting of the following properties:
 <dl>
   <dt>node</dt><dd>The `Node` containing the legend item elements.</dd>
     <dt>shape</dt><dd>The `Shape` element for the legend item.</dd>
     <dt>textNode</dt><dd>The `Node` containing the text></dd>
     <dt>text</dt><dd></dd>
 </dl>

**Parameters**
- shapeProps `Node` Reference to the `node` attribute.
- shapeClass `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> | Class` The type of shape
- fill `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Properties for the shape's fill
- border `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Properties for the shape's border
- text `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` String to be rendered as the legend's text
- width `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Total width of the legend item
- height `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Total height of the legend item
- text `HTML | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Text for the legendItem

**Returns**
`` 


--------------------------
#### _getPlotDefaults() 

Defined in `tests/input/charts/ChartLegend.js:458`



> Gets the default values for series that use the utility. This method is used by
the class' `styles` attribute's getter to get build default values.


**Returns**
`` 


--------------------------
#### _getShapeClass() 

Defined in `tests/input/charts/ChartLegend.js:403`



> Evaluates and returns correct class for drawing a shape.


**Returns**
`` 


--------------------------
#### _getStylesBySeriesType() 

Defined in `tests/input/charts/ChartLegend.js:282`



> Retrieves the marker styles based on the type of series. For series that contain a marker, the marker styles are returned.

**Parameters**
- The `<a href="../classes/CartesianSeries.html" class="crosslink">CartesianSeries</a> | <a href="../classes/PieSeries.html" class="crosslink">PieSeries</a>` series in which the style properties will be received.

**Returns**
`` 


--------------------------
#### _handleSizeChange() 

Defined in `tests/input/charts/ChartLegend.js:103`



> Updates the legend when the size changes.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _positionChangeHandler() 

Defined in `tests/input/charts/ChartLegend.js:82`



> Handles position changes.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object



--------------------------
#### _updateBackground() 

Defined in `tests/input/charts/ChartLegend.js:256`



> Updates the background for the legend.

**Parameters**
- styles `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Reference to the legend's styles attribute



--------------------------
#### _updateHandler() 

Defined in `tests/input/charts/ChartLegend.js:67`



> Handles changes to legend.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object



--------------------------
#### bindUI() 

Defined in `tests/input/charts/ChartLegend.js:40`



> 




--------------------------
#### destructor() 

Defined in `tests/input/charts/ChartLegend.js:509`



> Destructor implementation ChartLegend class. Removes all items and the Graphic instance from the widget.




--------------------------
#### initializer() 

Defined in `tests/input/charts/ChartLegend.js:10`



> Initializes the chart.




--------------------------
#### renderUI() 

Defined in `tests/input/charts/ChartLegend.js:21`



> 




--------------------------
#### syncUI() 

Defined in `tests/input/charts/ChartLegend.js:53`



> 





