<!-- app/components/services/Planning.vue -->
<script setup>
import planningImage from '~/assets/img/services-hero.webp';
</script>

<template>
    <section id="planning" class="w-full scroll-mt-24 bg-white py-16 sm:py-20">
        <div class="mx-auto max-w-6xl px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-center lg:gap-14">
                <div class="relative mx-auto w-full max-w-sm lg:mx-0">
                    <div
                        class="absolute -right-3 -top-3 h-full w-full rounded-3xl bg-amber-100 sm:-right-4 sm:-top-4" />
                    <div class="relative overflow-hidden rounded-3xl shadow-xl">
                        <img :src="planningImage" alt="Event Grande — event planning and management"
                            class="h-64 w-full object-cover sm:h-72" loading="lazy">
                    </div>
                </div>

                <div>
                    <p class="text-sm font-semibold uppercase tracking-widest text-amber-500">
                        01 &middot; Planning
                    </p>
                    <h2 class="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                        Event Planning & Management
                    </h2>
                    <div class="mt-4 space-y-4 text-base leading-relaxed text-slate-800 sm:text-lg">
                        <p>
                            We are the solution to the conversations of concern about your next event. Right from your
                            first
                            inquiry to the final confirmation, we coordinate every detail so you
                            can focus on what
                            matters most, delivering a successful and memorable event.
                        </p>
                        <p>
                            Experience bliss and class with our flagship offers as we take the stress off your plate,
                            every step of the way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>