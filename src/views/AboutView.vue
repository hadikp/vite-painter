<script setup>
import artist from './../assets/hadik.jpg'

</script>
<template>
  <div class="main-content">
  <div class="artist">
    <h1 class="">The Artist</h1>
    <img class="artist-photo" :src="artist">
  </div>
  <div class="artis-text">
      <p>Hadik Péter vagyok, magyar festő és rajzoló. Főállásban informatikusként dolgozom, korábban vegyészmérnök
         voltam. Hiszem, hogy mindenkinek meg kell találnia azt a tevékenységet,ami teljesen kikapcsolja és lelassítja.
          A rohanó mindennapokban elengedhetetlen, hogy legyen ilyen tevékenységünk. Számomra ez a festés és a
          kertészkedés. Amikor ecsetet ragadok,pár perc múlva egy teljesen más világba csöppenek. Amikor alkotok,
          megszűnik a külvilág, csak a vászon, a festék, a téma és én létezünk. A festés nem csupán a hobbim,
          hanem a szenvedélyem.
      </p>
      <p>Szívesen festek tájképeket és városok izgalmas utcáit. Kihívást látok minden aprólékosan kidolgozandó témában.
         Az anyag mindegy, lehet akril vagy pasztell, mindkettővel szívesen dolgozom. Képeimnél imádom, ahogy keverednek
         a színek a kezem alatt, és ahogy a különböző rétegek egyre izgalmasabbá teszik az alakokat. A témákban mindig
         az életet keresem, az én nézőpontomban egy csendélet is akkor szép, ha vibrál az élettől: a színek és fények
         játékától.
      </p>
      <p>Csodás érzés az elismerés. Ha egy vizuális, egy képi élmény, amit létrehoztam, másnak is tetszik, megveszi,
        és magával viszi az otthonába, büszkeség és boldogság tölt el. Minden kép átadásakor új lendületet kapok, hogy
        tovább kutassak új élmények, tájak, emberek, élőlények és történetek után, amiket megfesthetek és átadhatok talán
        Neked is.
      </p>
      <p>Remélem, ha ránézel a képeimre, Te is érzed a hangulatot, és átlépsz az én világomba. Amikor úgy döntesz,
        hogy szívesen kihelyeznéd a faladra valamelyik képemet, számomra hatalmas megtiszteltetés. Ezúton is köszönöm,
        hogy támogatod a szenvedélyemet.
      </p>
      <p>Lássuk a képeket!</p>
    </div>
  </div>
</template>

<style scoped>


.artist-photo {
  height: 20rem;
}
.main-content {
  display: flex;
} 
.artis-text {
  text-justify: auto;
}
  
</style>