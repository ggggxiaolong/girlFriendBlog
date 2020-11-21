module.exports = {
  title: "暖暖",
  description: "记录心情,聆听世界",
  dest:"./dist",
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      ("meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      }),
    ],
  ],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme: "reco",
  themeConfig: {
    type: 'blog',
    author: "暖暖",
    authorAvatar: '/avatar.png',
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    nav: [{ text: "动态", link: "/timeline/", icon: "reco-date" }],
    valineConfig: {
      appId: '8l3DIL0ks9LCORzXXbJJFBX3-gzGzoHsz',// your appId
      appKey: 'L9ciXM5awgYQNoW4UWf05mxo', // your appKey
      showComment: false,
      // visitor: true,
    },
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        // text: "Category", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        // text: "Tag", // 默认文案 “标签”
      },
    },
  },
  
  markdown: {
    lineNumbers: true
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
