module.exports = {
    title: 'CodeSinging',
    description: 'Code is Singing',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'VuePress', link: '/vuepress/' },
            { text: 'Git', link: '/git/' },
            { text: 'MacOS', link: '/macos/' },
            { text: 'Laravel', link: '/laravel/' },
        ],
        sidebar: {
            '/vuepress/': [
                {
                    title: 'VuePress',
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
            ],
            '/git/': [
                {
                    title: 'Git',
                    children: [
                        '',
                    ]
                }
            ],
            '/laravel/': [
                {
                    title: 'Laravel',
                    children: [
                        '',
                        'homestead',
                        'valet',
                    ]
                }
            ],
            '/macos/': [
                {
                    title: 'MacOS',
                    children: [
                        '',
                    ]
                }
            ]
        },
        sidebarDepth: 2,
        lastUpdated: true,
        repo: 'codesinging/codesinging',
        smoothScroll: true
    }
}