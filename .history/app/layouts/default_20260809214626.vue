<!-- app/layouts/default.vue -->
<script setup>
import { computed } from 'vue';

// JavaScript runtime handling the dynamic current year safely
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <div class="flex flex-col min-h-screen selection:bg-sky-500/10 selection:text-sky-600 bg-white">
    <!-- Automated Component Resolution: Points to components/global/AppNavbar.vue -->
    <GlobalAppNavbar />

    <!-- Page Content Stream -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Automated Component Resolution: Points to components/global/AppFooter.vue -->
    <GlobalAppFooter :year="currentYear" />
  </div>
</template>
