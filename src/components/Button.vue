<template>
  <button :class="color" class="button">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: {
      type: String,
      default: null
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
