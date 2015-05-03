
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `Lines` Class


Defined in: [tests/input/charts/Lines.js:1](../files/tests/input/charts/Lines.js.js)

Module: [charts](../modules/charts.md)




Utility class used for drawing lines.

### Index

##### Properties

  - `_lineDefaults`



##### Methods


  - `_getGraphic`
  - `_getLineDefaults`
  - `_toggleVisible`
  - `drawDashedLine`
  - `drawLines`
  - `drawSpline`





### Details


#### Properties


`_lineDefaults`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/Lines.js:11`



---------------------









<!-- Method Block -->
#### Methods



--------------------------
#### _getGraphic() 

Defined in `tests/input/charts/Lines.js:18`



> Creates a graphic in which to draw a series.


**Returns**
`` 


--------------------------
#### _getLineDefaults() 

Defined in `tests/input/charts/Lines.js:241`



> Default values for `styles` attribute.


**Returns**
`` 


--------------------------
#### _toggleVisible() 

Defined in `tests/input/charts/Lines.js:36`



> Toggles visibility

**Parameters**
- visible `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>` indicates visibilitye



--------------------------
#### drawDashedLine() 

Defined in `tests/input/charts/Lines.js:190`



> Draws a dashed line between two points.

**Parameters**
- xStart `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The x position of the start of the line
- yStart `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The y position of the start of the line
- xEnd `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The x position of the end of the line
- yEnd `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The y position of the end of the line
- dashSize `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` the size of dashes, in pixels
- gapSize `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` the size of gaps between dashes, in pixels



--------------------------
#### drawLines() 

Defined in `tests/input/charts/Lines.js:51`



> Draws lines for the series.




--------------------------
#### drawSpline() 

Defined in `tests/input/charts/Lines.js:144`



> Connects data points with a consistent curve for a series.





