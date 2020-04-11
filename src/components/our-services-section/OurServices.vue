<template>
  <div>
    <section class="services">

      <div class="container">

        <div class="services__wrap">
          <h1>Hello</h1>

          <v-service-card
          :key="service.id"
          v-for="service of services"
          v-bind="service">
          </v-service-card>

          <pre>{{ services }}</pre>

        </div> <!-- end services__wrap -->
      </div> <!-- end container -->
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'services',
  computed: {
    ...mapState('services', ['services']),
  },
  methods: {
    ...mapActions('services', ['getServices']),
  },
  created() {
    this.getServices();
  },
};
</script>

<style lang="scss" scoped>
  @import './OurServices.scss';

</style>
