<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Locals</title>
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
            <div class="content container"><h1>Locals Class</h1>
<div class="box meta">


        <div class="foundat">
            Defined in: <a href="../files/lib_locals.js.md#l13">`lib/locals.js:13`</a>
        </div>

            Module: <a href="../modules/utils.html">utils</a><br>
            Parent Module: <a href="../modules/firedoc.html">firedoc</a>

</div>


<div class="box intro">
    The Theme Locals
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
            <a href="#property_context">context</a>
        </li>
        <li class="index-item property">
            <a href="#property_options">options</a>
        </li>
        <li class="index-item property">
            <a href="#property_ast">ast</a>
        </li>
        <li class="index-item property">
            <a href="#property_project">project</a>
        </li>
        <li class="index-item property">
            <a href="#property_i18n">i18n</a>
        </li>
        <li class="index-item property">
            <a href="#property_modules">modules</a>
        </li>
        <li class="index-item property">
            <a href="#property_classes">classes</a>
        </li>
        <li class="index-item property">
            <a href="#property_files">files</a>
        </li>
        <li class="index-item property private">
            <a href="#property__mergeCounter">_mergeCounter</a>
        </li>
    </ul>
</div>


<div class="index-section methods">
    <h3>Methods</h3>
    <ul class="index-list methods">

        <li class="index-item method">
            <a href="#method_initMarkdownRulers">initMarkdownRulers</a>
        </li>
        <li class="index-item method">
            <a href="#method_addFoundAt">addFoundAt</a>
        </li>
        <li class="index-item method">
            <a href="#method_getMethodName">getMethodName</a>
        </li>
        <li class="index-item method private">
            <a href="#method__parseCode">_parseCode</a>
        </li>
        <li class="index-item method private">
            <a href="#method_markdown">markdown</a>
        </li>
        <li class="index-item method">
            <a href="#method_appendClassToModule">appendClassToModule</a>
        </li>
        <li class="index-item method">
            <a href="#method_getClassInheritanceTree">getClassInheritanceTree</a>
        </li>
        <li class="index-item method">
            <a href="#method_buildMember">buildMember</a>
        </li>
        <li class="index-item method">
            <a href="#method_buildMembers">buildMembers</a>
        </li>
        <li class="index-item method">
            <a href="#method_augmentData">augmentData</a>
        </li>
        <li class="index-item method">
            <a href="#method_mergeExtends">mergeExtends</a>
        </li>
        <li class="index-item method private">
            <a href="#method_getExpandIterator">getExpandIterator</a>
        </li>
        <li class="index-item method">
            <a href="#method_extendMembers">extendMembers</a>
        </li>
        <li class="index-item method">
            <a href="#method_expandMembersFromModules">expandMembersFromModules</a>
        </li>
        <li class="index-item method">
            <a href="#method_expandMembersFromModules">expandMembersFromModules</a>
        </li>
        <li class="index-item method">
            <a href="#method_create">create</a>
        </li>
    </ul>
</div>




</div>
<div class="class-detail">

    <div class="properties-detail">
        <h2>Properties</h2>
        <a name="property_context" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>context</code>
    <span class="type"><a href="../classes/BuilderContext.html" class="crosslink">BuilderContext</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l20">`lib/locals.js:20`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">Builder Context</div>



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
        <a href="../files/lib_locals.js.md#l25">`lib/locals.js:25`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The options</div>



    </div>
</div>
<a name="property_ast" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>ast</code>
    <span class="type"><a href="../classes/AST.html" class="crosslink">AST</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l30">`lib/locals.js:30`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The AST object</div>



    </div>
</div>
<a name="property_project" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>project</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l35">`lib/locals.js:35`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">Get the project to export</div>



    </div>
</div>
<a name="property_i18n" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>i18n</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l52">`lib/locals.js:52`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">Get i18n object</div>



    </div>
</div>
<a name="property_modules" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>modules</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l70">`lib/locals.js:70`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">Get modules object to export</div>



    </div>
</div>
<a name="property_classes" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>classes</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l89">`lib/locals.js:89`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">Get classes object to export</div>



    </div>
</div>
<a name="property_files" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>files</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l113">`lib/locals.js:113`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">Get files object to export</div>



    </div>
</div>
<a name="property__mergeCounter" class="anchor-link"></a>
<div class="property item private">
    <h3 class="name"><code>_mergeCounter</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number" class="crosslink external" target="_blank">Number</a></span>


        <span class="flag private">private</span>



    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l439">`lib/locals.js:439`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">Counter for stepping into merges</div>



    </div>
</div>

        <div class="no-visible-items-message">
            <p>There are no properties that match your current filter settings. You can change your filter settings in the index section on this page. <a href="#index" class="index-jump-link">index</a></p>
        </div>
    </div>



    <div class="methods-detail">
        <h2>Methods</h2>
        <a name="method_initMarkdownRulers" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>initMarkdownRulers</code>

        <span class="paren">()</span>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l127">`lib/locals.js:127`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Initialize the markdownit rulers
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
        <a href="../files/lib_locals.js.md#l155">`lib/locals.js:155`</a>
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
<a name="method_getMethodName" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>getMethodName</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>name</code>
                </li>
                <li class="arg">
                        <code>params</code>
                </li>
            </ul><span class="paren">)</span>
        </div>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l173">`lib/locals.js:173`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            build the method name by its name and parameters
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">name</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            The function/method name
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name">params</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a></span>


                        <div class="param-description">
                            The function/method parameters list
                        </div>

                            <ul class="params-list">
                                <li class="param">
                                        <code class="param-name">name</code>
                                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>

                                    <div class="param-description">
                                        The name of the parameter
                                    </div>

                                </li>
                            </ul>
                    </li>
                </ul>
            </div>


    </div>
