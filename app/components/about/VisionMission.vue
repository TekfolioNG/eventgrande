<!-- app/components/about/VisionMission.vue -->
<script setup>
const bouncingCard = ref(null)

function handleClick(card) {
    bouncingCard.value = card
    setTimeout(() => {
        bouncingCard.value = null
    }, 600)
}
</script>

<template>
    <section class="w-full bg-white py-20 sm:py-24">
        <div class="mx-auto max-w-5xl px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div class="group cursor-pointer rounded-3xl border border-amber-200 bg-amber-50 p-8 shadow-lg shadow-slate-300/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-400/60 sm:p-10"
                    :class="bouncingCard === 'vision' ? 'animate-bounce-card' : ''" @click="handleClick('vision')">
                    <p class="text-sm font-semibold uppercase tracking-widest text-amber-600">
                        Vision
                    </p>
                    <p class="mt-4 font-serif text-xl italic leading-snug text-slate-900 sm:text-2xl">
                        To consistently deliver exceptional event experiences in Nigeria and beyond.
                    </p>
                </div>

                <div class="group cursor-pointer rounded-3xl border border-sky-200 bg-sky-50 p-8 shadow-lg shadow-slate-300/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-400/60 sm:p-10"
                    :class="bouncingCard === 'mission' ? 'animate-bounce-card' : ''" @click="handleClick('mission')">
                    <p class="text-sm font-semibold uppercase tracking-widest text-sky-600">
                        Mission
                    </p>
                    <p class="mt-4 font-serif text-xl italic leading-snug text-slate-900 sm:text-2xl">
                        To be the premier choice for corporations and individuals seeking excellent event planning and
                        design.
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