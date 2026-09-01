<!-- app/components/home/Hero.vue -->
<script setup>
import bgImage from '~/assets/img/event-hero4.webp'

const words = ['Wedding', 'Corporate Retreat', 'Product Launch', 'Milestone Birthday', 'Anniversary', 'Industry Event']

const activeWordIndex = ref(0)
const isRevealed = ref(false)
let timer = null

function cycleWord() {
  isRevealed.value = false
  setTimeout(() => {
    activeWordIndex.value = (activeWordIndex.value + 1) % words.length
    requestAnimationFrame(() => {
      isRevealed.value = true
    })
  }, 400)
}

onMounted(() => {
  requestAnimationFrame(() => {
    isRevealed.value = true
  })
  timer = setInterval(cycleWord, 2600)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section class="relative flex h-screen w-full items-center overflow-hidden bg-slate-900 py-0">
    <img :src="bgImage" alt="Elegant event styling by Event Grande"
      class="absolute inset-0 h-full w-full scale-100 object-cover animate-hero-zoom" loading="eager"
      fetchpriority="high">
    <div class="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/10" />
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30" />

    <div class="relative z-10 w-full px-6 lg:px-12 xl:px-20">
      <div class="mx-auto max-w-7xl">
        <div class="max-w-xl text-left hero-text-shadow mt-20 sm:mt-16 lg:mt-16">
          <p class="text-sm font-semibold uppercase tracking-widest text-amber-400">
            Your Events and Special Days Re-imagined
          </p>

          <h1 class="mt-2 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's plan your next
            <span class="relative mt-2 block min-h-[1.2em]">
              <span class="inline-block whitespace-nowrap text-amber-400 word-reveal"
                :class="isRevealed ? 'is-revealed' : ''">
                {{ words[activeWordIndex] }}
              </span>
            </span>
          </h1>

          <p class="mt-4 max-w-xl text-lg text-slate-100">
            Grand designs, styles, stages, and experiences that create lasting memories for you and your
            guests.
          </p>

          <NuxtLink to="/contact"
            class="mt-10 inline-flex items-center rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-slate-900 transition-colors hover:bg-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60">
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes hero-zoom {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.1);
  }
}

.animate-hero-zoom {
  animation: hero-zoom 20s ease-out forwards;
}

.hero-text-shadow p,
.hero-text-shadow h1 {
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.6);
}

.word-reveal {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.6s cubic-bezier(0.65, 0, 0.35, 1);
}

.word-reveal.is-revealed {
  clip-path: inset(0 0 0 0);
}

@media (prefers-reduced-motion: reduce) {
  .animate-hero-zoom {
    animation: none;
  }

  .word-reveal {
    transition: none;
    clip-path: inset(0 0 0 0);
  }
}
</style>