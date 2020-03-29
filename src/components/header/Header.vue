<template>
  <div>
    <header class="header">

        <div class="header__contaner">

            <div class="header__content">

                <div class="burger__menu">

                    <a href="#" class="burger__menu-button" id="js-menuBtn">

                        <span class="burger__menu-lines"></span>

                    </a>

                    <div class="burger__menu-list" id="js-menuList">

                        <ul class="menu__list">
                            <li class="menu__item">
                                <a href="#" class="menu__link">Home</a>
                            </li>
                            <li class="menu__item">
                                <a href="#" class="menu__link">Preferences</a>
                            </li>
                            <li class="menu__item">
                                <a href="#" class="menu__link">Contacts</a>
                            </li>
                            <li class="menu__item">
                                <a href="#" class="menu__link">About</a>
                            </li>
                            <li class="menu__item">
                                <a href="#" class="menu__link">Our blog</a>
                            </li>
                            <li class="menu__item">
                                <a href="#" class="menu__link">Map</a>
                            </li>
                            <li class="menu__item">
                                <a href="#" class="menu__link">Career</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div class="header__logo">

                    <img src="@/assets/images/Group 13.svg" class="header__image" alt="Suffix logo">

                </div>

            </div>

        </div>

    </header>
  </div>
</template>

<style lang="scss" scoped>
  @import './Header.scss';
</style>
