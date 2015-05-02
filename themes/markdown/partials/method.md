
--------------------------
#### {{name}}() 

{{#if overwritten_from}}
Inherited from {{overwritten_from/class}} {{#if foundAt}}but overwritten in{{/if}} `{{{file}}}:{{{line}}}`
{{else}}
{{#if extended_from}}
Inherited from `{{extended_from}}`
{{/if}}
Defined in `{{{file}}}:{{{line}}}`
{{/if}}

{{#if deprecationMessage}}
Deprecated: {{deprecationMessage}}
{{/if}}

{{#if since}}
Available since {{since}}
{{/if}}

> {{{methodDescription}}}

{{#if params}}
**Parameters**
{{#params}}
- {{name}} `{{#crossLink type}}{{/crossLink}}` {{{description}}}
{{/params}}
{{/if}}

{{#if return}}
**Returns**
{{#return}}
`{{#crossLink type}}{{/crossLink}}` {{{descrition}}}
{{/return}}
{{/if}}

{{#example}}
**Examples**
{{{.}}}
{{/example}}
