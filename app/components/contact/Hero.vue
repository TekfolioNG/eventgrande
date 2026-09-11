<!-- app/components/contact/Hero.vue -->
<script setup>
import { Headset } from 'lucide-vue-next';

const stats = [
    { value: '24h', label: 'Response Time' },
    { value: 'Free', label: 'Initial Consultation' },
    { value: 'Since 2017', label: 'Creating Moments' }
]
</script>

<template>
    <section class="relative w-full bg-slate-950 py-20 sm:py-24">
        <div class="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p
                class="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
                <Headset class="h-4 w-4" stroke-width="2" />
                Let's Start Planning
            </p>

            <h1 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Say Hello
            </h1>

            <p class="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
                Every great event starts with a conversation. Tell us about your vision, and let's turn it into a moment
                worth remembering.
            </p>

            <div class="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <div v-for="stat in stats" :key="stat.label" class="text-center">
                    <div class="text-2xl font-bold text-amber-400">{{ stat.value }}</div>
                    <div class="mt-1 text-sm text-slate-300">{{ stat.label }}</div>
                </div>
            </div>
        </div>
    </section>
</template>