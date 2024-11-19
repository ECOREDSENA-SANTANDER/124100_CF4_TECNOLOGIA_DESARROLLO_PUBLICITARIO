<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    P Las campañas publicitarias son estrategias diseñadas para comunicar un mensaje claro y persuasivo a un público objetivo, con el fin de promover productos, servicios, ideas o incluso valores. En este video, exploraremos qué es una campaña publicitaria, cómo se estructura, cuáles son sus principales elementos y su importancia para lograr conexiones efectivas entre las marcas y los consumidores. A través de ejemplos y conceptos clave, comprenderás el impacto que tienen estas campañas en el mundo del #[em marketing] y la comunicación.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/1eJjSzqVAVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: ¿Qué es una campaña publicitaria?
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
