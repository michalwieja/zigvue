<template>
  <div class="newsletter">
    <div class="question">
      Chcesz być na bieżąco? Zapisz się do newslettera
    </div>
    <input class="button light-blue" placeholder="Twój email" type="text">
    <Button color="light-blue" text="zapisz"/>
  </div>

</template>

<script>
import Button from '@/components/Button';

export default {
  name: "Newsletter",
  components: { Button }
}
</script>
