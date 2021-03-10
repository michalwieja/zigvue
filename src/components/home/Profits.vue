<template>
  <div id="profits">
    <div class="profits">
      <div class="profits__title main-title main-title--blue">
        CO ZYSKUJESZ?
      </div>
      <div class="profits__cards">
        <div v-for="(card,index) in cards" :key="index" class="profits__card">
          <div class="title">
            {{ card.title }}
          </div>
          <div class="text">
            {{ card.text }}
          </div>
          <div class="arrow">
            <img alt="" src="@/assets/arrow-right.svg">
          </div>
        </div>
      </div>

    </div>
    <div class="relations">
      <div class="relations__image">
        <img alt="laura" src="@/assets/laura.png">
      </div>
      <div class="relations__content">
        <div class="relations__title main-title main-title--blue">
          Relacje są najważniejsze

        </div>
        <div class="relations__text">
          <p>Razem jesteśmy silniejsi i mamy większy wpływ nie tylko na świat biznesu. Wierzymy w
            skuteczność efektu synergii wiedzy, doświadczenia i odpowiedzialnego podejścia. To na
            nich budujemy przewagę naszych biznesów i Zagłębiowskiej Izby Gospodarczej.</p>
          <p>Dbam o jakość relacji w Zagłębiowskiej Izbie Gospodarczej. Poznam Cię z odpowiednimi
            ludźmi </p>
          <p>Paulina Piętowska Relationship Menager</p>
        </div>
        <Button text="Połączmy siły"/>
      </div>

    </div>
  </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  name: "Profits",
  components: { Button },
  data() {
    return {
      cards: [{
        title: "CENNE KONTAKTY",
        text: "Dołącz do społeczności, która tworzy biznes na Śląsku i w agłębiu. Zdobądź nowych klientów i poznaj dostawców rozwiązań dla Twojej firmy"
      }, {
        title: "INSPIRUJĄCE SPOTKANIA",
        text: "Szkolenia, warsztaty, spotkania, wspólne pasje. Tu znajdziesz inspiracje, motywację i odpowiednich partnerów"
      }, {
        title: "WIEDZA I DOŚWIADCZENIE",
        text: "Korzystaj z wiedzy innych, dziel się własnymi doświadczeniami. Razem budujmy wartość"
      },
      ]
    }
  }
}
</script>

<style scoped>

</style>
