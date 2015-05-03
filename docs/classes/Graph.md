
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `Graph` Class


Defined in: [tests/input/charts/Graph.js:1](../files/tests/input/charts/Graph.js.js)

Module: [charts](../modules/charts.md)




Graph manages and contains series instances for a `CartesianChart`
instance.

### Index

##### Properties

  - `_dispatchers`
  - `_seriesCollection`
  - `_seriesDictionary`
  - `_seriesMap`
  - `seriesTypes`


##### Attributes

  - `background`
  - `chart`
  - `graphic`
  - `gridlines`
  - `groupMarkers`
  - `horizontalGridlines`
  - `seriesCollection`
  - `seriesDictionary`
  - `showBackground`
  - `styles`
  - `verticalGridlines`
  - `x`
  - `y`


##### Methods


  - `_addSeries`
  - `_drawingCompleteHandler`
  - `_drawSeries`
  - `_getDefaultStyles`
  - `_getSeries`
  - `_markerEventHandler`
  - `_parseSeriesCollection`
  - `_sizeChangeHandler`
  - `_updateStyles`
  - `addDispatcher`
  - `bindUI`
  - `createSeries`
  - `destructor`
  - `getSeriesByIndex`
  - `getSeriesByKey`
  - `syncUI`





### Details


#### Properties


`_dispatchers`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/Graph.js:360`



---------------------

Collection of `CartesianSeries` instances to be redrawn.




`_seriesCollection`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/Graph.js:133`



---------------------

Collection of series to be displayed in the graph.




`_seriesDictionary`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/Graph.js:142`



---------------------

Object containing key value pairs of `CartesianSeries` instances.




`_seriesMap`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/Graph.js:264`



---------------------

String reference for pre-defined `Series` classes.




`seriesTypes`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/Graph.js:71`



---------------------

Object of arrays containing series mapped to a series type.






#### Attributes


`background`: `Graphic`

Defined in `tests/input/charts/Graph.js:692`



---------------------




##### Fires event `backgroundChange`

Fires when the value for the configuration attribute `background` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`chart`: `<a href="../classes/ChartBase.html" class="crosslink">ChartBase</a>`

Defined in `tests/input/charts/Graph.js:574`



---------------------




##### Fires event `chartChange`

Fires when the value for the configuration attribute `chart` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`graphic`: `Graphic`

Defined in `tests/input/charts/Graph.js:734`



---------------------




##### Fires event `graphicChange`

Fires when the value for the configuration attribute `graphic` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`gridlines`: `Graphic`

Defined in `tests/input/charts/Graph.js:712`



---------------------




##### Fires event `gridlinesChange`

Fires when the value for the configuration attribute `gridlines` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`groupMarkers`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/Graph.js:756`



---------------------




##### Fires event `groupMarkersChange`

Fires when the value for the configuration attribute `groupMarkers` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`horizontalGridlines`: `<a href="../classes/Gridlines.html" class="crosslink">Gridlines</a>`

Defined in `tests/input/charts/Graph.js:630`



---------------------



**Default**: null

##### Fires event `horizontalGridlinesChange`

Fires when the value for the configuration attribute `horizontalGridlines` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`seriesCollection`: `<a href="../classes/CartesianSeries.html" class="crosslink">CartesianSeries</a>`

Defined in `tests/input/charts/Graph.js:583`



---------------------




##### Fires event `seriesCollectionChange`

Fires when the value for the configuration attribute `seriesCollection` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`seriesDictionary`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/Graph.js:614`



---------------------




##### Fires event `seriesDictionaryChange`

Fires when the value for the configuration attribute `seriesDictionary` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`showBackground`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/Graph.js:603`



---------------------



**Default**: true

##### Fires event `showBackgroundChange`

Fires when the value for the configuration attribute `showBackground` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`styles`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/Graph.js:766`



---------------------




##### Fires event `stylesChange`

Fires when the value for the configuration attribute `styles` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`verticalGridlines`: `<a href="../classes/Gridlines.html" class="crosslink">Gridlines</a>`

Defined in `tests/input/charts/Graph.js:661`



---------------------



**Default**: null

##### Fires event `verticalGridlinesChange`

Fires when the value for the configuration attribute `verticalGridlines` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`x`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/Graph.js:544`



---------------------




##### Fires event `xChange`

