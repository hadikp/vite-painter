---
layout: home

hero:
  name: My Awesome Painting Blog
  text: Talking about my picture!
  tagline: Fedezd fel a színek világát
---
<script setup>
  
  import ArticleCard from "../blog/.vitepress/theme/components/ArticleCard.vue";

  const cards = [
    {
      title: 'Bárnai templom',
      description: 'Ez egy rövid leírás a Festmény 1-ről',
      image: '/blog/images/temple.jpg',
      author: 'HadikP',
      date: '2024-12-11',
      path: '/blog/articles/article-1'
    },
    {
      title: 'Reggeli köd',
      description: 'Ez egy rövid leírás a Festmény 2-ről',
      image: '/blog/images/reggeli_kod.jpg',
      author: 'HadikP',
      date: '2025-01-05',
      path: '/blog/articles/article-2'
    }
  ]

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

