<template>
  <li class="large-card__item">

    <div class="large-card-img__wrap">
      <div class="overlay"></div>
      <img :src="data.image ? data.image[0] : ''" alt="man in suit on black background"
        class="large-card__img">
    </div>

    <div class="large-card__info">

      <time
      class="large-card__date"
      :datetime="data.publishDate"
      >
      {{ data.publishDate | formatDate }}
      </time>

      <a href="#" class="large-card__link">Lifestyle</a>

       <!-- <router-link :to="'/'">
        {{ $t(`label.${_getTag(data.categs)}`) }}
      </router-link> -->

      <h3 class="large-card__title">
        {{ data.title }}
      </h3>
      <p class="large-card__subtitle">
        {{ data.intro }}
      </p>

      <!-- <div class="cms" v-html="data.intro"></div>

        <router-link :to="'/blog/' + data.slug">{{
          $t("global.article-more")
        }}</router-link> -->

    </div>

  </li>
</template>

<script>
export default {
  props: ['id', 'data'],
};
</script>

<style lang="scss" scoped>
  @import './large-card.scss';
</style>
