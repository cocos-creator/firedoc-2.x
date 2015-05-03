
## {{name}} Module

{{#extra}}
  {{#selleck}}
  [User Guide & Examples](/yui/docs/{{name}})
  {{/selleck}}
{{/extra}}

{{#if requires}}
### Requires
{{#requires}}
- {{#crossLinkModule .}}{{/crossLinkModule}}
{{/requires}}
{{/if}}

{{#if foundAt}}
Defined in [{{{file}}}:{{{line}}}]({{foundAt}})
{{/if}}

{{#if since}}
Available since {{since}}
{{/if}}

{{#if deprecated}}
  {{#if deprecationMessage}}
Deprecated: {{deprecationMessage}}
  {{else}}
This module is deprecated.
  {{/if}}
{{/if}}

{{moduleDescription}}

{{#example}}
### Example
{{{.}}}
{{/example}}

{{#if moduleClasses}}
This module provides the following classes:
  {{#moduleClasses}}
  - [{{displayName}}(../classes/{{name}}.md)
  {{/moduleClasses}}
{{/if}}

{{#if subModules}}
This module is a rollup of the following modules:
  {{#subModules}}
  - [{{displayName}}({{name}}.md) {{{description}}}
  {{/subModules}}
{{/if}}
