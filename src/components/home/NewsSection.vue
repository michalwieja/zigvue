<template>
  <section class="news">
    <div class="news__title sub-title">
      Sporo się u nas dzieje. Bądź zawsze na bieżąco
    </div>
    <div class="news__cards">
      <div v-for="post in posts" :key="post.id" class="news__card">
        <div class="image">
          <img alt="photo" :src="post.media.guid.rendered" v-if="post.media">
        </div>
        <div class="description">
          <div class="date">
            {{ post.date }}
          </div>
          <div class="title">
            {{ post.title.rendered }}
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
  props: {
    posts: {
      type: Object,
      required: true
    }
  },
}
</script>