Fires when the value for the configuration attribute `x` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`y`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/Graph.js:559`



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
#### _addSeries() 

Defined in `tests/input/charts/Graph.js:199`



> Adds a series to the graph.

**Parameters**
- series `<a href="../classes/CartesianSeries.html" class="crosslink">CartesianSeries</a>` Series to add to the graph.



--------------------------
#### _drawingCompleteHandler() 

Defined in `tests/input/charts/Graph.js:469`



> Event handler for series drawingComplete event.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _drawSeries() 

Defined in `tests/input/charts/Graph.js:430`



> Draws each series.




--------------------------
#### _getDefaultStyles() 

Defined in `tests/input/charts/Graph.js:496`



> Gets the default value for the `styles` attribute. Overrides
base implementation.


**Returns**
`` 


--------------------------
#### _getSeries() 

Defined in `tests/input/charts/Graph.js:295`



> Returns a specific `CartesianSeries` class based on key value from a look up table of a direct reference to a class. When specifying a key value, the following options
are available:

 <table>
     <tr><th>Key Value</th><th>Class</th></tr>
     <tr><td>line</td><td>Y.LineSeries</td></tr>    
     <tr><td>column</td><td>Y.ColumnSeries</td></tr>    
     <tr><td>bar</td><td>Y.BarSeries</td></tr>    
     <tr><td>area</td><td>Y.AreaSeries</td></tr>    
     <tr><td>stackedarea</td><td>Y.StackedAreaSeries</td></tr>    
     <tr><td>stackedline</td><td>Y.StackedLineSeries</td></tr>    
     <tr><td>stackedcolumn</td><td>Y.StackedColumnSeries</td></tr>    
     <tr><td>stackedbar</td><td>Y.StackedBarSeries</td></tr>    
     <tr><td>markerseries</td><td>Y.MarkerSeries</td></tr>    
     <tr><td>spline</td><td>Y.SplineSeries</td></tr>    
     <tr><td>areaspline</td><td>Y.AreaSplineSeries</td></tr>    
     <tr><td>stackedspline</td><td>Y.StackedSplineSeries</td></tr>
     <tr><td>stackedareaspline</td><td>Y.StackedAreaSplineSeries</td></tr>
     <tr><td>stackedmarkerseries</td><td>Y.StackedMarkerSeries</td></tr>
     <tr><td>pie</td><td>Y.PieSeries</td></tr>
     <tr><td>combo</td><td>Y.ComboSeries</td></tr>
     <tr><td>stackedcombo</td><td>Y.StackedComboSeries</td></tr>
     <tr><td>combospline</td><td>Y.ComboSplineSeries</td></tr>
     <tr><td>stackedcombospline</td><td>Y.StackedComboSplineSeries</td></tr>
 </table>

When referencing a class directly, you can specify any of the above classes or any custom class that extends `CartesianSeries` or `PieSeries`.

**Parameters**
- type `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Series type.

**Returns**
`` 


--------------------------
#### _markerEventHandler() 

Defined in `tests/input/charts/Graph.js:343`



> Event handler for marker events.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _parseSeriesCollection() 

Defined in `tests/input/charts/Graph.js:151`



> Parses series instances to be displayed in the graph.

**Parameters**
- Collection `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` of `CartesianSeries` instances or objects container `CartesianSeries` attributes values.



--------------------------
#### _sizeChangeHandler() 

Defined in `tests/input/charts/Graph.js:386`



> Event handler for size changes.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _updateStyles() 

Defined in `tests/input/charts/Graph.js:369`



> Updates the `Graph` styles.




--------------------------
#### addDispatcher() 

Defined in `tests/input/charts/Graph.js:116`



> Adds dispatcher to a `_dispatcher` used to
to ensure all series have redrawn before for firing event.

**Parameters**
- val `<a href="../classes/CartesianSeries.html" class="crosslink">CartesianSeries</a>` series instance to add



--------------------------
#### bindUI() 

Defined in `tests/input/charts/Graph.js:12`



> 




--------------------------
#### createSeries() 

Defined in `tests/input/charts/Graph.js:231`



> Creates a `CartesianSeries` instance from an object containing attribute key value pairs. The key value pairs include attributes for the specific series and a type value which defines the type of
series to be used.

**Parameters**
- seriesData `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Series attribute key value pairs.



--------------------------
#### destructor() 

Defined in `tests/input/charts/Graph.js:521`



> Destructor implementation Graph class. Removes all Graphic instances from the widget.




--------------------------
#### getSeriesByIndex() 

Defined in `tests/input/charts/Graph.js:80`



> Returns a series instance based on an index.

**Parameters**
- val `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` index of the series

**Returns**
`` 


--------------------------
#### getSeriesByKey() 

Defined in `tests/input/charts/Graph.js:98`



> Returns a series instance based on a key value.

**Parameters**
- val `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` key value of the series

**Returns**
`` 


--------------------------
#### syncUI() 

Defined in `tests/input/charts/Graph.js:25`



> 





