
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `Renderer` Class


Defined in: [tests/input/charts/Renderer.js:1](../files/tests/input/charts/Renderer.js.js)

Module: [charts](../modules/charts.md)




The Renderer class is a base class for chart components that use the `styles`
attribute.

### Index

##### Properties

  - `_styles`


##### Attributes

  - `graphic`
  - `styles`


##### Methods


  - `_getDefaultStyles`
  - `_mergeStyles`
  - `_setStyles`





### Details


#### Properties


`_styles`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/Renderer.js:43`



---------------------

Storage for `styles` attribute.






#### Attributes


`graphic`: `Graphic`

Defined in `tests/input/charts/Renderer.js:32`



---------------------




##### Fires event `graphicChange`

Fires when the value for the configuration attribute `graphic` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`styles`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/charts/Renderer.js:12`



---------------------




##### Fires event `stylesChange`

Fires when the value for the configuration attribute `styles` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods



--------------------------
#### _getDefaultStyles() 

Defined in `tests/input/charts/Renderer.js:97`



> Gets the default value for the `styles` attribute.


**Returns**
`` 


--------------------------
#### _mergeStyles() 

Defined in `tests/input/charts/Renderer.js:66`



> Merges to object literals so that only specified properties are 
overwritten.

**Parameters**
- a `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Hash of new styles
- b `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Hash of original styles

**Returns**
`` 


--------------------------
#### _setStyles() 

Defined in `tests/input/charts/Renderer.js:52`



> Method used by `styles` setter.

**Parameters**
- newStyles `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Hash of properties to update.

**Returns**
`` 



