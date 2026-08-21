<!-- app/components/training/Intro.vue -->
<script setup>
import { GraduationCap, Lightbulb, Users } from 'lucide-vue-next';

const programs = [
    {
        title: 'High-Performing Teams',
        subtitle: 'HPT Program',
        description: 'Build a strengths-based culture with engaged employees, stronger collaboration, and exceptional team performance.',
        icon: GraduationCap
    },
    {
        title: 'Growth-Focused Leadership',
        subtitle: 'GFL Coaching',
        description: 'Develop transformational leadership habits using CliftonStrengths and e2grow methodologies, tailored to your organization.',
        icon: Users
    },
    {
        title: 'Youth Empowerment',
        subtitle: 'Mentoring Program',
        description: 'Equip emerging leaders with the skills, confidence, and self-awareness needed for tomorrow\'s workplace.',
        icon: Lightbulb
    }
]
</script>

<template>
    <section class="w-full bg-white py-20 sm:py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-3xl text-center">
                <p class="text-sm font-semibold uppercase tracking-widest text-sky-600">
                    Human Capital Development
                </p>
                <h2 class="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                    Where Strengths Science Meets the Future of Work
                </h2>
                <p class="mt-6 text-base sm:text-lg text-slate-900">
                    In partnership with Gallup, we bring strengths-based coaching and leadership development to
                    organizations building for the future of work.
                </p>
            </div>

            <div class="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="program in programs" :key="program.title"
                    class="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sky-100 hover:shadow-xl hover:shadow-slate-200/60">
                    <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                        <component :is="program.icon" class="h-10 w-10" stroke-width="1.5" />
                    </div>
                    <h3 class="mt-6 text-lg font-semibold text-slate-900">
                        {{ program.title }}
                    </h3>
                    <p class="mt-1 text-sm font-medium uppercase tracking-wide text-sky-600">
                        {{ program.subtitle }}
                    </p>
                    <p class="mt-3 text-sm leading-relaxed text-slate-900">
                        {{ program.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>