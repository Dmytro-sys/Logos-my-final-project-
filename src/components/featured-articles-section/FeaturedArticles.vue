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

              <router-link
              class="button see__all"
              v-bind="tag"
              :to="`/blog/?tag=${getTag(tag[0].data.ref)}`">
              See all
              </router-link>

            </div> <!-- end small-card__wrap -->
          </div> <!-- end feautured__small-card -->
        </div> <!-- end feautured__wrap -->
      </div> <!-- end container -->
    </section>
  </div>
</template>

<script>
export default {
  props: {
    tag: Array,
    tags: Array,
  },
};
</script>

<style lang="scss" scoped>
@import './FeaturedArticles.scss';
</style>
