<script setup>
</script>

<template>
  <div class="container py-4">
    <div class="row align-items-center">
      <!-- Videó -->
      <div class="col-md-6 mb-4 mb-md-0">
        <div class="video-wrapper">
          <video autoplay muted controls>
            <source src="@/assets/videos/gater.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <!-- Szöveg -->
      <div class="col-md-6 text-center text-md-start">
        <h2 class="display-5">Festmények amelyek mesélnek</h2>
        <p class="lead">Minden kép egy történet — nézd meg közelebbről.</p>
      </div>
    </div>

    <!-- Gombok -->
    <div class="row mt-5">
      <div class="col text-center">
        <p class="mb-4">Tovább a festményekhez vagy a bloghoz:</p>
        <div class="d-flex justify-content-center flex-wrap gap-3">
          <router-link to="/artWork" class="btn btn-outline-dark btn-lg">🎨 Festmények</router-link>
          <a class="btn btn-outline-dark btn-lg" href="/blog/index.html">✍️ Blog</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

a {
  transition: color 0.3s ease;
}

a:hover {
  color: #a0522d; /* pl. barna árnyalat*/
}
.video-wrapper {
  width: 100%;
  height: 50vh; /* Asztali nézet – arányos magasság */
}

.video-wrapper video {
  width: 100%;
  height: 100%;
  object-fit: contain; /* NE vágja le a tetejét */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background-color: black; /* ha letterbox lesz */
}

/* Mobil nézet – arányos videó */
@media (max-width: 768px) {
  .video-wrapper {
    height: auto;
    aspect-ratio: 16 / 9;
  }

  .video-wrapper video {
  width: 100%;
  height: 100%;
  object-fit: contain; /* NE vágja le a tetejét */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background-color: black; /* ha letterbox lesz */
}
}
</style>
