<!-- app/components/training/Partners.vue -->
<script setup>
import e2growImg from '~/assets/img/e2grow.webp';
import gallupImg from '~/assets/img/gallup.webp';

const partners = [
    {
        name: 'CliftonStrengths® Assessment',
        image: gallupImg,
        alt: 'Gallup logo',
        description: 'CliftonStrengths® is an online assessment that helps individuals and teams identify and leverage their unique natural talents, fostering personal and professional growth.',
        note: 'The Petabiz Nigeria faculty comprises Gallup Strengths-Certified coaches.'
    },
    {
        name: 'e2grow Digital Platform',
        image: e2growImg,
        alt: 'e2grow logo',
        description: 'e2grow enhances organizational productivity through streamlined communication, collaboration, and task management, empowering teams to work more efficiently.',
        note: 'The Petabiz Nigeria team are e2grow-Certified.'
    }
]
</script>

<template>
    <section class="w-full bg-slate-50 py-12 sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-3xl text-center">
                <p class="text-sm font-semibold uppercase tracking-widest text-sky-600">
                    Powered By World-Class Tools
                </p>
                <h2 class="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                    Our Partners
                </h2>
            </div>

            <div class="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
                <div v-for="partner in partners" :key="partner.name"
                    class="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sky-100 hover:shadow-xl hover:shadow-slate-200/60 md:p-10">
                    <div class="flex h-24 w-full items-center justify-center">
                        <img :src="partner.image" :alt="partner.alt" class="max-h-full max-w-[180px] object-contain">
                    </div>
                    <h3 class="mt-6 text-xl font-semibold text-slate-900">
                        {{ partner.name }}
                    </h3>
                    <p class="mt-4 text-base leading-relaxed text-slate-900">
                        {{ partner.description }}
                    </p>
                    <p class="mt-4 text-sm font-semibold text-sky-600">
                        {{ partner.note }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>