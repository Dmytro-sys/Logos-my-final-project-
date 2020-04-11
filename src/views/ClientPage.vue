<template>
  <div class="client">
    <SingleClient />
  </div>
</template>

<script>
// @ is an alias to /src
import SingleClient from '@/components/single-client/SingleClient.vue';

export default {
  name: 'Home',
  components: {
    SingleClient,
  },
};

</script>
