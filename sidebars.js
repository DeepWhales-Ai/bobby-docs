// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Welcome',
      collapsed: false,
      items: ['index', 'start'],
    },
    {
      type: 'category',
      label: 'For your group',
      items: [
        'groups/what-bobby-does',
        'groups/add',
        'groups/configure',
        'groups/alerts',
        'groups/commands',
        'groups/pro',
      ],
    },
    {
      type: 'category',
      label: 'For projects',
      items: [
        'projects/why',
        'projects/level-1',
        'projects/level-2',
        'projects/founders',
        'projects/bundles',
        'projects/surfaces',
        'projects/apply',
      ],
    },
    {
      type: 'category',
      label: 'The intelligence',
      items: [
        'intelligence/what-bobby-sees',
        'intelligence/convergence',
        'intelligence/why-we-say-no',
        'intelligence/bobby-sees',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      items: [
        'community/league',
        'community/board',
        'community/proof',
        'community/channel',
      ],
    },
    {
      type: 'category',
      label: 'Surfaces',
      items: [
        'surfaces/lobby',
        'surfaces/x',
        'surfaces/support',
      ],
    },
    {
      type: 'category',
      label: 'Brand',
      items: [
        'brand/assets',
        'brand/voice',
        'brand/press',
      ],
    },
    {
      type: 'category',
      label: 'Useful',
      items: ['links'],
    },
  ],
};

export default sidebars;
