<!-- app/components/about/Difference.vue -->
<script setup>
</script>

<template>
    <section class="relative w-full overflow-hidden bg-slate-950 py-24 sm:py-32">
        <div class="absolute inset-0 dot-pattern" aria-hidden="true" />
        <div class="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />

        <div class="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p class="text-sm font-semibold uppercase tracking-widest text-amber-400">
                What Makes Us Different
            </p>

            <div class="mt-8 space-y-6 text-lg leading-relaxed text-slate-200 sm:text-xl">
                <p>
                    Our approach is rooted in excellence, fueled by imagination, and shaped by a deep understanding of
                    your unique needs. We don't just manage events; we curate journeys.
                </p>
                <p>
                    When you choose Event Grande Limited, you're not just choosing an event planner. You're gaining a
                    trusted partner, one who will listen to your dreams, anticipate your needs, and deliver more than
                    you imagined possible.
                </p>
            </div>

            <blockquote class="mt-14 border-t border-amber-400/30 pt-10">
                <p class="text-2xl font-semibold leading-snug text-white sm:text-3xl">
                    Where your vision becomes our masterpiece, and every event is a new beginning.
                </p>
            </blockquote>
        </div>
    </section>
</template>

<style scoped>
.dot-pattern {
    background-image: radial-gradient(rgba(251, 191, 36, 0.35) 1.5px, transparent 1.5px);
    background-size: 28px 28px;
}
</style>