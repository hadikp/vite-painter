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
    },
    {
        title: 'Morning Fog - My Own Version',
        description: 'A reinterpretation of my painting Morning Fog and my creative experiences.',
        image: '/blog/images/my_mist.jpg',
        author: 'HadikP',
        date: '2025-02-12',
        path: '/blog/en/my_mist'
    },
    {
        title: 'Mediterranean Gate',
        description: 'A detailed watercolor painting capturing the enchanting atmosphere of a Mediterranean gate.',
        image: '/blog/images/kapu.jpg',
        author: 'HadikP',
        date: '2025-03-05',
        path: '/blog/en/gate'
    },
    {
        title: 'Mail Art Exhibition – Between Greece and Hungary',
        description: 'Four of my artworks are part of the Greek-Hungarian mail art show by Mobil Bódé Gallery — Hungarian pieces in Athens, Greek ones in Budapest.',
        image: '/blog/images/gorog.jpg',
        author: 'HadikP',
        date: '2025-04-25',
        path: '/blog/hu/exchibition_bode'
    },
    {
        title: 'Male Nude in Charcoal',
        description: 'An A3-sized charcoal drawing of a nude male figure leaning on a table, captured in a dynamic, half-turned pose.',
        image: '/blog/images/nude.jpg',
        author: 'HadikP',
        date: '2025-05-28',
        path: '/blog/en/nude'
    },
    {
        title: 'Male Nude in Charcoal',
        description: 'An A3-sized charcoal drawing of a nude male figure leaning on a table, captured in a dynamic, half-turned pose.',
        image: '/blog/images/kofal.jpg',
        author: 'HadikP',
        date: '2025-07-30',
        path: '/blog/en/jancso_art'
    },
  ]
    

</script>

<ArticleCard :cards="cards" />


