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
  ],

  url: 'https://docs.bobby.placeholder',
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
      }),
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
          {to: '/projects/why',           label: 'For projects',   position: 'left'},
          {to: '/community/league',       label: 'Community',      position: 'left'},
          {to: '/trending',               label: 'Trending',       position: 'left'},
          {to: '/intelligence/what-bobby-sees', label: 'The intelligence', position: 'left'},
          {to: '/surfaces/lobby',         label: 'Surfaces',       position: 'left'},
          {to: '/brand/assets',           label: 'Brand',          position: 'left'},
          {to: '/links',                  label: 'Useful links',   position: 'left'},
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
