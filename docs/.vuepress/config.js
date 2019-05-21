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
      { text: 'Home', link: '/' },
      { text: 'Website', link: '/website/' },
      { text: 'Office', link: '/office/' },
      { text: 'Equipment', link: '/equipment/' },
      { text: 'APWA', link: '/apwa/' }
    ],
    sidebar: {
      '/website/': [
        '',
        'test',
      ],
      '/office/': [
        '',
        'brand',
      ],
      '/equipment/': [
        '',
      ],
      '/apwa/': [
        '',
      ],

      // fallback
      '/': [
        ['/', 'Home'],
        {
          title: 'Website',
          collapsable: false,
          children: [
            ['/website/', 'Intro']
          ]
        },
        {
          title: 'Office',
          collapsable: false,
          children: [
            ['/office/', 'Intro'],
            ['/office/brand/', 'Brand'],
          ]
        },
        {
          title: 'Equipment',
          collapsable: false,
          children: [
            ['/equipment/', 'Intro']
          ]
        },
        {
          title: 'APWA',
          collapsable: false,
          children: [
            ['/apwa/', 'Intro']
          ]
        }
      ]
    },
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
  }
}
