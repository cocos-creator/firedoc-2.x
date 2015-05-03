
# yuidoc-root 0.6.21

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `Axis` Class


Defined in: [tests/input/charts/Axis.js:1](../files/tests/input/charts/Axis.js.js)

Module: [charts](../modules/charts.md)




The Axis class. Generates axes for a chart.

### Index

##### Properties

  - `_calculatedHeight`
  - `_calculatedWidth`
  - `_layoutClasses`
  - `maxLabelSize`


##### Attributes

  - `appendLabelFunction`
  - `appendTitleFunction`
  - `bottomTickOffset`
  - `calculatedHeight`
  - `calculatedWidth`
  - `edgeOffset`
  - `graphic`
  - `height`
  - `labelFunction`
  - `labelFunctionScope`
  - `labels`
  - `leftTickOffset`
  - `maxLabelSize`
  - `node`
  - `overlapGraph`
  - `path`
  - `position`
  - `rightTickOffset`
  - `styles`
  - `tickPath`
  - `tickPoints`
  - `title`
  - `topTickOffset`
  - `width`


##### Methods


  - `_clearLabelCache`
  - `_createLabelCache`
  - `_dataChangeHandler`
  - `_drawAxis`
  - `_getDefaultStyles`
  - `_getLabelBounds`
  - `_getTextRotationProps`
  - `_handleSizeChange`
  - `_positionChangeHandler`
  - `_removeChildren`
  - `_rotate`
  - `_setCanvas`
  - `_setText`
  - `_setTotalTitleSize`
  - `_simulateTransformOrigin`
  - `_updateGraphic`
  - `_updateHandler`
  - `_updatePathElement`
  - `_updateTitle`
  - `destructor`
  - `drawLine`
  - `getFirstPoint`
  - `getLabel`
  - `getLastPoint`
  - `getLength`
  - `getLineEnd`
  - `getMaxLabelBounds`
  - `getMinLabelBounds`
  - `getNextPoint`
  - `getPosition`
  - `renderUI`
  - `syncUI`





### Inheritance tree


### Details


#### Properties


`_calculatedHeight`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/Axis.js:21`



---------------------

Storage for calculatedHeight value.




`_calculatedWidth`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/Axis.js:12`



---------------------

Storage for calculatedWidth value.




`_layoutClasses`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/Axis.js:262`



---------------------

Maps key values to classes containing layout algorithms




`maxLabelSize`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/Axis.js:1042`



---------------------

Length in pixels of largest text bounding box. Used to calculate the height of the axis.






#### Attributes


`appendLabelFunction`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>`

Defined in `tests/input/charts/Axis.js:1423`



---------------------




##### Fires event `appendLabelFunctionChange`

Fires when the value for the configuration attribute `appendLabelFunction` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`appendTitleFunction`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>`

Defined in `tests/input/charts/Axis.js:1444`



---------------------




##### Fires event `appendTitleFunctionChange`

Fires when the value for the configuration attribute `appendTitleFunction` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`bottomTickOffset`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/Axis.js:1279`



---------------------




##### Fires event `bottomTickOffsetChange`

Fires when the value for the configuration attribute `bottomTickOffset` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`calculatedHeight`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/Axis.js:1156`



---------------------




##### Fires event `calculatedHeightChange`

Fires when the value for the configuration attribute `calculatedHeight` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`calculatedWidth`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/Axis.js:1136`



---------------------




##### Fires event `calculatedWidthChange`

Fires when the value for the configuration attribute `calculatedWidth` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`edgeOffset`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/Axis.js:1176`



---------------------




##### Fires event `edgeOffsetChange`

Fires when the value for the configuration attribute `edgeOffset` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`graphic`: `Graphic`

Defined in `tests/input/charts/Axis.js:1188`



---------------------




##### Fires event `graphicChange`

Fires when the value for the configuration attribute `graphic` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`height`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/Axis.js:1108`



---------------------




##### Fires event `heightChange`

Fires when the value for the configuration attribute `height` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`labelFunction`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>`

Defined in `tests/input/charts/Axis.js:1405`



---------------------




##### Fires event `labelFunctionChange`

Fires when the value for the configuration attribute `labelFunction` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`labelFunctionScope`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/Axis.js:1361`



---------------------




##### Fires event `labelFunctionScopeChange`

Fires when the value for the configuration attribute `labelFunctionScope` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`labels`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/Axis.js:1312`



---------------------




##### Fires event `labelsChange`

