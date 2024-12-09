<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .py-4
        p Una campaña publicitaria es un plan estratégico a corto o mediano plazo que utiliza diversos canales de comunicación, como cine, prensa, radio, televisión, redes sociales, promociones y puntos de venta, para promocionar un producto, servicio o marca. Basada en la investigación, el #[em brief] y la identidad corporativa, busca alcanzar al público objetivo de manera efectiva. Modelos como el 360° y el 4D ayudan a diversificar los medios utilizados, garantizando una estrategia integral y coherente.
    .row.justify-content-center
      .col-lg-8.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La imagen expone un diagrama que detalla la estructura de una campaña publicitaria, dividiéndola en dos componentes principales: la estructura de la campaña y los modelos de campaña. La estructura incluye el <i>brief</i>, la descripción del producto o servicio, la línea de productos, el mercado objetivo y los elementos de identidad corporativa. Los modelos de campaña incluyen el Modelo 360°, el Modelo Saatchi & Saatchi, y el Modelo 4D de JWT. Este diagrama organiza y visualiza los elementos clave necesarios para desarrollar una campaña publicitaria efectiva, destacando tanto los aspectos estructurales como los enfoques estratégicos a considerar.")
    .row.justify-content-center
      .col-3
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
