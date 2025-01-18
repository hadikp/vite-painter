---
layout: home

hero:
  name: Fantasztikus festő blogom
  text: Bemutatom a képeimet
  tagline: Fedezzük fel együtt a színek világát
---
<script setup>
  
  import ArticleCard from "../.vitepress/theme/components/ArticleCard.vue"

  const cards = [
    {
        title: 'Bárnai templom',
        description: 'Üdvözöllek a festő blogomon! Itt majd megosztom veled festményeimet, kreatív gondolataimat és az elkészült alkotásaimat.',
        image: '/blog/images/temple.jpg',
        author: 'HadikP',
        date: '2024-12-11',
        path: '/blog/hu/article-1'
    },
    {
        title: 'Bárnai templom',
        description: 'Üdvözöllek a festő blogomon! Itt majd megosztom veled festményeimet, kreatív gondolataimat és az elkészült alkotásaimat.',
        image: '/blog/images/reggeli_kod.jpg',
        author: 'HadikP',
        date: '2024-12-11',
        path: '/blog/hu/article-1'
    }
  ]
  /* const cards = {
    en: [
      {
        title: 'Bárnai templom',
        description: 'Welcome to my art blog! Here I share my paintings, creative insights, and thoughts on art.',
        image: '/blog/images/temple.jpg',
        author: 'HadikP',
        date: '2024-12-11',
        path: '/blog/articles/en/article-1.md'
      } 
    ],
    hu: [
      {
        title: 'Bárnai templom',
        description: 'Üdvözöllek a festő blogomon! Itt majd megosztom veled festményeimet, kreatív gondolataimat és az elkészült alkotásaimat.',
        image: '/blog/images/temple.jpg',
        author: 'HadikP',
        date: '2024-12-11',
        path: '/blog/articles/hu/article-1.md'
      }
    ],
    de: [
      {
        title: 'Bárnai templom',
        description: 'Willkommen auf meinem Kunst-Blog! Hier teile ich Gemälde, kreative Einblicke und Gedanken zur Kunst.',
        image: '/blog/images/temple.jpg',
        author: 'HadikP',
        date: '2024-12-11',
        path: '/blog/articles/de/article-1.md'
      }
    ]
  }

  

  const supportedLanguages = ['en', 'hu', 'de']
  const defaultLanguage = 'en'

  //böngésző nyelvének lekérése
  const browserLanguage = navigator.language.split('-')[0]; // Csak a nyelvkód kell (pl. "en")
  const selectedLanguage = supportedLanguages.includes(browserLanguage) ? browserLanguage  : defaultLanguage
  console.log(browserLanguage)
  // Átirányítás, ha nem a megfelelő nyelvi útvonalon vagy
if (!window.location.pathname.startsWith(`/${selectedLanguage}/`)) {
  window.location.href = `/${selectedLanguage}/` + window.location.pathname.slice(1);
} */

</script>

<ArticleCard :cards="cards" />



<!-- const cardsData = [
  {
    image: '/blog/images/temple.jpg',
    title: 'Festmény 1 címe',
    description: 'Ez egy rövid leírás a Festmény 1-ről.',
    link: '/blog/artic
    
    les/article-1',
    author: 'HP'
  },
  {
    image: 'https://webaruhaz.napfenyes.hu/wp-content/uploads/2022/12/kis-herceg.jpg',
    title: 'Festmény 2 címe',
    description: 'Ez egy rövid leírás a Festmény 2-ről.',
    link: '/festmenyek/festmeny-2',
    author: 'HP'
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Festmény 3 címe',
    description: 'Ez egy rövid leírás a Festmény 3-ról.',
    link: '/festmenyek/festmeny-3',
    author: 'HP'
  }
]; 

 -->

