<script setup>
defineProps({
  year: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <footer class="border-t border-slate-100 bg-slate-50 py-12 px-6 text-sm text-slate-500">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div class="text-center md:text-left space-y-1">
        <p class="text-slate-700 font-medium">© {{ year }} Petabiz Nigeria Ltd. All Rights Reserved.</p>
        <p class="text-xs">4th Floor, MAN House, 77 Obafemi Awolowo Way, Ikeja, Lagos, Nigeria.</p>
      </div>
      <div class="flex gap-6 text-xs">
        <NuxtLink to="/solutions" class="hover:underline">Infrastructure Hub</NuxtLink>
        <NuxtLink to="/academy" class="hover:underline">Academy Portal</NuxtLink>
      </div>
    </div>
  </footer>
</template>
