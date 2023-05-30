module.exports = {
  title: 'pnpm-monorepo-example',
  tagline: 'Example repo',
  url: 'https://pnpm-monorepo-example.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: true,
  organizationName: 'keller-mark', // Usually your GitHub org/user name.
  projectName: 'pnpm-monorepo-example', // Usually your repo name.
  themes: [],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
    navbar: {
      title: 'pnpm-ts-react',
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          label: 'Docs',
          position: 'left',
        },
      ]
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/keller-mark/pnpm-monorepo-example/edit/main/sites/docs/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [],
        },
      },
    ],
  ],
};
