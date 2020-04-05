<template>
  <div>
    <header class="header">
      <div class="header__container">
        <div class="header__content">

          <div class="burger__menu">

            <a href="#" class="burger__menu-button"
            :class="{ active }"
            @click="toogleActive">
              <span class="burger__menu-lines"></span>
            </a>

            <div class="burger__menu-list">
              <transition name="fade">
                <ul class="menu__list" v-if="active">
                  <li class="menu__item"
                  v-for="item in items"
                  :key="item.id"
                  @click="toogleActive"
                  >
                    <router-link
                    :to="item.path"
                    class="menu__link"
                    >
                    {{ item.name }}
                    </router-link>
                  </li>
                </ul>
              </transition>
            </div>

          </div>

          <div class="header__logo">

            <img src="@/assets/images/Group 13.svg" class="header__image" alt="Suffix logo">

          </div>

        </div> <!-- end header__content -->
      </div> <!-- end header__container -->
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      items: [{
        name: 'Home',
        path: '/',
        id: 1,
      },
      {
        name: 'Clients',
        path: '/client',
        id: 2,
      },
      {
        name: 'Blog',
        path: '/blog',
        id: 3,
      },
      ],
    };
  },
  methods: {
    go() {
      // this.$router.replace("/blog");
    },
    toogleActive() {
      this.active = !this.active;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import './Header.scss';

</style>
