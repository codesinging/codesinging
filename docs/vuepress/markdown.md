# Markdown Extensions

## Header Anchors

Headers automatically get anchor links applied. Rendering of anchors can be configured using the `markdown.anchor` option.

## Links

### Internal Links

Internal links are converted to `<router-link>` for SPA navigation. Also, every `README.md` or `index.md` contained in each sub-directory will automatically be converted to `index.html`, with corresponding URL `/`.

Given the following directory structure:

``` text
.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ README.md
   ├─ three.md
   └─ four.md
```

And providing you are in `foo/one.md`:

``` md
[Home](/) <!-- Sends the user to the root README.md -->
[foo](/foo/) <!-- Sends the user to index.html of directory foo -->
[foo heading](./#heading) <!-- Anchors user to a heading in the foo README file -->
[bar - three](../bar/three.md) <!-- You can append .md (recommended) -->
[bar - four](../bar/four.html) <!-- Or you can append .html -->
```

### External Links

Outbound links automatically gets `target="_blank" rel="noopener noreferrer"`:

- [vuejs.org](https://vuejs.org/)
- [VuePress on GitHub](https://github.com/vuejs/vuepress)

You can customize the attributes added to external links by setting [config.markdown.externalLinks](https://vuepress.vuejs.org/config/#markdown-externallinks).

## Frontmatter

[YAML frontmatter](https://jekyllrb.com/docs/frontmatter/) is supported out of the box:

``` yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```

This data will be available to the rest of the page, along with all custom and theming components.

For more details, check out the [Frontmatter](https://vuepress.vuejs.org/guide/frontmatter.html) page.

## GitHub-Style Tables

Input:

``` text
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

Output:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Emoji

Input:

``` text
:tada: :100:
```

Output:

:tada: :100:

## Table of Contents

Input:

``` text
[[toc]]
```

Output:

[[toc]]

Rendering of TOC can be configured using the `markdown.toc` option.

## Custom Containers

The custom containers of default theme:

``` md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

You can also customize the title of the block:

``` md
::: danger STOP
Danger zone, do not proceed
:::
```

::: danger STOP
Danger zone, do not proceed
:::

Also see:

- [vuepress-plugin-container](https://vuepress.github.io/plugins/container/)

## Syntax Highlighting in Code Blocks

VuePress uses [Prism](https://prismjs.com/) to highlight language syntax in Markdown code blocks, using coloured text. Prism supports a wide variety of programming languages. All you need to do is append a valid language alias to the beginning backticks for the code block:

Input

```` text
``` js
export default {
  name: 'MyComponent',
  // ...
}
```
````

Output

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

Input

```` text
``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
````

Output

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

## Line Highlighting in Code Blocks

Input

```` text
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

Ouput

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Line Numbers

You can enable line numbers for each code blocks via config:

``` js
module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```

Demo:

![Line Numbers Demo](https://vuepress.vuejs.org/line-numbers-desktop.png)

## Advanced Configuration

VuePress uses [markdown-it](https://github.com/markdown-it/markdown-it) as the Markdown renderer. A lot of the extensions above are implemented via costom plugins. You can further customize the `markdown-it` instance using the `markdown` option in `.vuepress/config.js`:

``` js
module.exports = {
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```
