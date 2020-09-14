const {description} = require('../../package.json')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: '<CodeSinging/>',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: 'MacOS',
                link: '/macos/',
            },
            {
                text: 'Frontend',
                link: '/frontend/'
            },
            {
                text: 'PHP',
                link: '/php/'
            },
            {
                text: 'Python',
                link: '/python/'
            }
        ],
        sidebar: {
            '/macos/': [
                {
                    title: 'MacOS',
                    collapsable: false,
                    children: [
                        '',
                        'applications.md'
                    ]
                }
            ],
            '/frontend/': [
                {
                    title: 'Frontend',
                    collapsable: false,
                    children: [
                        '',
                        'npm-registry.md',
                        'nrm.md',
                        'yarn-registry.md',
                        'yrm.md',
                    ]
                }
            ],
            '/php/': [
                {
                    title: 'PHP',
                    collapsable: false,
                    children: [
                        '',
                        'composer-registry.md',
                        'composer-registry-manager.md'
                    ]
                }
            ],
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
