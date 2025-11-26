<script setup lang="ts">
import { ref } from 'vue'
import LoadingScreen from './components/LoadingScreen.vue'

const isLoaded = ref(false)

function handleLoaded() {
  isLoaded.value = true
}
</script>

<template>
  <LoadingScreen @loaded="handleLoaded" />
  
  <main 
    :class="[
      'flex flex-col justify-center items-center w-full bg-gray-950 text-gray-200 overflow-x-hidden transition-opacity duration-1000',
      isLoaded ? 'opacity-100' : 'opacity-0'
    ]"
  >
    <RouterView />
  </main>

   
</template>


