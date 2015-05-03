
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `RightAxisLayout` Class


Defined in: [tests/input/charts/RightAxisLayout.js:1](../files/tests/input/charts/RightAxisLayout.js.js)

Module: [charts](../modules/charts.md)




RightAxisLayout contains algorithms for rendering a right axis.

### Index



##### Methods


  - `_getDefaultMargins`
  - `_getTransformOrigin`
  - `_setRotationCoords`
  - `drawTick`
  - `getExplicitlySized`
  - `getLabelPoint`
  - `getLineStart`
  - `offsetNodeForTick`
  - `positionLabel`
  - `positionTitle`
  - `setCalculatedSize`
  - `setTickOffset`
  - `updateMaxLabelSize`





### Details




<!-- Method Block -->
#### Methods



--------------------------
#### _getDefaultMargins() 

Defined in `tests/input/charts/RightAxisLayout.js:11`



> Default margins for text fields.


**Returns**
`` 


--------------------------
#### _getTransformOrigin() 

Defined in `tests/input/charts/RightAxisLayout.js:298`



> Returns the transformOrigin to use for an axis label based on the position of the axis 
and the rotation of the label.

**Parameters**
- rot `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The rotation (in degrees) of the label.

**Returns**
`` 


--------------------------
#### _setRotationCoords() 

Defined in `tests/input/charts/RightAxisLayout.js:261`



> Adjusts the coordinates of an axis label based on the rotation.

**Parameters**
- props `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Coordinates, dimension and rotation properties of the label.



--------------------------
#### drawTick() 

Defined in `tests/input/charts/RightAxisLayout.js:65`



> Draws a tick

**Parameters**
- path `Path` reference to the path `Path` element in which to draw the tick.
- pt `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Point on the axis in which the tick will intersect.
- {Object) `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` tickStyle Hash of properties to apply to the tick.



--------------------------
#### getExplicitlySized() 

Defined in `tests/input/charts/RightAxisLayout.js:156`



> Determines the available label width when the axis width has been explicitly set.


**Returns**
`` 


--------------------------
#### getLabelPoint() 

Defined in `tests/input/charts/RightAxisLayout.js:112`



> Calculates the point for a label.

**Parameters**
- point `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Point on the axis in which the tick will intersect.

**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` 


--------------------------
#### getLineStart() 

Defined in `tests/input/charts/RightAxisLayout.js:85`



> Calculates the coordinates for the first point on an axis.


**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` 


--------------------------
#### offsetNodeForTick() 

Defined in `tests/input/charts/RightAxisLayout.js:329`



> Adjusts position for inner ticks.

**Parameters**
- cb `Node` contentBox of the axis



--------------------------
#### positionLabel() 

Defined in `tests/input/charts/RightAxisLayout.js:208`



> Rotate and position labels.

**Parameters**
- label `<a href="https://developer.mozilla.org/en/Document_Object_Model_(DOM)/HTMLElement" class="crosslink external" target="_blank">HTMLElement</a>` to rotate position
- pt `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` hash containing the x and y coordinates in which the label will be positioned
against.



--------------------------
#### positionTitle() 

Defined in `tests/input/charts/RightAxisLayout.js:178`



> Rotate and position title.

**Parameters**
- label `<a href="https://developer.mozilla.org/en/Document_Object_Model_(DOM)/HTMLElement" class="crosslink external" target="_blank">HTMLElement</a>` to rotate position



--------------------------
#### setCalculatedSize() 

Defined in `tests/input/charts/RightAxisLayout.js:344`



> Assigns a height based on the size of the contents.




--------------------------
#### setTickOffset() 

Defined in `tests/input/charts/RightAxisLayout.js:28`



> Sets the length of the tick on either side of the axis line.




--------------------------
#### updateMaxLabelSize() 

Defined in `tests/input/charts/RightAxisLayout.js:125`



> Updates the value for the `maxLabelSize` for use in calculating total size.

**Parameters**
- label `<a href="https://developer.mozilla.org/en/Document_Object_Model_(DOM)/HTMLElement" class="crosslink external" target="_blank">HTMLElement</a>` to measure




