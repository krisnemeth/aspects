<script setup>
const Year = new Date().getFullYear()
</script>

<template>
  <footer class="h-24 w-full bg-gray-950 text-gray-200 border-t border-gray-800">
    <div class="flex flex-col items-center justify-center h-full space-y-4">
      <div class="flex items-center gap-6">
        <a href="https://www.facebook.com/aspectsHU/" aria-label="Facebook" class="text-gray-200 hover:text-fuchsia-500 transition text-xl">
          <i class="fab fa-facebook-f" />
        </a>
        <a href="https://www.instagram.com/aspectsband/" aria-label="Instagram" class="text-gray-200 hover:text-fuchsia-500 transition text-2xl">
          <i class="fab fa-instagram" />
        </a>
        <a href="https://www.youtube.com/@aspectsband" aria-label="YouTube" class="text-gray-200 hover:text-fuchsia-500 transition text-2xl">
          <i class="fab fa-youtube" />
        </a>
        <a href="https://www.tiktok.com/@aspectsband" aria-label="YouTube" class="text-gray-200 hover:text-fuchsia-500 transition text-xl">
          <i class="fab fa-tiktok" />
        </a>
      </div>
      <p class="text-xs text-gray-400">©Aspects Hungary {{ Year }}</p>
    </div>
  </footer>
</template>