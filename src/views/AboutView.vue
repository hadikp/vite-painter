<script setup>
import artist from './../assets/hadik.jpg'
import { t, jsonArrToString, availableLanguages, setLanguage, currentLanguageCode } from '../locale/language'

//console.log(typeof(about[5]))

</script>
<template>
  <div class="main-content">
  <div class="artist">
    <h1 class="artist-title">The Artist</h1>
    <img class="artist-photo" :src="artist">
  </div>
  <div v-html="jsonArrToString"  class="artis-text"></div>
  </div>
</template>

<style scoped>


.artist-photo {
  height: 20rem;
  margin: 1rem;
}
.main-content {
  display: flex;
} 
.artist-title {
  margin-top: 1rem;
}
.artis-text {
  margin: 1rem;
  text-justify: auto;
  text-align: justify;
}

@media (max-width: 768px) {
  .main-content {
    flex-direction: column; /* Elemk egymás alá kerülnek */
    align-items: center; /* Középre igazítás */
  }
}
  
</style>