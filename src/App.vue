<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="fo-container">
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

  <RouterView />

  <footer>
    <div class="footer-div">
      &copy; 2022-2023 Hadik-Art, all rights reserved
    </div>
  </footer>
</div>
</template>

<style scoped>
.fo-container{
  text-align: center;
  position: relative;
  
}
.nav{
  /* display: flex; */
  /* flex-direction: column; */
}
.nav-container{
  display: flex;
  position: relative;
  width: 100%;
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
    margin-top: 1rem;
    /* text-align: center;  */
}

@media (min-width: 1024px) {
  header {
    display: flex;
  }
}
</style>
