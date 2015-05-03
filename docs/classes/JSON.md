
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.

### `JSON` Class


Defined in: [tests/input/json/parse.js:1](../files/tests/input/json/parse.js.js)

Module: [json-parse](../modules/json-parse.md)
Parent Module: [json](../modules/json.md)




<p>The JSON module adds support for serializing JavaScript objects into
JSON strings and parsing JavaScript objects from strings in JSON format.</p>

<p>The JSON namespace is added to your YUI instance including static methods
Y.JSON.parse(..) and Y.JSON.stringify(..).</p>

<p>The functionality and method signatures follow the ECMAScript 5
specification.  In browsers with native JSON support, the native
implementation is used.</p>

<p>The <code>json</code> module is a rollup of <code>json-parse</code> and
<code>json-stringify</code>.</p>

<p>As their names suggest, <code>json-parse</code> adds support for parsing
JSON data (Y.JSON.parse) and <code>json-stringify</code> for serializing
JavaScript data into JSON strings (Y.JSON.stringify).  You may choose to
include either of the submodules individually if you don't need the
complementary functionality, or include the rollup for both.</p>

### Index

##### Properties

  - `_BRACKETS`
  - `_ESCAPES`
  - `_UNICODE_EXCEPTIONS`
  - `_UNSAFE`
  - `_VALUES`
  - `charCacheThreshold`
  - `Native`
  - `useNativeParse`
  - `useNativeStringify`



##### Methods


  - `_revive`
  - `dateToString`
  - `escapeException`
  - `parse`
  - `stringify`





### Details


#### Properties


`_BRACKETS`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/RegExp" class="crosslink external" target="_blank">RegExp</a>`

Defined in `tests/input/json/parse.js:90`



---------------------

Third step in the safety evaluation.  Regex used to remove all open
square brackets following a colon, comma, or at the beginning of the
string.




`_ESCAPES`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/RegExp" class="crosslink external" target="_blank">RegExp</a>`

Defined in `tests/input/json/parse.js:70`



---------------------

First step in the safety evaluation.  Regex used to replace all escape
sequences (i.e. "\\", etc) with '@' characters (a non-JSON character).




`_UNICODE_EXCEPTIONS`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/RegExp" class="crosslink external" target="_blank">RegExp</a>`

Defined in `tests/input/json/parse.js:56`



---------------------

Replace certain Unicode characters that JavaScript may handle incorrectly
during eval--either by deleting them or treating them as line
endings--with escape sequences.
IMPORTANT NOTE: This regex will be used to modify the input if a match is
found.




`_UNSAFE`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/RegExp" class="crosslink external" target="_blank">RegExp</a>`

Defined in `tests/input/json/parse.js:101`



---------------------

Final step in the safety evaluation.  Regex used to test the string left
after all previous replacements for invalid characters.




`_VALUES`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/RegExp" class="crosslink external" target="_blank">RegExp</a>`

Defined in `tests/input/json/parse.js:80`



---------------------

Second step in the safety evaluation.  Regex used to replace all simple
values with ']' characters.




`charCacheThreshold`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a>`

Defined in `tests/input/json/stringify.js:317`



---------------------

<p>Number of occurrences of a special character within a single call to
stringify that should trigger promotion of that character to a dedicated
preprocess step for future calls.  This is only used in environments
that don't support native JSON, or when useNativeStringify is set to
false.</p>

<p>So, if set to 50 and an object is passed to stringify that includes
strings containing the special character \x07 more than 50 times,
subsequent calls to stringify will process object strings through a
faster serialization path for \x07 before using the generic, slower,
replacement process for all special characters.</p>

<p>To prime the preprocessor cache, set this value to 1, then call
<code>Y.JSON.stringify("<em>(all special characters to
cache)</em>");</code>, then return this setting to a more conservative
value.</p>

<p>Special characters \ " \b \t \n \f \r are already cached.</p>

**Default**: 100



`Native`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a>`

Defined in `tests/input/json/parse.js:44`



---------------------

Alias to native browser implementation of the JSON object if available.




`useNativeParse`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/json/parse.js:214`



---------------------

Leverage native JSON parse if the browser has a native implementation.
In general, this is a good idea.  See the Known Issues section in the
JSON user guide for caveats.  The default value is true for browsers with
native JSON support.

**Default**: true



`useNativeStringify`: `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a>`

Defined in `tests/input/json/stringify.js:248`



---------------------

Leverage native JSON stringify if the browser has a native
implementation.  In general, this is a good idea.  See the Known Issues
section in the JSON user guide for caveats.  The default value is true
for browsers with native JSON support.

**Default**: true






<!-- Method Block -->
#### Methods



--------------------------
#### _revive() 

Defined in `tests/input/json/parse.js:124`



> Traverses nested objects, applying a reviver function to each (key,value)
from the scope if the key:value's containing object.  The value returned
from the function will replace the original value in the key:value pair.
If the value returned is undefined, the key will be omitted from the
returned object.

**Parameters**
- data `MIXED` Any JavaScript data
- reviver `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>` filter or mutation function

**Returns**
`MIXED` 


--------------------------
#### dateToString() 

Defined in `tests/input/json/stringify.js:261`

Deprecated: Use a replacer function


> Serializes a Date instance as a UTC date string.  Used internally by
stringify.  Override this method if you need Dates serialized in a
different format.

**Parameters**
- d `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date" class="crosslink external" target="_blank">Date</a>` The Date to serialize

**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` 


--------------------------
#### escapeException() 

Defined in `tests/input/json/parse.js:111`



> Replaces specific unicode characters with their appropriate \unnnn
format. Some browsers ignore certain characters during eval.

**Parameters**
- c `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` Unicode character

**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` 


--------------------------
#### parse() 

Defined in `tests/input/json/parse.js:158`



> Parse a JSON string, returning the native JavaScript representation.

**Parameters**
- s `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` JSON string data
- reviver `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>` (optional) function(k,v) passed each key value
         pair of object literals, allowing pruning or altering values

**Returns**
`MIXED` 


--------------------------
#### stringify() 

Defined in `tests/input/json/stringify.js:285`



> <p>Converts an arbitrary value to a JSON string representation.</p>

<p>Objects with cyclical references will trigger an exception.</p>

<p>If a whitelist is provided, only matching object keys will be
included.  Alternately, a replacer function may be passed as the
second parameter.  This function is executed on every value in the
input, and its return value will be used in place of the original value.
This is useful to serialize specialized objects or class instances.</p>

<p>If a positive integer or non-empty string is passed as the third
parameter, the output will be formatted with carriage returns and
indentation for readability.  If a String is passed (such as "\t") it
will be used once for each indentation level.  If a number is passed,
that number of spaces will be used.</p>

**Parameters**
- o `MIXED` any arbitrary value to convert to JSON string
- w `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a>` (optional) whitelist of acceptable object
                 keys to include, or a replacer function to modify the
                 raw value before serialization
- ind `<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` (optional) indentation character or depth of
                 spaces to format the output.

**Returns**
`<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a>` 



