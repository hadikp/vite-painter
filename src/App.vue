<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { t, availableLanguages, setLanguage, currentLanguageCode } from './locale/language'
/* import { ref } from "vue";

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
}; */

</script>

<template>
  <div class="main-container">
    <!-- <div class="menu-icon" @click="menuOpen = !menuOpen">
      ☰
    </div> -->
    <header>
      <!-- <div class="navigation" :class="{ 'open': menuOpen }"></div> -->
      <div class="navigation">
        <nav class="nav-ul">
          <RouterLink class="nav-ul-li" to="/">Home</RouterLink>
          <RouterLink class="nav-ul-li" to="/about">About</RouterLink>
          <RouterLink class="nav-ul-li" to="/artWork">Art Work</RouterLink>
          <RouterLink class="nav-ul-li" to="/firebase">Firebase data</RouterLink>
          <RouterLink class="nav-ul-li" to="/exhibition">Exhibitions</RouterLink>
          <a class="nav-ul-li" href="/blog/index.html">Blog</a>
          <RouterLink class="nav-ul-li" to="/contact">Contact</RouterLink>
        
          <select @change="setLanguage($event.target.value)" v-model="currentLanguageCode">
            <option v-for="lang in availableLanguages" :key="lang.code" :value="lang.code">
              {{ lang.name }}
            </option>
          </select>
        </nav>
      </div>
    </header>
  
  <RouterView />

  <footer>
    <div class="footer-div">
      &copy; 2024 Hadik-Art, all rights reserved
    </div>
  </footer>
</div>
</template>

<style scoped>
.main-container{
  text-align: center;
  /* position: relative; */
}
.navigation {
    font-family: Arial;
    font-size: 1rem;
    text-transform: uppercase;
  }
  .navigation ul li {
    list-style-type: none;
  }
  
  .nav-ul-li {
    color: #000;
    text-decoration: none;
    padding: 15px;
  }

  /* Menü ikon mobilhoz */
/* .menu-icon {
  display: none;
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
} */
.footer-div{
    color: orange;
    font-size: 1.5rem;
    position: absolute;
    width: 100%;
    height: 2.5rem; 
    margin-top: 2rem;
}


@media screen and (max-width: 768px) {
  .menu-icon {
    display: block; /* Mobilon megjelenik a menü ikon */
  }

  .navigation {
    display: none; /* Alapból rejtett mobilmenü */
    flex-direction: column;
    width: 100%;
    text-align: center;
  }

  /* Ha a `menuOpen` igaz, akkor megjelenik */
  .navigation.open {
    display: flex;
  }

  .nav-ul {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  .nav-ul-li {
    display: block;
    padding: 15px;
  }
}

</style>
