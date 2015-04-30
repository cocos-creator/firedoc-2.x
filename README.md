FireDoc
======

API Doc generator based on YUIDoc.

[![npm Version](https://img.shields.io/npm/v/firedoc.svg?style=flat-square)](https://www.npmjs.org/package/firedoc)
[![Dependency Status](https://img.shields.io/david/fireball-x/firedoc.svg?style=flat-square)](https://david-dm.org/fireball-x/firedoc)

Overview
--------

FireDoc is forked from YUIDoc and mainly supported the following features:

- methods of module
- file-based `@example`
- single-line `@property`
- added new tag `@enum`
- added new tag `@callback`
- added "Inherited tree"

YUIDoc is a [Node.js](http://nodejs.org/) application used at build time to
generate API documentation for JavaScript code. YUIDoc is comment-driven and supports a wide
range of JavaScript coding styles. The output of YUIDoc is API documentation formatted as a
set of HTML pages including information about methods, properties, custom events and
inheritance for JavaScript objects.

YUIDoc was originally written for the YUI Project; it uses YUI JavaScript and CSS in the
generated files and it supports common YUI conventions like Custom Events. That said,
it can be used easily and productively on non-YUI code.

Installation
------------

    npm install -g firedoc

Documentation
-------------

* [User Guides](http://fireball-x.github.io/firedoc/)
* [Change Logs](https://github.com/fireball-x/firedoc/releases)
* [API Docs](http://fireball-x.github.io/firedoc/api/)

Contributing
------------

Please see the [CONTRIBUTING.md](CONTRIBUTING.md).

License
-------

This software is free to use under the Yahoo Inc. BSD license. See the [LICENSE file](LICENSE) for license text and copyright information.
