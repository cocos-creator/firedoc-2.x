
# yuidoc-root 0.6.21

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `StackedComboSeries` Class


Defined in: [tests/input/charts/StackedComboSeries.js:1](../files/tests/input/charts/StackedComboSeries.js.js)

Module: [charts](../modules/charts.md)




The StackedComboSeries class renders a combination of lines, plots and area fills in a single series. Series
are stacked along the value axis to indicate each series contribution to a cumulative total. Each
series type has a corresponding boolean attribute indicating if it is rendered. By default, all three types are
rendered.

### Index


##### Attributes

  - `showAreaFill`
  - `type`


##### Methods


  - `drawSeries`
  - `setAreaData`





### Inheritance tree


### Details



#### Attributes


`showAreaFill`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/charts/StackedComboSeries.js:63`



---------------------



**Default**: true

##### Fires event `showAreaFillChange`

Fires when the value for the configuration attribute `showAreaFill` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`type`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>`

Defined in `tests/input/charts/StackedComboSeries.js:52`



---------------------



**Default**: stackedCombo

##### Fires event `typeChange`

Fires when the value for the configuration attribute `type` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods



--------------------------
#### drawSeries() 

Defined in `tests/input/charts/StackedComboSeries.js:27`



> 




--------------------------
#### setAreaData() 

Defined in `tests/input/charts/StackedComboSeries.js:14`



> 





