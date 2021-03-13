<template>
  <section class="news">
    <div class="news__title sub-title">
      Sporo się u nas dzieje. Bądź zawsze na bieżąco
    </div>
    <div class="news__cards">
      <div v-for="post in posts" :key="post.id" class="news__card">
        <div class="image">
          <img alt="photo">
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
import RequestFactory from '@/api/request';


export default {
  name: "NewsSection",
  components: { Button, ButtonReadMore },
  data() {
    return {
      media: [],
    }
  },
  props: {
    posts: {
      type: Object,
      required: true
    }
  },
  methods: {
    async getImage() {
      const res = await RequestFactory('wp-json/wp/v2/media/', {});
      this.media = res;
    },
  },
  async mounted() {
    await this.getImage();
  },
}
</script>
