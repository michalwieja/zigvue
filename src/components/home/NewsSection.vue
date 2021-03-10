<template>
  <section class="news">
    <div class="news__title sub-title">
      Sporo się u nas dzieje. Bądź zawsze na bieżąco
    </div>
    <div class="news__cards">
      <div v-for="index in 4" :key="index" class="news__card">
        <div class="image">
          <img src="@/assets/card.jpg" alt="photo">
        </div>
        <div class="description">
          <div class="date">
            08.01.2021
          </div>
          <div class="title">
            Zegarmistrzowska tradycja rodzinna
          </div>
          <ButtonReadMore/>
        </div>



      </div>
    </div>
    <Button  text="zobacz wszystkie"/>

  </section>
</template>

<script>
import ButtonReadMore from '@/components/ButtonReadMore';
import Button from '@/components/Button';
export default {
  name: "NewsSection",
  components: { Button, ButtonReadMore }
}
</script>
