<template>
  <button :class="color" class="read-more">Czytaj wiecej<img :src="src" alt="arrow"></button>
</template>

<script>
export default {
  name: "ButtonReadMore",
  props:['color','src']
}
</script>
