
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `CategoryAxis` Class


Defined in: [tests/input/charts/CategoryAxis.js:1](../files/tests/input/charts/CategoryAxis.js.js)

Module: [charts](../modules/charts.md)




CategoryAxis manages category data on an axis.

### Index

##### Properties

  - `_dataType`
  - `_indices`
  - `GUID`



##### Methods


  - `_getKeyArray`
  - `_setDataByKey`
  - `_updateMinAndMax`
  - `formatLabel`
  - `getDataByKey`
  - `getEdgeOffset`
  - `getKeyValueAt`
  - `getLabelByIndex`
  - `getMajorUnitDistance`
  - `getMaximumValue`
  - `getMinimumValue`
  - `getTotalMajorUnits`





### Details


#### Properties


`_dataType`: `Unknown`

Defined in `tests/input/charts/CategoryAxis.js:49`



---------------------

Type of data used in `Axis`.




`_indices`: `Unknown`

Defined in `tests/input/charts/CategoryAxis.js:32`



---------------------

Object storing key data.




`GUID`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/CategoryAxis.js:40`



---------------------

Constant used to generate unique id.







<!-- Method Block -->
#### Methods



--------------------------
#### _getKeyArray() 

Defined in `tests/input/charts/CategoryAxis.js:70`



> Gets an array of values based on a key.

**Parameters**
- key `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Value key associated with the data array.
- data `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Array in which the data resides.

**Returns**
`` 


--------------------------
#### _setDataByKey() 

Defined in `tests/input/charts/CategoryAxis.js:100`



> Sets data by key

**Parameters**
- key `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Key value to use.
- data `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Array to use.



--------------------------
#### _updateMinAndMax() 

Defined in `tests/input/charts/CategoryAxis.js:58`



> Calculates the maximum and minimum values for the `Axis`.




--------------------------
#### formatLabel() 

Defined in `tests/input/charts/CategoryAxis.js:19`



> Formats a label based on the axis type and optionally specified format.

**Parameters**
- value `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`  
- format `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Pattern used to format the value.

**Returns**
`` 


--------------------------
#### getDataByKey() 

Defined in `tests/input/charts/CategoryAxis.js:131`



> Returns an array of values based on an identifier key.

**Parameters**
- value `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` value used to identify the array

**Returns**
`` 


--------------------------
#### getEdgeOffset() 

Defined in `tests/input/charts/CategoryAxis.js:188`



> Gets the distance that the first and last ticks are offset from there respective
edges.

**Parameters**
- ct `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Number of ticks on the axis.
- l `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Length (in pixels) of the axis.

**Returns**
`` 


--------------------------
#### getKeyValueAt() 

Defined in `tests/input/charts/CategoryAxis.js:202`



> Returns a value based of a key value and an index.

**Parameters**
- key `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` value used to look up the correct array
- index `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` within the array

**Returns**
`` 


--------------------------
#### getLabelByIndex() 

Defined in `tests/input/charts/CategoryAxis.js:221`



> Calculates and returns a value based on the number of labels and the index of
the current label.

**Parameters**
- i `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Index of the label.
- l `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Total number of labels.

**Returns**
`` 


--------------------------
#### getMajorUnitDistance() 

Defined in `tests/input/charts/CategoryAxis.js:165`



> Returns the distance between major units on an axis.

**Parameters**
- len `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Number of ticks
- uiLen `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Size of the axis.
- majorUnit `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Hash of properties used to determine the majorUnit

**Returns**
`` 


--------------------------
#### getMaximumValue() 

Defined in `tests/input/charts/CategoryAxis.js:260`



> Returns a string corresponding to the last label on an 
axis.


**Returns**
`` 


--------------------------
#### getMinimumValue() 

Defined in `tests/input/charts/CategoryAxis.js:246`



> Returns a string corresponding to the first label on an 
axis.


**Returns**
`` 


--------------------------
#### getTotalMajorUnits() 

Defined in `tests/input/charts/CategoryAxis.js:152`



> Returns the total number of majorUnits that will appear on an axis.

**Parameters**
- majorUnit `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Object containing properties related to the majorUnit.
- len `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Length of the axis.

**Returns**
`` 



