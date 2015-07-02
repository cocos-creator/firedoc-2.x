
# firedoc 1.8.7

Fireball is the game engine for the future.

### `DocParser` Class



Module: [firedoc](../modules/firedoc.md)






### Index

##### Properties

  - [`IGNORE_TAGLIST`](#property-ignore_taglist) `Array` A list of ignored tags. These tags should be ignored because there is
likely to be used for purposes other than JSDoc tags in JavaScript comments.
  - [`CORRECTIONS`](#property-corrections) `Object` Common errors will get scrubbed instead of being ignored.
  - [`TAGLIST`](#property-taglist) `Array` A list of known tags.  This populates a member variable
during initialization, and will be updated if additional
digesters are added.
  - [`DIGESTERS`](#property-digesters) `Object` A map of the default tag processors, keyed by the
tag name.  Multiple tags can use the same digester
by supplying the string name that points to the
implementation rather than a function.



##### Methods

  - [`implodeString`](#method-implodestring) Flatten a string, remove all line breaks and replace them with a token
  - [`implodeString`](#method-implodestring) Un-flatten a string, replace tokens injected with `implodeString`
  - [`stringlog`](#method-stringlog) Parses the JSON data and formats it into a nice log string for
filename and line number: `/file/name.js:123`





### Details


#### Properties


##### IGNORE_TAGLIST

> A list of ignored tags. These tags should be ignored because there is
likely to be used for purposes other than JSDoc tags in JavaScript comments.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| Defined | [lib/ast.js:31](../files/lib_ast.js.md#l31) |



##### CORRECTIONS

> Common errors will get scrubbed instead of being ignored.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/ast.js:41](../files/lib_ast.js.md#l41) |



##### TAGLIST

> A list of known tags.  This populates a member variable
during initialization, and will be updated if additional
digesters are added.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| Defined | [lib/ast.js:78](../files/lib_ast.js.md#l78) |



##### DIGESTERS

> A map of the default tag processors, keyed by the
tag name.  Multiple tags can use the same digester
by supplying the string name that points to the
implementation rather than a function.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/ast.js:529](../files/lib_ast.js.md#l529) |






<!-- Method Block -->
#### Methods


##### implodeString

Flatten a string, remove all line breaks and replace them with a token

| meta | description |
|------|-------------|
| Defined | [lib/ast.js:1068](../files/lib_ast.js.md#l1068) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- str <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The string to operate on


##### implodeString

Un-flatten a string, replace tokens injected with `implodeString`

| meta | description |
|------|-------------|
| Defined | [lib/ast.js:1079](../files/lib_ast.js.md#l1079) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- str <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The string to operate on


##### stringlog

Parses the JSON data and formats it into a nice log string for
filename and line number: `/file/name.js:123`

| meta | description |
|------|-------------|
| Defined | [lib/utils.js:417](../files/lib_utils.js.md#l417) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The data block from the parser



