<template>
  <section class="hero">

    <div class="hero__image">
      <img src="@/assets/hero.jpg" alt="hero">
    </div>
    <div class="hero__wrapper">
      <div class="hero__content">
        <div class="hero__title title">TU SĄ
          MOŻLIWOŚCI
        </div>
        <div class="hero__text">Sukcesu w biznesie nie buduje się w pojedynkę, dlatego tworzymy
          społeczność, która daje wartość
        </div>
        <div class="button-wrapper">
          <Button color="light-blue" text="dołącz"/>
          <Button color="light-blue" text="więcej"/>
        </div>
        <div class="socials-wrapper">
          <div class="icon fb">
            <img src="@/assets/fb.svg" alt="facebook">
          </div>
          <div class="icon in">
            <img src="@/assets/in.svg" alt="linked in">
          </div>
        </div>
      </div>

    </div>
    <div class="hero__description">
      <div class="hero__description__title">
        Zegarmistrzowska tradycja rodzinna
      </div>
      <div class="hero__description__text">
        Dominik Sibielak. Dąbrowski zegarmistrz. Właściciel zakładu mieszczącego się w Dąbrowie
        Górniczej przy ul. Kasprzaka 1A. Pracowity człowiek, z pasją poświęcający się swoim
        zajęciom. Tchnie nowe życie w każdy zegarek, który klient mu przyniesie.
      </div>
      <ButtonReadMore color="light-blue" src="@/assets/arrow-right-light-blue.svg"/>
    </div>


  </section>
</template>

<script>
import ButtonReadMore from "@/components/ButtonReadMore";
import Button from "@/components/Button";

export default {
  name: "Hero",
  components: {Button, ButtonReadMore}
}
</script>
