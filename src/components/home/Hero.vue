<template>
  <section class="hero">
    <div class="hero__content">
      <div class="hero__title main-title">TU SĄ
        MOŻLIWOŚCI
      </div>
      <div class="hero__text">Sukcesu w biznesie nie buduje się w pojedynkę, dlatego tworzymy
        społeczność, która daje wartość
      </div>
      <div class="button-wrapper">
        <Button color="light-blue" text="dołącz"/>
        <Button color="light-blue" text="więcej"/>

      </div>
<SocialWrapper/>
    </div>
    <div class="hero__image">
      <div class="hero__description">
        <div class="title">
          Zegarmistrzowska tradycja rodzinna
        </div>
        <div class="text">
          Dominik Sibielak. Dąbrowski zegarmistrz. Właściciel zakładu mieszczącego się w Dąbrowie
          Górniczej przy ul. Kasprzaka 1A. Pracowity człowiek, z pasją poświęcający się swoim
          zajęciom. Tchnie nowe życie w każdy zegarek, który klient mu przyniesie.
        </div>
        <ButtonReadMore color="light-blue" src="@/assets/arrow-right-light-blue.svg"/>
      </div>
    </div>
  </section>
</template>

<script>


import Button from '@/components/Button';
import ButtonReadMore from '@/components/ButtonReadMore';
import SocialWrapper from '@/components/SocialWrapper';

export default {
  name: "Hero",
  components: { SocialWrapper, ButtonReadMore, Button }
}
</script>
