<!-- app/components/services/Decoration.vue -->
<script setup>
import decorationImage from '~/assets/img/event-hero.webp';
</script>

<template>
    <section id="decoration" class="w-full scroll-mt-24 bg-slate-50 py-16 sm:py-20">
        <div class="mx-auto max-w-6xl px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_minmax(0,340px)] lg:items-center lg:gap-14">
                <div class="lg:order-1">
                    <p class="text-sm font-semibold uppercase tracking-widest text-amber-500">
                        02 &middot; Decoration
                    </p>
                    <h2 class="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                        Decoration, Styling & Design
                    </h2>
                    <div class="mt-4 space-y-4 text-base leading-relaxed text-slate-800 sm:text-lg">
                        <p>
                            Our event decoration and styling services transform your venue into a captivating, visually
                            appealing space. We create immersive environments tailored to your theme, combining
                            creativity and attention to detail in every element.
                        </p>
                        <p>
                            From elegant stage designs and venue styling to floral arrangements, table settings, and
                            custom installations, we ensure your event leaves a lasting impression on every guest.
                        </p>
                    </div>
                </div>

                <div class="relative order-first mx-auto w-full max-w-sm lg:order-2 lg:mx-0">
                    <div class="absolute -left-3 -top-3 h-full w-full rounded-3xl bg-sky-100 sm:-left-4 sm:-top-4" />
                    <div class="relative overflow-hidden rounded-3xl shadow-xl">
                        <img :src="decorationImage" alt="Event Grande — decoration, styling, and design"
                            class="h-64 w-full object-cover sm:h-72" loading="lazy">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>