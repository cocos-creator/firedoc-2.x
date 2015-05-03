
# yuidoc-root 0.6.21

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `NumericAxis` Class


Defined in: [tests/input/charts/NumericAxis.js:1](../files/tests/input/charts/NumericAxis.js.js)

Module: [charts](../modules/charts.md)




NumericAxis manages numeric data on an axis.

### Index

##### Properties

  - `_type`


##### Attributes

  - `alwaysShowZero`
  - `labelFormat`
  - `labelFunction`


##### Methods


  - `_getMinimumUnit`
  - `_getNiceNumber`
  - `_hasDataOverflow`
  - `_roundDownToNearest`
  - `_roundMinAndMax`
  - `_roundToNearest`
  - `_roundToPrecision`
  - `_roundUpToNearest`
  - `_updateMinAndMax`
  - `formatLabel`
  - `getLabelByIndex`
  - `getTotalByKey`





### Inheritance tree


### Details


#### Properties


`_type`: `Unknown`

Defined in `tests/input/charts/NumericAxis.js:114`



---------------------

Type of data used in `Axis`.






#### Attributes


`alwaysShowZero`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/NumericAxis.js:18`



---------------------




##### Fires event `alwaysShowZeroChange`

Fires when the value for the configuration attribute `alwaysShowZero` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`labelFormat`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/NumericAxis.js:52`



---------------------




##### Fires event `labelFormatChange`

Fires when the value for the configuration attribute `labelFormat` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`labelFunction`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>`

Defined in `tests/input/charts/NumericAxis.js:28`



---------------------




##### Fires event `labelFunctionChange`

Fires when the value for the configuration attribute `labelFunction` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods



--------------------------
#### _getMinimumUnit() 

Defined in `tests/input/charts/NumericAxis.js:123`



> Helper method for getting a `roundingUnit` when calculating the minimum and maximum values.

**Parameters**
- max `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Maximum number
- min `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Minimum number
- units `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Number of units on the axis

**Returns**
`` 


--------------------------
#### _getNiceNumber() 

Defined in `tests/input/charts/NumericAxis.js:138`



> Calculates a nice rounding unit based on the range.

**Parameters**
- roundingUnit `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The calculated rounding unit.

**Returns**
`` 


--------------------------
#### _hasDataOverflow() 

Defined in `tests/input/charts/NumericAxis.js:651`



> Checks to see if data extends beyond the range of the axis. If so,
that data will need to be hidden. This method is internal, temporary and subject
to removal in the future.


**Returns**
`` 


--------------------------
#### _roundDownToNearest() 

Defined in `tests/input/charts/NumericAxis.js:614`



> Rounds a Number down to the nearest multiple of an input. For example, by rounding
16 down to the nearest 10, you will receive 10. Similar to the built-in function Math.floor().

**Parameters**
- number `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Number to round
- nearest `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Multiple to round towards.

**Returns**
`` 


--------------------------
#### _roundMinAndMax() 

Defined in `tests/input/charts/NumericAxis.js:248`



> Rounds the mimimum and maximum values based on the `roundingUnit` attribute.

**Parameters**
- min `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Minimum value
- max `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Maximum value



--------------------------
#### _roundToNearest() 

Defined in `tests/input/charts/NumericAxis.js:573`



> Rounds a Number to the nearest multiple of an input. For example, by rounding
16 to the nearest 10, you will receive 20. Similar to the built-in function Math.round().

**Parameters**
- number `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Number to round
- nearest `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Multiple to round towards.

**Returns**
`` 


--------------------------
#### _roundToPrecision() 

Defined in `tests/input/charts/NumericAxis.js:634`



> Rounds a number to a certain level of precision. Useful for limiting the number of
decimal places on a fractional number.

**Parameters**
- number `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Number to round
- precision `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Multiple to round towards.

**Returns**
`` 


--------------------------
#### _roundUpToNearest() 

Defined in `tests/input/charts/NumericAxis.js:594`



> Rounds a Number up to the nearest multiple of an input. For example, by rounding
16 up to the nearest 10, you will receive 20. Similar to the built-in function Math.ceil().

**Parameters**
- number `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Number to round
- nearest `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Multiple to round towards.

**Returns**
`` 


--------------------------
#### _updateMinAndMax() 

Defined in `tests/input/charts/NumericAxis.js:170`



> Calculates the maximum and minimum values for the `Axis`.




--------------------------
#### formatLabel() 

Defined in `tests/input/charts/NumericAxis.js:72`



> Formats a label based on the axis type and optionally specified format.

**Parameters**
- value `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`  
- format `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Pattern used to format the value.

**Returns**
`` 


--------------------------
#### getLabelByIndex() 

Defined in `tests/input/charts/NumericAxis.js:535`



> Calculates and returns a value based on the number of labels and the index of
the current label.

**Parameters**
- i `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Index of the label.
- l `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Total number of labels.

**Returns**
`` 


--------------------------
#### getTotalByKey() 

Defined in `tests/input/charts/NumericAxis.js:89`



> Returns the sum of all values per key.

**Parameters**
- key `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` The identifier for the array whose values will be calculated.

**Returns**
`` 



