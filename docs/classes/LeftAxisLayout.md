
# yuidoc-root 0.6.21

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `LeftAxisLayout` Class


Defined in: [tests/input/charts/LeftAxisLayout.js:1](../files/tests/input/charts/LeftAxisLayout.js.js)

Module: [charts](../modules/charts.md)




Algorithmic strategy for rendering a left axis.

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

Defined in `tests/input/charts/LeftAxisLayout.js:11`



> Default margins for text fields.


**Returns**
`` 


--------------------------
#### _getTransformOrigin() 

Defined in `tests/input/charts/LeftAxisLayout.js:294`



> Returns the transformOrigin to use for an axis label based on the position of the axis 
and the rotation of the label.

**Parameters**
- rot `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The rotation (in degrees) of the label.

**Returns**
`` 


--------------------------
#### _setRotationCoords() 

Defined in `tests/input/charts/LeftAxisLayout.js:255`



> Adjusts the coordinates of an axis label based on the rotation.

**Parameters**
- props `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Coordinates, dimension and rotation properties of the label.



--------------------------
#### drawTick() 

Defined in `tests/input/charts/LeftAxisLayout.js:65`



> Draws a tick

**Parameters**
- path `Path` reference to the path `Path` element in which to draw the tick.
- pt `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Point on the axis in which the tick will intersect.
- tickStyle `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Hash of properties to apply to the tick.



--------------------------
#### getExplicitlySized() 

Defined in `tests/input/charts/LeftAxisLayout.js:155`



> Determines the available label width when the axis width has been explicitly set.


**Returns**
`` 


--------------------------
#### getLabelPoint() 

Defined in `tests/input/charts/LeftAxisLayout.js:111`



> Calculates the point for a label.

**Parameters**
- point `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Point on the axis in which the tick will intersect.

**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` 


--------------------------
#### getLineStart() 

Defined in `tests/input/charts/LeftAxisLayout.js:85`



> Calculates the coordinates for the first point on an axis.


**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` 


--------------------------
#### offsetNodeForTick() 

Defined in `tests/input/charts/LeftAxisLayout.js:325`



> Adjust the position of the Axis widget's content box for internal axes.

**Parameters**
- cb `Node` Content box of the Axis.



--------------------------
#### positionLabel() 

Defined in `tests/input/charts/LeftAxisLayout.js:207`



> Rotate and position labels.

**Parameters**
- label `<a href="https://developer.mozilla.org/en/Document_Object_Model_(DOM)/HTMLElement" class="crosslink external" target="_blank">HTMLElement</a>` to rotate position
- pt `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` hash containing the x and y coordinates in which the label will be positioned
against.



--------------------------
#### positionTitle() 

Defined in `tests/input/charts/LeftAxisLayout.js:177`



> Rotate and position title.

**Parameters**
- label `<a href="https://developer.mozilla.org/en/Document_Object_Model_(DOM)/HTMLElement" class="crosslink external" target="_blank">HTMLElement</a>` to rotate position



--------------------------
#### setCalculatedSize() 

Defined in `tests/input/charts/LeftAxisLayout.js:336`



> Sets the width of the axis based on its contents.




--------------------------
#### setTickOffset() 

Defined in `tests/input/charts/LeftAxisLayout.js:28`



> Sets the length of the tick on either side of the axis line.




--------------------------
#### updateMaxLabelSize() 

Defined in `tests/input/charts/LeftAxisLayout.js:124`



> Updates the value for the `maxLabelSize` for use in calculating total size.

**Parameters**
- label `<a href="https://developer.mozilla.org/en/Document_Object_Model_(DOM)/HTMLElement" class="crosslink external" target="_blank">HTMLElement</a>` to measure




