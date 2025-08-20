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
      text: '首页',link: '/'
    },
    {
      text: '快速入门',
      collapsed: false,
      items: [
        { text: 'Qt的安装',
          collapsed: true, 
          items:[
            { text: 'Qt界面', link: '/guide/getting-started'}
          ]
        },
        { text: '快速开始', link: '/guide/getting-started' },
        { text: 'qmake和cmake', link: '/guide/getting-started' },
        {
          text: 'Qt的专属数据结构',
          collapsed: false,
          items:[
            {text: 'QList', link: '/guide/getting-started'},
            {text: 'QString', link: '/guide/getting-started'},
          ]
        }
      ]
    },
    {
      text: 'Qt Core',
      collapsed: false,
      items: [
        { text: 'Qt Core 概览', link: '/core/Qt Core' },
        { text: '信号与槽', link: '/core/Qt Core' }
      ]
    },
    {
      text: 'Qt Widgets',
      collapsed: false,
      items: [
        { text: '桌面组件', link: '/widgets/QWidgets' },
        { text: '事件处理', link: '/widgets/QWidgets' }
      ]
    }
    ]
  },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/giligili612/Qt-Primer' }
    ]
  }
})
