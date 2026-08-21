<!-- app/components/products/Hero.vue -->
<script setup>
import bgImage from '~/assets/img/networkcables2.webp'
</script>

<template>
  <section class="relative flex min-h-[640px] w-full flex-col lg:flex-row">
    <div class="relative order-2 flex w-full items-center bg-slate-900 px-6 py-14 lg:order-1 lg:w-[45%] lg:px-14 lg:py-16 xl:px-20">
      <div class="w-full max-w-xl">
        <nav aria-label="Breadcrumb" class="mb-6 mt-2 lg:mt-0">
          <ol class="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-400">
            <li>
              <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
            </li>
            <li aria-hidden="true">/</li>
            <li class="text-white">Our Products</li>
          </ol>
        </nav>

        <p class="text-sm font-semibold uppercase tracking-widest text-sky-400">
          Our Products
        </p>
        <h1 class="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Powering Enterprise Innovation with Trusted Technology
        </h1>
        <p class="mt-6 text-lg text-slate-300">
          Converged infrastructure and enterprise networking, delivering authentic OEM solutions from Oracle, Hitachi, Dell EMC, and other global leaders.
        </p>
      </div>
    </div>

    <div class="relative order-1 h-72 w-full sm:h-96 lg:order-2 lg:h-auto lg:w-[55%]">
      <img
        :src="bgImage"
        alt="Enterprise networking infrastructure"
        class="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchpriority="high"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

      <div class="absolute inset-x-0 bottom-0 flex justify-center pb-8 lg:justify-end lg:pr-10 xl:pr-14">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur transition-colors hover:bg-white hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
        >
          Talk to Our Team
        </NuxtLink>
      </div>
    </div>
  </section>
</template>