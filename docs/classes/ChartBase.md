
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `ChartBase` Class


Defined in: [tests/input/charts/ChartBase.js:1](../files/tests/input/charts/ChartBase.js.js)

Module: [charts](../modules/charts.md)




The ChartBase class is an abstract class used to create charts.

### Index

##### Properties

  - `_axes`
  - `_axisClass`
  - `_dataProvider`
  - `_direction`
  - `_seriesCollection`
  - `_setSeriesCollection`


##### Attributes

  - `ariaDescription`
  - `ariaLabel`
  - `axesCollection`
  - `categoryKey`
  - `categoryType`
  - `dataProvider`
  - `graph`
  - `groupMarkers`
  - `interactionType`
  - `seriesKeys`
  - `tooltip`


##### Methods


  - `_addTooltip`
  - `_dataProviderChangeHandler`
  - `_getAxisClass`
  - `_getGraph`
  - `_getTooltip`
  - `_itemRendered`
  - `_markerEventDispatcher`
  - `_planarLabelFunction`
  - `_positionTooltip`
  - `_setAriaElements`
  - `_setDataValues`
  - `_setOffscreen`
  - `_setText`
  - `_showTooltip`
  - `_tooltipChangeHandler`
  - `_tooltipLabelFunction`
  - `_updateTooltip`
  - `bindUI`
  - `getAxisByKey`
  - `getCategoryAxis`
  - `getSeries`
  - `hideTooltip`
  - `initializer`
  - `renderUI`
  - `syncUI`
  - `toggleTooltip`



##### Events

  - `markerEvent:click`
  - `markerEvent:mousedown`
  - `markerEvent:mouseout`
  - `markerEvent:mouseover`
  - `markerEvent:mouseup`




### Details


#### Properties


`_axes`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/ChartBase.js:433`



---------------------

Collection of axes.




`_axisClass`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/ChartBase.js:419`



---------------------

Key value pairs of axis types.




`_dataProvider`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/ChartBase.js:344`



---------------------

Storage for the `dataProvider` attribute.




`_direction`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/ChartBase.js:334`



---------------------

Default direction of the chart.

**Default**: horizontal



`_seriesCollection`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/ChartBase.js:386`



---------------------

Storage for `seriesCollection` attribute.




`_setSeriesCollection`: `Unknown`

Defined in `tests/input/charts/ChartBase.js:395`



---------------------

Setter method for `seriesCollection` attribute.




##### Sub Properties

- val `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Array of either &#x60;CartesianSeries&#x60; instances or objects containing series attribute key value pairs.




#### Attributes


`ariaDescription`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/ChartBase.js:31`



---------------------




##### Fires event `ariaDescriptionChange`

Fires when the value for the configuration attribute `ariaDescription` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`ariaLabel`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/ChartBase.js:11`



---------------------




##### Fires event `ariaLabelChange`

Fires when the value for the configuration attribute `ariaLabel` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`axesCollection`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/ChartBase.js:196`



---------------------




##### Fires event `axesCollectionChange`

Fires when the value for the configuration attribute `axesCollection` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`categoryKey`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/ChartBase.js:129`



---------------------



**Default**: category

##### Fires event `categoryKeyChange`

Fires when the value for the configuration attribute `categoryKey` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`categoryType`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/ChartBase.js:140`



---------------------



**Default**: category

##### Fires event `categoryTypeChange`

Fires when the value for the configuration attribute `categoryType` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`dataProvider`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/ChartBase.js:173`



---------------------




##### Fires event `dataProviderChange`

Fires when the value for the configuration attribute `dataProvider` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`graph`: `<a href="../classes/Graph.html" class="crosslink">Graph</a>`

Defined in `tests/input/charts/ChartBase.js:204`



---------------------




##### Fires event `graphChange`

Fires when the value for the configuration attribute `graph` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`groupMarkers`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/ChartBase.js:214`



---------------------




##### Fires event `groupMarkersChange`

Fires when the value for the configuration attribute `groupMarkers` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`interactionType`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/ChartBase.js:156`



