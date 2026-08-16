<!-- app/layouts/default.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import AppNav from '~/components/GlobalAppNav.vue'
import AppFooter from '~/components/GlobalAppFooter.vue'
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <div class="flex flex-col min-h-screen selection:bg-sky-500/10 selection:text-sky-600 bg-white">
    <!-- Automated Component Resolution: Renders your custom navbar menu row -->
    <AppNav />

    <!-- Page Content Slot Area -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Automated Component Resolution: Passing down fluid automated calendar values -->
    <AppFooter :year="currentYear" />
  </div>
</template>

<style>
/* Clean Global Canvas Overrides */
html,
body {
  width: 100% !important;
  overflow-x: hidden !important;
  background-color: #ffffff !important;
  color: #111827 !important;
  margin: 0 !important;
  padding: 0 !important;
  font-family: system-ui, -apple-system, sans-serif !important;
}

/* Enforces consistent vertical breathing padding across your enterprise sections */
section {
  padding-top: 6rem !important;
  padding-bottom: 6rem !important;
  display: block !important;
}
</style>
