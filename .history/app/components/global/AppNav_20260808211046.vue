<template>
  <header class="border-b border-slate-100 bg-white/90 backdrop-blur sticky top-0 z-50 px-6 py-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-lg font-bold tracking-wider text-slate-900">
        PETABIZ <span class="text-sky-600 font-light text-sm tracking-normal">TECHNOLOGY</span>
      </NuxtLink>
      
      <nav class="flex gap-8 text-sm font-medium text-slate-500">
        <NuxtLink to="/" class="hover:text-slate-900 transition" active-class="text-sky-600">Home</NuxtLink>
        <NuxtLink to="/solutions" class="hover:text-slate-900 transition" active-class="text-sky-600">Solutions</NuxtLink>
        <NuxtLink to="/safety" class="hover:text-slate-900 transition" active-class="text-sky-600">Public Safety</NuxtLink>
        <NuxtLink to="/academy" class="hover:text-slate-900 transition" active-class="text-sky-600">Academy</NuxtLink>
        <NuxtLink to="/insights" class="hover:text-slate-900 transition" active-class="text-sky-600">Insights</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-slate-900 transition" active-class="text-sky-600">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>
