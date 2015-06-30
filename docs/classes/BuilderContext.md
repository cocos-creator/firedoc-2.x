<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>BuilderContext</title>
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
            <div class="content container"><h1>BuilderContext Class</h1>
<div class="box meta">

        <div class="extends">
            Extends EventEmitter
        </div>

        <div class="foundat">
            Defined in: <a href="../files/lib_builder.js.md#l36">`lib/builder.js:36`</a>
        </div>

            Module: <a href="../modules/firedoc.html">firedoc</a>

</div>


<div class="box intro">
    The Builder Context
</div>

<!-- Class member index -->


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

<div class="index-section properties">
    <h3>Properties</h3>
    <ul class="index-list properties">
        <li class="index-item property">
            <a href="#property_ast">ast</a>
        </li>
        <li class="index-item property">
            <a href="#property_options">options</a>
        </li>
        <li class="index-item property">
            <a href="#property_helpers">helpers</a>
        </li>
        <li class="index-item property">
            <a href="#property_cacheView">cacheView</a>
        </li>
        <li class="index-item property">
            <a href="#property_template">template</a>
        </li>
        <li class="index-item property">
            <a href="#property_files">files</a>
        </li>
        <li class="index-item property">
            <a href="#property_viewExtname">viewExtname</a>
        </li>
    </ul>
</div>


<div class="index-section methods">
    <h3>Methods</h3>
    <ul class="index-list methods">

        <li class="index-item method">
            <a href="#method_metadata">metadata</a>
        </li>
        <li class="index-item method">
            <a href="#method_addHelper">addHelper</a>
        </li>
        <li class="index-item method">
            <a href="#method_addHelpers">addHelpers</a>
        </li>
        <li class="index-item method private">
            <a href="#method__inlineCode">_inlineCode</a>
        </li>
        <li class="index-item method private">
            <a href="#method__parseCrossLink">_parseCrossLink</a>
        </li>
        <li class="index-item method">
            <a href="#method_populateClasses">populateClasses</a>
        </li>
        <li class="index-item method">
            <a href="#method_populateModules">populateModules</a>
        </li>
        <li class="index-item method">
            <a href="#method_populateFiles">populateFiles</a>
        </li>
        <li class="index-item method">
            <a href="#method_addFoundAt">addFoundAt</a>
        </li>
        <li class="index-item method">
            <a href="#method_mixExternal">mixExternal</a>
        </li>
        <li class="index-item method">
            <a href="#method_makeDirs">makeDirs</a>
        </li>
        <li class="index-item method">
            <a href="#method_init">init</a>
        </li>
        <li class="index-item method">
            <a href="#method_correctTheme">correctTheme</a>
        </li>
        <li class="index-item method">
            <a href="#method_compile">compile</a>
        </li>
        <li class="index-item method">
            <a href="#method_render">render</a>
        </li>
        <li class="index-item method">
            <a href="#method_writeApiMeta">writeApiMeta</a>
        </li>
        <li class="index-item method private">
            <a href="#method_NATIVES_LINKER">NATIVES_LINKER</a>
        </li>
        <li class="index-item method">
            <a href="#method_compile">compile</a>
        </li>
    </ul>
</div>




</div>
<div class="class-detail">

    <div class="properties-detail">
        <h2>Properties</h2>
        <a name="property_ast" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>ast</code>
    <span class="type"><a href="../classes/AST.html" class="crosslink">AST</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l43">`lib/builder.js:43`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The AST object</div>



    </div>
</div>
<a name="property_options" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>options</code>
    <span class="type">Option</span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l48">`lib/builder.js:48`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The command options</div>



    </div>
</div>
<a name="property_helpers" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>helpers</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l53">`lib/builder.js:53`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The view helpers function</div>



    </div>
</div>
<a name="property_cacheView" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>cacheView</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l58">`lib/builder.js:58`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">cache the views</div>



    </div>
</div>
<a name="property_template" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>template</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l63">`lib/builder.js:63`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The template</div>



    </div>
</div>
<a name="property_files" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>files</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l68">`lib/builder.js:68`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">records the files</div>



    </div>
</div>
<a name="property_viewExtname" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>viewExtname</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l73">`lib/builder.js:73`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The ext name of current view</div>



    </div>
</div>

        <div class="no-visible-items-message">
            <p>There are no properties that match your current filter settings. You can change your filter settings in the index section on this page. <a href="#index" class="index-jump-link">index</a></p>
        </div>
    </div>



    <div class="methods-detail">
        <h2>Methods</h2>
        <a name="method_metadata" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>metadata</code>

        <span class="paren">()</span>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>
        </span>







    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l80">`lib/builder.js:80`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            load the metadata from theme.json
        </div>


            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>
                    <p>
                        metadata object
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_addHelper" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>addHelper</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>name</code>
                </li>
                <li class="arg">
                        <code>helper</code>
                </li>
            </ul><span class="paren">)</span>
        </div>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l106">`lib/builder.js:106`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Add helper
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">name</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            The helper name
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name">helper</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a></span>


                        <div class="param-description">
                            The helper logic
                        </div>

                    </li>
                </ul>
            </div>


    </div>
</div>
<a name="method_addHelpers" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>addHelpers</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>helpers</code>
                </li>
            </ul><span class="paren">)</span>
        </div>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l118">`lib/builder.js:118`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Add helpers
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">helpers</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            
                        </div>

                    </li>
                </ul>
            </div>


    </div>
</div>
<a name="method__inlineCode" class="anchor-link"></a>
<div class="method item private">
    <h3 class="name"><code>_inlineCode</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>html</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type">HTML</span>
        </span>


        <span class="flag private">private</span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l130">`lib/builder.js:130`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Ported from [Selleck](https://github.com/rgrove/selleck), this handles ```'s in fields
