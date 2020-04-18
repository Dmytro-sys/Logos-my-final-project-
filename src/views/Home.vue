<template>
  <div class="home">
    <MainArticle v-if="isLoaded" />
    <OurServices />
    <FeaturedArticles v-if="isLoaded"
    :tag="featuredSmallArticles"
    :tags="featuredLargeArticles" />
    <Clients />
    <Issue v-if="isLoaded" />
    <Interviews v-if="isLoaded" :tag="interviewsArticles" />
    <News v-if="isLoaded" :tag="newsArticles"/>
    <Accordion />
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
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      isLoaded: false,
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
  },
  methods: {
    ...mapMutations([
      'SET_LOADED',
    ]),
  },
  created() {
    this.$store.dispatch('blog/getFeatured').then(() => {
      this.isLoaded = true;
    });
    this.$store.dispatch('blog/getNews');
    this.$store.dispatch('blog/getIssue').then(() => {
      this.isLoaded = true;
    });
    this.$store.dispatch('blog/getinterviews');
  },
  computed: mapGetters('blog', [
    'newsArticles',
    'interviewsArticles',
    'featuredSmallArticles',
    'featuredLargeArticles',
  ]),
};

</script>
