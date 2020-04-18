<template>
  <div>
    <section class="news">
      <div class="container">
        <div class="news__wrap">

          <div class="news__title">News</div>

          <div class="news__small-card">

            <div class="small-card__wrap--news">

              <ul class="small-card__list">

                <v-small-card
                :key="article.id"
                v-for="article in tag"
                v-bind="article"
                ></v-small-card>

              </ul>

              <div class="btn__wrap">
                <my-button>See all</my-button>
              </div>

              <!-- <router-link :to="'/blog/' + data.slug">{{
          $t("global.article-more")
        }}</router-link> -->

            </div> <!-- end small-card__wrap -->

          </div> <!-- end news__small-card -->

        </div> <!-- end news__wrap -->
      </div> <!-- end container -->
    </section>
  </div>
</template>

<script>
export default {
  props: ['tag'],
  // computed: {
  //   articlesByTag() {
  //     const articles = this.$store.state.blog.articleHome[
  //       this.tag.data.category
  //     ];
  //     if (this.ignoreFirst) return articles.splice(1);
  //     return articles;
  //   }
  // },
};
</script>

<style lang="scss" scoped>
  @import './News.scss';

</style>
