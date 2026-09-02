<!-- app/components/home/Cta.vue -->
<script setup>
import ctaImage from '~/assets/img/cta_eventgrande3.webp';
</script>

<template>
  <section class="w-full bg-amber-50 py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="grid grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/60 lg:grid-cols-2 lg:gap-0">
        <div class="order-1 h-72 w-full sm:h-96 lg:order-1 lg:h-full">
          <img :src="ctaImage" alt="Event Grande planner ready to bring your event to life"
            class="h-full w-full object-cover" loading="lazy">
        </div>

        <div class="order-2 px-6 py-12 text-center sm:px-10 lg:order-2 lg:px-16 lg:py-16 lg:text-left">
          <p class="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Let's Talk
          </p>
          <h2 class="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Ready to Plan Something Unforgettable?
          </h2>
          <p class="mx-auto mt-4 max-w-md text-lg text-slate-700 lg:mx-0">
            From intimate gatherings to grand corporate galas, let's turn your next event into a moment worth
            remembering.
          </p>
          <NuxtLink to="/contact"
            class="mt-8 inline-flex items-center rounded-full bg-amber-500 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60">
            Get Started Today
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>