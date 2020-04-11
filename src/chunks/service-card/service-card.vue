<template>
  <div class="services__item">
    <div class="services__icon-wrap">
      <img class="services__icon" alt="">
    </div>
    <h4 class="services__title">{{ data.title }}</h4>
    <p class="services__text"></p>
  </div>
</template>

<script>
export default {
  props: ['id', 'data'],
};
</script>

<style lang="scss" scoped>
  @import './service-card.scss';
</style>
