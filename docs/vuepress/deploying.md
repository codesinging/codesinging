# Deploying

The following guides are based on some shared assumptions:

- You are placing your docs inside the `docs` directory of your project;
- You are using the default build output location (`.vuepress/dist`);
- VuePress is installed as a local dependency in your project, and you have setup the following npm scripts:

``` json
{
  "scripts": {
    "docs:build": "vuepress build docs"
  }
}
```

## GitHub Pages

1. Set correct `base` in `docs/.vuepress/config.js`.

    If you are deploying to `https://<USERNAME>.github.io/`, you can omit `base` as it defaults to `"/"`.

    If you are deploying to `https://<USERNAME>.github.io/<REPO>/`, (that is your repository is at `https://github.com/<USERNAME>/<REPO>`), set `base` to `"/<REPO>/"`.

1. Inside your project, create `deploy.sh` with the following content (with highlightted lines uncommented appropriately) and run it to deploy.

``` sh
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

::: tip
You can also run the above script in your CI setup to enable automatic deployment on each push.
:::
