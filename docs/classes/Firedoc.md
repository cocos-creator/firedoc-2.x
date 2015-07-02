
# firedoc 1.8.7

Fireball is the game engine for the future.

### `Firedoc` Class


Defined in: [lib/firedoc.js:23](../files/lib/firedoc.js.js)

Module: [utils](../modules/utils.md)
Parent Module: [firedoc](../modules/firedoc.md)




Firedoc main class

### Index

##### Properties

  - [`filecount`](#property-filecount) `Boolean` Holds the number of files that we are processing.
  - [`filemap`](#property-filemap) `Object` Holder for the list of files we are processing.
  - [`dirmap`](#property-dirmap) `Object` Holder for the list of directories we are processing.
  - [`options`](#property-options) `Object` Internal holder for configuration options.



##### Methods

  - [`walk`](#method-walk) Walks the paths and parses the directory contents
  - [`walkOne`](#method-walkone) Walk one path
  - [`build`](#method-build) Process the config, walk the file tree and write out the JSON data.





### Details


#### Properties


##### filecount

> Holds the number of files that we are processing.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> |
| Defined | [lib/firedoc.js:35](../files/lib_firedoc.js.md#l35) |



##### filemap

> Holder for the list of files we are processing.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/firedoc.js:42](../files/lib_firedoc.js.md#l42) |



##### dirmap

> Holder for the list of directories we are processing.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/firedoc.js:49](../files/lib_firedoc.js.md#l49) |



##### options

> Internal holder for configuration options.

| meta | description |
|------|-------------|
| Type | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a> |
| Defined | [lib/firedoc.js:57](../files/lib_firedoc.js.md#l57) |






<!-- Method Block -->
#### Methods


##### walk

Walks the paths and parses the directory contents

| meta | description |
|------|-------------|
| Defined | [lib/firedoc.js:135](../files/lib_firedoc.js.md#l135) |

###### Parameters
- next <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### walkOne

Walk one path

| meta | description |
|------|-------------|
| Defined | [lib/firedoc.js:157](../files/lib_firedoc.js.md#l157) |

###### Parameters
- path <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> The path to walk
- next <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 


##### build

Process the config, walk the file tree and write out the JSON data.

| meta | description |
|------|-------------|
| Defined | [lib/firedoc.js:203](../files/lib_firedoc.js.md#l203) |

###### Parameters
- callback <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a> 



