
# yuidoc-root 0.8.0

Fire Doc, Fireball-x&#x27;s JavaScript Documentation engine forked from YUI.


## json Module



Defined in [tests/input/json/parse.js:1](../files/tests_input_json_parse.js.html#l1)



&lt;p&gt;The JSON module adds support for serializing JavaScript objects into
JSON strings and parsing JavaScript objects from strings in JSON format.&lt;/p&gt;

&lt;p&gt;The JSON namespace is added to your YUI instance including static methods
Y.JSON.parse(..) and Y.JSON.stringify(..).&lt;/p&gt;

&lt;p&gt;The functionality and method signatures follow the ECMAScript 5
specification.  In browsers with native JSON support, the native
implementation is used.&lt;/p&gt;

&lt;p&gt;The &lt;code&gt;json&lt;/code&gt; module is a rollup of &lt;code&gt;json-parse&lt;/code&gt; and
&lt;code&gt;json-stringify&lt;/code&gt;.&lt;/p&gt;

&lt;p&gt;As their names suggest, &lt;code&gt;json-parse&lt;/code&gt; adds support for parsing
JSON data (Y.JSON.parse) and &lt;code&gt;json-stringify&lt;/code&gt; for serializing
JavaScript data into JSON strings (Y.JSON.stringify).  You may choose to
include either of the submodules individually if you don&#x27;t need the
complementary functionality, or include the rollup for both.&lt;/p&gt;


This module provides the following classes:
  - [JSON](../classes/JSON.md)


This module is a rollup of the following modules:
  - [json-parse](json-parse.md) Provides Y.JSON.parse method to accept JSON strings and return native
JavaScript objects.
  - [json-stringify](json-stringify.md) Provides Y.JSON.stringify method for converting objects to JSON strings.
