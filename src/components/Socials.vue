<script setup lang="ts">
// If you need these icons, install them or use Font Awesome instead
// For now, I'll use Font Awesome icons which you already have
</script>

<template>
  <div>
    <div class="fixed bottom-0 left-0 right-0 z-80 pointer-events-none">
      <div class="relative flex justify-between h-full mx-auto max-w-screen-2xl px-5">

        <!-- left-side -->
        <div class="flex flex-col items-center pointer-events-auto">
          <div class="w-6 h-6 mb-4">
            <a
              href="https://github.com/krisnemeth"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-500 hover:text-fuchsia-500 text-2xl"
            >
              <i class="fab fa-github hover:-translate-y-0.5 transition duration-200 ease-in-out"></i>
            </a>
          </div>
          
          <div class="w-0.5 bg-gray-500 h-32 mt-2"></div>
        </div>

        <!-- right-side -->
        <div class="flex flex-col items-center pointer-events-auto">
          <div class="mb-4 transform rotate-90 origin-center">
            <a
              href="mailto:aspectshungary@gmail.com"
              class="text-gray-500 hover:text-fuchsia-500 text-base -translate-y-50"
            >
              aspectshungary@gmail.com
            </a>
          </div>
          <div class="w-0.5 bg-gray-500 h-32 mt-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

