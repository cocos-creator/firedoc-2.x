
# firedoc 1.8.16

Fireball is the game engine for the future.

### `DocParser` Class



Module: [firedoc](../modules/firedoc.md)






### Index

##### Properties

  - [`TAGLIST`](#property-taglist) `Array` A list of known tags.  This populates a member variable
during initialization, and will be updated if additional
digesters are added.



##### Methods

  - [`stringlog`](#method-stringlog) Parses the JSON data and formats it into a nice log string for
filename and line number: `/file/name.js:123`





### Details


#### Properties


##### TAGLIST

> A list of known tags.  This populates a member variable
during initialization, and will be updated if additional
digesters are added.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> |
| Defined | [lib/ast.js:52](../files/lib_ast.js.md#l52) |






<!-- Method Block -->
#### Methods


##### stringlog

Parses the JSON data and formats it into a nice log string for
filename and line number: `/file/name.js:123`

| meta | description |
|------|-------------|
| Defined | [lib/utils.js:417](../files/lib_utils.js.md#l417) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> 

###### Parameters
- data <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> The data block from the parser



