
# yuidoc-root 0.6.21

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `BarSeries` Class


Defined in: [tests/input/charts/BarSeries.js:1](../files/tests/input/charts/BarSeries.js.js)

Module: [charts](../modules/charts.md)




The BarSeries class renders bars positioned vertically along a category or time axis. The bars'
lengths are proportional to the values they represent along a horizontal axis.
and the relevant data points.

### Index


##### Attributes

  - `direction`
  - `styles`
  - `type`


##### Methods


  - `_getMarkerDimensions`
  - `updateMarkerState`





### Inheritance tree


### Details



#### Attributes


`direction`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/BarSeries.js:117`



---------------------




##### Fires event `directionChange`

Fires when the value for the configuration attribute `direction` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`styles`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/BarSeries.js:127`



---------------------




##### Fires event `stylesChange`

Fires when the value for the configuration attribute `styles` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`type`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/BarSeries.js:106`



---------------------



**Default**: bar

##### Fires event `typeChange`

Fires when the value for the configuration attribute `type` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods



--------------------------
#### _getMarkerDimensions() 

Defined in `tests/input/charts/BarSeries.js:13`



> Helper method for calculating the size of markers.

**Parameters**
- xcoord `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The x-coordinate representing the data point for the marker.
- ycoord `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The y-coordinate representing the data point for the marker.
- calculatedSize `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The calculated size for the marker. For a `BarSeries` is it the width. For a `ColumnSeries` it is the height.
- offset `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Distance of position offset dictated by other marker series in the same graph.

**Returns**
`` 


--------------------------
#### updateMarkerState() 

Defined in `tests/input/charts/BarSeries.js:42`



> Resizes and positions markers based on a mouse interaction.

**Parameters**
- type `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` state of the marker
- i `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` index of the marker




