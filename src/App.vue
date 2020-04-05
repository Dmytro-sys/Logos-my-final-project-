<template>
  <div id="app">
    <Header />
      <transition name="fade">
        <router-view />
      </transition>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};

</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
