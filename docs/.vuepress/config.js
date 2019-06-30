module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/vuepress-example/',
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ],
    sidebar: [
      ['/main', 'Home'],
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}