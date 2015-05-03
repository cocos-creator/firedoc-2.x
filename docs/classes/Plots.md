
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `Plots` Class


Defined in: [tests/input/charts/Plots.js:1](../files/tests/input/charts/Plots.js.js)

Module: [charts](../modules/charts.md)




Utility class used for drawing markers.

### Index

##### Properties

  - `_groupShapes`
  - `_markerCache`
  - `_markers`
  - `_plotDefaults`
  - `_statSyles`



##### Methods


  - `_clearMarkerCache`
  - `_createGroupMarkers`
  - `_createMarker`
  - `_createMarkerCache`
  - `_getGroupShape`
  - `_getItemColor`
  - `_getPlotDefaults`
  - `_getState`
  - `_parseMarkerStyles`
  - `_setStyles`
  - `_toggleVisible`
  - `drawPlots`
  - `getMarker`
  - `updateMarkerState`





### Details


#### Properties


`_groupShapes`: `Unknown`

Defined in `tests/input/charts/Plots.js:119`



---------------------

Pre-defined group shapes.




`_markerCache`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/Plots.js:189`



---------------------

Collection of markers to be re-used on a series redraw.




`_markers`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>`

Defined in `tests/input/charts/Plots.js:180`



---------------------

Collection of markers to be used in the series.




`_plotDefaults`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/Plots.js:22`



---------------------

Storage for default marker styles.




`_statSyles`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/Plots.js:504`



---------------------









<!-- Method Block -->
#### Methods



--------------------------
#### _clearMarkerCache() 

Defined in `tests/input/charts/Plots.js:366`



> Removes unused markers from the marker cache




--------------------------
#### _createGroupMarkers() 

Defined in `tests/input/charts/Plots.js:286`



> Draws a series of markers in a single shape instance.

**Parameters**
- styles `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Set of configuration properties used to create the markers.



--------------------------
#### _createMarker() 

Defined in `tests/input/charts/Plots.js:240`



> Creates a shape to be used as a marker.

**Parameters**
- styles `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Hash of style properties.
- order `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Order of the series.
- index `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Index within the series associated with the marker.

**Returns**
`` 


--------------------------
#### _createMarkerCache() 

Defined in `tests/input/charts/Plots.js:262`



> Creates a cache of markers for reuse.




--------------------------
#### _getGroupShape() 

Defined in `tests/input/charts/Plots.js:132`



> Returns the correct group shape class.

**Parameters**
- shape `Shape | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Indicates which shape class.

**Returns**
`` 


--------------------------
#### _getItemColor() 

Defined in `tests/input/charts/Plots.js:417`



> Parses a color from an array.

**Parameters**
- val `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a>` collection of colors
- i `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` index of the item

**Returns**
`` 


--------------------------
#### _getPlotDefaults() 

Defined in `tests/input/charts/Plots.js:149`



> Gets the default values for series that use the utility. This method is used by
the class' `styles` attribute's getter to get build default values.


**Returns**
`` 


--------------------------
#### _getState() 

Defined in `tests/input/charts/Plots.js:475`



> Returns marker state based on event type

**Parameters**
- type `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` event type

**Returns**
`` 


--------------------------
#### _parseMarkerStyles() 

Defined in `tests/input/charts/Plots.js:449`



> Combines new styles with existing styles.

**Parameters**
- Object `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` containing style properties for the marker.

**Returns**
`` 


--------------------------
#### _setStyles() 

Defined in `tests/input/charts/Plots.js:435`



> Method used by `styles` setter. Overrides base implementation.

**Parameters**
- newStyles `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Hash of properties to update.

**Returns**
`` 


--------------------------
#### _toggleVisible() 

Defined in `tests/input/charts/Plots.js:339`



> Toggles visibility

**Parameters**
- visible `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>` indicates visibilitye



--------------------------
#### drawPlots() 

Defined in `tests/input/charts/Plots.js:31`



> Draws the markers




--------------------------
#### getMarker() 

Defined in `tests/input/charts/Plots.js:198`



> Gets and styles a marker. If there is a marker in cache, it will use it. Otherwise
it will create one.

**Parameters**
- styles `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Hash of style properties.
- order `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Order of the series.
- index `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Index within the series associated with the marker.

**Returns**
`` 


--------------------------
#### updateMarkerState() 

Defined in `tests/input/charts/Plots.js:385`



> Resizes and positions markers based on a mouse interaction.

**Parameters**
- type `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` state of the marker
- i `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` index of the marker




