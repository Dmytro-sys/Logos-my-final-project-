<template>
  <div>
    <section class="accordion" id="accordion">
      <div class="container">
        <div class="accordion__wrap">

          <div class="accordion__item">

            <h3 class="accordion__item-title active" v-on:click="accordion">
              At vero eos vet
            </h3>

            <p class="accordion__item-content">
              Кто, по-вашему, этот мощный старик? Не говорите, вы не можете этого знать.
              Это — гигант мысли, отец русской демократии и особа, приближенная к императору.
            </p>

          </div>

          <div class="accordion__item">

          <h3 class="accordion__item-title" v-on:click="accordion">
            At vero eos vet
          </h3>

          <p class="accordion__item-content">
            Кто, по-вашему, этот мощный старик? Не говорите,
             вы не можете этого знать. Это — гигант
            мысли, отец русской демократии и особа, приближенная к императору.
          </p>

          </div>

          <div class="accordion__item">

          <h3 class="accordion__item-title" v-on:click="accordion">
            At vero eos vet
          </h3>

          <p class="accordion__item-content">
            Кто, по-вашему, этот мощный старик? Не говорите,
             вы не можете этого знать. Это — гигант
            мысли, отец русской демократии и особа, приближенная к императору.
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
    return {};
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
