// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bobby',
  tagline: "The intelligence network crypto Telegram runs on.",
  favicon: 'img/bobby-mark.png',

  future: {
    v4: true,
  },

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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'Bobby',
          src: 'img/bobby-mark.png',
        },
        items: [],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: "Bobby. We don't predict. We detect. · <a href=\"https://t.me/justdmbobby\">@justdmbobby</a>",
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
