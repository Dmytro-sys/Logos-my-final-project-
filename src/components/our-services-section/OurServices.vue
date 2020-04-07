<template>
  <div>
    <section class="services">

      <div class="container">

        <div class="services__wrap">

          <v-service-card
          :key="service.id"
          v-for="service in services"
          v-bind="service"
          >
          </v-service-card>

        </div> <!-- end services__wrap -->

      </div> <!-- end container -->

    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'services',
  computed: {
    ...mapState('services', ['services']),
  },
  created() {
    this.$store.dispatch('services/getServices');
  },
};
</script>

<style lang="scss" scoped>
  @import './OurServices.scss';

</style>
