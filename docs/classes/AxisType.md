
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `AxisType` Class


Defined in: [tests/input/charts/AxisType.js:1](../files/tests/input/charts/AxisType.js.js)

Module: [charts](../modules/charts.md)




AxisType is an abstract class that manages the data for an axis.

### Index

##### Properties

  - `_data`
  - `_dataMaximum`
  - `_dataReady`
  - `_setMaximum`
  - `_setMinimum`
  - `_type`
  - `_updateTotalDataFlag`
  - `GUID`


##### Attributes

  - `data`
  - `dataMaximum`
  - `dataMinimum`
  - `dataProvider`
  - `keyCollection`
  - `keys`
  - `maximum`
  - `minimum`
  - `roundingMethod`
  - `setMax`
  - `setMin`
  - `type`


##### Methods


  - `_dataProviderChangeHandler`
  - `_getKeyArray`
  - `_hasDataOverflow`
  - `_keyChangeHandler`
  - `_setDataByKey`
  - `_updateMinAndMax`
  - `_updateTotalData`
  - `addKey`
  - `bindUI`
  - `getDataByKey`
  - `getEdgeOffset`
  - `getKeyValueAt`
  - `getLabelByIndex`
  - `getMajorUnitDistance`
  - `getMaximumValue`
  - `getMinimumValue`
  - `getTotalMajorUnits`
  - `initializer`
  - `removeKey`





### Inheritance tree


### Details


#### Properties


`_data`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/AxisType.js:115`



---------------------

Reference to data array.




`_dataMaximum`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/AxisType.js:97`



---------------------

Storage for `dataMaximum` attribute.




`_dataReady`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/AxisType.js:133`



---------------------

Storage for `dataReady` attribute.




`_setMaximum`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/AxisType.js:88`



---------------------

Storage for `setMaximum` attribute.




`_setMinimum`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/AxisType.js:106`



---------------------

Storage for `setMinimum` attribute.




`_type`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/AxisType.js:78`



---------------------

Type of data used in `Axis`.




`_updateTotalDataFlag`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/AxisType.js:124`



---------------------

Indicates whether the all data is up to date.




`GUID`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/AxisType.js:69`



---------------------

Constant used to generate unique id.






#### Attributes


`data`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/AxisType.js:669`



---------------------




##### Fires event `dataChange`

Fires when the value for the configuration attribute `data` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`dataMaximum`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/AxisType.js:544`



---------------------




##### Fires event `dataMaximumChange`

Fires when the value for the configuration attribute `dataMaximum` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`dataMinimum`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/AxisType.js:594`



---------------------




##### Fires event `dataMinimumChange`

Fires when the value for the configuration attribute `dataMinimum` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`dataProvider`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/AxisType.js:530`



---------------------




##### Fires event `dataProviderChange`

Fires when the value for the configuration attribute `dataProvider` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`keyCollection`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/AxisType.js:686`



---------------------




##### Fires event `keyCollectionChange`

Fires when the value for the configuration attribute `keyCollection` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`keys`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/AxisType.js:447`



---------------------




##### Fires event `keysChange`

Fires when the value for the configuration attribute `keys` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`maximum`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/AxisType.js:562`



---------------------




##### Fires event `maximumChange`

Fires when the value for the configuration attribute `maximum` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`minimum`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/AxisType.js:612`



---------------------




##### Fires event `minimumChange`

Fires when the value for the configuration attribute `minimum` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`roundingMethod`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/AxisType.js:491`



---------------------



**Default**: niceNumber

##### Fires event `roundingMethodChange`

Fires when the value for the configuration attribute `roundingMethod` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`setMax`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/AxisType.js:637`



---------------------




##### Fires event `setMaxChange`

Fires when the value for the configuration attribute `setMax` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`setMin`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/AxisType.js:653`



---------------------




##### Fires event `setMinChange`

Fires when the value for the configuration attribute `setMin` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`type`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/AxisType.js:508`



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
#### _dataProviderChangeHandler() 

