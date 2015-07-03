
# firedoc 1.8.16

Fireball is the game engine for the future.


## `firedoc` Module



Defined in [lib/locals.js:14](../files/lib_locals.js.md#l14)






### Classes
  - [DocParser](../classes/DocParser.md)
  - [AST](../classes/AST.md)
  - [BuilderContext](../classes/BuilderContext.md)
  - [DocView](../classes/DocView.md)
  - [Firedoc](../classes/Firedoc.md)
  - [Locals](../classes/Locals.md)
  - [ParserContext](../classes/ParserContext.md)

### Enums


### Direct Members
### Index

##### Properties

  - [`IGNORE_TAGLIST`](#property-ignore_taglist) `Array` A list of ignored tags. These tags should be ignored because there is
likely to be used for purposes other than JSDoc tags in JavaScript comments.
  - [`CORRECTIONS`](#property-corrections) `Object` Common errors will get scrubbed instead of being ignored.
  - [`SHORT_TAGS`](#property-short_tags) `Object` Short tags
  - [`NATIVES`](#property-natives) `Object` List of native types to cross link to MDN



##### Methods

  - [`parse`](#method-parse) parse and generate the `AST` object




