<!-- app/components/training/Impact.vue -->
<script setup>
const stats = [
    { key: 'first', prefix: '', suffix: '', target: 1, display: '1st', label: 'Triple Gallup Coach in Nigeria' },
    { key: 'hours', prefix: '', suffix: 'k+', target: 15, label: 'Hours Developing Talents & Leaders' },
    { key: 'assessments', prefix: '', suffix: 'k+', target: 5, label: 'CliftonStrengths® Assessments Delivered' },
    { key: 'trainings', prefix: '', suffix: '+', target: 75, label: 'Workplace Trainings Delivered in West Africa' }
]

const counts = ref(stats.map(() => 0))
const sectionRef = ref(null)
let hasAnimated = false
let observer = null
let frameIds = []

function animateStat(index, target, duration) {
    const start = performance.now()
    function step(now) {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        counts.value[index] = Math.floor(eased * target)
        if (progress < 1) {
            frameIds.push(requestAnimationFrame(step))
        } else {
            counts.value[index] = target
        }
    }
    frameIds.push(requestAnimationFrame(step))
}

function startAnimation() {
    if (hasAnimated) return
    hasAnimated = true
    stats.forEach((stat, index) => {
        animateStat(index, stat.target, 1800 + index * 200)
    })
}

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) startAnimation()
            })
        },
        { threshold: 0.3 }
    )
    if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
    if (observer) observer.disconnect()
    frameIds.forEach((id) => cancelAnimationFrame(id))
})
</script>

<template>
    <section ref="sectionRef" class="w-full bg-slate-900 py-20 sm:py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                Be Our Next Transformed Workplace of the Future
            </h2>

            <div class="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div v-for="(stat, index) in stats" :key="stat.key"
                    class="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-colors duration-300 hover:bg-white/10">
                    <div class="text-4xl sm:text-5xl font-bold text-sky-400">
                        {{ stat.display || `${stat.prefix}${counts[index]}${stat.suffix}` }}
                    </div>
                    <p class="mt-3 text-base font-medium leading-snug text-slate-200">
                        {{ stat.label }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>