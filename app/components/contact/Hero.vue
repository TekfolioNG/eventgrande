<!-- app/components/contact/Hero.vue -->
<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';

const stats = [
    { value: '24h', label: 'Response Time' },
    { value: '4', label: 'Areas of Expertise' },
    { value: 'Nationwide', label: 'Reach Across Nigeria' }
]
</script>

<template>
    <section class="relative w-full overflow-hidden bg-slate-950 py-20 sm:py-24">
        <div class="absolute inset-0 opacity-20">
            <div class="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-sky-500 blur-3xl" />
            <div class="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-sky-700 blur-3xl" />
        </div>

        <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div class="text-center lg:text-left">
                    <p
                        class="inline-flex items-center rounded-full bg-sky-500/10 px-4 py-2 text-sm font-medium text-orange-400">
                        <span class="mr-2 h-2 w-2 rounded-full bg-orange-400" />
                        Create the Workplace of the Future
                    </p>

                    <h1 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Get in Touch
                    </h1>

                    <p class="mx-auto mt-6 max-w-xl text-lg text-slate-300 lg:mx-0">
                        Whether it's enterprise infrastructure, public safety technology, or workforce development,
                        we're here to talk through what you need.
                    </p>

                    <div class="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8 lg:mx-0">
                        <div v-for="stat in stats" :key="stat.label" class="text-center lg:text-left">
                            <div class="text-2xl font-bold text-orange-400">{{ stat.value }}</div>
                            <div class="mt-1 text-sm text-slate-300">{{ stat.label }}</div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center lg:justify-end">
                    <div class="relative">
                        <div
                            class="absolute inset-0 rotate-6 rounded-3xl bg-gradient-to-r from-sky-500/30 to-sky-700/30" />
                        <div class="relative rounded-3xl bg-white p-8 shadow-2xl">
                            <DotLottieVue style="height: 320px; width: 320px" class="mx-auto" autoplay loop
                                src="https://lottie.host/5b29688d-fa19-4ffa-bfb9-74a0fc801d5b/lhUJRoS5cy.lottie" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>