import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Qt-Primer",
  description: "Qt Tutorial",
  base: '/Qt-Primer/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: '首页', link: '/' },
    //   { text: '入门', link: '/guide/getting-started' },
    //   { text: '控件', link: '/widgets/qwidget' },
    //   { text: '进阶', link: '/advanced/signals-slots' },
    // ],
    sidebar: {
      '/': [
        {
          text: '站点导航',
          items: [
            { text: '首页', link: '/' }
          ]
        }
      ],
      '/guide/': [
        {
          text: '入门教程',
          collapsed: false,
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '搭建开发环境', link: '/guide/setup' }
          ]
        }
      ],
      '/widgets/': [
        {
          text: '控件篇',
          collapsed: false,
          items: [
            { text: 'QWidget 基础', link: '/widgets/qwidget' },
            { text: 'QPushButton', link: '/widgets/qpushbutton' }
          ]
        }
      ],
      '/advanced/': [
        {
          text: '进阶技巧',
          collapsed: false,
          items: [
            { text: '信号与槽', link: '/advanced/signals-slots' },
            { text: '事件处理', link: '/advanced/events' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/giligili612/Qt-Primer' }
    ]
  }
})
