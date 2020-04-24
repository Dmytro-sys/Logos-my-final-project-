<template>
  <li class="small-card__item">

    <div class="small-card__img-wrap">
      <div class="overlay"></div>
      <img :src="data.image ? data.image[0] : ''" alt="woman in yellow sports suit"
        class="small-card__img">
    </div>

    <div class="small-card__info">

      <div class="small-card__sub-info">
        <time
        class="small-card__date"
        :datetime="data.publishDate"
        >
        {{ data.publishDate | formatDate }}
        </time>

        <router-link
        class="small-card__link"
        :to="`/blog/?tag=${getTag(data.ref)}`">
        {{ getTag(data.ref) }}
        </router-link>
      </div>

      <p class="small-card__title">
        {{ data.title }}
        <router-link
        class="small-card__link-to-page"
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
  @import './small-card.scss';
</style>
