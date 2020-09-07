module.exports = {
    title: 'BlackBE',
    description: 'BlackBE APIDOC V2',
    themeConfig: {
        logo: '/logo-tm.png',
        nav: [
            { text: '介绍', link: '/' },
            { text: '文档', link: '/guide/' },
        ],
        sidebar: [
            ['/', '介绍'],
            ['/guide/', '接口文档'],
            ['/guide/v1tov2.html', '从V1升级'],
            ['/about/', '关于BlackBE'],
        ],
        lastUpdated: '上次更新',
    },
    dest: 'public',
}