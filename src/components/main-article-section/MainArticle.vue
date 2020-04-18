<template>
  <div>
    <section class='baner' v-if="article">

      <div class='baner__wrap'>

        <div class='overlay'></div>

        <div class='baner__image-wrap'>

          <img
          :src="article.data.image ? article.data.image[0] : ''"
          class='baner__img'
          alt=''>

        </div>

        <div class='baner__info'>

          <div class='baner__info-top'>

             <time
             class='baner__info-date'
             :datetime="article.data.publishDate">
             {{ article.data.publishDate | formatDate }}
            </time>

            <router-link
            class='baner__info-link'
            :to="'/'">
            {{ getTag(article.data.ref) }}
            </router-link>

          </div>

          <div class='baner__info-title'>

            <h1 class='baner__info-title-text'>
              {{ article.data.title }}
            </h1>

            <p class='baner__info-subtitle-text'>
              {{ article.data.intro }}
            </p>

          </div>

          <div class='baner__info-button'>

            <router-link
            class="button main"
            :to="'/blog/' + article.data.slug"
            >Read more</router-link>

          </div>

        </div> <!-- end baner__info -->
      </div> <!-- end baner__wrap -->
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('blog', {
      article: 'mainArticle',
    }),
  },
};
</script>

<style lang='scss' scoped>
  @import './MainArticle.scss';
</style>
