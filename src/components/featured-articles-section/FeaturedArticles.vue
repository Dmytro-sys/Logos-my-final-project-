<template>
  <div>
    <section class="feautured">

      <div class="container">

        <div class="feautured__wrap">

          <h3 class="feautured__title">Featured</h3>

          <div class="feautured__large-cards">

            <ul class="large-card__list">
              <v-large-card
              :key="article.id"
              v-for="article in tags"
              v-bind="article"
              ></v-large-card>
            </ul>
          </div>

          <!-- start feautured__small-card -->

          <div class="feautured__small-card">

            <div class="small-card__wrap">

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

            </div> <!-- end small-card__wrap -->

          </div> <!-- end feautured__small-card -->

        </div> <!-- end feautured__wrap -->
      </div> <!-- end container -->
    </section>
  </div>
</template>

<script>
export default {
  props: ['tag', 'tags'],
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
@import './FeaturedArticles.scss';
</style>
