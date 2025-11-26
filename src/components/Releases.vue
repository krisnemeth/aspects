<script setup lang="ts">
import Section from './SectionWrapper.vue';
</script>

<template>
  <Section id="Releases">
    <div class="flex flex-col items-center justify-center h-full w-full mx-auto max-w-3xl">
    <h2 class="text-gray-200 text-2xl mb-4">Latest Releases</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <div class="flex flex-col w-full h-full p-2">
        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4eA5sEMZcClOeql09HTEjO?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="flex flex-col w-full h-full p-2">
        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3kjzRtLnAf1WcLS3Lofrmg?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
    </div>
  </Section>
  
</template>