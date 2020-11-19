module.exports = ctx => ({
    head: [["link", {rel: "icon", href: "/favicon.png"}]],
    locales: {
        "/": {
            lang: "en-US",
            title: "Annette Platform",
            description: "Platform to build distributed, scalable, enterprise-wide business applications"
        },
        // "/ru/": {
        //   lang: "ru-RU",
        //   title: "Платформа Annette",
        //   description: "Платформа для создания бизнес приложений"
        // }
    },

    //theme: '@vuepress/vue',
    themeConfig: {
        smoothScroll: true,
        locales: {
            "/": {
                label: "English",
                selectText: "Languages",
                ariaLabel: "Select language",
                lastUpdated: "Last Updated",
                nav: require("./nav/en"),
                sidebar: {
                    "/get-started/": getGetStartedSidebar("Get Started", "Advanced"),
                    "/case-studies/": getCaseStudiesSidebar("Case studies"),
                    "/guide/": getGuideSidebar("Guide"),
                }
            },
            // "/ru/": {
            //   label: "Русский",
            //   selectText: "Языки",
            //   ariaLabel: "Выберите язык",
            //   lastUpdated: "Последнее обновление",
            //   nav: require("./nav/ru"),
            //   sidebar: {}
            // }
        }
    },

    plugins: [
        [
            'vuepress-plugin-medium-zoom',
            {
                selector: 'img',
                delay: 1000,
                options: {
                    margin: 24,
                    background: '#FFFFFF',
                    scrollOffset: 0,
                },
            },
        ],
    ],
});

function getGuideSidebar(groupA) {
    return [""];
}

function getGetStartedSidebar(groupA, groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            sidebarDepth: 2,
            children: ["", "features", "install"]
        },
        {
            title: groupB,
            collapsable: false,
            sidebarDepth: 2,
            children: ["build"]
        }
    ];
}

function getCaseStudiesSidebar(groupA) {
    return [
        {
            title: groupA,
            collapsable: false,
            sidebarDepth: 2,
            children: [""]
            // children: ["", "tele2"/*, "emercom", "mimc", "cpm", "work-safety", "emlife"*/]
        }
    ]
}
