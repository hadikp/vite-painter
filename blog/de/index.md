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
        path: '/blog/de/startblog'
    },
    {
        title: 'Morgendlicher Nebel',
        description: 'Die Geschichte meines Gemäldes mit dem Titel Morgendlicher Nebel, meine Inspirationen, der Malprozess und die verwendeten Materialien',
        image: '/blog/images/reggeli_kod.jpg',
        author: 'HadikP',
        date: '2025-01-20',
        path: '/blog/de/mist'
    },
    {
        title: 'Meine Sommerausstellung',
        description: 'Ich stellte drei meiner Werke aus: ein Gemälde inspiriert von den Olympischen Spielen in Paris, ein Pastell der peruanischen Laguna 69 und ein Acrylbild von Lotusblumen.',
        image: '/blog/images/kiallitas.jpg',
        author: 'HadikP',
        date: '2025-01-20',
        path: '/blog/de/exhibition'
    },
    {
        title: 'Meine frühen Werke',
        description: "Meine frühen Werke – Drei meiner ersten Kunstwerke: eine Schildkröte in Pastell, ein versunkener Kirchturm und ein mediterranes Tor in Aquarell.",
        image: '/blog/images/collage.jpg',
        author: 'HadikP',
        date: '2025-02-08',
        path: '/blog/en/early_works'
    } 
  ]

</script>

<ArticleCard :cards="cards" />
