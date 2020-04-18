<template>
  <div>
    <section class="issues" v-if="issueArticles">
      <div class="container">
        <div class="issues__wrap">

          <div class="overlay"></div>

          <div class="issues__baner">

            <img class="issues__baner-img"
            :src="issueArticles.data.image ? issueArticles.data.image[0] : ''"
            alt="">

          </div>

          <div class="issues__info">

            <div class="issues__info-title"
            >{{issueArticles.data.title}}</div>

            <router-link
            class="button issue"
            :to="'/blog/' + issueArticles.data.slug"
            >Read more</router-link>

          </div>

        </div> <!-- end issues__wrap -->
      </div> <!-- end container -->
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('blog', ['issueArticles']),
  },
};
</script>

<style lang="scss" scoped>
  @import './Issue.scss';
</style>
