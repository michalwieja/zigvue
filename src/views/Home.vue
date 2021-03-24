<template>
  <div class="home">
    <Hero/>
    <NewsSection :posts="post_list"/>
    <Announcements/>
    <Slogan/>
    <Profits/>
    <Motto/>
    <Newsletter/>
    <Footer/>
    <div @click="createUser">asdasdasd</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Footer from '@/components/Footer';
import Announcements from '@/components/home/Announcements';
import Hero from '@/components/home/Hero';
import Motto from '@/components/home/Motto';
import NewsSection from '@/components/home/NewsSection';
import Profits from '@/components/home/Profits';
import Slogan from '@/components/home/Slogan';
import Newsletter from '@/components/Newsletter';

export default {
  name: 'Home',
  components: { Newsletter, Footer, Motto, Profits, Slogan, Announcements, NewsSection, Hero },
  computed: {
    ...mapGetters('post', ['post_list']),
  },
  methods: {
    ...mapActions('post', ['getPostList']),
    ...mapActions('users', ['createUser']),
  },
  async mounted() {
    await this.getPostList();
  },
}
</script>
