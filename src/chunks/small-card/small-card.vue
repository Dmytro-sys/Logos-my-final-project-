<template>
  <li class="small-card__item">

    <div class="small-img__wrap">
      <div class="overlay"></div>
      <img :src="data.image ? data.image[0] : ''" alt="woman in yellow sports suit"
        class="small-card__img">
    </div>

    <div class="small-card__info">

      <time
      class="small-card__date"
      :datetime="data.publishDate"
      >
      {{ data.publishDate | formatDate }}
      </time>

      <a href="#" class="small-card__link">Lifestyle</a>

      <!-- <router-link :to="'/'">
        {{ $t(`label.${_getTag(data.categs)}`) }}
      </router-link> -->

      <p class="small-card__title">
        {{ data.title }}
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
  @import './small-card.scss';
</style>
