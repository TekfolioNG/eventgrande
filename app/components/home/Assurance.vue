<!-- app/components/home/EmergencyService.vue -->
<script setup>
import bgImage from '~/assets/img/event-hero8.webp';

const features = ['On-Site First Aid', 'Expert Tailoring', 'Shoe Repair', 'Discreet & Immediate']
</script>

<template>
  <section class="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-slate-950 py-0">
    <img :src="bgImage" alt="Event Grande on-site emergency support"
      class="absolute inset-0 h-full w-full object-cover [object-position:50%_15%]" loading="lazy">
    <div class="absolute inset-0 bg-slate-950/55" />
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40" />

    <div class="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
      <p class="text-sm font-semibold uppercase tracking-widest text-amber-400">
        A Signature Touch
      </p>

      <h2
        class="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl hero-text-shadow">
        Event Emergency Services
      </h2>

      <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-100 hero-text-shadow">
        A stained outfit. A torn hem. A broken shoe, right in the middle of your celebration. Even a first-aid need.
        Our on-site team meets every challenge with a quick, discreet solution, so you and your guests can focus on
        enjoying the moment.
      </p>

      <div class="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-3">
        <span v-for="feature in features" :key="feature"
          class="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
          {{ feature }}
        </span>
      </div>

      <NuxtLink to="/services#support"
        class="mt-10 inline-flex items-center rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-slate-900 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60">
        Learn More
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.hero-text-shadow {
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.6);
}
</style>