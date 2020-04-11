<template>
  <div>
    <section class="services">
      <div class="container">
        <div class="services__wrap">

          <v-service-card
          v-for="service in services"
          :key="service.id"
          v-bind="service">
          </v-service-card>

        </div> <!-- end services__wrap -->
      </div> <!-- end container -->
    </section>
  </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex';

export default {
  name: 'services',
  data() {
    return {
      services: [{
        id: 1,
        icon: '/img/service1.206dbf7a.svg',
        title: 'Webdesign',
        content: `Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Asperiores,
        error delectus vel sapiente id dolores 
        inventore veniam ipsum, voluptatem sed aliquid,
        eaque laborum in ex necessitatibus commodi? 
        Fugiat, officiis rerum!`,
      },
      {
        id: 2,
        icon: '/img/service2.f531f93e.svg',
        title: 'Webdev',
        content: `Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Asperiores,
        error delectus vel sapiente id dolores 
        inventore veniam ipsum, voluptatem sed aliquid,
        eaque laborum in ex necessitatibus commodi? 
        Fugiat, officiis rerum!`,
      },
      {
        id: 3,
        icon: '/img/service3.3d63d248.svg',
        title: 'Marketing',
        content: `Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Asperiores,
      error delectus vel sapiente id dolores 
      inventore veniam ipsum, voluptatem sed aliquid,
      eaque laborum in ex necessitatibus commodi? 
      Fugiat, officiis rerum!`,
      },
      {
        id: 4,
        icon: '/img/service4.14b16c54.svg',
        title: 'UI/UX development',
        content: `Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Asperiores,
      error delectus vel sapiente id dolores 
      inventore veniam ipsum, voluptatem sed aliquid,
      eaque laborum in ex necessitatibus commodi? 
      Fugiat, officiis rerum!`,
      },
      {
        id: 5,
        icon: '/img/service5.3cca9628.svg',
        title: 'Quality control',
        content: `Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Asperiores,
      error delectus vel sapiente id dolores 
      inventore veniam ipsum, voluptatem sed aliquid,
      eaque laborum in ex necessitatibus commodi? 
      Fugiat, officiis rerum!`,
      },
      {
        id: 6,
        icon: '/img/service6.14de008d.svg',
        title: 'Web architect',
        content: `Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Asperiores,
      error delectus vel sapiente id dolores 
      inventore veniam ipsum, voluptatem sed aliquid,
      eaque laborum in ex necessitatibus commodi? 
      Fugiat, officiis rerum!`,
      },
      ],
    };
  },
  // computed: {
  //   ...mapState('services', ['services']),
  // },
  // methods: {
  //   ...mapActions('services', ['getServices']),
  // },
  // created() {
  //   this.getServices();
  // },
};

</script>

<style lang="scss" scoped>
  @import './OurServices.scss';

</style>
