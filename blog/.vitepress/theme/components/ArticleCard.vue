<template>
    <div class="card-grid">
      <div v-for="(card, index) in cards" :key="index" class="card flex">
        <!-- <a :href="card.link"> -->
          <div class="media">
            <img :src="card.image" :alt="card.title" class="card-image" />
          </div>
          <h2 class="title">{{ card.title }}</h2>
          <p class="excerpt">{{ card.description }}</p>
          <h3 class="name">{{ card.author }}</h3>
          <div class="author">
            <a :href="card.link" class="card-link">Tovább</a>
            <div>
              
              <p class="date">{{ card.date }}</p>
            </div>
          </div>
        <!-- </a> -->
      </div>
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
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin-bottom: 1.5rem;
  overflow: hidden;
  width: 100%;
}
.card-image {
  width: 100%;
  height: auto;
  display: block;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  transition: ease-in-out 0.2s all;
}
.card-link {
  display: inline-block;
  margin: 12px 0;
  padding: 8px 16px;
  color: #fff;
  background: #007bff;
  border-radius: 4px;
  text-decoration: none;
}

.flex {
  display: flex;
}

.media {
  width: 45%;
  height: 100%;
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
