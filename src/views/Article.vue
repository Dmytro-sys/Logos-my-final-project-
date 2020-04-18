<template>
  <div class="article">
    <SingleArticle />
  </div>
</template>

<script>
// @ is an alias to /src
import SingleArticle from '@/components/single-article/SingleArticle.vue';

export default {
  name: 'Article',
  components: {
    SingleArticle,
  },
};

</script>
