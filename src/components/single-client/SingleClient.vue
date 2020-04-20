<template>
  <section class="client">

    <div class="client__wrap">

      <div class="client__baner">

        <div class="container">
          <div class="client__image-wrap">

            <img src="@/assets/images/Clients/Client-logo1.svg" class="client__img"
              alt="man in red hat and black sweater">

          </div>

          <div class="client__title">
            <h3 class="client__title-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              In ipsum debitis ullam praesentium, quaerat neque placeat optio
              libero omnis, consectetur fugit architecto atque cupiditate
              repellendus molestias officiis? Asperiores, est quasi.
            </h3>
          </div>

        </div> <!-- end container -->
      </div> <!-- end client__baner -->

      <div class="container">

        <div class="client__content">

          <h3 class="client__content-intro">Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.</h3>

          <p class="client__content-about">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia illo omnis ipsam maxime totam distinctio a quaerat est repudiandae, dolorem, ad
            qui veniam dolor placeat, nobis molestiae quam? Magnam voluptas quis facere ipsam at
            soluta harum enim itaque, perspiciatis ex et eligendi atque consectetur impedit
            accusamus. Sapiente natus excepturi enim eum atque? Asperiores quis ut laborum labore
            delectus exercitationem, quam qui reprehenderit error beatae repellat veniam sit vel
            inventore nostrum! Voluptas quas quae velit tempore. Dolores voluptas a quas voluptatem?
          </p>
          <h3 class="client__content-intro">Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.</h3>

          <p class="client__content-about">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia illo omnis ipsam maxime totam distinctio a quaerat est repudiandae, dolorem, ad
            qui veniam dolor placeat, nobis molestiae quam? Magnam voluptas quis facere ipsam at
            soluta harum enim itaque, perspiciatis ex et eligendi atque consectetur impedit
            accusamus. Sapiente natus excepturi enim eum atque? Asperiores quis ut laborum labore
            delectus exercitationem, quam qui reprehenderit error beatae repellat veniam sit vel
            inventore nostrum! Voluptas quas quae velit tempore. Dolores voluptas a quas voluptatem?
          </p>

          <router-link
          class='button go__back'
          :to="'/'">
          Home
          </router-link>

        </div>

      </div><!-- end container -->

    </div> <!-- end client__wrap -->
  </section>
</template>

<style lang="scss" scoped>
  @import './SingleClient.scss';

</style>
