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
        path: '/blog/en/startblog'
    },
    {
        title: 'Morning Mist',
        description: 'The story of my painting titled Morning Mist, my inspirations, the painting process, and the materials used',
        image: '/blog/images/reggeli_kod.jpg',
        author: 'HadikP',
        date: '2025-01-20',
        path: '/blog/en/mist'
    }, 
    {
        title: 'My Summer Exhibition',
        description: "I showcased three of my artworks: a painting inspired by the Paris Olympics, a pastel depicting Peru's Laguna 69, and an acrylic of lotus flowers.",
        image: '/blog/images/kiallitas.jpg',
        author: 'HadikP',
        date: '2025-01-28',
        path: '/blog/en/exhibition'
    }, 
    {
        title: 'My Early Works',
        description: "My Early Works – Three of my first artworks: a pastel turtle, a sunken church tower, and a Mediterranean gate in watercolor.",
        image: '/blog/images/collage.jpg',
        author: 'HadikP',
        date: '2025-02-08',
        path: '/blog/en/early_works'
    } 
  ]
    

</script>

<ArticleCard :cards="cards" />


