<template>
  <div class="home">
    <Hero/>
    <NewsSection/>
    <Announcements/>
    <Slogan/>
    <Profits/>
    <Motto />
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

export default {
  name: 'Home',
  components: { Newsletter, Footer, Motto, Profits, Slogan, Announcements, NewsSection, Hero }
}
</script>
