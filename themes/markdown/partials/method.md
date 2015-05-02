
`{{name}}` {{#if params}}
({{#params}}`{{name}}`{{/params}})
{{else}}()
{{/if}}
{{#if return}}
`{{#crossLink returnType}}{{/crossLink}}`
{{/if}}

{{#if overwritten_from}}
> Inherited from {{overwritten_from/class}} {{#if foundAt}}but overwritten in{{/if}} `{{{file}}}:{{{line}}}`
{{else}}
{{#if extended_from}}
> Inherited from `{{extended_from}}`
{{/if}}
Defined in `{{{file}}}:{{{line}}}`
{{/if}}

{{#if deprecationMessage}}
**Deprecated**: {{deprecationMessage}}
{{/if}}

{{#if since}}
Available since {{since}}
{{/if}}

---------------------

{{{methodDescription}}}

{{#params}}
##### Parameters

- `{{#crossLink type}}{{/crossLink}}` {{name}} {{{description}}}
{{/params}}

{{#return}}
##### Returns

`{{#crossLink type}}{{/crossLink}}` {{{descrition}}}
{{/return}}

{{#example}}
##### Examples

{{{.}}}
{{/example}}
