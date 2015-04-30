<ul id="index-inherits-tree">
{{#children}}
  <li class="inherits-tree-item">
    {{#if name}}
      <div>
        <a href="{{name}}.html">{{name}}</a>
      </div>
    {{/if}}
    {{#if children}}
      {{> class-tree}}
    {{/if}}
  </li>
{{/children}}
</ul>
