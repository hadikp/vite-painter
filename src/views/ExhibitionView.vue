<script setup>

import etele1 from './../assets/paintings/etele1.jpg'
import etele2 from './../assets/paintings/etele2.jpg'
import mail_art1 from './../assets/paintings/mail_art1.jpg'
import mail_art2 from './../assets/paintings/mail_art2.jpg'


const images = [etele1, etele2, mail_art1, mail_art1]
const exhibitions = [
  {
    title: "Etele Pláza – Tehetségkutató kiállítás",
    date: "2024. augusztus 21–30.",
    location: "Budapest, Etele Pláza",
    description: "Az első kiállításom, ahol három festményem is kiállításra került. Számos látogatóval és pozitív visszajelzéssel zárult.",
    images: [etele1, etele2]
  },
  {
    title: "Görög–magyar mail art kiállítás",
    date: "2025. május 24-30.",
    location: "Athén, Görögország",
    description: "A kiállításra négy képeslap méretű munkámat küldtem el. A mail art egy nemzetközi projekt része volt, és megtiszteltetés volt a részvétel.",
    images: [mail_art1, mail_art2]
  }
];
</script>

<template>
  <div class="exhibitions-page">
    <h1 class="title">Kiállításaim</h1>
    <p class="intro">
      Az alábbiakban megtekintheted eddigi és közelgő kiállításaimat.<br />
      Minden alkalom egy lehetőség, hogy festményeim élőben is megszólaljanak.
    </p>

    <div class="exhibition" v-for="event in exhibitions" :key="event.title">
      <h2>{{ event.title }}</h2>
      <p class="details">{{ event.date }} – {{ event.location }}</p>
      <p class="description">{{ event.description }}</p>
      <div class="images" v-if="event.images && event.images.length">
        <img v-for="(img, index) in event.images" :key="index" :src="img" alt="Kiállítás képe" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.exhibitions-page {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  font-family: Georgia, serif;
  background-color: #fff;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.intro {
  text-align: center;
  margin-bottom: 2rem;
  color: #555;
}

.exhibition {
  margin-bottom: 3rem;
  border-top: 1px solid #ccc;
  padding-top: 1.5rem;
}

.details {
  font-style: italic;
  color: #777;
  margin-bottom: 0.5rem;
}

.description {
  margin-bottom: 1rem;
}

.images {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.images img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  max-height: 300px;
}
</style>
