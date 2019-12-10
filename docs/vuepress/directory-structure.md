# Directory Structure

VuePress follows the principle of **"Convention is better than configuration"**, the recommended document structure is as follows:

``` md
.
├── docs
│   ├── .vuepress (Optional)
│   │   ├── `components` (Optional)
│   │   ├── `theme` (Optional)
│   │   │   └── Layout.vue
│   │   ├── `public` (Optional)
│   │   ├── `styles` (Optional)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── `templates` (Optional, Danger Zone)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── `config.js` (Optional)
│   │   └── `enhanceApp.js` (Optional)
│   │
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│
└── package.json
```

::: warning Note
Please note the capitalization of the directory name.
:::
