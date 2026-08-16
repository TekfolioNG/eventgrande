<!-- app/layouts/default.vue -->
<script setup>
import { computed } from 'vue';
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <div class="flex flex-col min-h-screen selection:bg-sky-500/10 selection:text-sky-600 bg-white">
    <AppNavbar />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter :year="currentYear" />
  </div>
</template>
