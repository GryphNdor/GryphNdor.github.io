const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/palenight');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Computer Science Stuff',
  tagline: 'Dinosaurs are cool',
  url: 'https://GryphNdor.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'GryphNdor', // Usually your GitHub org/user name.
  projectName: 'GryphNdor.github.io', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      switchConfig:{
        darkIcon:'🌙',
        lightIcon: '☀️',
      }
    },
    navbar: {
      title: 'Computer Science Stuff',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Projects',
        },
        {
          label: 'Notes',
          position: 'left', // or 'right'
          items: [
            {
              label: 'Data Structures',
              href: '../Notes/Data-Structures',
            },
            // ... more items
          ],
        },
        {
          href: 'https://github.com/GryphNdor',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      additionalLanguages: ['java'],
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/',
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
