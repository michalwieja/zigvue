<template>
  <footer class="footer">
    <div class="column">
      <div class="logo row">
        <img alt="logo" src="@/assets/zig-logo-white.svg">
      </div>
      <div class="row">
        <img src="@/assets/location.svg" alt="location">
        <span class="text">
          Sienkiewicza 6a, p.107, I piętro
          41-300 Dąbrowa Górnicza
        </span>
      </div>
      <a href="mailto:biuro@zig.org.pl" class="row">
        <img src="@/assets/email.svg" alt="email">
        <span class="text">
          biuro@zig.org.pl
        </span>
      </a>
      <a href="tel:505 582 720" class="row">
        <img src="@/assets/call.svg" alt="phone">        <span class="text">
          505 582 720
        </span>
      </a>
      <SocialWrapper/>
    </div>

    <div class="column">
      <img  class="map" alt="map" src="@/assets/map.png">
    </div>
  </footer>
</template>

<script>
import SocialWrapper from '@/components/SocialWrapper';

export default {
  name: "Footer",
  components: { SocialWrapper }
}
</script>

<style scoped>

</style>
