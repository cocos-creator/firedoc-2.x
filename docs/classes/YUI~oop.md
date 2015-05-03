
# yuidoc-root 0.6.21

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `YUI~oop` Class


Defined in: [tests/input/test2/oop/oop.js:9](../files/tests/input/test2/oop/oop.js.js)

Module: [oop](../modules/oop.md)




The following methods are added to the YUI instance

### Index



##### Methods


  - `aggregate`
  - `augment`
  - `bind`
  - `clone`
  - `each`
  - `extend`
  - `rbind`
  - `some`





### Details




<!-- Method Block -->
#### Methods



--------------------------
#### aggregate() 

Defined in `tests/input/test2/oop/oop.js:126`



> Applies object properties from the supplier to the receiver.  If
the target has the property, and the property is an object, the target
object will be augmented with the supplier's value.  If the property
is an array, the suppliers value will be appended to the target.

**Parameters**
- r `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>` the object to receive the augmentation.
- s `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>` the object that supplies the properties to augment.
- ov `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>` if true, properties already on the receiver
will be overwritten if found on the supplier.
- wl `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a>` a whitelist.  If supplied, only properties in
this list will be applied to the receiver.

**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` 


--------------------------
#### augment() 

Defined in `tests/input/test2/oop/oop.js:37`



> Applies prototype properties from the supplier to the receiver.
The receiver can be a constructor or an instance.

**Parameters**
- r `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>` the object to receive the augmentation.
- s `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>` the object that supplies the properties to augment.
- ov `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>` if true, properties already on the receiver
will be overwritten if found on the supplier.
- wl `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String[]</a>` a whitelist.  If supplied, only properties in
this list will be applied to the receiver.
- args `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> | Any` arg or arguments to apply to the supplier
constructor when initializing.

**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` 


--------------------------
#### bind() 

Defined in `tests/input/test2/oop/oop.js:320`



> Returns a function that will execute the supplied function in the
supplied object's context, optionally adding any additional
supplied parameters to the beginning of the arguments collection the
supplied to the function.

**Parameters**
- f `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` the function to bind, or a function name
to execute on the context object.
- c `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` the execution context.
- args `Any` 0..n arguments to include before the arguments the
function is executed with.

**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>` 


--------------------------
#### clone() 

Defined in `tests/input/test2/oop/oop.js:221`



> Deep obj/array copy.  Function clones are actually
wrappers around the original function.
Array-like objects are treated as arrays.
Primitives are returned untouched.  Optionally, a
function can be provided to handle other data types,
filter keys, validate values, etc.

**Parameters**
- o `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` what to clone.
- safe `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>` if true, objects will not have prototype
items from the source.  If false, they will.  In this case, the
original is initially protected, but the clone is not completely
immune from changes to the source object prototype.  Also, cloned
prototype items that are deleted from the clone will result
in the value of the source prototype being exposed.  If operating
on a non-safe clone, items should be nulled out rather than deleted.
- f `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>` optional function to apply to each item in a
collection; it will be executed prior to applying the value to
the new object.  Return false to prevent the copy.
- c `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` optional execution context for f.
- owner `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` Owner object passed when clone is iterating
an object.  Used to set up context for cloned functions.
- cloned `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` hash of previously cloned objects to avoid
multiple clones.

**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` 


--------------------------
#### each() 

Defined in `tests/input/test2/oop/oop.js:185`



> Executes the supplied function for each item in
a collection.  Supports arrays, objects, and
Y.NodeLists

**Parameters**
- o `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` the object to iterate.
- f `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>` the function to execute.  This function
receives the value, key, and object as parameters.
- c `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` the execution context for the function.
- proto `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>` if true, prototype properties are
iterated on objects.

**Returns**
`YUI` 


--------------------------
#### extend() 

Defined in `tests/input/test2/oop/oop.js:144`



> Utility to set up the prototype, constructor and superclass properties to
support an inheritance strategy that can chain constructors and methods.
Static members will not be inherited.

**Parameters**
- r `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>` the object to modify.
- s `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>` the object to inherit.
- px `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` prototype properties to add/override.
- sx `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` static properties to add/override.

**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` 


--------------------------
#### rbind() 

Defined in `tests/input/test2/oop/oop.js:345`



> Returns a function that will execute the supplied function in the
supplied object's context, optionally adding any additional
supplied parameters to the end of the arguments the function
is executed with.

**Parameters**
- f `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` the function to bind, or a function name
to execute on the context object.
- c `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` the execution context.
- args `Any` 0..n arguments to append to the end of
arguments collection supplied to the function.

**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>` 


--------------------------
#### some() 

Defined in `tests/input/test2/oop/oop.js:202`



> Executes the supplied function for each item in
a collection.  The operation stops if the function
returns true. Supports arrays, objects, and
Y.NodeLists.

**Parameters**
- o `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` the object to iterate.
- f `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>` the function to execute.  This function
receives the value, key, and object as parameters.
- c `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>` the execution context for the function.
- proto `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>` if true, prototype properties are
iterated on objects.

**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>` 



