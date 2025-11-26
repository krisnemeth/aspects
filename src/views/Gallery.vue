<script setup lang="ts">
import SectionWrapper from '../components/SectionWrapper.vue'
import ImageCarouselFullScreen from '../components/ImageCarouselFullScreen.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const galleryImages = [
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',
  // Add your image paths here
]
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full bg-gray-950 text-gray-200 min-h-screen">
    <Navbar />
    
    <SectionWrapper id="gallery">
      <div class="max-w-4xl w-full px-6">
        <h1 class="text-4xl font-bold text-white mb-8 text-center">Gallery</h1>
        
        <ImageCarouselFullScreen 
          :images="galleryImages"
          caption="Photo Gallery"
          :autoPlay="true"
          :autoPlayInterval="4000"
        />
      </div>
    </SectionWrapper>
    
    <Footer />
  </div>
</template>