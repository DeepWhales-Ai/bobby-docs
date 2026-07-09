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
      ],
    },
    {
      type: 'category',
      label: 'For projects',
      items: [
        'projects/why',
        'projects/tier-1',
        'projects/tier-2',
        'projects/founders',
        'projects/bundles',
        'projects/apply',
      ],
    },
    {
      type: 'category',
      label: 'The intelligence',
      items: [
        'intelligence/what-bobby-sees',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      items: [
        'community/league',
        'community/board',
      ],
    },
    {
      type: 'category',
      label: 'Surfaces',
      items: [
        'surfaces/lobby',
        'surfaces/support',
      ],
    },
    {
      type: 'category',
      label: 'Brand',
      items: [
        'brand/assets',
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
