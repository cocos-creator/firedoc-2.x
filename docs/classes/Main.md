
# firedoc 1.5.9

Fireball is the game engine for the future.

### `Main` Class


Defined in: [lib/index.js:7](../files/lib/index.js.js)

Module: [yuidoc](../modules/yuidoc.md)




Module creates the YUI instance with the required modules, uses them and exports the **Y** to be used
by the _CLI class_ or by extenders: `require('yuidocjs');`  
You can use it like this:  

    var options = {
        paths: [ './lib' ],
        outdir: './out'
    };

    var Y = require('yuidocjs');
    var json = (new Y.YUIDoc(options)).run();

### Index







### Details