</div>
<a name="method__parseCode" class="anchor-link"></a>
<div class="method item private">
    <h3 class="name"><code>_parseCode</code>

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
        <a href="../files/lib_locals.js.md#l187">`lib/locals.js:187`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Parses `<pre class="code prettyprint"><code>
` tags and adds the __prettyprint__ `className` to them
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
<a name="method_markdown" class="anchor-link"></a>
<div class="method item private">
    <h3 class="name"><code>markdown</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>data</code>
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
        <a href="../files/lib_locals.js.md#l202">`lib/locals.js:202`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Wrapper around the Markdown parser so it can be normalized or even side stepped
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">data</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            The Markdown string to parse
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
                        The rendered HTML
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_appendClassToModule" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>appendClassToModule</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>clazz</code>
                </li>
            </ul><span class="paren">)</span>
        </div>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l231">`lib/locals.js:231`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            append the clazz to its module
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">clazz</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The class object
                        </div>

                            <ul class="params-list">
                                <li class="param">
                                        <code class="param-name">module</code>
                                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>

                                    <div class="param-description">
                                        The module name of this clazz object
                                    </div>

                                </li>
                            </ul>
                    </li>
                </ul>
            </div>


    </div>
</div>
<a name="method_getClassInheritanceTree" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>getClassInheritanceTree</code>

        <span class="paren">()</span>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>
        </span>







    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l247">`lib/locals.js:247`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            get class inheritance tree
        </div>


            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>
                    <p>
                        return the inheritance tree object
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_buildMember" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>buildMember</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>memeber</code>
                </li>
                <li class="arg">
                        <code>forceBeMethod</code>
                </li>
                <li class="arg">
                        <code>parent</code>
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
        <a href="../files/lib_locals.js.md#l287">`lib/locals.js:287`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            build the member
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">memeber</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The member object
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name">forceBeMethod</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a></span>


                        <div class="param-description">
                            force make the build process be for method
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name">parent</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The parent context
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
                        returned member object
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_buildMembers" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>buildMembers</code>

        <span class="paren">()</span>

        <span class="returns-inline">
            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a></span>
        </span>







    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l352">`lib/locals.js:352`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            build the members
        </div>


            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a></span>
                    <p>
                        always be true
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_augmentData" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>augmentData</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>o</code>
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
        <a href="../files/lib_locals.js.md#l379">`lib/locals.js:379`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Augments the **DocParser** meta data to provide default values for certain keys as well as parses all descriptions
with the `Markdown Parser`
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">o</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The object to recurse and augment
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
                        The augmented object
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_mergeExtends" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>mergeExtends</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>info</code>
                </li>
                <li class="arg">
                        <code>members</code>
                </li>
                <li class="arg">
                        <code>first</code>
                </li>
            </ul><span class="paren">)</span>
        </div>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l447">`lib/locals.js:447`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Merge superclass data into a child class
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">info</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The item to extend
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name">members</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a></span>


                        <div class="param-description">
                            The list of items to merge in
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name">first</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a></span>


                        <div class="param-description">
                            Set for the first call
                        </div>

                    </li>
                </ul>
            </div>


    </div>
</div>
<a name="method_getExpandIterator" class="anchor-link"></a>
<div class="method item private">
    <h3 class="name"><code>getExpandIterator</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>parent</code>
                </li>
            </ul><span class="paren">)</span>
        </div>



        <span class="flag private">private</span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l500">`lib/locals.js:500`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            generate expand function
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">parent</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The object to be set
                        </div>

                    </li>
                </ul>
            </div>


    </div>
</div>
<a name="method_extendMembers" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>extendMembers</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>meta</code>
                </li>
            </ul><span class="paren">)</span>
        </div>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l525">`lib/locals.js:525`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            extends members array
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">meta</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The meta object
                        </div>

                    </li>
                </ul>
            </div>


    </div>
</div>
<a name="method_expandMembersFromModules" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>expandMembersFromModules</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>meta</code>
                </li>
            </ul><span class="paren">)</span>
        </div>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l545">`lib/locals.js:545`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            extends modules
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">meta</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The meta object
                        </div>

                    </li>
                </ul>
            </div>


    </div>
</div>
<a name="method_expandMembersFromModules" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>expandMembersFromModules</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>meta</code>
                </li>
            </ul><span class="paren">)</span>
        </div>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l567">`lib/locals.js:567`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            extends members from classes
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">meta</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The meta object
                        </div>

                    </li>
                </ul>
            </div>


    </div>
</div>
<a name="method_create" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>create</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>context</code>
                </li>
            </ul><span class="paren">)</span>
        </div>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_locals.js.md#l589">`lib/locals.js:589`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Create a locals object from context
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">context</code>
                            <span class="type"><a href="../classes/BuilderContext.html" class="crosslink">BuilderContext</a></span>


                        <div class="param-description">
                            The `BuilderContext` instance
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
