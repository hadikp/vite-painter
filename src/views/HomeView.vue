<script setup>
</script>

<template>
  <div class="about">
    <h1 class="p-3 mb-2 bg-warning text-dark">This is a home page</h1>
  </div>
  <!--<div class="container">
     <div class="video-container">
      <video width="100%" height="auto" autoplay muted controls>
        <source src="@/assets/videos/gater.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="text-container">
      <h2>Szöveg címe</h2>
      <p>Ez a szöveg a videó mellett jelenik meg. Írhatsz bármit ide.</p>
    </div> 
  </div> -->

</template>

<style>

.container {
  display: flex;         /* Flexbox elrendezés */
  justify-content: space-between;  /* A tartalom közötti távolság */
  align-items: center;   /* Vertikális középre igazítás */
}

.video-container {
  flex: 1;               
  margin-right: 20px; /* Távolság a videó és a szöveg között */
  width: 100%;
  height: 100vh;
  overflow: hidden;     
}

.text-container {
  flex: 1;               
}

/* .video-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

video {
  width: 100%;
  height: 90%;
  object-fit: contain;
} */
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
