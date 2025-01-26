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
        path: '/blog/hu/startblog.md'
    },
    {
        title: 'Reggeli köd',
        description: 'Reggeli köd című festményem története, inspirációim, a festés folyamata, és a felhasznált anyagok.',
        image: '/blog/images/reggeli_kod.jpg',
        author: 'HadikP',
        date: '2025-01-20',
        path: '/blog/hu/reggelikod'
    }
  ]
  
</script>

<ArticleCard :cards="cards" />