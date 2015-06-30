<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>utils</title>
    <link rel="stylesheet" href="../assets/vendor/prettify/prettify-min.css">
    <link rel="stylesheet" href="../assets/css/main.css" id="site_styles">
    <link rel="shortcut icon" type="image/png" href="../assets/favicon.png">
    <script src="../assets/vendor/yui-min.js"></script>
</head>
<body>

<div id="doc">
    <header class="main-header">
        <div class="content">
            <div class="project-title">
                <a href="http://docs-zh.fireball-x.com">
                        <img class="logo" src="http://docs-zh.fireball-x.com/images/logo.png" title="Fireball Engine API">
                </a>
                    <h1 class="project-name">Fireball Engine API</h1>
                    <p class="description">Fireball is the game engine for the future.</p>
            </div>
            <ul class="jump-links">
                <li><a href="#index" class="index-jump-link">index</a></li>
                <li><a href="#top" class="top-jump-link">top</a></li>
            </ul>
        </div>
    </header>
    <div id="bd" class="main-body">

        <div id="docs-sidebar" class="sidebar apidocs"><div id="api-list">
    <div id="api-tabview" class="tabview">
        <ul class="tabs">
            <li><a href="#api-classes">Classes</a></li>
            <li><a href="#api-modules">Modules</a></li>
            <li><a href="#api-enums">Enums</a></li>
        </ul>

        <div id="api-tabview-filter">
            <input type="search" id="api-filter" placeholder="Type to filter APIs">
        </div>

        <div id="api-tabview-panel">

            <ul id="api-classes" class="apis classes">
                <li>
                    <a class="class" href="/Users/yorkie/workspace/fireball-x/firedoc/docs/classes/AST.html">firedoc.AST</a>
                    <a href="/Users/yorkie/workspace/fireball-x/firedoc/docs/modules/firedoc.html" class="api-list-item-module">@firedoc</a>
                </li>
                <li>
                    <a class="class" href="/Users/yorkie/workspace/fireball-x/firedoc/docs/classes/BuilderContext.html">firedoc.BuilderContext</a>
                    <a href="/Users/yorkie/workspace/fireball-x/firedoc/docs/modules/firedoc.html" class="api-list-item-module">@firedoc</a>
                </li>
                <li>
                    <a class="class" href="/Users/yorkie/workspace/fireball-x/firedoc/docs/classes/DocParser.html">firedoc.DocParser</a>
                    <a href="/Users/yorkie/workspace/fireball-x/firedoc/docs/modules/firedoc.html" class="api-list-item-module">@firedoc</a>
                </li>
                <li>
                    <a class="class" href="/Users/yorkie/workspace/fireball-x/firedoc/docs/classes/DocView.html">firedoc.DocView</a>
                    <a href="/Users/yorkie/workspace/fireball-x/firedoc/docs/modules/firedoc.html" class="api-list-item-module">@firedoc</a>
                </li>
                <li>
                    <a class="class" href="/Users/yorkie/workspace/fireball-x/firedoc/docs/classes/Firedoc.html">firedoc.Firedoc</a>
                    <a href="/Users/yorkie/workspace/fireball-x/firedoc/docs/modules/firedoc.html" class="api-list-item-module">@firedoc</a>
                </li>
                <li>
                    <a class="class" href="/Users/yorkie/workspace/fireball-x/firedoc/docs/classes/Locals.html">firedoc.Locals</a>
                    <a href="/Users/yorkie/workspace/fireball-x/firedoc/docs/modules/firedoc.html" class="api-list-item-module">@firedoc</a>
                </li>
                <li>
                    <a class="class" href="/Users/yorkie/workspace/fireball-x/firedoc/docs/classes/ParserContext.html">firedoc.ParserContext</a>
                    <a href="/Users/yorkie/workspace/fireball-x/firedoc/docs/modules/firedoc.html" class="api-list-item-module">@firedoc</a>
                </li>
            </ul>

            <ul id="api-modules" class="apis modules">
                <li><a class="module" href="/Users/yorkie/workspace/fireball-x/firedoc/docs/modules/firedoc.html">firedoc</a></li>
                <li><a class="module" href="/Users/yorkie/workspace/fireball-x/firedoc/docs/modules/helpers.html">helpers</a></li>
                <li><a class="module" href="/Users/yorkie/workspace/fireball-x/firedoc/docs/modules/utils.html">utils</a></li>
            </ul>

            <ul id="api-enums" class="apis enums">
            </ul>
        </div>
    </div>
</div>
</div>

        <div id="docs-main" class="apidocs">
            <div class="content container"><h1>utils Module</h1>
<div class="box clearfix meta">


        <div class="foundat">
            Defined in: <a href="../files/lib_locals.js.md#l13">`lib/locals.js:13`</a>
        </div>

</div>


<div class="box intro">
    Utilities modules
</div>


<!-- Class member index -->
<div class="index-section properties">
    <h3>Class</h3>
    <ul class="index-list properties">
        <li class="index-item">
            <a href="classes/.html">
                
            </a>
        </li>
    </ul>
