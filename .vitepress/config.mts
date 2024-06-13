import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pure Math CN",
  description: "Pearson Edexcel International A Level Pure Mathematics 中文翻译",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '正文', link: '/content/pure1/chapter5' },
      { text: '习题答案', link: '/' }
    ],

    sidebar: [
      {
        text: 'Pure Math 1',
        items: [
          { text: 'Chapter5 一次函数', link: '/content/pure1/chapter5.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sheepbox8646/PureMathCN' }
    ],
  },
  markdown: {
    math: true
  }
})
