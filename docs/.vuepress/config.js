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
            { text: 'ThinkPHP', link: '/thinkphp/' },
            { text: 'Fonts', link: '/fonts/' },
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
            ],
            '/thinkphp/': [
                {
                    title: 'ThinkPHP',
                    children: [
                        '',
                        'deploy-to-sae',
                        'extensions'
                    ]
                }
            ],
            '/fonts/': [
                '',
            ],
        },
        sidebarDepth: 2,
        lastUpdated: true,
        repo: 'codesinging/codesinging',
        smoothScroll: true
    }
}