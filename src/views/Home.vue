<template>
  <div class="home">
    <Hero/>
    <NewsSection/>
    <Announcements/>
    <Slogan/>
    <Profits/>
    <Slogan />

  </div>
</template>

<script>

import Hero from '@/components/home/Hero';
import NewsSection from '@/components/home/NewsSection';
import Announcements from '@/components/home/Announcements';
import Slogan from '@/components/home/Slogan';
import Profits from '@/components/home/Profits';

export default {
  name: 'Home',
  components: { Profits, Slogan, Announcements, NewsSection, Hero }
}
</script>
