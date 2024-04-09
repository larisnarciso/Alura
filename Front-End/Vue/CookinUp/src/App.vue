<script lang="ts">
import Banner from './components/Banner.vue';
import ConteudoPrincipal from './components/ConteudoPrincipal.vue';
import Footer from './components/Footer.vue';

export default {
  components: { Banner, ConteudoPrincipal, Footer },
};
</script>

<template>
  <Banner />
  <ConteudoPrincipal />
  <Footer />
</template>
