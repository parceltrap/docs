import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-GB',
  title: 'ParcelTrap',
  description: 'A driver-based parcel tracking library for PHP.',
  lastUpdated: false,
  cleanUrls: true,

  // Theme related configurations.
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/parceltrap/parceltrap',
      },
    ],
    search: {
      provider: 'local',
    },
    nav: [
      {
        text: 'Getting Started',
        link: '/getting-started',
      },
      {
        text: 'Drivers',
        link: '/drivers/',
      },
      {
        text: 'Guides',
        items: [
          {
            text: 'Creating a Driver',
            link: '/guides/creating-drivers',
          },
          {
            text: 'Handling Exceptions',
            link: '/guides/handling-exceptions',
          },
        ],
      },
    ],
  },
});
