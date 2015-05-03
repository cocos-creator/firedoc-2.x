### `{{name}}` Enum

{{#if extends}}
Extends `{{extends}}`
{{/if}}

{{#if foundAt}}
Defined in: [{{{file}}}:{{{line}}}](../files/{{{file}}}.js)
{{/if}}

{{#if module}}
  {{#if submodule}}
Module: [{{submodule}}](../modules/{{submodule}}.md)
Parent Module: [{{module}}](../modules/{{module}}.md)
  {{else}}
Module: [{{module}}](../modules/{{module}}.md)
  {{/if}}
{{/if}}

{{#if since}}
Available since {{since}}</p>
{{/if}}

{{#if deprecated}}
  {{#if deprecationMessage}}
Deprecated: {{deprecationMessage}}
  {{else}}
This enum is deprecated.
  {{/if}}
{{/if}}


{{{classDescription}}}

### Index

{{#if properties}}
##### Properties

{{#properties}}
  - `{{name}}`
{{/properties}}

{{/if}}

{{#if attrs}}
##### Attributes

{{#attrs}}
  - `{{name}}`
{{/attrs}}

{{/if}}

### Inheritance tree

{{/if}}

### Details

{{#if properties}}

#### Properties

{{#properties}}
{{> props}}
{{/properties}}

{{/if}}

{{#if attrs}}

#### Attributes

{{#attrs}}
{{> attrs}}
{{/attrs}}

{{/if}}

{{#if methods}}
