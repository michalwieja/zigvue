<template>
  <header class="header">
    <div class="header__logo">
      <img alt="logo" src="@/assets/zig-logo.svg">
    </div>
    <nav :class="{'active':hamburgerActive}" class="header__nav">
      <router-link class="header__link" to="/">ZIG</router-link>
      <router-link class="header__link" to="/about">Możliwości</router-link>
      <router-link class="header__link" to="/about">Perspektywy</router-link>
      <router-link class="header__link" to="/about">Wydarzenia</router-link>
      <router-link class="header__link header__link--join" to="/about">+DOŁĄCZ</router-link>
      <router-link class="header__link" to="/about">Kontakt</router-link>
      <div class="header__link header__link--phone">
        <img alt="phone" src="@/assets/phone-blue.svg">
        <a href="tel:505582720">505 582 720</a>
      </div>
    </nav>
    <div @click="hamburgerActive=!hamburgerActive" :class="{'active':hamburgerActive}" class="hamburger">
      <div class="hamburger__icon">
        <div class="hamburger__line"></div>
        <div class="hamburger__line"></div>
        <div class="hamburger__line"></div>
      </div>
      <div class="hamburger__text">MENU</div>

    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      hamburgerActive: false
    }
  }
}
</script>
