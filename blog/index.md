

  <!-- <meta http-equiv="refresh" content="0; url=http://localhost:5173/blog/en/" />  Átirányítás meta-taggel-->

  <script setup>
    // Böngésző nyelvének lekérése
    const userLang = navigator.language || navigator.userLanguage;

    // Nyelvi útvonalak definiálása
    const langRoutes = {
      'en': '/blog/en/',
      'hu': '/blog/hu/',
      'de': '/blog/de/'
    };

    // Alapértelmezett nyelvi útvonal (ha a böngésző nyelve nem található)
    const defaultLanguage = '/en/';

    // A nyelvi útvonal kiválasztása
    const redirectTo = Object.keys(langRoutes).find(lang => userLang.startsWith(lang)) || defaultLanguage;

    // Átirányítás a megfelelő nyelvi oldalra
    window.location.href = langRoutes[redirectTo];

</script>
