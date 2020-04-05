<template>
  <div>
    <section class="news">
      <div class="container">
        <div class="news__wrap">

          <div class="news__title">News</div>

          <div class="news__small-card">

            <div class="small-card__wrap--news">

              <ul class="small-card__list">

                <v-small-card></v-small-card>
                <v-small-card></v-small-card>
                <v-small-card></v-small-card>

              </ul>

              <div class="btn__wrap">
                <my-button>See all</my-button>
              </div>

            </div> <!-- end small-card__wrap -->

          </div> <!-- end news__small-card -->

        </div> <!-- end news__wrap -->
      </div> <!-- end container -->
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @import './News.scss';

</style>
