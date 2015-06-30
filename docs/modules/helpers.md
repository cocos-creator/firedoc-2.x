<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>helpers</title>
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
            <div class="content container"><h1>helpers Module</h1>
<div class="box clearfix meta">


        <div class="foundat">
            Defined in: <a href="../files/lib_firedoc.js.md#l2">`lib/firedoc.js:2`</a>
        </div>

</div>


<div class="box intro">
    The helpers module
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
            <a href="#method_renderFileTree">renderFileTree</a>
        </li>
        <li class="index-item method">
            <a href="#method_crossLink">crossLink</a>
        </li>
        <li class="index-item method">
            <a href="#method_crossLinkModule">crossLinkModule</a>
        </li>
        <li class="index-item method">
            <a href="#method_crossLinkRaw">crossLinkRaw</a>
        </li>
    </ul>
</div>




</div>
<div class="yui3-g">


    
        <div class="yui3-u-1-2">
            <h3>Methods:</h3>
            <a name="method_renderFileTree" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>renderFileTree</code>

        <span class="paren">()</span>








    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_helpers.js.md#l11">`lib/helpers.js:11`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Build file tree
        </div>



    </div>
</div>
<a name="method_crossLink" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>crossLink</code>

        <span class="paren">()</span>








    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_helpers.js.md#l34">`lib/helpers.js:34`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Create cross link
        </div>



    </div>
</div>
<a name="method_crossLinkModule" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>crossLinkModule</code>

        <span class="paren">()</span>








    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_helpers.js.md#l56">`lib/helpers.js:56`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Create cross link module
        </div>



    </div>
</div>
<a name="method_crossLinkRaw" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>crossLinkRaw</code>

        <span class="paren">()</span>








    </h3>

    <div class="meta">
                    <p>Provided by the <a href="../modules/utils.html" class="module-name">utils</a> module.</p>
                <p>
                    Defined in
        <a href="../files/lib_helpers.js.md#l73">`lib/helpers.js:73`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Create cross link to raw
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