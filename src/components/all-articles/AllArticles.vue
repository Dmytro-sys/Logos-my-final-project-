<template>
  <div>
    <section class='articles'>


      <div class='articles__wrap'>

        <div class='articles__baner'>
          <h2 class='articles__baner-text'>Articles</h2>
        </div>

        <div class='container'>

          <div class='articles__content'>

            <div class='articles__buttons'>

              <router-link
               class='articles__button button'
               :to="{ path: 'blog', query: { tag: tag.data.name } }"
               :key='tag.id'
               v-for='tag in tags'
               >
                {{ tag.data.name }}
              </router-link>

            </div>

            <div class="articles__list">
            <ul class="small-card__list">

                <v-small-card
                class="articles__item"
                :key="article.id"
                v-for="article in filteredArticles"
                v-bind="article"
                ></v-small-card>

              </ul>

              <router-link
              class='button go__back'
              :to="'/'">
              Home
              </router-link>
            </div>

          </div>
        </div> <!-- end container -->
      </div> <!-- end articles__wrap -->

    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('blog', ['tags', 'filteredArticles']),
  },
  beforeRouteUpdate(to, from, next) {
    this.articleRequest(to, next);
  },
  methods: {
    ...mapActions('blog', ['getArticlesByTag']),
    articleRequest(route, callback = () => {}) {
      this.getArticlesByTag({
        tagName: route.query.tag,
        isTagExist: 'tag' in route.query,
      }).then(callback);
    },
  },
  created() {
    this.articleRequest(this.$route);
  },
};
</script>

<style lang='scss' scoped>
  @import './AllArticles.scss';

</style>
