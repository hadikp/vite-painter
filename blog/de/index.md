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
    },
    {
        title: 'Morgendlicher Nebel - Meine eigene Version',
        description: 'Eine Neuinterpretation meines Gemäldes Morgendlicher Nebel und meine kreativen Erfahrungen.',
        image: '/blog/images/my_mist.jpg',
        author: 'HadikP',
        date: '2025-02-12',
        path: '/blog/en/my_mist'
    },
    {
        title: 'Mediterranes Tor',
        description: 'Ein detailliertes Aquarellgemälde, das die bezaubernde Atmosphäre eines mediterranen Tores einfängt.',
        image: '/blog/images/kapu.jpg',
        author: 'HadikP',
        date: '2025-03-05',
        path: '/blog/de/gate'
    },
    {
        title: 'Mail Art Ausstellung – Zwischen Griechenland und Ungarn',
        description: 'Vier Werke von mir sind Teil der griechisch-ungarischen Mail Art Ausstellung der Mobil Bódé Galerie – ungarische Kunst in Athen, griechische in Budapest.',
        image: '/blog/images/gorog.jpg',
        author: 'HadikP',
        date: '2025-04-25',
        path: '/blog/de/exchibition_bode'
    },
    {
        title: 'Männlicher Akt in Kohle',
        description: 'Eine Aktzeichnung in A3 mit Kohle, die einen muskulösen, halb abgewandten männlichen Körper zeigt, der sich auf einen Tisch stützt.',
        image: '/blog/images/nude.jpg',
        author: 'HadikP',
        date: '2025-05-28',
        path: '/blog/de/nude'
    },
    {
        title: 'Aquarell-Felswand',
        description: 'Eine besondere Burgmauer in Aquarell: durch zwei Fenster eröffnet sich der Blick auf eine Küstenlandschaft. Das Bild entstand während eines öffentlichen Mal-Events der Jancsó Art Gallery.',
        image: '/blog/images/kofal.jpg',
        author: 'HadikP',
        date: '2025-07-30',
        path: '/blog/de/jancso_art'
    },
  ]

</script>

<ArticleCard :cards="cards" />
