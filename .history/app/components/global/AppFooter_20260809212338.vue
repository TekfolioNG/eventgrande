<script setup>
import { computed } from 'vue';
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="border-t border-slate-100 bg-slate-50 py-16 px-8 text-sm text-slate-500">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="text-center md:text-left space-y-1">
        <p class="text-slate-800 font-medium">© {{ currentYear }} Petabiz Nigeria Ltd. All Rights Reserved.</p>
        <p class="text-xs text-slate-400">4th Floor, MAN House, 77 Obafemi Awolowo Way, Ikeja, Lagos, Nigeria.</p>
      </div>
      <div class="flex gap-8 text-xs font-medium">
        <NuxtLink to="/services" class="hover:text-slate-900">Infrastructure Solutions</NuxtLink>
        <NuxtLink to="/training" class="hover:text-slate-900">Academy Portal</NuxtLink>
      </div>
    </div>
  </footer>
</template>
