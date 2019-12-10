# Getting Started

::: warning COMPATIBILITY NOTE
VuePress requires Node.js >= 8.
:::

## Global Installation

``` sh
# install globally
yarn global add vuepress
# OR
npm install -g vuepress

# create the project folder
mkdir vuepress-starter && cd vuepress-starter

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
vuepress dev

# build
vuepress build
```

## Inside an Existing Project

If you have an existing project and would like to keep documentation inside the project, you should install VuePress as a local dependency.

``` sh
# install as a local dependency
yarn add -D vuepress
# OR
npm install -D vuepress

# create a docs directory
mkdir docs

# create a markdown file
echo '# Hello VuePress' > docs/README.md
```

::: warning
Recommend using Yarn instead of npm when installing VuePress into an existing project that has webpack 3.x as a dependency, because npm fails to generate the correct dependency tree in this case.
:::

Then add some scripts to `package.json` :

``` json
{
    "scripts": {
        "docs:dev": "vuepress dev docs",
        "docs:build": "vuepress build docs",
    }
}
```

You can now start writing with:

``` sh
yarn docs:dev
# OR
npm run docs:dev
```

To generate static assets, run:

``` sh
yarn docs:build
# OR
npm run docs:build
```

By default, the built files will be in `.vuepress/dist`. The built files can be deployed to any static file server.
