
# yuidoc-root 0.6.21

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `myclass` Class


Defined in: [tests/input/test/test.js:32](../files/tests/input/test/test.js.js)

Module: [mysubmodule](../modules/mysubmodule.md)
Parent Module: [mymodule](../modules/mymodule.md)




The class def

### Index



##### Methods

  - `myclass` **constructor**

  - `foo`
  - `foo2`
  - `reallyLongParamDesc`
  - `test0ton`
  - `test1ton`
  - `testNewlineBeforeDescription`
  - `testobjectparam`
  - `testoptional`
  - `testrestparam0n`
  - `testrestparam1n`





### Details




<!-- Method Block -->
#### Methods

##### Constructor

--------------------------
#### myclass() 

Defined in `tests/input/test/test.js:32`



> 





--------------------------
#### foo() 

Defined in `tests/input/test/test.js:151`



> This is the description



**Examples**


        var email = "lsmith@foo-truncated-here.com"


--------------------------
#### foo2() 

Defined in `tests/input/test/test.js:161`



> 



**Examples**

    @media screen and (max-width: 767px) {
    }

--------------------------
#### reallyLongParamDesc() 

Defined in `tests/input/test/test.js:126`



> Testing really long param description paring

**Parameters**
- config `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Object with configuration property name/value pairs. The object can be
used to provide default values for the objects published attributes.

<p>
The config object can also contain the following non-attribute properties, providing a convenient
way to configure events listeners and plugins for the instance, as part of the constructor call:
</p>

<dl>
    <dt>on</dt>
    <dd>An event name to listener function map, to register event listeners for the "on" moment of the event. A constructor convenience property for the <a href="Base.html#method_on">on</a> method.</dd>
    <dt>after</dt>
    <dd>An event name to listener function map, to register event listeners for the "after" moment of the event. A constructor convenience property for the <a href="Base.html#method_after">after</a> method.</dd>
    <dt>bubbleTargets</dt>
    <dd>An object, or array of objects, to register as bubble targets for bubbled events fired by this instance. A constructor convenience property for the <a href="EventTarget.html#method_addTarget">addTarget</a> method.</dd>
    <dt>plugins</dt>
    <dd>A plugin, or array of plugins to be plugged into the instance (see PluginHost's plug method for signature details). A constructor convenience property for the <a href="Plugin.Host.html#method_plug">plug</a> method.</dd>
</dl>



--------------------------
#### test0ton() 

Defined in `tests/input/test/test.js:68`



> test 0..n param

**Parameters**
- optionalandmultiple `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` my desc

**Returns**
`` 


--------------------------
#### test1ton() 

Defined in `tests/input/test/test.js:76`



> test 1..n param

**Parameters**
- multiple `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` my desc

**Returns**
`` 


--------------------------
#### testNewlineBeforeDescription() 

Defined in `tests/input/test/test.js:102`



> Test newlines before descriptions.

**Parameters**
- foo `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` This parameter is foo.
- bar `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` This parameter is bar.

    It does useful things.

**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>` 


--------------------------
#### testobjectparam() 

Defined in `tests/input/test/test.js:58`



> test object param

**Parameters**
- anobject `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` the object
	- prop1 `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` prop1
	- prop2 `Bool` prop2

**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` 


--------------------------
#### testoptional() 

Defined in `tests/input/test/test.js:38`



> test optional

**Parameters**
- notype `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` my desc
- namesecond `Int` my desc
- namefirst `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` my desc
- optionalvar `Bool` my desc
- optionalDefault1 `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` my desc
- optionalDefault2 `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` my desc

**Returns**
`` 

**Examples**

     This is code
     var = 'This is more code';
     document.title = 'Test This';

--------------------------
#### testrestparam0n() 

Defined in `tests/input/test/test.js:93`



> test alternative 0..n param with ...args

**Parameters**
- multiple `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` my desc

**Returns**
`` 


--------------------------
#### testrestparam1n() 

Defined in `tests/input/test/test.js:84`



> test alternative 1..n param with ...args

**Parameters**
- multiple `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` my desc

**Returns**
`` 



