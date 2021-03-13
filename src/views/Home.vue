<template>
  <div class="home">
    <Hero/>
    <NewsSection :posts="posts"/>
    <Announcements/>
    <Slogan/>
    <Profits/>
    <Motto/>
    <Newsletter/>
    <Footer/>
  </div>
</template>

<script>

import Hero from '@/components/home/Hero';
import NewsSection from '@/components/home/NewsSection';
import Announcements from '@/components/home/Announcements';
import Slogan from '@/components/home/Slogan';
import Profits from '@/components/home/Profits';
import Motto from '@/components/home/Motto';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import RequestFactory from '@/api/request';

export default {
  name: 'Home',
  components: { Newsletter, Footer, Motto, Profits, Slogan, Announcements, NewsSection, Hero },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    async getPosts() {
      const res = await RequestFactory('wp-json/wp/v2/posts/', {
        params: {
          per_page: 10,
          page: 1,
          _embed: true,
        },
      });
      this.posts = res;
    },
  },
  async mounted() {
    await this.getPosts();
  },
}
</script>
