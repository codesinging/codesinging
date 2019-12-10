# Configuration

## Config File

To customize your site, let's first create a `.vuepress` directory inside your docs directory. This is where all VuePress-specific files will be placed in.

Your project structure is probably like this:

``` md
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```

The essential file for configuring a VuePress site is `.vuepress/config.js`, which should export a JavaScript object:

``` js
module.exports = {
    title: 'Your site name',
    description: 'Your site description'
}
```

Check out the [Config Reference](https://vuepress.vuejs.org/config/) for a full list of options.

::: tip Alternative Config Formats
You can also use YAML (`.vuepress/config.yml`) or TOML (`.vuepress/config.toml`) formats for the configuration file.
:::

## Theme Configuration

VuePress ships with a default theme, designed for technical documentation. It exposes many options that allow you to customize the navbar, sidebar and homepage, etc. For detail, check out the [Default Theme Config](https://vuepress.vuejs.org/theme/default-theme-config.html) page.

To develop a custom theme, see [Writing a theme](https://vuepress.vuejs.org/theme/writing-a-theme.html).
