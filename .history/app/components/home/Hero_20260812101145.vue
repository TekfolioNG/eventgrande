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

const containerRef = ref(null)
const progress = ref(0)
const activeIndex = computed(() => Math.round(progress.value))

function getOpacity(index) {
  return Math.max(0, 1 - Math.abs(progress.value - index))
}

function updateProgress() {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const scrollable = rect.height - window.innerHeight
  if (scrollable <= 0) return
  const scrolled = Math.min(Math.max(-rect.top, 0), scrollable)
  progress.value = (scrolled / scrollable) * (slides.length - 1)
}

let ticking = false
function onScroll() {
  if (ticking) return
  ticking = true
  window.requestAnimationFrame(() => {
    updateProgress()
    ticking = false
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', updateProgress)
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', updateProgress)
})
</script>

<template>
  <section ref="containerRef" class="relative" :style="{ height: `${slides.length * 100}vh` }">
    <div class="sticky top-0 h-screen w-full overflow-hidden bg-slate-950">
      <div
        v-for="(slide, index) in slides"
        :key="slide.link"
        class="absolute inset-0"
        :style="{ opacity: getOpacity(index) }"
      >
        <img
          :src="slide.image"
          :alt="slide.headline"
          class="absolute inset-0 h-full w-full object-cover"
          :loading="index === 0 ? 'eager' : 'lazy'"
          :fetchpriority="index === 0 ? 'high' : 'low'"
        >
        <div class="absolute inset-0 bg-slate-950/55" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

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

      <!-- Progress indicator -->
      <div class="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        <span
          v-for="(slide, index) in slides"
          :key="slide.link"
          class="h-1.5 rounded-full bg-white transition-all duration-300"
          :class="activeIndex === index ? 'w-8 opacity-100' : 'w-4 opacity-40'"
        />
      </div>
    </div>
  </section>
</template>