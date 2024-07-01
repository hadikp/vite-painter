<script setup>
  import ajto from './../assets/drawings/ajto.jpg'
  import csatorna from './../assets/drawings/csatorna.jpg'
  import hegy from './../assets/drawings/hegy.jpg'
  import karacsony from './../assets/drawings/karacsony_2021.jpg'
  import fehervar from './../assets/drawings/szekesfehervar.jpg'
  import taj from './../assets/drawings/taj.jpg'
  import templom from './../assets/drawings/templom.jpg'
  import torony from './../assets/drawings/torony_toban.jpg'
  import tulipan from './../assets/drawings/tulipanok.jpg'

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
    height: 100%;
    width: 70rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  .image-container{
    width: 100%;
    margin-left: 5%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    /* repeat(3, 2fr) */
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

</style>