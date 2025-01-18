---
layout: home

hero:
  name: Mein fantastischer Maler-Blog
  text: Ich präsentiere meine Bilder
  tagline: Lassen Sie uns gemeinsam die Welt der Farben erkunden
---
<script setup>
  
  import ArticleCard from "../.vitepress/theme/components/ArticleCard.vue"

  const cards = [
    {
        title: 'Bárnai templom',
        description: 'Willkommen auf meinem Kunst-Blog! Hier teile ich Gemälde, kreative Einblicke und Gedanken zur Kunst.',
        image: '/blog/images/temple.jpg',
        author: 'HadikP',
        date: '2024-12-11',
        path: '/blog/de/article-1'
    },
    {
        title: 'Bárnai templom',
        description: 'Willkommen auf meinem Kunst-Blog! Hier teile ich Gemälde, kreative Einblicke und Gedanken zur Kunst.',
        image: '/blog/images/temple.jpg',
        author: 'HadikP',
        date: '2024-12-11',
        path: '/blog/de/article-1'
    }]

</script>

<ArticleCard :cards="cards" />
