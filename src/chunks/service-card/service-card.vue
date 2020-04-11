<template>
  <div class="services__item">
    <div class="services__icon-wrap">
      <img class="services__icon" :src="icon" alt="">
    </div>
    <h4 class="services__title">{{ title }}</h4>
    <p class="services__text">{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'content', 'icon'],
};
</script>

<style lang="scss" scoped>
  @import './service-card.scss';
</style>
