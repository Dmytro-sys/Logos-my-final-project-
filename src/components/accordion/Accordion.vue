<template>
  <div>
    <section class="accordion" id="accordion">
      <div class="container">
        <div class="accordion__wrap">

          <div class="accordion__item"
          v-for="accord in accordionSections"
          :key="accord.id"
          v-bind="accord"
          >

            <h3 class="accordion__item-title"
            :class="{ active: accord.data.isActive }"
            v-on:click="accordion">
              {{ accord.data.title }}
            </h3>

            <div class="accordion__item-content"
            v-html="accord.data.content"
            >
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'accordion',
  computed: {
    ...mapState('accordion', ['accordionSections']),
  },
  methods: {
    ...mapActions('accordion', ['getAccordion']),

    accordion(event) {
      const matches = document.querySelectorAll('.accordion__item-title');
      /* eslint-disable */
      for (let i = 0; i < matches.length; i++) {
        matches[i].classList.remove('active');
      }
      event.target.classList.toggle('active');
    },
  },
    created() {
    this.getAccordion();
  },
};

</script>

<style lang="scss" scoped>
  @import './Accordion.scss';

</style>
