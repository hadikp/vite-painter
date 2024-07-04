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
        </nav>
      </div>
    </header>
    <h1>
    {{ t.helloWorld }}
  </h1>
  <select @change="setLanguage($event.target.value)" v-model="currentLanguageCode">
    <option v-for="lang in availableLanguages" :key="lang.code" :value="lang.code">
      {{ lang.name }}
    </option>
  </select>
  <RouterView />

  <footer>
    <div class="footer-div">
      &copy; 2022-2023 Hadik-Art, all rights reserved
    </div>
  </footer>
</div>
</template>

<style scoped>
.main-container{
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
