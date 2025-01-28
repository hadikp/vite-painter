import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //logo: '/logo.png',
  
  description: "You can read about my painting on my blog",
  base: '/blog/',
  /* vite: {
    plugins: [
      {
        name: 'inject-meta-tags',
        transformHtml: (html, { pageData }) => {
          // Ellenőrizzük, hogy van-e frontmatter
          const frontmatter = pageData?.frontmatter;
          console.log('PageData:', pageData); // Ellenőrizd a teljes `pageData` tartalmát
          console.log('Frontmatter:', frontmatter); // Ellenőrizd, hogy van-e `frontmatter`
          if (!frontmatter) {
            return html; // Ha nincs frontmatter, térjünk vissza az eredeti HTML-lel
          }
          // Ellenőrizzük, hogy vannak-e kulcsszavak
          const { keywords } = frontmatter;
          console.log('Keywords:', keywords); 
          let metaTags = '';
        
          if (keywords) {
            metaTags += `<meta name="keywords" content="${keywords.join(', ')}" />\n`;
          }
          // Helyettesítsük be a meta tag-eket, ha van mit
          return html.replace('</head>', `${metaTags}</head>`);
        }
      }
    ]
  }, */
  

 /*  themeConfig: {
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
      ]
    }, */

    /* sidebar: [
      {
        text: 'Setup',
        items: [
          {text: 'Installation', link: '/0-intall'},
          {text: 'Configuration', link: '/0-config'},
        ]
      }
    ], */

    search: {
      provider: 'local'
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      // { icon: 'twitter', link: 'https://github.com/vuejs/vitepress' },
    ],
    
  
  locales: {
    root: {
        title: 'My Painting Blog',
        label: 'English',
        lang: 'en',
        linkText: 'English',
        link: '/en/',
        
        themeConfig: {
          
          nav: [
            { text: 'Home', link: 'https://painting-3c7a8.web.app/artWork' }, // https://painting-3c7a8.web.app/
            { text: 'Blog', link: '../en/index/' }, 
            { text: 'Contact', link: '../en/kontact/' },
          ],
          footer: {
            // message: 'The content of this website is protected by copyright but may be used for personal or educational purposes with proper attribution.',
            copyright: 'Copyright © Hadik-Art 2025-present'
          },
          },
          
        },
    hu: {
        title: 'Festő blogom',
        label: 'Magyar',
        lang: 'hu',
        linkText: 'Magyar',
        link: '/hu/',
        themeConfig: {
          nav: [
            { text: 'Kezdőoldal', link: 'https://painting-3c7a8.web.app/artWork' }, // https://painting-3c7a8.web.app/
            { text: 'Blog', link: '../hu/index/' }, 
            { text: 'Kapcsolat', link: '../hu/kontact/' },
          ],
          footer: {
            copyright: 'Copyright © Hadik-Art 2025-present'
          },
        },
      },
    de: {
        title: 'Mein Maler-Blog',
        label: 'Deutsch',
        lang: 'de',
        linkText: 'Deutsch',
        link: '/de/',
        themeConfig: {
          nav: [
            { text: 'Startseite', link: 'https://painting-3c7a8.web.app/artWork' }, // https://painting-3c7a8.web.app/
            { text: 'Blog', link: '../de/index/' },
            { text: 'Kontakt', link: '../de/kontact/' },
          ],
          footer: {
            copyright: 'Copyright © Hadik-Art 2025-present'
          },
        },
      }
    },
    
  }
)
