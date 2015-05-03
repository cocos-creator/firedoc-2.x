
# yuidoc-root 0.6.21

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `PieChart` Class


Defined in: [tests/input/charts/PieChart.js:1](../files/tests/input/charts/PieChart.js.js)

Module: [charts](../modules/charts.md)




The PieChart class creates a pie chart

### Index


##### Attributes

  - `ariaDescription`
  - `axes`
  - `seriesCollection`
  - `type`


##### Methods


  - `_addAxes`
  - `_addSeries`
  - `_getAriaMessage`
  - `_getDefaultAxes`
  - `_getSeriesCollection`
  - `_parseAxes`
  - `_parseSeriesAxes`
  - `_redraw`
  - `_sizeChanged`
  - `_tooltipLabelFunction`
  - `getSeriesItem`





### Details



#### Attributes


`ariaDescription`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/PieChart.js:398`



---------------------




##### Fires event `ariaDescriptionChange`

Fires when the value for the configuration attribute `ariaDescription` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`axes`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/PieChart.js:418`



---------------------




##### Fires event `axesChange`

Fires when the value for the configuration attribute `axes` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`seriesCollection`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/PieChart.js:436`



---------------------




##### Fires event `seriesCollectionChange`

Fires when the value for the configuration attribute `seriesCollection` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`type`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/PieChart.js:455`



---------------------




##### Fires event `typeChange`

Fires when the value for the configuration attribute `type` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods



--------------------------
#### _addAxes() 

Defined in `tests/input/charts/PieChart.js:105`



> Adds axes to the chart.




--------------------------
#### _addSeries() 

Defined in `tests/input/charts/PieChart.js:145`



> Renders the Graph.




--------------------------
#### _getAriaMessage() 

Defined in `tests/input/charts/PieChart.js:345`



> Returns the appropriate message based on the key press.

**Parameters**
- key `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The keycode that was pressed.

**Returns**
`` 


--------------------------
#### _getDefaultAxes() 

Defined in `tests/input/charts/PieChart.js:209`



> Generates and returns a key-indexed object containing `Axis` instances or objects used to create `Axis` instances.


**Returns**
`` 


--------------------------
#### _getSeriesCollection() 

Defined in `tests/input/charts/PieChart.js:10`



> Calculates and returns a `seriesCollection`.


**Returns**
`` 


--------------------------
#### _parseAxes() 

Defined in `tests/input/charts/PieChart.js:52`



> Creates `Axis` instances.

**Parameters**
- val `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Object containing `Axis` instances or objects in which to construct `Axis` instances.

**Returns**
`` 


--------------------------
#### _parseSeriesAxes() 

Defined in `tests/input/charts/PieChart.js:164`



> Parse and sets the axes for the chart.

**Parameters**
- c `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` A collection `PieSeries` instance.



--------------------------
#### _redraw() 

Defined in `tests/input/charts/PieChart.js:286`



> Redraws the chart instance.




--------------------------
#### _sizeChanged() 

Defined in `tests/input/charts/PieChart.js:274`



> Handler for sizeChanged event.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _tooltipLabelFunction() 

Defined in `tests/input/charts/PieChart.js:306`



> Formats tooltip text for a pie chart.

**Parameters**
- categoryItem `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` An object containing the following:
 <dl>
     <dt>axis</dt><dd>The axis to which the category is bound.</dd>
     <dt>displayName</dt><dd>The display name set to the category (defaults to key if not provided)</dd>
     <dt>key</dt><dd>The key of the category.</dd>
     <dt>value</dt><dd>The value of the category</dd>
 </dl>
- valueItem `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` An object containing the following:
 <dl>
     <dt>axis</dt><dd>The axis to which the item's series is bound.</dd>
     <dt>displayName</dt><dd>The display name of the series. (defaults to key if not provided)</dd>
     <dt>key</dt><dd>The key for the series.</dd>
     <dt>value</dt><dd>The value for the series item.</dd> 
 </dl>
- itemIndex `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The index of the item within the series.
- series `<a href="../classes/CartesianSeries.html" class="crosslink">CartesianSeries</a>` The `PieSeries` instance of the item.
- seriesIndex `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The index of the series in the `seriesCollection`.

**Returns**
`HTML` 


--------------------------
#### getSeriesItem() 

Defined in `tests/input/charts/PieChart.js:249`



> Returns an object literal containing a categoryItem and a valueItem for a given series index.

**Parameters**
- series `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Reference to a series.
- index `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Index of the specified item within a series.

**Returns**
`` 



