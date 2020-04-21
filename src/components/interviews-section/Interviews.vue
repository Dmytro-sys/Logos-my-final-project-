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

              <router-link
              class="button see__all"
              v-bind="tag"
              :to="'/blog/?tag=interviews'">
              See all
              </router-link>

          </div> <!-- end interwievs__small-card -->

        </div> <!-- end interwievs__wrap -->

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
  @import './Interviews.scss';

</style>
