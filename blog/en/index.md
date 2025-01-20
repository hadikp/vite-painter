---
layout: home

hero:
  name: My Awesome Painting Blog
  text: I present my pictures
  tagline: Let's explore the world of colours together
---
<script setup>
  
  import ArticleCard from "../.vitepress/theme/components/ArticleCard.vue"

  const cards = [
    {
        title: 'First post',
        description: 'Welcome to my art blog! Here I share my paintings, creative insights, and thoughts on art.',
        image: '/blog/images/ecset.jpg',
        author: 'HadikP',
        date: '2025-01-13',
        path: '/blog/en/article-1'
    },
    {
        title: 'Morning Mist',
        description: 'The story of my painting titled Morning Mist, my inspirations, the painting process, and the materials used',
        image: '/blog/images/reggeli_kod.jpg',
        author: 'HadikP',
        date: '2025-01-20',
        path: '/blog/en/article-2'
    } ]
    
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


