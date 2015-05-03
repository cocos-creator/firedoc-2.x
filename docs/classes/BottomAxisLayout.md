
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `BottomAxisLayout` Class


Defined in: [tests/input/charts/BottomAxisLayout.js:1](../files/tests/input/charts/BottomAxisLayout.js.js)

Module: [charts](../modules/charts.md)




Contains algorithms for rendering a bottom axis.

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
  - `setTickOffsets`
  - `updateMaxLabelSize`





### Details




<!-- Method Block -->
#### Methods



--------------------------
#### _getDefaultMargins() 

Defined in `tests/input/charts/BottomAxisLayout.js:11`



> Default margins for text fields.


**Returns**
`` 


--------------------------
#### _getTransformOrigin() 

Defined in `tests/input/charts/BottomAxisLayout.js:289`



> Returns the transformOrigin to use for an axis label based on the position of the axis 
and the rotation of the label.

**Parameters**
- rot `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The rotation (in degrees) of the label.

**Returns**
`` 


--------------------------
#### _setRotationCoords() 

Defined in `tests/input/charts/BottomAxisLayout.js:254`



> Adjusts the coordinates of an axis label based on the rotation.

**Parameters**
- props `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Coordinates, dimension and rotation properties of the label.



--------------------------
#### drawTick() 

Defined in `tests/input/charts/BottomAxisLayout.js:90`



> Draws a tick

**Parameters**
- path `Path` reference to the path `Path` element in which to draw the tick.
- pt `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` hash containing x and y coordinates
- tickStyles `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` hash of properties used to draw the tick



--------------------------
#### getExplicitlySized() 

Defined in `tests/input/charts/BottomAxisLayout.js:154`



> Determines the available label height when the axis width has been explicitly set.


**Returns**
`` 


--------------------------
#### getLabelPoint() 

Defined in `tests/input/charts/BottomAxisLayout.js:110`



> Calculates the point for a label.

**Parameters**
- pt `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Object containing x and y coordinates

**Returns**
`` 


--------------------------
#### getLineStart() 

Defined in `tests/input/charts/BottomAxisLayout.js:65`



> Calculates the coordinates for the first point on an axis.




--------------------------
#### offsetNodeForTick() 

Defined in `tests/input/charts/BottomAxisLayout.js:316`



> Adjusts position for inner ticks.

**Parameters**
- cb `Node` contentBox of the axis



--------------------------
#### positionLabel() 

Defined in `tests/input/charts/BottomAxisLayout.js:206`



> Rotate and position labels.

**Parameters**
- label `<a href="https://developer.mozilla.org/en/Document_Object_Model_(DOM)/HTMLElement" class="crosslink external" target="_blank">HTMLElement</a>` to rotate position
- pt `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` hash containing the x and y coordinates in which the label will be positioned
against.



--------------------------
#### positionTitle() 

Defined in `tests/input/charts/BottomAxisLayout.js:176`



> Rotate and position title.

**Parameters**
- label `<a href="https://developer.mozilla.org/en/Document_Object_Model_(DOM)/HTMLElement" class="crosslink external" target="_blank">HTMLElement</a>` to rotate position



--------------------------
#### setCalculatedSize() 

Defined in `tests/input/charts/BottomAxisLayout.js:329`



> Assigns a height based on the size of the contents.




--------------------------
#### setTickOffsets() 

Defined in `tests/input/charts/BottomAxisLayout.js:28`



> Sets the length of the tick on either side of the axis line.




--------------------------
#### updateMaxLabelSize() 

Defined in `tests/input/charts/BottomAxisLayout.js:123`



> Updates the value for the `maxLabelSize` for use in calculating total size.

**Parameters**
- label `<a href="https://developer.mozilla.org/en/Document_Object_Model_(DOM)/HTMLElement" class="crosslink external" target="_blank">HTMLElement</a>` to measure




