<script setup lang="ts">
// no script required yet
const props = withDefaults(defineProps<{
  id?: string
}>(), {
  id: ''
});
</script>

<template>
  <div :id="props.id" class="flex flex-col w-full h-screen items-center justify-center px-6 pb-6">
    <slot />
  </div>
</template>



