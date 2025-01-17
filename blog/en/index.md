---
layout: home

hero:
  name: My Awesome Painting Blog
  text: I present my pictures
  tagline: Let's explore the world of colours together
---
<script setup>
  
  import ArticleCard from "../.vitepress/theme/components/ArticleCard.vue"
  import { useData } from 'vitepress'

  const cards =
    {
        title: 'Bárnai templom',
        description: 'Welcome to my art blog! Here I share my paintings, creative insights, and thoughts on art.',
        image: '/blog/images/temple.jpg',
        author: 'HadikP',
        date: '2024-12-11',
        path: '/blog/en/article-1.md'
    }
    
  /* const supportedLanguages = ['en', 'hu', 'de']
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


