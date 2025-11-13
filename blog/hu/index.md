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
    {
        title: 'Görög-Magyar Mail art kiállítás',
        description: 'Négy alkotásom a Mobil Bódé Galéria görög-magyar mail art kiállításán – magyar művek Athénban, görögök Budapesten.',
        image: '/blog/images/gorog.jpg',
        author: 'HadikP',
        date: '2025-04-25',
        path: '/blog/hu/exchibition_bode'
    },
    {
        title: 'Férfiakt szénnel',
        description: 'A3-as méretű szénrajz, amely egy meztelen férfit ábrázol, amint izmos testével egy asztalnak támaszkodik.',
        image: '/blog/images/nude.jpg',
        author: 'HadikP',
        date: '2025-05-28',
        path: '/blog/hu/nude'
    },
    {
        title: 'Akvarell sziklafal',
        description: 'Egy különleges várfal akvarellen: két ablakon át egy tengerpartra nyíló kilátás. A festmény a Jancsó Art Gallery nyilvános festésén készült.',
        image: '/blog/images/kofal.jpg',
        author: 'HadikP',
        date: '2025-07-30',
        path: '/blog/hu/jancso_art'
    },
    {
        title: 'Bárnai templom',
        description: 'Egy különleges pillanat akvarellben megörökítve: a bárnai templom színei és hangulata.',
        image: '/blog/images/church_barna.jpg',
        author: 'HadikP',
        date: '2025-08-12',
        path: '/blog/hu/church'
    },
    {
        title: '50 éves a kondor kör',
        description: 'A Kondor Kör 50 éves jubileumi kiállítása',
        image: '/blog/images/kondor.jpg',
        author: 'HadikP',
        date: '2025-09-17',
        path: '/blog/hu/kondor'
    },
  ]
  
</script>

<ArticleCard :cards="cards" />