Fires when the value for the configuration attribute `labels` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`leftTickOffset`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/Axis.js:1290`



---------------------




##### Fires event `leftTickOffsetChange`

Fires when the value for the configuration attribute `leftTickOffset` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`maxLabelSize`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/Axis.js:1369`



---------------------




##### Fires event `maxLabelSizeChange`

Fires when the value for the configuration attribute `maxLabelSize` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`node`: `<a href="https://developer.mozilla.org/en/Document_Object_Model_(DOM)/HTMLElement" class="crosslink external" target="_blank">HTMLElement</a>`

Defined in `tests/input/charts/Axis.js:1242`



---------------------




##### Fires event `nodeChange`

Fires when the value for the configuration attribute `node` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`overlapGraph`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/Axis.js:1345`



---------------------




##### Fires event `overlapGraphChange`

Fires when the value for the configuration attribute `overlapGraph` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`path`: `Shape`

Defined in `tests/input/charts/Axis.js:1196`



---------------------




##### Fires event `pathChange`

Fires when the value for the configuration attribute `path` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`position`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/Axis.js:1250`



---------------------




##### Fires event `positionChange`

Fires when the value for the configuration attribute `position` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`rightTickOffset`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/Axis.js:1301`



---------------------




##### Fires event `rightTickOffsetChange`

Fires when the value for the configuration attribute `rightTickOffset` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`styles`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/Axis.js:1465`



---------------------




##### Fires event `stylesChange`

Fires when the value for the configuration attribute `styles` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`tickPath`: `Shape`

Defined in `tests/input/charts/Axis.js:1219`



---------------------




##### Fires event `tickPathChange`

Fires when the value for the configuration attribute `tickPath` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`tickPoints`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/Axis.js:1326`



---------------------




##### Fires event `tickPointsChange`

Fires when the value for the configuration attribute `tickPoints` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`title`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/Axis.js:1389`



---------------------




##### Fires event `titleChange`

Fires when the value for the configuration attribute `title` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`topTickOffset`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/Axis.js:1268`



---------------------




##### Fires event `topTickOffsetChange`

Fires when the value for the configuration attribute `topTickOffset` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`width`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/charts/Axis.js:1080`



---------------------




##### Fires event `widthChange`

Fires when the value for the configuration attribute `width` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods



--------------------------
#### _clearLabelCache() 

Defined in `tests/input/charts/Axis.js:666`



> Removes axis labels from the dom and clears the label cache.




--------------------------
#### _createLabelCache() 

Defined in `tests/input/charts/Axis.js:644`



> Creates a cache of labels that can be re-used when the axis redraws.




--------------------------
#### _dataChangeHandler() 

Defined in `tests/input/charts/Axis.js:30`



> Handles change to the dataProvider

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object



--------------------------
#### _drawAxis() 

Defined in `tests/input/charts/Axis.js:332`



> Draws an axis.




--------------------------
#### _getDefaultStyles() 

Defined in `tests/input/charts/Axis.js:172`



> Gets the default value for the `styles` attribute. Overrides
base implementation.


**Returns**
`` 


--------------------------
#### _getLabelBounds() 

Defined in `tests/input/charts/Axis.js:961`



> Returns the coordinates (top, right, bottom, left) for the bounding box of a label.

**Parameters**
- Value `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` of the label

**Returns**
`` 


--------------------------
#### _getTextRotationProps() 

Defined in `tests/input/charts/Axis.js:292`



> Generates the properties necessary for rotating and positioning a text field.

**Parameters**
- styles `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` properties for the text field

**Returns**
`` 


--------------------------
#### _handleSizeChange() 

Defined in `tests/input/charts/Axis.js:240`



> Updates the axis when the size changes.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object.



--------------------------
#### _positionChangeHandler() 

Defined in `tests/input/charts/Axis.js:45`



> Handles change to the position attribute

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object



--------------------------
#### _removeChildren() 

Defined in `tests/input/charts/Axis.js:992`



> Removes all DOM elements from an HTML element. Used to clear out labels during detruction
phase.




--------------------------
#### _rotate() 

Defined in `tests/input/charts/Axis.js:844`



> Rotates and positions a text field.

**Parameters**
- label `<a href="https://developer.mozilla.org/en/Document_Object_Model_(DOM)/HTMLElement" class="crosslink external" target="_blank">HTMLElement</a>` text field to rotate and position
- props `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` properties to be applied to the text field.



--------------------------
#### _setCanvas() 

