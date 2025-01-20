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
        title: 'Erster Eintrag',
        description: 'Willkommen auf meinem Kunst-Blog! Hier teile ich Gemälde, kreative Einblicke und Gedanken zur Kunst.',
        image: '/blog/images/ecset.jpg',
        author: 'HadikP',
        date: '2025-01-13',
        path: '/blog/de/article-1'
    },
    {
        title: 'Morgendlicher Nebel',
        description: 'Die Geschichte meines Gemäldes mit dem Titel Morgendlicher Nebel, meine Inspirationen, der Malprozess und die verwendeten Materialien',
        image: '/blog/images/reggeli_kod.jpg',
        author: 'HadikP',
        date: '2025-01-20',
        path: '/blog/de/article-2'
    }]

</script>

<ArticleCard :cards="cards" />
