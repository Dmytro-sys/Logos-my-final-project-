<template>
  <div>
    <section class="accordion" id="accordion">
      <div class="container">
        <div class="accordion__wrap">

          <div class="accordion__item"
          v-for="accord in accsections"
          :key="accord.id"
          v-bind="accord"
          >

            <h3 class="accordion__item-title"
            :class="{ active: accord.isActive }"
            v-on:click="accordion">
              {{ accord.title }}
            </h3>

            <p class="accordion__item-content">
              {{ accord.content }}
            </p>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  data() {
    return {
      accsections: [{
        id: 1,
        isActive: true,
        title: 'Title 1',
        content: `Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Asperiores,
        error delectus vel sapiente id dolores 
        inventore veniam ipsum, voluptatem sed aliquid,
        eaque laborum in ex necessitatibus commodi? 
        Fugiat, officiis rerum!`,
      },
      {
        id: 2,
        isActive: false,
        title: 'Title 2',
        content: `Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Asperiores,
        error delectus vel sapiente id dolores 
        inventore veniam ipsum, voluptatem sed aliquid,
        eaque laborum in ex necessitatibus commodi? 
        Fugiat, officiis rerum!`,
      },
      {
        id: 3,
        isActive: false,
        title: 'Title 3',
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
  methods: {
    accordion(event) {
      const matches = document.querySelectorAll('.accordion__item-title');
      /* eslint-disable */
      for (let i = 0; i < matches.length; i++) {
        matches[i].classList.remove('active');
      }
      event.target.classList.toggle('active');
    },
  },
};

</script>

<style lang="scss" scoped>
  @import './Accordion.scss';

</style>
