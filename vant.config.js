module.exports = {
  name: 'jf-ui',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/jf-ui/',
    },
  },
  site: {
    title: 'jf-ui',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
        ],
      },
    ],
  },
};