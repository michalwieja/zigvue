<template>
  <section class="news">
    <div class="news__title sub-title">
      Sporo się u nas dzieje. Bądź zawsze na bieżąco
    </div>
    <div class="news__cards">
      <div v-for="(card,index) in cards" :key="index" class="news__card">
        <div class="image">
          <img alt="photo" src="@/assets/card.jpg">
        </div>
        <div class="description">
          <div class="date">
            {{ card.date }}
          </div>
          <div class="title">
            {{ card.title }}
          </div>
          <ButtonReadMore/>
        </div>
      </div>
    </div>
    <Button text="zobacz wszystkie"/>

  </section>
</template>

<script>
import ButtonReadMore from '@/components/ButtonReadMore';
import Button from '@/components/Button';

export default {
  name: "NewsSection",
  components: { Button, ButtonReadMore },
  data() {
    return {
      cards: [{
        src: null,
        date: '08.01.2021',
        title: 'Zegarmistrzowska tradycja rodzinna'
      },
        {
          src: null,
          date: '07.01.2021',
          title: 'Rzemieślniku zgłoś się! Rusza akcja wspierająca niewielkie zakłady usługowe w Dąbrowie Górniczej'
        },
        {
          src: null,
          date: '06.01.2021',
          title: 'Zegarmistrzowska tradycja rodzinna'
        },
        {
          src: null,
          date: '05.01.2021',
          title: 'Zegarmistrzowska tradycja rodzinna'
        }]
    }
  }
}
</script>
