<!-- app/components/home/Pillars.vue -->
<script setup>
import { ArrowRight } from 'lucide-vue-next'
import oemIcon from '~/assets/icons/certified.svg'
import safetyIcon from '~/assets/icons/drone.svg'
import trainingIcon from '~/assets/icons/microchip.svg'

const pillars = [
  {
    title: 'Authorized OEM Solutions',
    description: 'Converged infrastructure and enterprise technology from Oracle, Hitachi, Dell EMC, and other global leaders.',
    icon: oemIcon,
    link: '/products'
  },
  {
    title: 'Smart Public Safety',
    description: 'Digital-enabled policing and public safety ecosystems for safer communities.',
    icon: safetyIcon,
    link: '/safety'
  },
  {
    title: 'Modern Workforce Training for the AI Era',
    description: 'Gallup CliftonStrengths®-based leadership development for high-performing, future-ready teams.',
    icon: trainingIcon,
    link: '/training'
  }
]
</script>

<template>
  <section class="w-full bg-white py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Engineered Expertise, Delivered at Scale
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-900">
          From enterprise infrastructure to public safety innovation and workforce development,
          Petabiz delivers technology solutions across every stage of your organization's growth.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink v-for="pillar in pillars" :key="pillar.link" :to="pillar.link"
          class="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-100 hover:shadow-xl hover:shadow-slate-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 sm:p-8"
          :class="{ 'md:col-span-2 md:mx-auto md:w-full md:max-w-md lg:col-span-1 lg:mx-0 lg:max-w-none': pillars.length % 3 !== 0 && pillar === pillars[pillars.length - 1] }">
          <div
            class="flex h-20 w-20 items-center justify-center rounded-2xl bg-sky-50 transition-colors duration-300 group-hover:bg-sky-600 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
            <span
              class="icon-mask h-12 w-12 bg-sky-600 transition-colors duration-300 group-hover:bg-white sm:h-14 sm:w-14 lg:h-[4.5rem] lg:w-[4.5rem]"
              :style="{
                maskImage: `url(${pillar.icon})`,
                WebkitMaskImage: `url(${pillar.icon})`
              }" aria-hidden="true" />
          </div>

          <h3 class="mt-6 min-h-[3.5rem] text-lg font-semibold leading-snug text-slate-900 sm:min-h-[3.75rem]">
            {{ pillar.title }}
          </h3>
          <p class="mt-2 grow text-sm leading-relaxed text-slate-900">
            {{ pillar.description }}
          </p>

          <span class="mt-6 inline-flex items-center text-sm font-semibold text-sky-600">
            Learn more
            <ArrowRight class="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.icon-mask {
  display: inline-block;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
}
</style>