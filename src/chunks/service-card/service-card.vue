<template>
  <div class="services__item">
    <div class="services__icon-wrap">
      <img class="services__icon" :src="data.image ? data.image[0] : ''" alt="">
    </div>
    <h4 class="services__title">{{ data.title }}</h4>
    <p class="services__text">Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Doloribus laudantium
      ullam minima tempore aliquam quod, molestias quae!
      Dolor, eaque quam.</p>
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
