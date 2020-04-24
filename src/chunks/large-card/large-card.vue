<template>
  <li class="large-card__item">

    <div class="large-card-img__wrap">
      <div class="overlay"></div>
      <img :src="data.image ? data.image[0] : ''" alt="man in suit on black background"
        class="large-card__img">
    </div>

    <div class="large-card__info">

      <div class="large-card__sub-info">
        <time
        class="large-card__date"
        :datetime="data.publishDate"
        >
        {{ data.publishDate | formatDate }}
        </time>

        <router-link
        class="large-card__link"
        :to="`/blog/?tag=${getTag(data.ref)}`">
        {{ getTag(data.ref) }}
        </router-link>

      </div>

      <h3 class="large-card__title">
        {{ data.title }}
      </h3>
      <p class="large-card__subtitle">
        {{ data.intro }}
        <router-link
        :to="'/blog/' + data.slug"
        >Read more</router-link>
      </p>

    </div>

  </li>
</template>

<script>
export default {
  props: {
    id: String,
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
  @import './large-card.scss';
</style>