Defined in `tests/input/charts/Axis.js:139`



> Creates a graphic instance to be used for the axis line and ticks.




--------------------------
#### _setText() 

Defined in `tests/input/charts/Axis.js:1051`



> Updates the content of text field. This method writes a value into a text field using 
`appendChild`. If the value is a `String`, it is converted to a `TextNode` first.

**Parameters**
- label `<a href="https://developer.mozilla.org/en/Document_Object_Model_(DOM)/HTMLElement" class="crosslink external" target="_blank">HTMLElement</a>` label to be updated
- val `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` value with which to update the label



--------------------------
#### _setTotalTitleSize() 

Defined in `tests/input/charts/Axis.js:465`



> Calculates and sets the total size of a title.

**Parameters**
- styles `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Properties for the title field.



--------------------------
#### _simulateTransformOrigin() 

Defined in `tests/input/charts/Axis.js:916`



> Simulates a rotation with a specified transformOrigin.

**Parameters**
- matrix `Matrix` Reference to a `Matrix` instance.
- rot `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The rotation (in degrees) that will be performed on a matrix.
- transformOrigin `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` An array represeniting the origin in which to perform the transform. The first 
index represents the x origin and the second index represents the y origin.
- w `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The width of the object that will be transformed.
- h `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The height of the object that will be transformed.



--------------------------
#### _updateGraphic() 

Defined in `tests/input/charts/Axis.js:58`



> Updates the the Graphic instance

**Parameters**
- position `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Position of axis



--------------------------
#### _updateHandler() 

Defined in `tests/input/charts/Axis.js:84`



> Handles changes to axis.

**Parameters**
- e `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Event object



--------------------------
#### _updatePathElement() 

Defined in `tests/input/charts/Axis.js:505`



> Updates path.




--------------------------
#### _updateTitle() 

Defined in `tests/input/charts/Axis.js:533`



> Updates the content and style properties for a title field.




--------------------------
#### destructor() 

Defined in `tests/input/charts/Axis.js:1013`



> Destructor implementation Axis class. Removes all labels and the Graphic instance from the widget.




--------------------------
#### drawLine() 

Defined in `tests/input/charts/Axis.js:277`



> Draws a line segment between 2 points

**Parameters**
- startPoint `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` x and y coordinates for the start point of the line segment
- endPoint `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` x and y coordinates for the for the end point of the line segment
- line `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` styles (weight, color and alpha to be applied to the line segment)



--------------------------
#### getFirstPoint() 

Defined in `tests/input/charts/Axis.js:738`



> Gets the position of the first point on an axis.

**Parameters**
- pt `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Object containing x and y coordinates.

**Returns**
`` 


--------------------------
#### getLabel() 

Defined in `tests/input/charts/Axis.js:595`



> Creates or updates an axis label.

**Parameters**
- pt `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` x and y coordinates for the label
- styles `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` styles applied to label

**Returns**
`` 


--------------------------
#### getLastPoint() 

Defined in `tests/input/charts/Axis.js:786`



> Calculates the placement of last tick on an axis.


**Returns**
`` 


--------------------------
#### getLength() 

Defined in `tests/input/charts/Axis.js:712`



> Calcuates the width or height of an axis depending on its direction.


**Returns**
`` 


--------------------------
#### getLineEnd() 

Defined in `tests/input/charts/Axis.js:690`



> Gets the end point of an axis.


**Returns**
`` 


--------------------------
#### getMaxLabelBounds() 

Defined in `tests/input/charts/Axis.js:939`



> Returns the coordinates (top, right, bottom, left) for the bounding box of the last label.


**Returns**
`` 


--------------------------
#### getMinLabelBounds() 

Defined in `tests/input/charts/Axis.js:950`



> Returns the coordinates (top, right, bottom, left) for the bounding box of the first label.


**Returns**
`` 


--------------------------
#### getNextPoint() 

Defined in `tests/input/charts/Axis.js:763`



> Gets the position of the next point on an axis.

**Parameters**
- point `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Object containing x and y coordinates.
- majorUnitDistance `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Distance in pixels between ticks.

**Returns**
`` 


--------------------------
#### getPosition() 

Defined in `tests/input/charts/Axis.js:809`



> Calculates position on the axis.

**Parameters**
- point `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` contains x and y values



--------------------------
#### renderUI() 

Defined in `tests/input/charts/Axis.js:99`



> 




--------------------------
#### syncUI() 

Defined in `tests/input/charts/Axis.js:108`



> 





