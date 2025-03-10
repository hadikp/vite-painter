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
        path: '/blog/hu/startblog'
    },
    {
        title: 'Reggeli köd',
        description: 'Reggeli köd című festményem története, inspirációim, a festés folyamata, és a felhasznált anyagok.',
        image: '/blog/images/reggeli_kod.jpg',
        author: 'HadikP',
        date: '2025-01-20',
        path: '/blog/hu/mist'
    },
    {
        title: 'Nyári kiállításom',
        description: 'Három alkotásomat mutattam be: egy párizsi olimpia ihlette festményt, a perui Laguna 69-et ábrázoló pasztellt és egy lótuszokról készült akrillt',
        image: '/blog/images/kiallitas.jpg',
        author: 'HadikP',
        date: '2025-01-28',
        path: '/blog/hu/exhibition'
    },
    {
        title: 'Korai munkáim',
        description: 'Korai alkotásaim – Három első művem: egy pasztell teknős, egy elsüllyedt templomtorony és egy akvarell mediterrán kapu.',
        image: '/blog/images/collage.jpg',
        author: 'HadikP',
        date: '2025-02-08',
        path: '/blog/hu/early_works'
    },
    {
        title: 'Reggeli köd - saját verzió',
        description: 'A Reggeli köd című festményem újragondolása és az alkotói tapasztalataim.',
        image: '/blog/images/my_mist.jpg',
        author: 'HadikP',
        date: '2025-02-12',
        path: '/blog/hu/my_mist'
    },
    {
        title: 'Mediterrán kapu',
        description: 'Egy részletgazdag akvarell festmény születése, amely egy mediterrán kapu varázslatos hangulatát örökíti meg.',
        image: '/blog/images/kapu.jpg',
        author: 'HadikP',
        date: '2025-03-05',
        path: '/blog/hu/gate'
    },
  ]
  
</script>

<ArticleCard :cards="cards" />