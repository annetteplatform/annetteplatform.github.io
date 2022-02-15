module.exports = (ctx) => ({
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-NH2SEQB56T",
      },
    ],
    [
      "script",
      {},
      `
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NH2SEQB56T');
      `,
    ],
    [
      "script",
      {},
      `
           (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(70086634, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });
    `,
    ],
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "Annette Platform",
      description:
        "Platform to build distributed, scalable, enterprise-wide business applications",
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
          "/get-started/": getGetStartedSidebar("Get Started"),
          "/case-studies/": getCaseStudiesSidebar("Case studies"),
          "/installation/": getInstallationSidebar("Installation"),
          "/guide/": getGuideSidebar("Guide"),
        },
      },
      // "/ru/": {
      //   label: "Русский",
      //   selectText: "Языки",
      //   ariaLabel: "Выберите язык",
      //   lastUpdated: "Последнее обновление",
      //   nav: require("./nav/ru"),
      //   sidebar: {}
      // }
    },
  },

  plugins: {
    "@vuepress/medium-zoom": {
      selector: "img",
      delay: 1000,
      options: {
        margin: 24,
        background: "#FFFFFF",
        scrollOffset: 0,
      },
    },
  },
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
      children: ["", "features"],
    },
  ];
}

function getCaseStudiesSidebar(groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [""],
      // children: ["", "tele2"/*, "emercom", "mimc", "cpm", "work-safety", "emlife"*/]
    },
  ];
}

function getInstallationSidebar(groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: ["", "deployment"],
    },
  ];
}
