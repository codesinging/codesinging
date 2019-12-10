module.exports = {
    title: 'CodeSinging',
    description: 'Code is Singing',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'VuePress', link: '/vuepress/' },
        ],
        sidebar: {
            '/vuepress/': [
                {
                    title: 'VuePress',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        '',
                        'getting-started',
                        'directory-structure',
                        'configuration',
                        'default-theme',
                        'markdown',
                        'deploying',
                    ]
                }
            ]
        },
        sidebarDepth: 2,
        lastUpdated: true,
        repo: 'codesinging/codesinging'
    }
}