---------------------



**Default**: marker

##### Fires event `interactionTypeChange`

Fires when the value for the configuration attribute `interactionType` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`seriesKeys`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/ChartBase.js:186`



---------------------




##### Fires event `seriesKeysChange`

Fires when the value for the configuration attribute `seriesKeys` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`tooltip`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/ChartBase.js:51`



---------------------




##### Fires event `tooltipChange`

Fires when the value for the configuration attribute `tooltip` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods



--------------------------
#### _addTooltip() 

Defined in `tests/input/charts/ChartBase.js:902`



> Adds a tooltip to the dom.




--------------------------
#### _dataProviderChangeHandler() 

Defined in `tests/input/charts/ChartBase.js:787`



> Event handler for dataProviderChange.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _getAxisClass() 

Defined in `tests/input/charts/ChartBase.js:406`



> Helper method that returns the axis class that a key references.

**Parameters**
- t `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` The type of axis.

**Returns**
`` 


--------------------------
#### _getGraph() 

Defined in `tests/input/charts/ChartBase.js:251`



> Default value function for the `Graph` attribute.


**Returns**
`` 


--------------------------
#### _getTooltip() 

Defined in `tests/input/charts/ChartBase.js:973`



> Default getter for `tooltip` attribute.


**Returns**
`` 


--------------------------
#### _itemRendered() 

Defined in `tests/input/charts/ChartBase.js:235`



> Handler for itemRendered event.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _markerEventDispatcher() 

Defined in `tests/input/charts/ChartBase.js:646`



> Event handler for marker events.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _planarLabelFunction() 

Defined in `tests/input/charts/ChartBase.js:1025`



> Formats tooltip text when `interactionType` is `planar`.

**Parameters**
- categoryAxis `<a href="../classes/Axis.html" class="crosslink">Axis</a>` Reference to the categoryAxis of the chart.
- valueItems `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Array of objects for each series that has a data point in the coordinate plane of the event. Each object contains the following data:
 <dl>
     <dt>axis</dt><dd>The value axis of the series.</dd>
     <dt>key</dt><dd>The key for the series.</dd>
     <dt>value</dt><dd>The value for the series item.</dd>
     <dt>displayName</dt><dd>The display name of the series. (defaults to key if not provided)</dd>
 </dl>
- index `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The index of the item within its series.
- seriesArray `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Array of series instances for each value item.
- seriesIndex `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The index of the series in the `seriesCollection`.

**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> | HTML` 


--------------------------
#### _positionTooltip() 

Defined in `tests/input/charts/ChartBase.js:865`



> Positions the tooltip

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _setAriaElements() 

Defined in `tests/input/charts/ChartBase.js:475`



> Creates an aria `live-region`, `aria-label` and `aria-describedby` for the Chart.

**Parameters**
- cb `Node` Reference to the Chart's `contentBox` attribute.



--------------------------
#### _setDataValues() 

Defined in `tests/input/charts/ChartBase.js:353`



> Setter method for `dataProvider` attribute.

**Parameters**
- val `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Array to be set as `dataProvider`.

**Returns**
`` 


--------------------------
#### _setOffscreen() 

Defined in `tests/input/charts/ChartBase.js:505`



> Sets a node offscreen for use as aria-description or aria-live-regin.


**Returns**
`` 


--------------------------
#### _setText() 

Defined in `tests/input/charts/ChartBase.js:1156`



> Updates the content of text field. This method writes a value into a text field using 
`appendChild`. If the value is a `String`, it is converted to a `TextNode` first.

**Parameters**
- label `<a href="https://developer.mozilla.org/en/Document_Object_Model_(DOM)/HTMLElement" class="crosslink external" target="_blank">HTMLElement</a>` label to be updated
- val `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` value with which to update the label



--------------------------
#### _showTooltip() 

Defined in `tests/input/charts/ChartBase.js:842`



> Shows a tooltip

