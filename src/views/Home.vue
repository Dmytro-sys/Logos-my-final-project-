<template>
  <div class="home">
    <Header />
    <MainArticle />
    <OurServices />
    <FeaturedArticles />
    <Partners />
    <Issue />
    <Interviews />
    <News />
    <Accordion />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
import MainArticle from '@/components/main-article-section/MainArticle.vue';
import OurServices from '@/components/our-services-section/OurServices.vue';
import FeaturedArticles from '@/components/featured-articles-section/FeaturedArticles.vue';
import Partners from '@/components/partners-section/Partners.vue';
import Issue from '@/components/issue-section/Issue.vue';
import News from '@/components/news-section/News.vue';
import Interviews from '@/components/interviews-section/Interviews.vue';
import Accordion from '@/components/accordion/Accordion.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    MainArticle,
    OurServices,
    FeaturedArticles,
    Partners,
    Issue,
    News,
    Interviews,
    Accordion,
  },
};
</script>
