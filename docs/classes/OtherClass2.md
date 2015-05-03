
# yuidoc-root 0.6.21

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `OtherClass2` Class


Defined in: [tests/input/test/test.js:174](../files/tests/input/test/test.js.js)

Module: [mysubmodule](../modules/mysubmodule.md)
Parent Module: [mymodule](../modules/mymodule.md)




Other Class 2

### Index

##### Properties

  - `options`


##### Attributes

  - `optionalAttr`
  - `requiredAttr`


##### Methods


  - `crashTest`
  - `crossedAttr`
  - `crossedEvent`
  - `crossOptAttr`
  - `hbHelper1`
  - `hbHelper2`
  - `hbHelper3`
  - `testMethod`



##### Events

  - `changeWithOptional`




### Details


#### Properties


`options`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/test/test.js:180`



---------------------

Default options to use for all transactions.




##### Sub Properties

- attributes `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` HTML attribute name/value pairs that
    should be added to inserted nodes.
- autopurge `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>` Whether or not to automatically
    purge inserted nodes after the purge threshold is reached.
- doc `Document` Document into which nodes should be inserted.
- pollInterval `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>` Polling interval (in milliseconds)
    for detecting CSS load completion in browsers that don&#x27;t support the &#x60;load&#x60;
    event on &#x60;&lt;link&gt;&#x60; nodes.




#### Attributes


`optionalAttr`: ``

Defined in `tests/input/test/test.js:202`



---------------------




##### Fires event `optionalAttrChange`

Fires when the value for the configuration attribute `optionalAttr` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.



`requiredAttr`: ``

Defined in `tests/input/test/test.js:208`



---------------------




##### Fires event `requiredAttrChange`

Fires when the value for the configuration attribute `requiredAttr` is
changed. You can listen for the event using the `on` method if you
wish to be notified before the attribute's value has changed, or
using the `after` method if you wish to be notified after the
attribute's value has changed.





<!-- Method Block -->
#### Methods



--------------------------
#### crashTest() 

Defined in `tests/input/test/test.js:214`



> crash test method

**Parameters**
- foo `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` The string to crash the parser



--------------------------
#### crossedAttr() 

Defined in `tests/input/test/test.js:233`



> This method has attr {{#crossLink "OtherClass2/requiredAttr:attribute"}}{{/crossLink}}




--------------------------
#### crossedEvent() 

Defined in `tests/input/test/test.js:228`



> This method fires {{#crossLink "OtherClass2/changeWithOptional:event"}}{{/crossLink}}




--------------------------
#### crossOptAttr() 

Defined in `tests/input/test/test.js:238`



> This method has attr {{#crossLink "OtherClass2/optionalAttr:attr"}}{{/crossLink}}




--------------------------
#### hbHelper1() 

Defined in `tests/input/test/test.js:243`



> Test `\{{foobar\}}` `\{{barfoo\}}`




--------------------------
#### hbHelper2() 

Defined in `tests/input/test/test.js:248`



> Test `\{{foobar2\}}` `\{{barfoo2\}}`




--------------------------
#### hbHelper3() 

Defined in `tests/input/test/test.js:253`



> Test `\{{foobar3\}}` `\{{barfoo3\}}`




--------------------------
#### testMethod() 

Defined in `tests/input/test/test.js:196`



> This is a test of CASE TaGs

**Parameters**
- foo `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Foo description





#### Events

### `changeWithOptional` Event


Defined in: [tests/input/test/test.js:220](../files/tests/input/test/test.js.js)

Module: [mysubmodule](../modules/mysubmodule.md)
Parent Module: [mymodule](../modules/mymodule.md)






### Index







### Details





