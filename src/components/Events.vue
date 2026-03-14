<script setup lang="ts">
import Section from './SectionWrapper.vue';
import Gig from './Gig.vue';
import GigDone from './GigDone.vue';
</script>

<template>
  <Section id="Events">
    <div class="flex flex-col items-center justify-center h-full w-full mx-auto max-w-3xl">
      <h1 class="text-2xl mb-4">2026</h1>
      <Gig venue="K-Központ" date="2026.04.11" time="19:00" artists="Final Inspection, The Last Day On Earth" ticketLink="Helyszínen"  />
      <Gig venue="Yippifeszt" date="2026.06.??" time="19:00" artists="????" ticketLink="????" />
    </div>
    <div class="flex flex-col items-center justify-center h-full w-full mx-auto max-w-3xl">
      <h1 class="text-2xl mb-4">2025</h1>
      <GigDone venue="Analog Music Hall" date="2025.12.12" time="19:00" artists="Atroposz" ticketLink="Helyszínen"  />
      <GigDone venue="Analog Music Hall" date="2025.09.19" time="18:00" artists="INSANE / Mirror / Pennhurst" ticketLink="Tixa" />
      <GigDone venue="Kaptár" date="2024.??.??" time="19:30" artists="Komodo" ticketLink="Tixa" />
      <GigDone venue="Barhole" date="2024.03.07" time="19:30" artists="Komodo" ticketLink="Tixa" />
    </div>
  </Section>
  
</template>