
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `Fills` Class


Defined in: [tests/input/charts/Fills.js:1](../files/tests/input/charts/Fills.js.js)

Module: [charts](../modules/charts.md)




Utility class used for drawing area fills.

### Index

##### Properties

  - `_defaults`



##### Methods


  - `_getAreaDefaults`
  - `_getClosingPoints`
  - `_getPath`
  - `_getStackedClosingPoints`
  - `_toggleVisible`
  - `drawAreaSpline`
  - `drawFill`
  - `drawStackedAreaSpline`





### Details


#### Properties


`_defaults`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/Fills.js:260`



---------------------

Storage for default area styles.







<!-- Method Block -->
#### Methods



--------------------------
#### _getAreaDefaults() 

Defined in `tests/input/charts/Fills.js:349`



> Returns default values for area styles.


**Returns**
`` 


--------------------------
#### _getClosingPoints() 

Defined in `tests/input/charts/Fills.js:269`



> Concatenates coordinate array with correct coordinates for closing an area fill.


**Returns**
`` 


--------------------------
#### _getPath() 

Defined in `tests/input/charts/Fills.js:29`



> Returns a path shape used for drawing fills.


**Returns**
`` 


--------------------------
#### _getStackedClosingPoints() 

Defined in `tests/input/charts/Fills.js:299`



> Concatenates coordinate array with the correct coordinates for closing an area stack.


**Returns**
`` 


--------------------------
#### _toggleVisible() 

Defined in `tests/input/charts/Fills.js:47`



> Toggles visibility

**Parameters**
- visible `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>` indicates visibilitye



--------------------------
#### drawAreaSpline() 

Defined in `tests/input/charts/Fills.js:111`



> Draws a fill for a spline




--------------------------
#### drawFill() 

Defined in `tests/input/charts/Fills.js:62`



> Draws fill

**Parameters**
- xcoords `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` The x-coordinates for the series.
- ycoords `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` The y-coordinates for the series.



--------------------------
#### drawStackedAreaSpline() 

Defined in `tests/input/charts/Fills.js:169`



> Draws a a stacked area spline





