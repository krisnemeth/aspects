<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Graf from '../assets/svg/ASPECTS-teljes-logo-feher.svg'

const emit = defineEmits<{
  (e: 'loaded'): void
}>()

const logoVisible = ref(false)
const logoExpanding = ref(false)
const complete = ref(false)

onMounted(() => {
  // Fade in logo
  setTimeout(() => {
    logoVisible.value = true
  }, 300)

  // Start expanding
  setTimeout(() => {
    logoExpanding.value = true
  }, 1000)

  // Mark complete and emit
  setTimeout(() => {
    complete.value = true
    emit('loaded')
  }, 1800)
})
</script>

<template>
  <Transition name="fade">
    <div v-if="!complete" class="fixed inset-0 z-100 bg-gray-950 flex items-center justify-center">
      <div
        :class="[
          'transition-all duration-1000',
          logoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          logoExpanding ? 'scale-[100] opacity-0' : ''
        ]"
      >
        <Graf class="w-32 h-32" />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-leave-active {
  transition: opacity 0.5s ease-in;
}

.fade-leave-to {
   
  opacity: 0;
}
</style>