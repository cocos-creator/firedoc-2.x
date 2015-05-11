YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        {
            "displayName": "Help",
            "name": "Help",
            "namespace": "",
            "module": "yuidoc",
            "description": "Shows the help text",
            "access": "public"
        },
        {
            "displayName": "CLI",
            "name": "CLI",
            "namespace": "",
            "module": "yuidoc",
            "description": "Parses the arguments, creates the options and passes them to `Y.YUIDoc` and then `Y.DocBuilder`.",
            "access": "public"
        },
        {
            "displayName": "DocParser",
            "name": "DocParser",
            "namespace": "",
            "module": "yuidoc",
            "description": "The doc parser accepts a **map** of files to file content.\nOnce `parse()` is called, various properties will be populated\nwith the parsers data (aggregated in the `'data'` property).",
            "access": "public"
        },
        {
            "displayName": "DocView",
            "name": "DocView",
            "namespace": "",
            "module": "yuidoc",
            "description": "View class borrowed from [Selleck](https://github.com/rgrove/selleck)  \nThe view class is a **`handlebars`** template helper.",
            "access": "public"
        },
        {
            "displayName": "Files",
            "name": "Files",
            "namespace": "",
            "module": "yuidoc",
            "description": "Ported fileutils methods from [Selleck](http://github.com/rgrove/selleck)",
            "access": "public"
        },
        {
            "displayName": "DocBuilder",
            "name": "DocBuilder",
            "module": "yuidoc",
            "description": "Takes the `JSON` data from the `DocParser` class, creates and parses markdown and handlebars\nbased templates to generate static HTML content",
            "access": "public"
        },
        {
            "displayName": "Main",
            "name": "Main",
            "namespace": "",
            "module": "yuidoc",
            "description": "Module creates the YUI instance with the required modules, uses them and exports the **Y** to be used\nby the _CLI class_ or by extenders: `require('yuidocjs');`  \nYou can use it like this:  \n\n    var options = {\n        paths: [ './lib' ],\n        outdir: './out'\n    };\n\n    var Y = require('yuidocjs');\n    var json = (new Y.YUIDoc(options)).run();",
            "access": "public"
        },
        {
            "displayName": "Options",
            "name": "Options",
            "namespace": "",
            "module": "yuidoc",
            "description": "Handles argument parsing",
            "access": "public"
        },
        {
            "displayName": "Server",
            "name": "Server",
            "namespace": "",
            "module": "yuidoc",
            "description": "Provides the `--server` server option for YUIDoc",
            "access": "public"
        },
        {
            "displayName": "Utils",
            "name": "Utils",
            "namespace": "",
            "module": "yuidoc",
            "description": "Utilities Class",
            "access": "public"
        },
        {
            "displayName": "YUIDoc",
            "name": "YUIDoc",
            "namespace": "",
            "module": "yuidoc",
            "description": "YUIDoc main class\n\n     var options = {\n         paths: [ './lib' ],\n         outdir: './out'\n     };\n\n     var Y = require('yuidoc');\n     var json = (new Y.YUIDoc(options)).run();",
            "access": "public"
        }
    ],
    "enums": [],
    "modules": [
        {
            "displayName": "yuidoc",
            "name": "yuidoc",
            "submodules": []
        }
    ],
    "allModules": [
        {
            "displayName": "yuidoc",
            "name": "yuidoc",
            "description": "This is the __module__ description for the `YUIDoc` module.\n```\nvar options = {\n  paths: [ './lib' ],\n  outdir: './out'\n};\nvar Y = require('yuidocjs');\nvar json = (new Y.YUIDoc(options)).run();\n```"
        }
    ]
} };
});