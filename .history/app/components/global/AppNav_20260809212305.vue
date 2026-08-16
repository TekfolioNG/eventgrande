<template>
  <header class="border-b border-slate-100 bg-white/90 backdrop-blur sticky top-0 z-50 px-8 py-5">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-bold tracking-wider text-slate-900">
        PETABIZ <span class="text-sky-600 font-light text-sm tracking-normal">TECHNOLOGY</span>
      </NuxtLink>

      <nav class="flex gap-10 text-sm font-medium text-slate-500">
        <NuxtLink to="/products" class="hover:text-slate-950 transition" active-class="text-sky-600">Our Products
        </NuxtLink>
        <NuxtLink to="/services" class="hover:text-slate-950 transition" active-class="text-sky-600">Our Services
        </NuxtLink>
        <NuxtLink to="/training" class="hover:text-slate-950 transition" active-class="text-sky-600">Training</NuxtLink>
        <NuxtLink to="/defense" class="hover:text-slate-950 transition" active-class="text-sky-600">Defense</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-slate-950 transition" active-class="text-sky-600">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>
