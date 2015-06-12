
Firedoc Themes
--------------

## Commands

The following commands let you can manage firedoc themes locally.

#### Install

```
firedoc-theme install url [--name name]
```

#### Uninstall

```
firedoc-theme uninstall [name]
```

#### Clear

```
firedoc-theme clear
```

## How to create a theme for firedoc

#### Distrubution

The complete firedoc theme distrubution should be the below:

```
themes/default/
├── assets
│   ├── css
│   ├── favicon.png
│   ├── img
│   ├── index.html
│   ├── js
│   └── vendor
├── i18n
│   ├── en.json
│   └── zh.json
├── layouts
│   ├── main.handlebars
│   └── xhr.handlebars
├── partials
│   ├── attrs.handlebars
│   ├── class-tree.handlebars
│   ├── classes.handlebars
│   ├── enums.handlebars
│   ├── events.handlebars
│   ├── files.handlebars
│   ├── index.handlebars
│   ├── items-index.handlebars
│   ├── method.handlebars
│   ├── module.handlebars
│   ├── options.handlebars
│   ├── props.handlebars
│   └── sidebar.handlebars
├── locals.js
└── theme.json
```

The next, we will walk them as detailed as possible.

1. The directory "layouts" stores the skelton layout file.
2. The directory "partials" stores the detailed templates for `modules`, `classes` and other templates used by the former.
3. The directory "assets" stores the static resources like scripts, css files and fonts.
4. The directory "i18n" stores the i18n resources for templates, naming as `{lang}.json`.
5. The file `locals.js` is used to support a programable for theme developer, it is expected to export a function, which could rewrite the locals for templates variables.

#### Template Context

By default, all templates should have the ability to access to the following variables in his template context:

```
{
  globals: {
    classes: [ /* all classes */ ],
    modules: [ /* all modules */ ]
  },
  i18n: {
    /* Just for i18n templates object
  }
}
```

But as in some special templates, the firedoc would make some shortcuts for the corresponding template:

- `module`: the `module` template would be directly called at firedoc itself to generate `modules/*.html` to `dest` path, so that to simplify this spec, firedoc attaches the corresponding `module` object to the current context.
- `classes`: the `classes` template would be directly called at firedoc itself to generate `classes/*.html` to `dest` path, so that to simplify this spec, firedoc attaches the corresponding `class` object to the current context.

#### Use i18n

The i18n in firedoc theme template just looks like add a map variable `i18n` into template `locals`, and the firedoc will depends on the `--lang` option's value to decide what file under `i18n` would be used. The complete example are at [themes/default](default/i18n).

At template, we just can use i18n map by the below super simple way:

```html
<p>{{i18n.EXAMPLE_I18N_TEXT}}</p>
```

#### Programable Theme

Sometimes, theme-maker might want a way to implement a new feature without any help from firedoc, so the `locals.js` would help the themer. Here is an example:

```js
module.exports = function (modules, classes, locals) {
  // TODO
};
```

Then you could work with `modules`, `classes` and `locals` that you want, like if you want to add a timestamp for all classes:

```js
module.exports = function (modules, _, _) {
  modules.forEach(function (mod) {
    mod.timestamp = Date.now();
  });
}
```

The result for the programming is that you can use the `timestamp` at `module` template:

```html
Timestamp: {{timestamp}}
```
