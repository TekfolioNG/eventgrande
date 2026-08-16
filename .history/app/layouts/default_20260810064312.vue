<!-- app/layouts/default.vue -->
<script setup>
import { computed } from 'vue'
import AppNav from '~/components/GlobalAppNav.vue'
import AppFooter from '~/components/GlobalAppFooter.vue'

// JavaScript runtime handling the dynamic current year
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <div class="flex flex-col min-h-screen selection:bg-sky-500/10 selection:text-sky-600">
    <!-- Global Modular Header -->
    <AppNav />

    <!-- Page Content Stream -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Global Modular Footer with Dynamic Date -->
    <AppFooter :year="currentYear" />
  </div>
</template>
