---
layout: home

hero:
  name: "My Awesome Blog"
  text: "Talking about my picture!"
  tagline: My great project tagline
---

<ArticleCard :cards="cardsData" />

<script setup>
  import ArticleCard from "../blog/.vitepress/theme/components/ArticleCard.vue";

const cardsData = [
  {
    image: '../public/images/temple.jpg',
    title: 'Festmény 1 címe',
    description: 'Ez egy rövid leírás a Festmény 1-ről.',
    link: '/blog/articles/article-1'
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Festmény 2 címe',
    description: 'Ez egy rövid leírás a Festmény 2-ről.',
    link: '/festmenyek/festmeny-2'
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Festmény 3 címe',
    description: 'Ez egy rövid leírás a Festmény 3-ról.',
    link: '/festmenyek/festmeny-3'
  }
];
</script>