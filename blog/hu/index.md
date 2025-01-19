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
        title: 'Első bejegyzés',
        description: 'Üdvözöllek a festő blogomon! Itt megosztom veled festményeimet, kreatív gondolataimat és az elkészült alkotásaimat.',
        image: '/blog/images/ecset.jpg',
        author: 'HadikP',
        date: '2025-01-13',
        path: '/blog/hu/article-1'
    },
    {
        title: 'Bárnai templom',
        description: 'Üdvözöllek a festő blogomon! Itt majd megosztom veled festményeimet, kreatív gondolataimat és az elkészült alkotásaimat.',
        image: '/blog/images/reggeli_kod.jpg',
        author: 'HadikP',
        date: '2025-01-20',
        path: '/blog/hu/article-2'
    }
  ]
  
</script>

<ArticleCard :cards="cards" />