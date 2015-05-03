
# yuidoc-root 0.6.21

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `TimeAxis` Class


Defined in: [tests/input/charts/TimeAxis.js:1](../files/tests/input/charts/TimeAxis.js.js)

Module: [charts](../modules/charts.md)




TimeAxis manages time data on an axis.

### Index

##### Properties

  - `_dataType`
  - `GUID`


##### Attributes

  - `labelFormat`
  - `labelFunction`
  - `maximum`
  - `minimum`
  - `setMax`
  - `setMin`


##### Methods


  - `_getKeyArray`
  - `_getNumber`
  - `_setDataByKey`
  - `formatLabel`
  - `getLabelByIndex`





### Details


#### Properties


`_dataType`: `Unknown`

Defined in `tests/input/charts/TimeAxis.js:165`



---------------------

Type of data used in `Axis`.




`GUID`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/TimeAxis.js:156`



---------------------

Constant used to generate unique id.






#### Attributes


`labelFormat`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/TimeAxis.js:126`



---------------------




##### Fires event `labelFormatChange`

Fires when the value for the configuration attribute `labelFormat` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`labelFunction`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>`

Defined in `tests/input/charts/TimeAxis.js:101`



---------------------




##### Fires event `labelFunctionChange`

Fires when the value for the configuration attribute `labelFunction` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`maximum`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/TimeAxis.js:55`



---------------------




##### Fires event `maximumChange`

Fires when the value for the configuration attribute `maximum` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`minimum`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/TimeAxis.js:78`



---------------------




##### Fires event `minimumChange`

Fires when the value for the configuration attribute `minimum` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`setMax`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/TimeAxis.js:19`



---------------------




##### Fires event `setMaxChange`

Fires when the value for the configuration attribute `setMax` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`setMin`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/TimeAxis.js:37`



---------------------




##### Fires event `setMinChange`

Fires when the value for the configuration attribute `setMin` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods



--------------------------
#### _getKeyArray() 

Defined in `tests/input/charts/TimeAxis.js:203`



> Gets an array of values based on a key.

**Parameters**
- key `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Value key associated with the data array.
- data `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Array in which the data resides.

**Returns**
`` 


--------------------------
#### _getNumber() 

Defined in `tests/input/charts/TimeAxis.js:314`



> Parses value into a number.

**Parameters**
- val `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Value to parse into a number

**Returns**
`` 


--------------------------
#### _setDataByKey() 

Defined in `tests/input/charts/TimeAxis.js:258`



> Sets data by key

**Parameters**
- key `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Key value to use.
- data `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Array to use.



--------------------------
#### formatLabel() 

Defined in `tests/input/charts/TimeAxis.js:138`



> Formats a label based on the axis type and optionally specified format.

**Parameters**
- value `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`  
- format `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Pattern used to format the value.

**Returns**
`` 


--------------------------
#### getLabelByIndex() 

Defined in `tests/input/charts/TimeAxis.js:174`



> Calculates and returns a value based on the number of labels and the index of
the current label.

**Parameters**
- i `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Index of the label.
- l `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Total number of labels.

**Returns**
`` 



