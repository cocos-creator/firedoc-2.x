<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>ParserContext</title>
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
            <div class="content container"><h1>ParserContext Class</h1>
<div class="box meta">


        <div class="foundat">
            Defined in: <a href="../files/lib_context.js.md#l13">`lib/context.js:13`</a>
        </div>

            Module: <a href="../modules/firedoc.html">firedoc</a>

</div>


<div class="box intro">
    The ParserContext
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
            <a href="#property_file">file</a>
        </li>
        <li class="index-item property">
            <a href="#property_mainModule">mainModule</a>
        </li>
        <li class="index-item property">
            <a href="#property_module">module</a>
        </li>
        <li class="index-item property">
            <a href="#property_process">process</a>
        </li>
        <li class="index-item property">
            <a href="#property_submodule">submodule</a>
        </li>
        <li class="index-item property">
            <a href="#property_block">block</a>
        </li>
    </ul>
</div>


<div class="index-section methods">
    <h3>Methods</h3>
    <ul class="index-list methods">

        <li class="index-item method">
            <a href="#method_reset">reset</a>
        </li>
    </ul>
</div>




</div>
<div class="class-detail">

    <div class="properties-detail">
        <h2>Properties</h2>
        <a name="property_file" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>file</code>
    <span class="type">Any</span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_context.js.md#l19">`lib/context.js:19`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The file</div>



    </div>
</div>
<a name="property_mainModule" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>mainModule</code>
    <span class="type">Any</span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_context.js.md#l40">`lib/context.js:40`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description"></div>



    </div>
</div>
<a name="property_module" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>module</code>
    <span class="type">Any</span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_context.js.md#l70">`lib/context.js:70`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description"></div>



    </div>
</div>
<a name="property_process" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>process</code>
    <span class="type">Any</span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_context.js.md#l114">`lib/context.js:114`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description"></div>



    </div>
</div>
<a name="property_submodule" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>submodule</code>
    <span class="type">Any</span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_context.js.md#l146">`lib/context.js:146`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description"></div>



    </div>
</div>
<a name="property_block" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>block</code>
    <span class="type">Any</span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_context.js.md#l172">`lib/context.js:172`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description"></div>



    </div>
</div>

        <div class="no-visible-items-message">
            <p>There are no properties that match your current filter settings. You can change your filter settings in the index section on this page. <a href="#index" class="index-jump-link">index</a></p>
        </div>
    </div>



    <div class="methods-detail">
        <h2>Methods</h2>
        <a name="method_reset" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>reset</code>

        <span class="paren">()</span>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_context.js.md#l177">`lib/context.js:177`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            reset the context
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