</div>


<h3>Direct Members</h3>


<a name="index" class="anchor-link"></a>
<div class="index">
    <h2>Index</h2>
    <div id="api-options">
        Show:
    
        <label for="api-show-protected">
            <input type="checkbox" id="api-show-protected">
            Protected
        </label>
    
        <label for="api-show-private">
            <input type="checkbox" id="api-show-private">
            Private
        </label>
        <label for="api-show-deprecated">
            <input type="checkbox" id="api-show-deprecated">
            Deprecated
        </label>
    
    </div>



<div class="index-section methods">
    <h3>Methods</h3>
    <ul class="index-list methods">

        <li class="index-item method">
            <a href="#method_fmtProcess">fmtProcess</a>
        </li>
        <li class="index-item method">
            <a href="#method_getNamespace">getNamespace</a>
        </li>
        <li class="index-item method">
            <a href="#method_escapeHTML">escapeHTML</a>
        </li>
        <li class="index-item method">
            <a href="#method_safetrim">safetrim</a>
        </li>
        <li class="index-item method">
            <a href="#method_unindent">unindent</a>
        </li>
        <li class="index-item method">
            <a href="#method_filterFileName">filterFileName</a>
        </li>
        <li class="index-item method">
            <a href="#method_getFoundAt">getFoundAt</a>
        </li>
        <li class="index-item method">
            <a href="#method_getLayouts">getLayouts</a>
        </li>
        <li class="index-item method">
            <a href="#method_getPage">getPage</a>
        </li>
        <li class="index-item method">
            <a href="#method_getPages">getPages</a>
        </li>
        <li class="index-item method">
            <a href="#method_getPartials">getPartials</a>
        </li>
        <li class="index-item method">
            <a href="#method_prepare">prepare</a>
        </li>
        <li class="index-item method">
            <a href="#method_fixType">fixType</a>
        </li>
        <li class="index-item method">
            <a href="#method_webpath">webpath</a>
        </li>
        <li class="index-item method">
            <a href="#method_localize">localize</a>
        </li>
        <li class="index-item method">
            <a href="#method_markdownLink">markdownLink</a>
        </li>
        <li class="index-item method">
            <a href="#method_buildFileTree">buildFileTree</a>
        </li>
    </ul>
</div>




</div>
<div class="yui3-g">


    
        <div class="yui3-u-1-2">
            <h3>Methods:</h3>
            <a name="method_fmtProcess" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>fmtProcess</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>process</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a></span>
        </span>







    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_utils.js.md#l22">`lib/utils.js:22`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Format the process string to array
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">process</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a></span>
                    <p>
                        The process array
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_getNamespace" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>getNamespace</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>target</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
        </span>







    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_utils.js.md#l33">`lib/utils.js:33`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Get the namespace string from a target object
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">target</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            
                        </div>

                            <ul class="params-list">
                                <li class="param">
                                        <code class="param-name">module</code>
                                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>

                                    <div class="param-description">
                                        
                                    </div>

                                </li>
                                <li class="param">
                                        <code class="param-name">clazz</code>
                                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>

                                    <div class="param-description">
                                        
                                    </div>

                                </li>
                                <li class="param">
                                        <code class="param-name">name</code>
                                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>

                                    <div class="param-description">
                                        
                                    </div>

                                </li>
                            </ul>
                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
                    <p>
                        The namespace string
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_escapeHTML" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>escapeHTML</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>html</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
        </span>







    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_utils.js.md#l50">`lib/utils.js:50`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Escapes HTML characters in _html_.
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">html</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            String to escape.
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
                    <p>
                        Escaped string.
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_safetrim" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>safetrim</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>str</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
        </span>







    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_utils.js.md#l64">`lib/utils.js:64`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Trim in safe mode
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">str</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
                    <p>
                        trimed string or other types if invalid
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_unindent" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>unindent</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>content</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
        </span>







    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_utils.js.md#l80">`lib/utils.js:80`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Normalizes the initial indentation of the given _content_ so that the first line
