<script setup>
  import ajto from './../assets/drawings/ajto.jpg'
  import csatorna from './../assets/drawings/csatorna.jpg'
  import hegy from './../assets/drawings/hegy.jpg'
  import karacsony from './../assets/drawings/karacsony_2021.jpg'
  import fehervar from './../assets/drawings/szekesfehervar.jpg'
  import templom from './../assets/drawings/templom.jpg'
  import torony from './../assets/drawings/torony_toban.jpg'
  
  const images = [hegy, csatorna, ajto, karacsony, fehervar, templom, torony]

</script>
<template>
  <div class="container">
    <div class="image-container">
      <div class="image" v-for="image in images" :key="image">
        <img :src="image">
      </div>
    </div>
  </div>
  
</template>
<style scoped>
  .container{
    height: 90%;
    width: 70rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image-container{
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 5px;
  }
  .image-container div:first-child {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .image-container div:last-child {
    grid-row-start: 2;
    grid-row-end: 5;
  }
  .image{
    width: 100%;
    height: 20rem;
  }
  .image img {
    width: 100%;
    height: 100%;
  }

  /* Mobil nézethez */
@media (max-width: 768px) {
  .image-container {
    grid-template-columns: 1fr; /* Egy oszlopos elrendezés */
    gap: 10px;
  }

  .image-container div:first-child,
  .image-container div:last-child {
    grid-column-start: auto;
    grid-column-end: auto;
    grid-row-start: auto;
    grid-row-end: auto;
  }
}

</style>