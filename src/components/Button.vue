<template>
  <button :class="color" class="button">{{text}}</button>
</template>

<script>
export default {
name: "Button",
  props:['color','text']
}
</script>