is unindented, and all other lines are unindented to the same degree as the
first line. So if the first line has four spaces at the beginning, then all
lines will be unindented four spaces. Ported from [Selleck](https://github.com/rgrove/selleck)
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">content</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            Text to unindent.
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
                    <p>
                        Unindented text.
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_filterFileName" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>filterFileName</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>f</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
        </span>







    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_utils.js.md#l99">`lib/utils.js:99`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Normalizes a file path to a writable filename:

   var path = 'lib/file.js';
   returns 'lib_file.js';
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">f</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            The filename to normalize
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
                    <p>
                        The filtered file path
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_getFoundAt" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>getFoundAt</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>obj</code>
                </li>
                <li class="arg">
                        <code>options</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
        </span>







    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_utils.js.md#l114">`lib/utils.js:114`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Parses file and line number from an item object and build's an HREF
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">obj</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The item to parse
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name">options</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The options
                        </div>

                            <ul class="params-list">
                                <li class="param">
                                        <code class="param-name">markdown</code>
                                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a></span>

                                    <div class="param-description">
                                        If in markdown mode
                                    </div>

                                </li>
                                <li class="param">
                                        <code class="param-name">nocode</code>
                                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a></span>

                                    <div class="param-description">
                                        If no code
                                    </div>

                                </li>
                            </ul>
                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
                    <p>
                        The parsed HREF
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_getLayouts" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>getLayouts</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>dir</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>
        </span>







    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_utils.js.md#l137">`lib/utils.js:137`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Like `getPages()`, but returns only the files under the `layout/` subdirectory
of the specified _dir_.
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">dir</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            Directory path.
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>
                    <p>
                        Mapping of layout names to layout content.
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_getPage" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>getPage</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>p</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> | null</span>
        </span>







    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_utils.js.md#l151">`lib/utils.js:151`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Loads and returns the content of the specified page file.
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">p</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            Path to a single `.handlebars` page.
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a> | null</span>
                    <p>
                        Page content, or `null` if not found.
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_getPages" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>getPages</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>dir</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>
        </span>







    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_utils.js.md#l168">`lib/utils.js:168`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Loads pages (files with a `.handlebars` extension) in the specified directory and
returns an object containing a mapping of page names (the part of the filename)
preceding the `.handlebars` extension) to page content.
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">dir</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            Directory path.
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>
                    <p>
                        Mapping of page names to page content.
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_getPartials" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>getPartials</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>dir</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>
        </span>







    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_utils.js.md#l211">`lib/utils.js:211`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Like `getPages()`, but returns only the files under the `partial/` subdirectory
of the specified _dir_.
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">dir</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            Directory path.
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>
                    <p>
                        Mapping of partial names to partial content.
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_prepare" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>prepare</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>inDir</code>
                </li>
                <li class="arg">
                        <code>options</code>
                </li>
                <li class="arg">
                        <code>callback</code>
                </li>
            </ul><span class="paren">)</span>
        </div>








    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_utils.js.md#l225">`lib/utils.js:225`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Mix/merge/munge data into the template.
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">inDir</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            The starting directory
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name">options</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The `options` for the meta data.
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name">callback</code>
                            <span class="type">callback</span>


                        <div class="param-description">
                            The callback to excecute when complete
                        </div>

                            <ul class="params-list">
                                <li class="param">
                                        <code class="param-name">err</code>
                                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error" class="crosslink external" target="_blank">Error</a></span>

                                    <div class="param-description">
                                        
                                    </div>

                                </li>
                                <li class="param">
                                        <code class="param-name">options</code>
                                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>

                                    <div class="param-description">
                                        Merged options.
                                    </div>

                                </li>
                            </ul>
                    </li>
                </ul>
            </div>


    </div>
</div>
<a name="method_fixType" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>fixType</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>t</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
        </span>







    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_utils.js.md#l303">`lib/utils.js:303`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Takes a type string and converts it to a "First letter upper cased" type.
e.g. `(string -> String, object -> Object)`
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">t</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            The type string to convert
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
                    <p>
                        The fixed string
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_webpath" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>webpath</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>url</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
        </span>







    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_utils.js.md#l326">`lib/utils.js:326`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Produces a normalized web path by joining all the parts and normalizing the
filesystem-like path into web compatible url.
Supports relative and absolute paths.
Courtesy of [Mojito's utils](https://github.com/yahoo/mojito/)
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">url</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a> | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String*</a></span>


                        <div class="param-description">
                            the list of parts to be joined and normalized
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
                    <p>
                        The joined and normalized url
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_localize" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>localize</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>str</code>
                </li>
                <li class="arg">
                        <code>lang</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
        </span>







    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_utils.js.md#l343">`lib/utils.js:343`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Localize the string via current Y.options
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">str</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            the original string that you want to input
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name">lang</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            the language
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
                    <p>
                        localized string from the param `str`
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_markdownLink" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>markdownLink</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>str</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
        </span>







    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_utils.js.md#l383">`lib/utils.js:383`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            convert string to markdown link
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">str</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            The original string that you want to input
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
                    <p>
                        marked string from the param `str`
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_buildFileTree" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>buildFileTree</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>files</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>
        </span>







    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_utils.js.md#l398">`lib/utils.js:398`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            build file tree object
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">files</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a></span>


                        <div class="param-description">
                            
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>
                    <p>
                        
                    </p>
                </div>
            </div>

    </div>
</div>

        </div>


</div>
</div>
        </div>

    </div>
</div>
<script src="../assets/vendor/prettify/prettify-min.js"></script>
<script>prettyPrint();</script>
<script src="../assets/vendor/jquery.min.js"></script>
<script src="../assets/js/jquery-offscreen-trigger.js"></script>
<script src="../assets/js/yui-prettify.js"></script>
<script src="../assets/../api.js"></script>
<script src="../assets/js/api-filter.js"></script>
<script src="../assets/js/api-list.js"></script>
<script src="../assets/js/api-search.js"></script>
<script src="../assets/js/apidocs.js"></script>
</body>
</html>
