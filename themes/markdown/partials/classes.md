### `{{name}}` Class

{{#if extends}}
Extends `{{extends}}`
{{/if}}

{{#if foundAt}}
Defined in: {{{file}}}:{{{line}}}
{{/if}}

{{#if module}}
  {{#if submodule}}

Module: {{#crossLinkModule submodule}}{{/crossLinkModule}}

Parent Module: {{#crossLinkModule module}}{{/crossLinkModule}}
  {{else}}

Module: {{#crossLinkModule module}}{{/crossLinkModule}}
  {{/if}}
{{/if}}

{{#if since}}
Available since {{since}}</p>
{{/if}}

{{#if deprecated}}
  {{#if deprecationMessage}}
**Deprecated**: {{deprecationMessage}}
  {{else}}
This class is deprecated.
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

{{#if methods}}
##### Methods

{{#is_constructor}}
  - `{{name}}` **constructor**
{{/is_constructor}}

{{#methods}}
  - `{{name}}`
{{/methods}}

{{/if}}

{{#if events}}

##### Events

{{#events}}
  - `{{name}}`
{{/events}}

{{/if}}

{{#if extends}}

### Inherited members

##### Properties

{{#inheritedItems.properties}}
- `{{name}}`
{{/inheritedItems.properties}}

##### Attributes

{{#inheritedItems.attrs}}
- `{{name}}`
{{/inheritedItems.attrs}}

##### Methods

{{#inheritedItems.methods}}
- `{{name}}
{{/inheritedItems.methods}}

##### Events

{{#inheritedItems.events}}
- `{{name}}
{{/inheritedItems.events}}

{{/if}}

{{#if children}}

### Inheritance tree

{{/if}}

-----------------------------------------

### Class Details

{{#if properties}}

##### Properties

{{#properties}}
{{> props}}
{{/properties}}

{{/if}}

{{#if attrs}}

##### Attributes

{{#attrs}}
{{> attrs}}
{{/attrs}}

{{/if}}

{{#if methods}}

<!-- Method Block -->
##### Methods

{{#is_constructor}}
###### Constructor
{{> method}}
{{/is_constructor}}

{{#methods}}
{{> method}}
{{/methods}}

{{/if}}

{{#if events}}

##### Events

{{#events}}
{{> events}}
{{/events}}

{{/if}}