Defined in `tests/input/charts/AxisType.js:41`



> Handles changes to `dataProvider`.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _getKeyArray() 

Defined in `tests/input/charts/AxisType.js:155`



> Gets an array of values based on a key.

**Parameters**
- key `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Value key associated with the data array.
- data `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Array in which the data resides.

**Returns**
`` 


--------------------------
#### _hasDataOverflow() 

Defined in `tests/input/charts/AxisType.js:404`



> Checks to see if data extends beyond the range of the axis. If so,
that data will need to be hidden. This method is internal, temporary and subject
to removal in the future.


**Returns**
`` 


--------------------------
#### _keyChangeHandler() 

Defined in `tests/input/charts/AxisType.js:391`



> Updates the `Axis` after a change in keys.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _setDataByKey() 

Defined in `tests/input/charts/AxisType.js:178`



> Sets data by key

**Parameters**
- key `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Key value to use.
- data `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Array to use.



--------------------------
#### _updateMinAndMax() 

Defined in `tests/input/charts/AxisType.js:276`



> Calculates the maximum and minimum values for the `Axis`.




--------------------------
#### _updateTotalData() 

Defined in `tests/input/charts/AxisType.js:202`



> Updates the total data array.




--------------------------
#### addKey() 

Defined in `tests/input/charts/AxisType.js:143`



> Adds an array to the key hash.

**Parameters**
- value `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Indicates what key to use in retrieving
the array.



--------------------------
#### bindUI() 

Defined in `tests/input/charts/AxisType.js:26`



> 




--------------------------
#### getDataByKey() 

Defined in `tests/input/charts/AxisType.js:259`



> Returns an array of values based on an identifier key.

**Parameters**
- value `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` value used to identify the array

**Returns**
`` 


--------------------------
#### getEdgeOffset() 

Defined in `tests/input/charts/AxisType.js:357`



> Gets the distance that the first and last ticks are offset from there respective
edges.

**Parameters**
- ct `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Number of ticks on the axis.
- l `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Length (in pixels) of the axis.

**Returns**
`` 


--------------------------
#### getKeyValueAt() 

Defined in `tests/input/charts/AxisType.js:240`



> Returns a value based of a key value and an index.

**Parameters**
- key `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` value used to look up the correct array
- index `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` within the array

**Returns**
`` 


--------------------------
#### getLabelByIndex() 

Defined in `tests/input/charts/AxisType.js:371`



> Calculates and returns a value based on the number of labels and the index of
the current label.

**Parameters**
- i `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Index of the label.
- l `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Total number of labels.

**Returns**
`` 


--------------------------
#### getMajorUnitDistance() 

Defined in `tests/input/charts/AxisType.js:334`



> Returns the distance between major units on an axis.

**Parameters**
- len `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Number of ticks
- uiLen `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Size of the axis.
- majorUnit `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Hash of properties used to determine the majorUnit

**Returns**
`` 


--------------------------
#### getMaximumValue() 

Defined in `tests/input/charts/AxisType.js:434`



> Returns a string corresponding to the last label on an 
axis.


**Returns**
`` 


--------------------------
#### getMinimumValue() 

Defined in `tests/input/charts/AxisType.js:422`



> Returns a string corresponding to the first label on an 
axis.


**Returns**
`` 


--------------------------
#### getTotalMajorUnits() 

Defined in `tests/input/charts/AxisType.js:312`



> Returns the total number of majorUnits that will appear on an axis.


**Returns**
`` 


--------------------------
#### initializer() 

Defined in `tests/input/charts/AxisType.js:10`



> 




--------------------------
#### removeKey() 

Defined in `tests/input/charts/AxisType.js:223`



> Removes an array from the key hash.

**Parameters**
- value `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Indicates what key to use in removing from 
the hash.




