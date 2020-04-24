<template>
  <div>
    <section class="news">
      <div class="container">
        <div class="news__wrap">

          <div class="news__title">News</div>

          <div class="news__small-card">

              <ul class="small-card__list">

                <v-small-card
                :key="article.id"
                v-for="article in tag"
                v-bind="article"
                ></v-small-card>

              </ul>

              <router-link
              class="button see__all"
              v-bind="tag"
              :to="`/blog/?tag=${getTag(tag[0].data.ref)}`">
              See all
              </router-link>

          </div> <!-- end news__small-card -->

        </div> <!-- end news__wrap -->
      </div> <!-- end container -->
    </section>
  </div>
</template>

<script>
export default {
  props: {
    tag: Array,
  },
};
</script>

<style lang="scss" scoped>
  @import './News.scss';

</style>
