<!-- app/components/about/Values.vue -->
<script setup>
import { Award, Flame, HeartHandshake, RefreshCw, Sparkles, Users } from 'lucide-vue-next'

const values = [
    {
        title: 'Excellence',
        description: 'We strive for the highest standard in every task, no matter how small.',
        icon: Award
    },
    {
        title: 'Honesty',
        description: 'We are truthful, transparent, and reliable in everything we do.',
        icon: HeartHandshake
    },
    {
        title: 'Adaptability',
        description: 'We adjust quickly to changes and challenges, without losing sight of the vision.',
        icon: RefreshCw
    },
    {
        title: 'Creativity',
        description: 'We innovate and bring fresh ideas to enhance every event we touch.',
        icon: Sparkles
    },
    {
        title: 'Client Centricity',
        description: 'We always prioritize the client\'s experience and satisfaction, above all else.',
        icon: Users
    },
    {
        title: 'Passion',
        description: 'We pour our hearts into every project, because excellence is a habit, not an act.',
        icon: Flame
    }
]

const bouncingIndex = ref(null)

function handleClick(index) {
    bouncingIndex.value = index
    setTimeout(() => {
        bouncingIndex.value = null
    }, 600)
}
</script>

<template>
    <section class="w-full bg-slate-50 py-20 sm:py-24">
        <div class="mx-auto max-w-6xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <p class="text-sm font-semibold uppercase tracking-widest text-amber-500">
                    What We Stand For
                </p>
                <h2 class="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                    Core Values
                </h2>
            </div>

            <div class="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="(value, index) in values" :key="value.title"
                    class="group cursor-pointer rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-lg shadow-slate-300/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-400/50"
                    :class="bouncingIndex === index ? 'animate-bounce-card' : ''" @click="handleClick(index)">
                    <div
                        class="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-sky-50 transition-colors duration-300 group-hover:bg-sky-500">
                        <component :is="value.icon"
                            class="h-10 w-10 text-slate-900 transition-colors duration-300 group-hover:text-white"
                            stroke-width="1.5" />
                    </div>

                    <h3 class="mt-6 text-lg font-semibold text-slate-900">
                        {{ value.title }}
                    </h3>
                    <p class="mt-2 text-sm leading-relaxed text-slate-800">
                        {{ value.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes bounce-card {
    0% {
        transform: translateY(0);
    }

    25% {
        transform: translateY(-18px);
    }

    45% {
        transform: translateY(0);
    }

    65% {
        transform: translateY(-8px);
    }

    80% {
        transform: translateY(0);
    }

    92% {
        transform: translateY(-3px);
    }

    100% {
        transform: translateY(0);
    }
}

.animate-bounce-card {
    animation: bounce-card 0.6s cubic-bezier(0.28, 0.84, 0.42, 1);
}

@media (prefers-reduced-motion: reduce) {
    .animate-bounce-card {
        animation: none;
    }
}
</style>