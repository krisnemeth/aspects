<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import SectionWrapper from './SectionWrapper.vue'

const mobileBgUrl = new URL('../assets/images/TextureChemical.jpg', import.meta.url).href
const desktopBgUrl = new URL('../assets/images/TextureChemical.jpg', import.meta.url).href

const isDesktop = ref(false)

function updateIsDesktop() {
  if (typeof window === 'undefined' || !window.matchMedia) {
    isDesktop.value = false
    return
  }
  isDesktop.value = window.matchMedia('(min-width: 768px)').matches
}

let mql: MediaQueryList | null = null

onMounted(() => {
  updateIsDesktop()
  if (typeof window !== 'undefined' && window.matchMedia) {
    mql = window.matchMedia('(min-width: 768px)')
    // modern API
    if ('addEventListener' in mql) {
      mql.addEventListener('change', updateIsDesktop)
    } else {
      // fallback for older browsers
      (mql as any).addListener(updateIsDesktop)
    }
  }
})

onUnmounted(() => {
  if (!mql) return
  if ('removeEventListener' in mql) {
    mql.removeEventListener('change', updateIsDesktop)
  } else {
    (mql as any).removeListener(updateIsDesktop)
  }
})

const headerBgUrl = computed(() => (isDesktop.value ? desktopBgUrl : mobileBgUrl))
</script>

<template>
  <SectionWrapper id="Home">
    <div class="flex flex-col items-center justify-center w-full h-screen min-h-[60vh] bg-cover bg-center rounded-xl opacity-100 relative" :style="{ backgroundImage: `url(${headerBgUrl})` }">
      <!-- Black overlay with controlable opacity -->
      <div class="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
      
      <!-- Content (z-index to appear above overlay) -->
      <div class="relative z-10 flex flex-col items-center justify-center">
        <div>
          <iframe class="rounded-xl w-[346px] h-[200px] md:w-[750px] md:h-[400px] shadow-gray-950 shadow-2xl" src="https://www.youtube.com/embed/vhglgDtG3lc?si=8vbKnz3rlGfOVPWR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>
</style>