<template>
  <div>
    <section class="interwievs">

      <div class="container">

        <div class="interwievs__wrap">

          <div class="interwievs__title">Interwievs</div>

          <div class="interwievs__small-card">

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

          </div> <!-- end interwievs__small-card -->

        </div> <!-- end interwievs__wrap -->

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
  @import './Interviews.scss';

</style>
