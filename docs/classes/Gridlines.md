
# yuidoc-root 0.6.21

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `Gridlines` Class


Defined in: [tests/input/charts/Gridlines.js:1](../files/tests/input/charts/Gridlines.js.js)

Module: [charts](../modules/charts.md)




Gridlines draws gridlines on a Graph.

### Index

##### Properties

  - `_path`


##### Attributes

  - `axis`
  - `direction`
  - `graph`


##### Methods


  - `_drawGridlines`
  - `_getDefaultStyles`
  - `_horizontalLine`
  - `_verticalLine`
  - `draw`
  - `remove`





### Details


#### Properties


`_path`: `Path`

Defined in `tests/input/charts/Gridlines.js:11`



---------------------

Reference to the `Path` element used for drawing Gridlines.






#### Attributes


`axis`: `<a href="../classes/Axis.html" class="crosslink">Axis</a>`

Defined in `tests/input/charts/Gridlines.js:171`



---------------------




##### Fires event `axisChange`

Fires when the value for the configuration attribute `axis` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`direction`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/Gridlines.js:163`



---------------------




##### Fires event `directionChange`

Fires when the value for the configuration attribute `direction` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`graph`: `<a href="../classes/Graph.html" class="crosslink">Graph</a>`

Defined in `tests/input/charts/Gridlines.js:180`



---------------------




##### Fires event `graphChange`

Fires when the value for the configuration attribute `graph` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods



--------------------------
#### _drawGridlines() 

Defined in `tests/input/charts/Gridlines.js:49`



> Algorithm for drawing gridlines




--------------------------
#### _getDefaultStyles() 

Defined in `tests/input/charts/Gridlines.js:140`



> Gets the default value for the `styles` attribute. Overrides
base implementation.


**Returns**
`` 


--------------------------
#### _horizontalLine() 

Defined in `tests/input/charts/Gridlines.js:108`



> Algorithm for horizontal lines.

**Parameters**
- path `Path` Reference to path element
- pt `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Coordinates corresponding to a major unit of an axis.
- w `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Width of the Graph
- h `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Height of the Graph



--------------------------
#### _verticalLine() 

Defined in `tests/input/charts/Gridlines.js:124`



> Algorithm for vertical lines.

**Parameters**
- path `Path` Reference to path element
- pt `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Coordinates corresponding to a major unit of an axis.
- w `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Width of the Graph
- h `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Height of the Graph



--------------------------
#### draw() 

Defined in `tests/input/charts/Gridlines.js:35`



> Draws the gridlines




--------------------------
#### remove() 

Defined in `tests/input/charts/Gridlines.js:20`



> Removes the Gridlines.





