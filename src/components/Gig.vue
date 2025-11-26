<script setup lang="ts">
const props = withDefaults(defineProps<{
  venue?: string,
    date?: string,
    time?: string,
    artists?: string,
    ticketLink?: string,
}>(), {
  venue: '',
    date: '',
    time: '',
    ticketLink: '',
});
</script>

<template>
  <div class="flex flex-col items-start justify-center border-t border-gray-200 w-full h-28 mb-4">
    <div class="flex flex-row w-full items-center justify-between">
        <h2 class="text-xl">{{ props.venue }}</h2>
        <h2 class="text-xl">{{ props.date }}</h2>
    </div>

    <div class="flex flex-row items-center justify-between w-full pt-1">
        <p class="text-sm text-gray-400">Kapunyitás:</p>    
        <p class="text-sm text-gray-400">{{ props.time }}</p>
    </div>
    <div class="flex flex-row items-center justify-between w-full pt-1">
        <p class="text-sm text-gray-400">Vendégek:</p>
        <p class="text-sm text-gray-400">{{ props.artists }}</p>
    </div>
    <div class="flex flex-row items-center justify-between w-full pt-1">  
        <p class="text-sm text-gray-400">Jegyek:</p>
        <p class="text-sm text-gray-400">{{ props.ticketLink }}</p>
    </div>
    
  </div>
  
</template>