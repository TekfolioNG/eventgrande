<!-- app/components/services/Hero.vue -->
<script setup>
import bgImage from '~/assets/img/event-hero3.webp';
</script>

<template>
    <section class="relative flex min-h-[640px] w-full flex-col py-0 lg:flex-row">
        <div
            class="relative order-2 flex w-full items-center bg-slate-900 px-6 py-14 lg:order-1 lg:w-[45%] lg:px-14 lg:py-16 xl:px-20">
            <div class="w-full max-w-xl">
                <nav aria-label="Breadcrumb" class="mb-6 mt-2 lg:mt-0">
                    <ol class="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                        <li>
                            <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
                        </li>
                        <li aria-hidden="true">/</li>
                        <li class="text-white">Our Services</li>
                    </ol>
                </nav>

                <p class="text-sm font-semibold uppercase tracking-widest text-amber-400">
                    Our Services
                </p>
                <h1 class="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                    Everything It Takes...
                    <span class="mt-1 block text-2xl italic font-semibold md:text-3xl">From Planning to Applause</span>
                </h1>
                <p class="mt-6 text-lg text-slate-300">
                    Planning, styling, branding, and on-the-ground support, brought together so you don't have to juggle
                    a dozen vendors.
                </p>
            </div>
        </div>

        <div class="relative order-1 h-72 w-full sm:h-96 lg:order-2 lg:h-auto lg:w-[55%]">
            <img :src="bgImage" alt="Event Grande — bringing your event vision to life"
                class="absolute inset-0 h-full w-full object-cover [object-position:50%_15%]" loading="eager"
                fetchpriority="high">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        </div>
    </section>
</template>