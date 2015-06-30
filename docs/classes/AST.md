<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>AST</title>
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
            <div class="content container"><h1>AST Class</h1>
<div class="box meta">


        <div class="foundat">
            Defined in: <a href="../files/lib_ast.js.md#l164">`lib/ast.js:164`</a>
        </div>

            Module: <a href="../modules/firedoc.html">firedoc</a>

</div>


<div class="box intro">
    The AST(Abstract syntax tree) of the comment
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
            <a href="#property_project">project</a>
        </li>
        <li class="index-item property">
            <a href="#property_files">files</a>
        </li>
        <li class="index-item property">
            <a href="#property_codes">codes</a>
        </li>
        <li class="index-item property">
            <a href="#property_modules">modules</a>
        </li>
        <li class="index-item property">
            <a href="#property_classes">classes</a>
        </li>
        <li class="index-item property">
            <a href="#property_members">members</a>
        </li>
        <li class="index-item property">
            <a href="#property_inheritedMembers">inheritedMembers</a>
        </li>
        <li class="index-item property">
            <a href="#property_namespacesMap">namespacesMap</a>
        </li>
        <li class="index-item property">
            <a href="#property_commentsMap">commentsMap</a>
        </li>
        <li class="index-item property">
            <a href="#property_syntaxType">syntaxType</a>
        </li>
        <li class="index-item property">
            <a href="#property_context">context</a>
        </li>
    </ul>
</div>


<div class="index-section methods">
    <h3>Methods</h3>
    <ul class="index-list methods">

        <li class="index-item method">
            <a href="#method_create">create</a>
        </li>
        <li class="index-item method">
            <a href="#method_reset">reset</a>
        </li>
        <li class="index-item method">
            <a href="#method_oncomment">oncomment</a>
        </li>
        <li class="index-item method">
            <a href="#method_onblock">onblock</a>
        </li>
        <li class="index-item method">
            <a href="#method_ontag">ontag</a>
        </li>
        <li class="index-item method">
            <a href="#method_extract">extract</a>
        </li>
        <li class="index-item method">
            <a href="#method_transform">transform</a>
        </li>
    </ul>
</div>




</div>
<div class="class-detail">

    <div class="properties-detail">
        <h2>Properties</h2>
        <a name="property_project" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>project</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_ast.js.md#l171">`lib/ast.js:171`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">About the project</div>



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
        <a href="../files/lib_ast.js.md#l176">`lib/ast.js:176`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The files</div>



    </div>
</div>
<a name="property_codes" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>codes</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_ast.js.md#l181">`lib/ast.js:181`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The source codes</div>



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
        <a href="../files/lib_ast.js.md#l186">`lib/ast.js:186`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The modules</div>



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
        <a href="../files/lib_ast.js.md#l191">`lib/ast.js:191`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The classes</div>



    </div>
</div>
<a name="property_members" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>members</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_ast.js.md#l196">`lib/ast.js:196`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The members</div>



    </div>
</div>
<a name="property_inheritedMembers" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>inheritedMembers</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_ast.js.md#l201">`lib/ast.js:201`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The inherited members</div>



    </div>
</div>
<a name="property_namespacesMap" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>namespacesMap</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_ast.js.md#l206">`lib/ast.js:206`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The namespaces map object</div>



    </div>
</div>
<a name="property_commentsMap" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>commentsMap</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_ast.js.md#l211">`lib/ast.js:211`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The comments map object</div>



    </div>
</div>
<a name="property_syntaxType" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>syntaxType</code>
    <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_ast.js.md#l216">`lib/ast.js:216`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The syntax type</div>



    </div>
</div>
<a name="property_context" class="anchor-link"></a>
<div class="property item">
    <h3 class="name"><code>context</code>
    <span class="type">Context</span>





    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_ast.js.md#l221">`lib/ast.js:221`</a>
        </p>


    </div>

    <div class="extended-detail">
        <div class="description">The context object</div>



    </div>
