<script setup lang="ts">
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import Events from '../components/Events.vue';
import Footer from '../components/Footer.vue';
import HeaderSection from '../components/Header.vue';
import Navbar from '../components/Navbar.vue';
import Releases from '../components/Releases.vue';
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full bg-gray-950 text-gray-200 overflow-x-hidden">
    <Navbar />
    <HeaderSection />
    <Events />
    <Releases />
    <About />
    <Contact />
    <Footer/>
  </div>
</template>