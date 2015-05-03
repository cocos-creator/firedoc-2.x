
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `StackedColumnSeries` Class


Defined in: [tests/input/charts/StackedColumnSeries.js:1](../files/tests/input/charts/StackedColumnSeries.js.js)

Module: [charts](../modules/charts.md)




The StackedColumnSeries renders column chart in which series are stacked vertically to show
their contribution to the cumulative total.

### Index


##### Attributes

  - `negativeBaseValues`
  - `positiveBaseValues`
  - `styles`
  - `type`


##### Methods


  - `_getPlotDefaults`
  - `drawSeries`
  - `updateMarkerState`





### Details



#### Attributes


`negativeBaseValues`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/StackedColumnSeries.js:287`



---------------------



**Default**: null

##### Fires event `negativeBaseValuesChange`

Fires when the value for the configuration attribute `negativeBaseValues` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`positiveBaseValues`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/StackedColumnSeries.js:297`



---------------------



**Default**: null

##### Fires event `positiveBaseValuesChange`

Fires when the value for the configuration attribute `positiveBaseValues` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`styles`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/StackedColumnSeries.js:307`



---------------------




##### Fires event `stylesChange`

Fires when the value for the configuration attribute `styles` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`type`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/StackedColumnSeries.js:276`



---------------------



**Default**: stackedColumn

##### Fires event `typeChange`

Fires when the value for the configuration attribute `type` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods



--------------------------
#### _getPlotDefaults() 

Defined in `tests/input/charts/StackedColumnSeries.js:238`



> Gets the default values for the markers.


**Returns**
`` 


--------------------------
#### drawSeries() 

Defined in `tests/input/charts/StackedColumnSeries.js:12`



> Draws the series.




--------------------------
#### updateMarkerState() 

Defined in `tests/input/charts/StackedColumnSeries.js:189`



> Resizes and positions markers based on a mouse interaction.

**Parameters**
- type `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` state of the marker
- i `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` index of the marker




