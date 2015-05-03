
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `VerticalLegendLayout` Class


Defined in: [tests/input/charts/CartesianChartLegend.js:207](../files/tests/input/charts/CartesianChartLegend.js.js)

Module: [charts-legend](../modules/charts-legend.md)
Parent Module: [charts](../modules/charts.md)




Contains methods for displaying items vertically in a legend.

### Index



##### Methods


  - `_getLayoutDimensions`
  - `_positionLegendItems`
  - `_redraw`
  - `_setColumnArrays`
  - `destructor`
  - `getStartPoint`





### Details




<!-- Method Block -->
#### Methods



--------------------------
#### _getLayoutDimensions() 

Defined in `tests/input/charts/CartesianChartLegend.js:662`



> Positions the legend in a chart and returns the properties of the legend to be used in the 
chart's layout algorithm.


**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` 


--------------------------
#### _positionLegendItems() 

Defined in `tests/input/charts/CartesianChartLegend.js:215`



> Displays items vertically in a legend.

**Parameters**
- items `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Array of items to display in the legend.
- maxWidth `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The width of the largest item in the legend.
- maxHeight `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The height of the largest item in the legend.
- totalWidth `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The total width of all items in a legend.
- totalHeight `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The total height of all items in a legend.
- padding `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The left, top, right and bottom padding properties for the legend.
- horizontalGap `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The horizontal distance between items in a legend.
- verticalGap `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` The vertical distance between items in a legend.
- hAlign `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` The horizontal alignment of the legend.
- vAlign `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` The vertical alignment of the legend.



--------------------------
#### _redraw() 

Defined in `tests/input/charts/CartesianChartLegend.js:370`



> Redraws and position all the components of the chart instance.




--------------------------
#### _setColumnArrays() 

Defined in `tests/input/charts/CartesianChartLegend.js:295`



> Creates column and total height arrays used for displaying multiple columns of
legend items based on the items, available height and verticalGap for the legend.

**Parameters**
- items `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Array of legend items to display in a legend.
- limit `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Total available height for displaying items in a legend.
- verticalGap `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Vertical distance between items in a legend.



--------------------------
#### destructor() 

Defined in `tests/input/charts/CartesianChartLegend.js:716`



> Destructor implementation for the CartesianChart class. Calls destroy on all axes, series, legend (if available) and the Graph instance.
Removes the tooltip and overlay HTML elements.




--------------------------
#### getStartPoint() 

Defined in `tests/input/charts/CartesianChartLegend.js:339`



> Returns the starting y-coordinate for a column of legend items.

**Parameters**
- h `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Height of the legend.
- totalHeight `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Total height of all labels in the column.
- align `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Vertical alignment of items for the legend.
- padding `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Object contain left, top, right and bottom padding properties.

**Returns**
`` 



