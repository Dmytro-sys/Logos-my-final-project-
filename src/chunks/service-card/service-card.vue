<template>
  <div class="services__item">
    <div class="services__icon-wrap">
      <img class="services__icon" :src="image" alt="">
    </div>
    <h4 class="services__title">{{ serviceTitle }}</h4>
    <p class="services__text">{{ serviceDescription }}</p>
  </div>
</template>

<script>
export default {
  props: {
    serviceTitle: String,
    serviceDescription: String,
    image: Array,
  },
};
</script>

<style lang="scss" scoped>
  @import './service-card.scss';
</style>
