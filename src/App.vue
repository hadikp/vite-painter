<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { t, availableLanguages, setLanguage, currentLanguageCode } from './locale/language'
</script>

<template>
  <div class="main-container">
    <header>
      <div class="navigation">
        <nav class="nav-ul">
          <RouterLink class="nav-ul-li" to="/">Home</RouterLink>
          <RouterLink class="nav-ul-li" to="/about">About</RouterLink>
          <RouterLink class="nav-ul-li" to="/artWork">Art Work</RouterLink>
          <RouterLink class="nav-ul-li" to="/firebase">Firebase data</RouterLink>
          <RouterLink class="nav-ul-li" to="/exhibition">Exhibitions</RouterLink>
          <a class="nav-ul-li" href="/blog/index.html">Blog</a>
          <RouterLink class="nav-ul-li" to="/contact">Contact</RouterLink>
        </nav>
      </div>
      <select @change="setLanguage($event.target.value)" v-model="currentLanguageCode">
        <option v-for="lang in availableLanguages" :key="lang.code" :value="lang.code">
          {{ lang.name }}
        </option>
      </select>
      

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
  background-image: url(./assets/feher_hatter.png);
  background-size: cover;
  text-align: center;
  position: relative;
  
}
.navigation {
    font-family: Arial;
    /* top: 20px; */
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
.footer-div{
    /* background-color: #bbb; */
    color: orange;
    font-size: 1.5rem;
    position: absolute;
    /* flex-shrink: 0; */
    /* bottom: 0; */
    width: 100%;
    height: 2.5rem; 
    margin-top: 2rem;
    /* text-align: center;  */
}

@media (min-width: 1024px) {
  header {
    display: flex;
  }
}
</style>