</div>

        <div class="no-visible-items-message">
            <p>There are no properties that match your current filter settings. You can change your filter settings in the index section on this page. <a href="#index" class="index-jump-link">index</a></p>
        </div>
    </div>



    <div class="methods-detail">
        <h2>Methods</h2>
        <a name="method_create" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>create</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>files</code>
                </li>
                <li class="arg">
                        <code>dirs</code>
                </li>
                <li class="arg">
                        <code class="optional">[syntaxType]</code>
                </li>
            </ul><span class="paren">)</span>
        </div>

        <span class="returns-inline">
            <span class="type"><a href="../classes/AST.html" class="crosslink">AST</a></span>
        </span>







    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_ast.js.md#l231">`lib/ast.js:231`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Create a AST object
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">files</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The files
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name">dirs</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The directorys
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name optional">syntaxType</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>
                            <span class="flag optional" title="This parameter is optional."></span>


                        <div class="param-description">
                            The syntax type: `coffee` or `js`
                        </div>

                    </li>
                </ul>
            </div>

            <div class="returns">
                <h4>returns:</h4>

                <div class="returns-description">
                        <span>type:</span>
                        <span class="type"><a href="../classes/AST.html" class="crosslink">AST</a></span>
                    <p>
                        the created AST object
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_reset" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>reset</code>

        <span class="paren">()</span>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_ast.js.md#l250">`lib/ast.js:250`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Reset the AST instance
        </div>



    </div>
</div>
<a name="method_oncomment" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>oncomment</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>comment</code>
                </li>
                <li class="arg">
                        <code>filename</code>
                </li>
                <li class="arg">
                        <code>linenum</code>
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
        <a href="../files/lib_ast.js.md#l273">`lib/ast.js:273`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">comment</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name">filename</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>


                        <div class="param-description">
                            
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name">linenum</code>
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
                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>
                    <p>
                        
                    </p>
                </div>
            </div>

    </div>
</div>
<a name="method_onblock" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>onblock</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>an</code>
                </li>
            </ul><span class="paren">)</span>
        </div>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_ast.js.md#l343">`lib/ast.js:343`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Processes all the tags in a single comment block
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">an</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" class="crosslink external" target="_blank">Array</a></span>


                        <div class="param-description">
                            array of the tag/text pairs
                        </div>

                    </li>
                </ul>
            </div>


    </div>
</div>
<a name="method_ontag" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>ontag</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>item</code>
                </li>
            </ul><span class="paren">)</span>
        </div>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_ast.js.md#l416">`lib/ast.js:416`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Process tag
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">item</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            
                        </div>

                            <ul class="params-list">
                                <li class="param">
                                        <code class="param-name">tag</code>
                                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String" class="crosslink external" target="_blank">String</a></span>

                                    <div class="param-description">
                                        
                                    </div>

                                </li>
                                <li class="param">
                                        <code class="param-name">value</code>
                                        <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>

                                    <div class="param-description">
                                        
                                    </div>

                                </li>
                            </ul>
                    </li>
                </ul>
            </div>


    </div>
</div>
<a name="method_extract" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>extract</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>files</code>
                </li>
                <li class="arg">
                        <code>dirs</code>
                </li>
            </ul><span class="paren">)</span>
        </div>








    </h3>

    <div class="meta">
                <p>
                    Defined in
        <a href="../files/lib_ast.js.md#l471">`lib/ast.js:471`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Accepts a map of filenames to file content.  Returns
a map of filenames to an array of API comment block
text.  This expects the comment to start with / **
on its own line, and end with * / on its own
line.  Override this function to provide an
alternative comment parser.
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">files</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            
                        </div>

                    </li>
                    <li class="param">
                            <code class="param-name">dirs</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            
                        </div>

                    </li>
                </ul>
            </div>


    </div>
</div>
<a name="method_transform" class="anchor-link"></a>
<div class="method item">
    <h3 class="name"><code>transform</code>

        <div class="args">
            <span class="paren">(</span><ul class="args-list inline commas">
                <li class="arg">
                        <code>commentmap</code>
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
        <a href="../files/lib_ast.js.md#l511">`lib/ast.js:511`</a>
        </p>



    </div>

    <div class="extended-detail">

        <div class="description">
            Transforms a map of filenames to arrays of comment blocks into a
JSON structure that represents the entire processed API doc info
and relationships between elements for the entire project.
        </div>

            <div class="params">
                <h4>parameters:</h4>

                <ul class="params-list">
                    <li class="param">
                            <code class="param-name">commentmap</code>
                            <span class="type"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object" class="crosslink external" target="_blank">Object</a></span>


                        <div class="param-description">
                            The hash of files and parsed comment blocks
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
                        The transformed data for the project
                    </p>
                </div>
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
