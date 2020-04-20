<template>
  <div class="home">
    <Loader v-if="loading" />
  <div v-else>
    <MainArticle />
    <OurServices />
    <FeaturedArticles
    :tag="featuredSmallArticles"
    :tags="featuredLargeArticles" />
    <Clients />
    <Issue />
    <Interviews :tag="interviewsArticles" />
    <News :tag="newsArticles" />
    <Accordion />
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainArticle from '@/components/main-article-section/MainArticle.vue';
import OurServices from '@/components/our-services-section/OurServices.vue';
import FeaturedArticles from '@/components/featured-articles-section/FeaturedArticles.vue';
import Clients from '@/components/clients-section/Clients.vue';
import Issue from '@/components/issue-section/Issue.vue';
import News from '@/components/news-section/News.vue';
import Interviews from '@/components/interviews-section/Interviews.vue';
import Accordion from '@/components/accordion/Accordion.vue';
import Loader from '@/chunks/loader/Loader.vue';
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      loading: true,
    };
  },
  components: {
    MainArticle,
    OurServices,
    FeaturedArticles,
    Clients,
    Issue,
    News,
    Interviews,
    Accordion,
    Loader,
  },
  methods: {
    ...mapMutations([
      'SET_LOADED',
    ]),
  },
  created() {
    this.$store.dispatch('blog/getFeatured').then(() => {
      this.$store.dispatch('blog/getNews').then(() => {
        this.$store.dispatch('blog/getIssue').then(() => {
          this.$store.dispatch('blog/getinterviews').then(() => {
            this.loading = false;
          });
        });
      });
    });
  },
  computed: mapGetters('blog', [
    'newsArticles',
    'interviewsArticles',
    'featuredSmallArticles',
    'featuredLargeArticles',
  ]),
};

</script>
