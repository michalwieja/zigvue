<template>

<div class="announcements">
  <div class="announcements__title sub-title">
    Najnowsze komunikaty
  </div>
  <div class="announcements__cards">
    <div v-for="index in 4" :key="index" class="announcements__card">
      <div class="title">
        Zmiany przepisów dotyczących małego ZUSu Plus weszły w życie 1 lutego 2020r.
      </div>
      <ButtonReadMore/>
    </div>
  </div>
</div></template>

<script>
import ButtonReadMore from '@/components/ButtonReadMore';
export default {
name: "Announcements",
  components: { ButtonReadMore }
}
</script>
