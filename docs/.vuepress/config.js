module.exports = {
  title: 'ITRE IT & Web Documentation',
  description: 'A living repository for ITRE IT & Web information and workflows',
  configureWebpack: {
    resolve: {
      alias: {
        '@images': './images'
      }
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'General', link: '/brand' },
      { text: 'Website', link: '/website/' },
      { text: 'Equipment', link: '/equipment/' },
      { text: 'APWA', link: '/apwa/' }
    ],
    sidebar: {
      '/website/': [
        '',
        'theme',
        'users',
        'training',
        'research'
      ],
      '/equipment/': [
        '',
        'logging',
        'purchases',
        'surplus'
      ],
      '/apwa/': [
        '',
        'events',
        'sliders',
        'sponsors',
        'documents'
      ],

      // fallback
      '/': [
        'brand',
        'forms'
      ]
    },
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
  }
}
