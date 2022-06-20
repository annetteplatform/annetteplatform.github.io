module.exports = (ctx) => ({
    port: 18080,
    head: [
        ['link', {rel: 'icon', href: '/favicon.png'}],
        [
            'script',
            {
                async: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=G-NH2SEQB56T',
            },
        ],
        [
            'script',
            {},
            `
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NH2SEQB56T');
      `,
        ],
        [
            'script',
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
        '/': {
            lang: 'en-US',
            title: 'Annette Platform',
            description:
                'Platform to build distributed, scalable, enterprise-wide business applications',
        },
    },

    theme: 'openapi',
    themeConfig: {
        smoothScroll: true,
        nav: [
            {
                text: 'Get started',
                link: '/get-started/',
            },
            {
                text: 'Case studies',
                link: '/case-studies/',
            },
            {
                text: 'Installation',
                link: '/installation/',
            },
            {
                text: 'Architecture',
                link: '/architecture/',
            },
            {
                text: 'GitHub',
                link: 'https://github.com/annetteplatform/annette',
            },
        ],
        sidebar: {
            '/get-started/': [
                {
                    // title: 'Get Started',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: ['', 'features'],
                },
            ],
            '/case-studies/': [
                {
                    // title: 'Case studies',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [''],
                    // children: ["", "tele2"/*, "emercom", "mimc", "cpm", "work-safety", "emlife"*/]
                },
            ],
            '/installation/': [
                {
                    // title: 'Installation',
                    collapsable: false,
                    sidebarDepth: 4,
                    children: ['', 'production'],
                },
            ],
            '/architecture/': [
                {
                    // title: 'API',
                    collapsable: false,
                    sidebarDepth: 4,
                    children: ['', 'application', 'authorization', 'person'],
                },
            ],
            '/guide/': [{
                // title: 'Guide',
                collapsable: false,
                sidebarDepth: 2,
                children: ['' ],
            },],
        },

    },

    plugins: {
        '@vuepress/medium-zoom': {
            selector: 'img',
            delay: 1000,
            options: {
                margin: 24,
                background: '#FFFFFF',
                scrollOffset: 0,
            },
        },
    },
})
