<template>
  <div class="home">
    <Hero/>
    <NewsSection/>
    <Announcements/>

  </div>
</template>

<script>

import Hero from '@/components/home/Hero';
import NewsSection from '@/components/home/NewsSection';
import Announcements from '@/components/home/Announcements';

export default {
  name: 'Home',
  components: { Announcements, NewsSection, Hero }
}
</script>
