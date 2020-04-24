<template>
  <div>
    <section class='article' v-if='singleArticle'>

      <div class='article__wrap'>

        <div class='article__info'>

          <div class='article__info-top'>

             <time
             class='article__info-date'
             :datetime='singleArticle.publishDate'>
             {{ singleArticle.publishDate | formatDate }}
            </time>

            <router-link
            class='article__info-link'
            :to="`/blog/?tag=${getTag(singleArticle.ref)}`">
            {{ getTag(singleArticle.ref) }}
            </router-link>

          </div>

          <div class='article__info-title'>

            <h1 class='article__info-title-text'>
              {{ singleArticle.title }}
            </h1>

            <p class='article__info-subtitle-text'>
              {{ singleArticle.intro }}
            </p>

          </div>

        </div> <!-- end article__info -->

        <div class='article__image-wrap'>
          <div class='overlay'></div>
          <img
          :src="singleArticle.image ? singleArticle.image[0] : ''"
          class='article__img'
          alt=''>
        </div>

      </div> <!-- end article__wrap -->

      <div class="article__main-content">

        <div class="article__content"
        v-html="singleArticle.content"
        >
        </div>
        <router-link
          class='button go__back'
          :to="'/'">
          Home
        </router-link>

      </div>

    </section>
  </div>
</template>

<script>
import { mutt } from '@/store/blog';
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('blog', ['singleArticle']),
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit(`blog/${mutt.DEL_SINGLE_ARCTICLE}`);
    next();
  },
  methods: {
    ...mapActions('blog', ['getArticleBySlug']),
  },
  created() {
    this.getArticleBySlug(this.$route.params.slug);
  },
};
</script>

<style lang='scss' scoped>
  @import './SingleArticle.scss';
</style>
