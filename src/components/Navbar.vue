<script setup lang="ts">
import { ref } from 'vue'
import Graf from '../assets/svg/ASPECTS-graf-feher.svg'
import Typo from '../assets/svg/ASPECTS-tipo-feher.svg'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const open = ref(false)
function toggle() {
  open.value = !open.value
}
function close() {
  open.value = false
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 w-full px-2 ">
    <div class="mx-auto max-w-3xl px-2 sm:px-6 lg:px-4 h-14 flex items-center justify-between border border-gray-200/50 rounded-2xl bg-gray-950 shadow-sky-600 shadow-2xl mt-4 md:mt-4">
      <RouterLink to="/" @click="close">
        <div class="flex flex-row items-center justify-between">
          <Graf class="w-10" /><Typo class="w-48 -translate-x-8" />
        </div>
      </RouterLink>
      

      <button class="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-gray-400 focus:outline-none focus:ring-0 focus:ring-gray-200 sm:hidden" aria-label="Toggle navigation" @click="toggle">
        <Bars3Icon v-if="!open" class="h-6 w-6" />
        <XMarkIcon v-else class="h-6 w-6" />
      </button>

      <div class="hidden sm:flex items-center gap-6 text-sm">
        <RouterLink to="/" class="text-slate-200 border-b border-transparent hover:border-b hover:border-gray-200 hover:translate-y-0" @click="close">Home</RouterLink>
        <RouterLink to="/#Events" class="text-slate-200 border-b border-transparent hover:border-b hover:border-gray-200 hover:translate-y-0" @click="close">Live</RouterLink>
        <RouterLink to="/#Releases" class="text-slate-200 border-b border-transparent hover:border-b hover:border-gray-200 hover:translate-y-0" @click="close">Releases</RouterLink>
        <RouterLink to="/#About" class="text-slate-200 border-b border-transparent hover:border-b hover:border-gray-200 hover:translate-y-0" @click="close">About</RouterLink>
        <RouterLink to="/gallery" class="text-slate-200 border-b border-transparent hover:border-b hover:border-gray-200 hover:translate-y-0" @click="close">Gallery</RouterLink>
        <RouterLink to="/#Contact" class="text-slate-200 border-b border-transparent hover:border-b hover:border-gray-200 hover:translate-y-0" @click="close">Contact</RouterLink>
      </div>
    </div>



    <!-- mobile navbar -->
     <!-- classes on next line for an extra border effect: sm:hidden border-t border-0.5 border-gray-200/20 duration-300 ease-in-out -->
    <div v-show="open" class="rounded-xl transition-all sm:hidden bg-gray-950 mx-0 mb-2 overflow-hidden duration-300 ease-in-out" :style="{ maxHeight: open ? '200px' : '0px' }">
      <div class="px-1 py-2 flex flex-col gap-2 text-sm">
        <RouterLink to="/" class="text-slate-200 hover:bg-gray-400 pb-1 border-b border-gray-200/20" @click="close">Home</RouterLink>
        <RouterLink to="/#Events" class="text-slate-200 hover:bg-gray-400 pb-1 border-b border-gray-200/20" @click="close">Events</RouterLink>
        <RouterLink to="/#Releases" class="text-slate-200 hover:bg-gray-400 pb-1 border-b border-gray-200/20" @click="close">Releases</RouterLink>
        <RouterLink to="/#About" class="text-slate-200 hover:bg-gray-400 pb-1 border-b border-gray-200/20" @click="close">About</RouterLink>
        <RouterLink to="/#Contact" class="text-slate-200 hover:bg-gray-400 pb-1" @click="close">Contact</RouterLink>
        <RouterLink to="/gallery" class="text-slate-200 hover:bg-gray-400 pb-1 border-b border-gray-200/20" @click="close">Gallery</RouterLink>
      </div>
    </div>
  </nav>
</template>