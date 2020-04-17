<template>
  <div>
    <section class="services">
      <div class="container">
        <div class="services__wrap">

          <v-service-card
          v-for="service in services"
          :key="service.id"
          v-bind="service.data">
          </v-service-card>

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
