<template>
    <div class="card-grid">
      <a :href="card.path" v-for="(card, index) in cards" :key="index" class="card">
        <div class="media">
            <img :src="card.image" :alt="card.title" class="card-image" />
        </div>
        <div class="card-content">
          <h2 class="title">{{ card.title }}</h2>
        <p class="excerpt">{{ card.description }}</p>
        <div class="author" >
          <h3 class="name">{{ card.author }}</h3>
          <div>
            <p class="date">{{ card.date }}</p>
          </div>
        </div>
        </div>
        </a>
    </div>
  
</template>

<!-- <template>
  <a :href="href" class="flex flex-shrink-0 xl:flex-grow-0 w-full xl:w-[38rem] p-3 border-2 rounded-2xl hover:border-sky-500">
      <div class="">
          <div class="flex w-full">
              <div class="flex flex-shrink-0">
                  <img class="rounded-2xl w-24 h-24 sm:w-48 sm:h-48 border-2" :src="image" :alt="title" />
              </div>
              <div class="flex flex-col ml-4">
                  <h3 class="w-full text-xl font-bold">{{ title }}</h3>
                  <small>{{ date }}</small>
                  <p>{{ excerpt }}</p>
              </div>
          </div>
      </div>
  </a>
</template> -->
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
  margin-bottom: 1.5rem;
  overflow: hidden;
  text-decoration: none;
  width: 100%;
}
.card-image {
  border-radius: 8px;
  min-height: 200px;
  height: auto;
  display: block;
  padding-right: 10px;
}

.card:hover {
  box-shadow: 0 0.9rem 1.2rem rgba(0, 0, 0, 0.25);
  transition: ease-in-out 0.2s all;
  transform: translateY(-5px) ;
}
-card-content {
  margin: 0.2rem;
}
/* .card-link {
  display: inline-block;
  margin: 12px 0;
  padding: 8px 16px;
  color: #fff;
  background: #007bff;
  border-radius: 4px;
  text-decoration: none;
} */

.flex {
  display: flex;
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

.name {
  margin: 0 0;
  font-size: 0.7rem;
  color: #999;
}
</style>
