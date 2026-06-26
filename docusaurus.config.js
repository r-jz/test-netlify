// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Docs',
  tagline: 'Minimal Docusaurus site',
  url: 'https://example.com',
  baseUrl: '/',

  organizationName: 'example',
  projectName: 'my-docusaurus-site',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: false
      })
    ]
  ],

  themeConfig: {
    navbar: {
      title: 'My Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs'
        }
      ]
    }
  }
};

module.exports = config;