that are not parsed by the **Markdown** parser.
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">html</code>
                            <span class="type">HTML</span>


                        <div class="param-description">
                            The HTML to parse
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type">HTML</span>
                    <p>
                        The parsed HTML
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method__parseCrossLink" class="anchor-link"></a>
<div class="method item private">
    <h3 class="name"><code>_parseCrossLink</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>item</code>
                </li>
                <li class="arg">
                        <code class="optional">[raw=false]</code>
                </li>
                <li class="arg">
                        <code class="optional">[content]</code>
                </li>
            </ul><span class="paren">)</span>
        </div>



        <span class="flag private">private</span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l148">`lib/builder.js:148`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Parse the item to be cross linked and return an HREF linked to the item
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">item</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            The item to crossLink
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name optional">raw</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a></span>
                            <span class="flag optional" title="This parameter is optional."></span>
                                <span>, : false</span>


                        <div class="param-description">
                            Do not wrap it in HTML
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name optional">content</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
                            <span class="flag optional" title="This parameter is optional."></span>


                        <div class="param-description">
                            crossLink helper content
                        </div>

                    </li>
                </ul>
            </div>


    </div>
</div>
<a name="method_populateClasses" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>populateClasses</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>opts</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>
        </span>







    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l256">`lib/builder.js:256`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Populate the meta data for classes
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">opts</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The original options
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
                        The modified options
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_populateModules" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>populateModules</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>opts</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>
        </span>







    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l280">`lib/builder.js:280`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Populate the meta data for modules
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">opts</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The original options
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
                        The modified options
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_populateFiles" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>populateFiles</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>opts</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>
        </span>







    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l305">`lib/builder.js:305`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Populate the meta data for files
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">opts</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The original options
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
                        The modified options
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_addFoundAt" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>addFoundAt</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>a</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
        </span>







    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l325">`lib/builder.js:325`</a>
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
                            <code class="param-name">a</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The item to parse
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
                        The parsed HREF
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_mixExternal" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>mixExternal</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>cb</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type">Promise</span>
        </span>







    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l336">`lib/builder.js:336`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Fetches the remote data and fires the callback when it's all complete
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">cb</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a></span>


                        <div class="param-description">
                            The callback to execute when complete
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type">Promise</span>
                    <p>
                        
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_makeDirs" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>makeDirs</code>

        <span class="paren">()</span>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l409">`lib/builder.js:409`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Makes the default directories needed
        </div>



    </div>
</div>
<a name="method_init" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>init</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>ast</code>
                </li>
                <li class="arg">
                        <code>options</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="../classes/BuilderContext.html" class="crosslink">BuilderContext</a></span>
        </span>







    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l425">`lib/builder.js:425`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Set `BuilderContext` context and return
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">ast</code>
                            <span class="type"><a href="../classes/AST.html" class="crosslink">AST</a></span>


                        <div class="param-description">
                            
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name">options</code>
                            <span class="type">Option</span>


                        <div class="param-description">
                            
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="../classes/BuilderContext.html" class="crosslink">BuilderContext</a></span>
                    <p>
                        
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_correctTheme" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>correctTheme</code>

        <span class="paren">()</span>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l442">`lib/builder.js:442`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            correct the theme
        </div>



    </div>
</div>
<a name="method_compile" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>compile</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>callback</code>
                </li>
            </ul><span class="paren">)</span>
        </div>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l461">`lib/builder.js:461`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Compule the AST
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">callback</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a></span>


                        <div class="param-description">
                            The callback
                        </div>

                    </li>
                </ul>
            </div>


    </div>
</div>
<a name="method_render" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>render</code>

        <span class="paren">()</span>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l520">`lib/builder.js:520`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Render
        </div>



    </div>
</div>
<a name="method_writeApiMeta" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>writeApiMeta</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>locals</code>
                </li>
            </ul><span class="paren">)</span>
        </div>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l547">`lib/builder.js:547`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Write api.json
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">locals</code>
                            <span class="type"><a href="../classes/Locals.html" class="crosslink">Locals</a></span>


                        <div class="param-description">
                            The locals
                        </div>

                    </li>
                </ul>
            </div>


    </div>
</div>
<a name="method_NATIVES_LINKER" class="anchor-link"></a>
<div class="method item private">
    <h3 class="name"><code>NATIVES_LINKER</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>name</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
        </span>


        <span class="flag private">private</span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l677">`lib/builder.js:677`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Function to link an external type uses `NATIVES` object
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">name</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            The name of the type to link
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
                        The combined URL
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_compile" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>compile</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>ast</code>
                </li>
                <li class="arg">
                        <code>options</code>
                </li>
                <li class="arg">
                        <code>onfinish</code>
                </li>
            </ul><span class="paren">)</span>
        </div>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_builder.js.md#l693">`lib/builder.js:693`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            compile
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">ast</code>
                            <span class="type"><a href="../classes/AST.html" class="crosslink">AST</a></span>


                        <div class="param-description">
                            The `AST` object
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name">options</code>
                            <span class="type">Option</span>


                        <div class="param-description">
                            The options
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name">onfinish</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function" class="crosslink external" target="_blank">Function</a></span>


                        <div class="param-description">
                            fired when compile has completed
                        </div>

                    </li>
                </ul>
            </div>


    </div>
</div>

        <div class="no-visible-items-message">
            <p>There are no methods that match your current filter settings. You can change your filter settings in the index section on this page. <a href="#index" class="index-jump-link">index</a></p>
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
