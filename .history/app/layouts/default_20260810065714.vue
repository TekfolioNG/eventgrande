<!-- app/layouts/default.vue -->
<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <div class="flex flex-col min-h-screen selection:bg-sky-500/10 selection:text-sky-600">
    <!-- Global Modular Header -->
    <GlobalAppNav />

    <!-- Page Content Stream -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Global Modular Footer with Dynamic Date -->
    <GlobalAppFooter :year="currentYear" />
  </div>
</template>
