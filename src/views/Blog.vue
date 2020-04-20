<template>
  <div>
    <AllArticles />
  </div>
</template>

<script>
// @ is an alias to /src
import AllArticles from '@/components/all-articles/AllArticles.vue';

export default {
  name: 'Article',
  components: {
    AllArticles,
  },
};

</script>
