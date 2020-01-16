module.exports = ctx => ({
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  locales: {
    "/": {
      lang: "en-US",
      title: "Annette Platform",
      description: "Platform to create business application"
    },
    "/ru/": {
      lang: "ru-RU",
      title: "Платформа Annette",
      description: "Платформа для создания бизнес приложений"
    }
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
          "/guide/": getGuideSidebar("Guide")
        }
      },
      "/ru/": {
        label: "Русский",
        selectText: "Языки",
        ariaLabel: "Выберите язык",
        lastUpdated: "Последнее обновление",
        nav: require("./nav/ru"),
        sidebar: {}
      }
    }
  }
});

function getGuideSidebar(groupA) {
  return [""];
}

function getGetStartedSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ["", "install"]
    },
    {
      title: groupB,
      collapsable: false,
      children: [ "build"]
    }
  ];
}
