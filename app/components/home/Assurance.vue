<!-- app/components/home/Commitments.vue -->
<script setup>
import qualityImg from '~/assets/img/quality.jpg'
import supplyImg from '~/assets/img/supply.jpg'
import partnershipImg from '~/assets/img/partnership.jpg'

const sections = [
  {
    headline: 'Built to a Higher Standard',
    body: 'Every solution we deliver is of the highest global standards, as well as passes rigorous testing and validation; because in mission-critical environments, good enough isn\'t good enough.',
    cta: 'Our Quality Standards',
    link: '/quality-assurance',
    image: qualityImg,
    alt: 'Engineer closely inspecting technical equipment'
  },
  {
    headline: 'Support That Never Sleeps',
    body: 'A resilient global supply chain and round-the-clock technical support keep your critical systems running, wherever you operate.',
    cta: 'Explore Our Support Model',
    link: '/support',
    image: supplyImg,
    alt: 'Global technical support operations'
  },
  {
    headline: 'Our Commitment to Responsible Technology',
    body: 'As we bring AI-driven tools into public safety and enterprise systems alike, we hold ourselves to a high standard; trusted technology, deployed thoughtfully.',
    cta: 'Our Responsible Innovation Approach',
    link: '/responsible-innovation',
    image: partnershipImg,
    alt: 'Community and public safety partnership'
  }
]
</script>

<template>
  <section class="w-full bg-white py-0">
    <div>
      <div
        v-for="(item, index) in sections"
        :key="item.headline"
        class="grid grid-cols-1 lg:grid-cols-2 items-stretch"
      >
        <div :class="index % 2 === 1 ? 'lg:order-2' : ''">
          <img
            :src="item.image"
            :alt="item.alt"
            class="h-[26rem] sm:h-[34rem] lg:h-[40rem] xl:h-[44rem] w-full object-cover"
            loading="lazy"
          >
        </div>

        <div
          :class="index % 2 === 1 ? 'lg:order-1' : ''"
          class="flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-20 py-16 lg:py-0"
        >
          <h3 class="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight">
            {{ item.headline }}
          </h3>
          <p class="mt-8 text-lg sm:text-xl leading-relaxed text-slate-900 max-w-2xl">
            {{ item.body }}
          </p>
          <NuxtLink
            :to="item.link"
            class="mt-10 inline-flex items-center rounded-full bg-slate-900 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 self-start"
          >
            {{ item.cta }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>