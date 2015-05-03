
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `ComboSeries` Class


Defined in: [tests/input/charts/ComboSeries.js:1](../files/tests/input/charts/ComboSeries.js.js)

Module: [charts](../modules/charts.md)




The ComboSeries class renders a combination of lines, plots and area fills in a single series. Each
series type has a corresponding boolean attribute indicating if it is rendered. By default, lines and plots 
are rendered and area is not.

### Index


##### Attributes

  - `area`
  - `line`
  - `marker`
  - `showAreaFill`
  - `showLines`
  - `showMarkers`
  - `styles`
  - `type`


##### Methods


  - `_getDefaultStyles`
  - `_toggleVisible`
  - `drawSeries`





### Inheritance tree


### Details



#### Attributes


`area`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/ComboSeries.js:219`



---------------------




##### Fires event `areaChange`

Fires when the value for the configuration attribute `area` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`line`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/ComboSeries.js:186`



---------------------




##### Fires event `lineChange`

Fires when the value for the configuration attribute `line` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`marker`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/ComboSeries.js:141`



---------------------




##### Fires event `markerChange`

Fires when the value for the configuration attribute `marker` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`showAreaFill`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/ComboSeries.js:108`



---------------------



**Default**: false

##### Fires event `showAreaFillChange`

Fires when the value for the configuration attribute `showAreaFill` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`showLines`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/ComboSeries.js:119`



---------------------



**Default**: true

##### Fires event `showLinesChange`

Fires when the value for the configuration attribute `showLines` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`showMarkers`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/ComboSeries.js:130`



---------------------



**Default**: true

##### Fires event `showMarkersChange`

Fires when the value for the configuration attribute `showMarkers` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`styles`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/ComboSeries.js:246`



---------------------




##### Fires event `stylesChange`

Fires when the value for the configuration attribute `styles` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`type`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/ComboSeries.js:97`



---------------------



**Default**: combo

##### Fires event `typeChange`

Fires when the value for the configuration attribute `type` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods



--------------------------
#### _getDefaultStyles() 

Defined in `tests/input/charts/ComboSeries.js:78`



> 


**Returns**
`` 


--------------------------
#### _toggleVisible() 

Defined in `tests/input/charts/ComboSeries.js:38`



> Toggles visibility

**Parameters**
- visible `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>` indicates visibilitye



--------------------------
#### drawSeries() 

Defined in `tests/input/charts/ComboSeries.js:15`



> 