**Parameters**
- msg `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Message to dispaly in the tooltip.
- x `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` x-coordinate
- y `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` y-coordinate



--------------------------
#### _tooltipChangeHandler() 

Defined in `tests/input/charts/ChartBase.js:1131`



> Event handler for the tooltipChange.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _tooltipLabelFunction() 

Defined in `tests/input/charts/ChartBase.js:1084`



> Formats tooltip text when `interactionType` is `marker`.

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
- series `<a href="../classes/CartesianSeries.html" class="crosslink">CartesianSeries</a>` The `CartesianSeries` instance of the item.
- seriesIndex `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The index of the series in the `seriesCollection`.

**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> | HTML` 


--------------------------
#### _updateTooltip() 

Defined in `tests/input/charts/ChartBase.js:923`



> Updates the tooltip attribute.

**Parameters**
- val `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Object containing properties for the tooltip.

**Returns**
`` 


--------------------------
#### bindUI() 

Defined in `tests/input/charts/ChartBase.js:534`



> 




--------------------------
#### getAxisByKey() 

Defined in `tests/input/charts/ChartBase.js:295`



> Returns an `Axis` instance by key reference. If the axis was explicitly set through the `axes` attribute,
the key will be the same as the key used in the `axes` object. For default axes, the key for
the category axis is the value of the `categoryKey` (`category`). For the value axis, the default 
key is `values`.

**Parameters**
- val `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Key reference used to look up the axis.

**Returns**
`` 


--------------------------
#### getCategoryAxis() 

Defined in `tests/input/charts/ChartBase.js:316`



> Returns the category axis for the chart.


**Returns**
`` 


--------------------------
#### getSeries() 

Defined in `tests/input/charts/ChartBase.js:270`



> Returns a series instance by index or key value.

**Parameters**
- val `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`  

**Returns**
`` 


--------------------------
#### hideTooltip() 

Defined in `tests/input/charts/ChartBase.js:886`



> Hides the default tooltip




--------------------------
#### initializer() 

Defined in `tests/input/charts/ChartBase.js:442`



> 




--------------------------
#### renderUI() 

Defined in `tests/input/charts/ChartBase.js:454`



> 




--------------------------
#### syncUI() 

Defined in `tests/input/charts/ChartBase.js:525`



> 




--------------------------
#### toggleTooltip() 

Defined in `tests/input/charts/ChartBase.js:822`



> Event listener for toggling the tooltip. If a tooltip is visible, hide it. If not, it 
will create and show a tooltip based on the event object.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.





#### Events

### `markerEvent:click` Event


Defined in: [tests/input/charts/ChartBase.js:751](../files/tests/input/charts/ChartBase.js.js)

Module: [charts](../modules/charts.md)




Broadcasts when `interactionType` is set to `marker` and a series marker has received a click event.

### Index







### Details




### `markerEvent:mousedown` Event


Defined in: [tests/input/charts/ChartBase.js:715](../files/tests/input/charts/ChartBase.js.js)

Module: [charts](../modules/charts.md)




Broadcasts when `interactionType` is set to `marker` and a series marker has received a mousedown event.

### Index







### Details




### `markerEvent:mouseout` Event


Defined in: [tests/input/charts/ChartBase.js:697](../files/tests/input/charts/ChartBase.js.js)

Module: [charts](../modules/charts.md)




Broadcasts when `interactionType` is set to `marker` and a series marker has received a mouseout event.

### Index







### Details




### `markerEvent:mouseover` Event


Defined in: [tests/input/charts/ChartBase.js:678](../files/tests/input/charts/ChartBase.js.js)

Module: [charts](../modules/charts.md)




Broadcasts when `interactionType` is set to `marker` and a series marker has received a mouseover event.

### Index







### Details




### `markerEvent:mouseup` Event


Defined in: [tests/input/charts/ChartBase.js:733](../files/tests/input/charts/ChartBase.js.js)

Module: [charts](../modules/charts.md)




Broadcasts when `interactionType` is set to `marker` and a series marker has received a mouseup event.

### Index







### Details





