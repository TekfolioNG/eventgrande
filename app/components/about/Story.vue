<!-- app/components/about/Story.vue -->
<script setup>
import storyImage from '~/assets/img/about-hero.webp';
</script>

<template>
    <section class="w-full bg-white py-20 sm:py-24">
        <div class="mx-auto max-w-6xl px-6">
            <p class="text-sm font-semibold uppercase tracking-widest text-amber-500">
                Our Story
            </p>
            <h2 class="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                From a Simple Idea to a Living Story
            </h2>

            <div class="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-14">
                <div class="relative mx-auto w-full max-w-md lg:mx-0">
                    <div
                        class="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-amber-100 sm:-right-5 sm:-top-5" />
                    <div class="relative overflow-hidden rounded-3xl shadow-xl">
                        <img :src="storyImage" alt="Event Grande — the story behind our work"
                            class="h-96 w-full object-cover sm:h-[28rem]" loading="lazy">
                    </div>
                </div>

                <div class="space-y-4 text-base sm:text-lg leading-relaxed text-slate-800">
                    <p class="text-lg font-medium text-slate-900 sm:text-xl">
                        Event Grande began in 2017 with a simple belief: every event, no matter its size, deserves to be
                        extraordinary.
                    </p>
                    <p>
                        In the heart of Lagos, a determined team laid the foundation for what would become Event Grande
                        Limited, working with limited resources but limitless imagination.
                    </p>
                    <p>
                        Our early days were marked by humble beginnings — intimate gatherings, modest decorations, and a
                        handful of loyal clients who entrusted us with their visions. What set us apart wasn't just
                        creativity or attention to detail; it was passion. We believed excellence isn't just an act, but
                        a habit.
                    </p>
                    <p>
                        Word spread, and each event became a testament to our promise. Today, Event Grande Limited
                        stands as a premier event management and decoration company, renowned for turning ordinary
                        occasions into unforgettable experiences.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>