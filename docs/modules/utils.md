
# firedoc 1.9.1

Fireball is the game engine for the future.


## `utils` Module



Defined in [lib/utils.js:3](../files/lib_utils.js.md#l3)






### Classes
  - [](../classes/.md)

### Enums


### Direct Members
### Index



##### Methods

  - [`fmtProcess`](#method-fmtprocess) Format the process string to array
  - [`getNamespace`](#method-getnamespace) Get the namespace string from a target object
  - [`escapeHTML`](#method-escapehtml) Escapes HTML characters in _html_.
  - [`safetrim`](#method-safetrim) Trim in safe mode
  - [`unindent`](#method-unindent) Normalizes the initial indentation of the given _content_ so that the first line
is unindented, and all other lines are unindented to the same degree as the
first line. So if the first line has four spaces at the beginning, then all
lines will be unindented four spaces. Ported from [Selleck](https://github.com/rgrove/selleck)
  - [`filterFileName`](#method-filterfilename) Normalizes a file path to a writable filename:

   var path = 'lib/file.js';
   returns 'lib_file.js';
  - [`getFoundAt`](#method-getfoundat) Parses file and line number from an item object and build's an HREF
  - [`getLayouts`](#method-getlayouts) Like `getPages()`, but returns only the files under the `layout/` subdirectory
of the specified _dir_.
  - [`getPages`](#method-getpages) Loads pages (files with a `.handlebars` extension) in the specified directory and
returns an object containing a mapping of page names (the part of the filename)
preceding the `.handlebars` extension) to page content.
  - [`getPartials`](#method-getpartials) Like `getPages()`, but returns only the files under the `partial/` subdirectory
of the specified _dir_.
  - [`prepare`](#method-prepare) Mix/merge/munge data into the template.
  - [`fixType`](#method-fixtype) Takes a type string and converts it to a "First letter upper cased" type.
e.g. `(string -> String, object -> Object)`
  - [`webpath`](#method-webpath) Produces a normalized web path by joining all the parts and normalizing the
filesystem-like path into web compatible url.
Supports relative and absolute paths.
Courtesy of [Mojito's utils](https://github.com/yahoo/mojito/)
  - [`localize`](#method-localize) Localize the string via current Y.options
  - [`markdownLink`](#method-markdownlink) convert string to markdown link
  - [`buildFileTree`](#method-buildfiletree) build file tree object




