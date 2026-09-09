<!-- app/components/services/Branding.vue -->
<script setup>
import brandingImage from '~/assets/img/services-hero3.webp';
</script>

<template>
    <section id="branding" class="w-full scroll-mt-24 bg-white py-16 sm:py-20">
        <div class="mx-auto max-w-6xl px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-center lg:gap-14">
                <div class="relative mx-auto w-full max-w-sm lg:mx-0">
                    <div
                        class="absolute -right-3 -top-3 h-full w-full rounded-3xl bg-amber-100 sm:-right-4 sm:-top-4" />
                    <div class="relative overflow-hidden rounded-3xl shadow-xl">
                        <img :src="brandingImage" alt="Event Grande — event branding"
                            class="h-64 w-full object-cover sm:h-72" loading="lazy">
                    </div>
                </div>

                <div>
                    <p class="text-sm font-semibold uppercase tracking-widest text-amber-500">
                        03 &middot; Branding
                    </p>
                    <h2 class="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                        Brand Signature Service
                    </h2>
                    <div class="mt-4 space-y-4 text-base leading-relaxed text-slate-800 sm:text-lg">
                        <p>
                            Your event deserves a signature touch. With our expert branding solutions, we ensure your
                            corporate identity shines through every detail, from custom signage and branded décor to
                            personalized event materials and giveaways.
                        </p>
                        <p>
                            We help you create a cohesive, memorable experience that leaves a lasting impression on your
                            guests and reinforces your brand at every turn.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>