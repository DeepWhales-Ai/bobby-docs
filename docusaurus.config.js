// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bobby',
  tagline: "The intelligence layer crypto Telegram runs on.",
  favicon: 'favicon.ico',

  future: {
    v4: true,
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '256x256',
        href: '/img/favicon-256.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '128x128',
        href: '/img/favicon-128.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/favicon-32.png',
      },
    },
    // Structured data. Sitewide Organization + WebSite only.
    // Deliberately no FAQPage: schema is only ever added where a page
    // carries a visible, matching Q&A section, and no page here does.
    // Keep every claim below matched by visible copy on the site.
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://www.bobbybuybot.com/#organization',
        name: 'Bobby',
        alternateName: 'Bobby Buy Bot',
        url: 'https://www.bobbybuybot.com/',
        logo: 'https://www.bobbybuybot.com/img/favicon-256.png',
        description:
          'Bobby is the intelligence layer crypto Telegram runs on. Bobby sits inside crypto Telegram groups, calls every buy as it confirms on chain, and reads across the rooms to detect what is moving next.',
        // sameAs is an identity claim, so it lists only surfaces that are
        // Bobby himself. The Lobby is a separate community room, not
        // another profile of this organization, so it is not listed here.
        sameAs: [
          'https://t.me/BobbyBuyBot',
          'https://x.com/BobbyBuyBot',
        ],
      }),
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://www.bobbybuybot.com/#website',
        name: 'Bobby',
        url: 'https://www.bobbybuybot.com/',
        description: 'The intelligence layer crypto Telegram runs on.',
        inLanguage: 'en',
        publisher: {'@id': 'https://www.bobbybuybot.com/#organization'},
      }),
    },
  ],

  url: 'https://www.bobbybuybot.com',
  baseUrl: '/',

  organizationName: 'DeepWhales-Ai',
  projectName: 'bobby-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        // Explicit rather than relying on preset defaults, so the crawl
        // surface is reviewable in source. Emits /sitemap.xml at the root.
        // No `lastmod`: it requires docs `showLastUpdateTime: true`, which
        // also prints a visible "Last updated on" line on every page. Left
        // off deliberately rather than shipped as an option that emits
        // nothing.
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
          ignorePatterns: ['/search'],
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {from: '/projects/preview', to: '/projects'},
          {from: '/trending', to: '/community/board'},
          {from: '/groups/commands', to: '/groups/configure'},
          {from: '/groups/alerts', to: '/groups/configure'},
          {from: '/groups/pro', to: '/groups/configure'},
          {from: '/intelligence/convergence', to: '/intelligence/what-bobby-sees'},
          {from: '/intelligence/why-we-say-no', to: '/intelligence/what-bobby-sees'},
          {from: '/intelligence/bobby-sees', to: '/intelligence/what-bobby-sees'},
          {from: '/surfaces/x', to: '/surfaces/lobby'},
          {from: '/community/proof', to: '/community/board'},
          {from: '/projects/surfaces', to: '/advertise'},
          {from: '/brand/voice', to: '/brand/assets'},
          {from: '/brand/press', to: '/brand/assets'},
        ],
      },
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'Bobby',
          src: 'img/bobby-wordmark.png',
          srcDark: 'img/bobby-wordmark.png',
          width: 120,
          height: 36,
        },
        // Items render only in the mobile drawer. Desktop navbar is fully
        // custom (see src/theme/Navbar/Content). Order matches SECTIONS there.
        // Telegram + X are appended so they're reachable from the mobile
        // drawer (the desktop icon-btn versions are hidden by the @media
        // (max-width: 996px) rule in src/css/bobby-prototype.css). DM Bobby
        // sits last so the CTA stays bottom-of-drawer on tap.
        items: [
          {to: '/groups/what-bobby-does', label: 'For your group', position: 'left'},
          {to: '/projects',               label: 'For your project', position: 'left'},
          {to: '/advertise',              label: 'Advertise with Bobby', position: 'left'},
          {
            type: 'dropdown',
            label: 'More',
            position: 'left',
            items: [
              {to: '/community/league',             label: 'Community'},
              {to: '/community/board',              label: 'The Board'},
              {to: '/intelligence/what-bobby-sees', label: 'The intelligence'},
              {to: '/surfaces/lobby',               label: 'Surfaces'},
              {to: '/brand/assets',                 label: 'Brand'},
              {to: '/links',                        label: 'Useful links'},
              {to: '/legal',                        label: 'Legal'},
              {to: '/terms',                        label: 'Terms'},
            ],
          },
          {
            href: 'https://t.me/BobbyBuyBot',
            label: 'Telegram',
            position: 'right',
          },
          {
            href: 'https://x.com/BobbyBuyBot',
            label: 'X',
            position: 'right',
          },
          {
            href: 'https://t.me/BobbyBuyBot',
            label: 'DM Bobby',
            position: 'right',
            className: 'dm-cta-mobile',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
