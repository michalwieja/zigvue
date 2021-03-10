<template>
  <button :class="color" class="read-more">Czytaj więcej<img alt="arrow" src="@/assets/arrow-right.svg"></button>
</template>

<script>
export default {
  name: "ButtonReadMore",
  props: {
    color: {
      type: String,
      default: null,
    },
    src: {
      type: String,
      default: '@/assets/arrow-right.svg'
    }
  }
}
</script>
