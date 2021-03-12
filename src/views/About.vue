<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import RequestFactory from '../api/request';

export default {
  data() {
    return {};
  },
  methods: {
    async getPosts() {
      const res = await RequestFactory('/api/get_recent_posts/', {
        params: {
          per_page: 1,
          page: 1,
          _embed: true,
        },
      });
      console.warn(res);
    },
  },
  async mounted() {
    await this.getPosts();
  },
};
</script>
