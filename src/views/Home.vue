<template>
  <div class="home">
    <MainArticle />
    <OurServices />
    <FeaturedArticles />
    <Clients />
    <Issue />
    <Interviews />
    <News />
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

export default {
  name: 'Home',
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
};

</script>
