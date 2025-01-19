<template>
  
    <div class="card-grid">
      <a :href="card.path" v-for="card in cards" :key="card.path" class="card">
        <div class="media">
            <img :src="card.image" :alt="card.title" class="card-image" />
        </div>
        <div class="card-content">
          <h2 class="title">{{ card.title }}</h2>
          <section class="card-description">{{ card.description }}</section>
          <h3 class="author-name">{{ card.author }}</h3>
          <div>{{ card.date }}</div>
        </div>
        </a>
    </div>
</template> 

<script setup>

  import { defineProps } from 'vue';

  const props = defineProps({
    cards: Array,
  })
</script>
<style scoped>

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}
.card {
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  display: flex;
  margin-bottom: 1rem;
  overflow: hidden;
  text-decoration: none;
  width: 100%;
}
.card-image {
  border-radius: 8px;
  min-height: 13rem;
  min-width: 10rem;
  height: auto;
  display: block;
  padding-right: 10px;
}
.card:hover {
  box-shadow: 0 0.9rem 1.2rem rgba(0, 0, 0, 0.25);
  transition: ease-in-out 0.2s all;
  transform: translateY(-5px) ;
}
.card-content {
  margin: 0;
}
.card-description {
  margin: 0.5rem 0;
}
.media {
  width: 45%;
  object-fit: cover;
  object-position: center;
}
.title {
  border-top: none;
  margin: 0 0;
}
.author-name {
  margin: 0 0;
  font-size: 1rem;
  color: #999;
}
</style>
