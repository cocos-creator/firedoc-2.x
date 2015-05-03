
# yuidoc-root 0.6.21

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `HorizontalLegendLayout` Class


Defined in: [tests/input/charts/CartesianChartLegend.js:48](../files/tests/input/charts/CartesianChartLegend.js.js)

Module: [charts-legend](../modules/charts-legend.md)
Parent Module: [charts](../modules/charts.md)




Contains methods for displaying items horizontally in a legend.

### Index



##### Methods


  - `_positionLegendItems`
  - `_setRowArrays`
  - `getStartPoint`





### Details




<!-- Method Block -->
#### Methods



--------------------------
#### _positionLegendItems() 

Defined in `tests/input/charts/CartesianChartLegend.js:56`



> Displays items horizontally in a legend.

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
#### _setRowArrays() 

Defined in `tests/input/charts/CartesianChartLegend.js:133`



> Creates row and total width arrays used for displaying multiple rows of
legend items based on the items, available width and horizontalGap for the legend.

**Parameters**
- items `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` Array of legend items to display in a legend.
- limit `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Total available width for displaying items in a legend.
- horizontalGap `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Horizontal distance between items in a legend.



--------------------------
#### getStartPoint() 

Defined in `tests/input/charts/CartesianChartLegend.js:177`



> Returns the starting x-coordinate for a row of legend items.

**Parameters**
- w `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Width of the legend.
- totalWidth `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Total width of all labels in the row.
- align `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Horizontal alignment of items for the legend.
- padding `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Object contain left, top, right and bottom padding properties.

**Returns**
`` 



