<!-- app/components/home/Hero.vue -->
<script setup>
import serviceImg from '~/assets/img/networkengineer.webp'
import solutionsImg from '~/assets/img/networkcables.webp'
import safetyImg from '~/assets/img/drone.webp'
import trainingImg from '~/assets/img/training.webp'

const slides = [
  {
    headline: 'Enterprise Infrastructure, Engineered to Perform',
    description: 'Certified engineers deploy and support enterprise networks and infrastructure — backed by 24/7 global support.',
    link: '/services',
    cta: 'Explore Our Services',
    image: serviceImg
  },
  {
    headline: 'Powering Enterprise Innovation with Trusted Technology',
    description: 'Converged infrastructure and enterprise networking — authentic OEM solutions from Oracle, Hitachi, Dell EMC, and more.',
    link: '/products',
    cta: 'Explore Our Solutions',
    image: solutionsImg
  },
  {
    headline: 'Safer Communities, Smarter Systems',
    description: 'We partner with leading public safety organizations to deliver a digitally-enabled policing ecosystem.',
    link: '/safety',
    cta: 'Explore Public Safety',
    image: safetyImg
  },
  {
    headline: 'Build High-Performing Teams for the AI Era',
    description: 'Using CliftonStrengths and e2grow, we help you identify talent and build high-performing teams for the workplace of the future.',
    link: '/training',
    cta: 'Explore Training',
    image: trainingImg
  }
]

const activeIndex = ref(0)
const SLIDE_DURATION = 6000 // ms each slide stays fully visible before advancing
let timer = null

function slideState(index) {
  if (index === activeIndex.value) return 'translate-x-0 opacity-100'
  if (index < activeIndex.value) return '-translate-x-full opacity-0'
  return 'translate-x-full opacity-0'
}

function goTo(index) {
  activeIndex.value = index
  restartTimer()
}

function advance() {
  activeIndex.value = (activeIndex.value + 1) % slides.length
}

function restartTimer() {
  if (timer) clearInterval(timer)
  timer = setInterval(advance, SLIDE_DURATION)
}

onMounted(() => {
  restartTimer()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section class="relative h-screen w-full overflow-hidden bg-slate-950">
    <div
      v-for="(slide, index) in slides"
      :key="slide.link"
      class="absolute inset-0 transition-all duration-1000 ease-in-out"
      :class="slideState(index)"
    >
      <img
        :src="slide.image"
        :alt="slide.headline"
        class="absolute inset-0 h-full w-full object-cover"
        :loading="index === 0 ? 'eager' : 'lazy'"
        :fetchpriority="index === 0 ? 'high' : 'low'"
      >
      <div class="absolute inset-0 bg-slate-950/55" />
      <div class="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />

      <div class="relative z-10 flex h-full items-center px-6 lg:px-8">
        <div class="mx-auto w-full max-w-7xl">
          <div class="max-w-2xl">
            <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              {{ slide.headline }}
            </h1>
            <p class="mt-6 text-lg text-slate-200 max-w-xl">
              {{ slide.description }}
            </p>
            <NuxtLink
              :to="slide.link"
              class="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-slate-950 transition-colors hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
            >
              {{ slide.cta }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Slide indicators -->
    <div class="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
      <button
        v-for="(slide, index) in slides"
        :key="slide.link"
        type="button"
        class="h-1.5 rounded-full bg-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
        :class="activeIndex === index ? 'w-8 opacity-100' : 'w-4 opacity-40 hover:opacity-70'"
        :aria-label="`Go to slide ${index + 1}: ${slide.headline}`"
        @click="goTo(index)"
      />
    </div>
  </section>
</template>