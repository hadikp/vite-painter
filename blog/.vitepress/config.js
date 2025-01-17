import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //logo: '/logo.png',
  title: "My Painting Blog",
  description: "You can read about my painting on my blog",
  base: '/blog/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }, // https://painting-3c7a8.web.app/
      { text: 'Blog', link: '/blog/' }, //https://painting-3c7a8.web.app/
      { text: 'Contact', link: '' },
      {
        text: 'Dropdown Menu',
        items: [
          {text: 'Item A', link: '/item-1' },
          {text: 'Item B', link: '/item-2' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Setup',
        items: [
          {text: 'Installation', link: '/0-intall'},
          {text: 'Configuration', link: '/0-config'},
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      // { icon: 'twitter', link: 'https://github.com/vuejs/vitepress' },
    ],
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2025-present'
    }
  },
  locales: {
    root: {
        label: 'English',
        lang: 'en',
        linkText: 'English',
        link: '/en/'
        
      },
    hu: {
        label: 'Magyar',
        lang: 'hu',
        linkText: 'Magyar',
        link: '/hu/'
      },
    de: {
        label: 'Deutsch',
        lang: 'de',
        linkText: 'Deutsch',
        link: '/de/'
      }
    },
})
