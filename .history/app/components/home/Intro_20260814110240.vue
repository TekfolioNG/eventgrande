<!-- app/components/home/Pillars.vue -->
<script setup>
import { Network, Boxes, ShieldCheck, GraduationCap, ArrowRight } from 'lucide-vue-next'

const pillars = [
  {
    title: 'Enterprise Network Engineering',
    description: 'Certified engineers deploy and support enterprise networks and infrastructure — backed by 24/7 global support.',
    icon: Network,
    link: '/services'
  },
  {
    title: 'Authorized OEM Solutions',
    description: 'Converged infrastructure and enterprise technology from Oracle, Hitachi, Dell EMC, and other global leaders.',
    icon: Boxes,
    link: '/products'
  },
  {
    title: 'Smart Public Safety',
    description: 'Digital-enabled policing and public safety ecosystems for safer communities.',
    icon: ShieldCheck,
    link: '/safety'
  },
  {
    title: 'Modern Workforce for the AI Era',
    description: 'Strengths-based leadership development for high-performing, future-ready teams.',
    icon: GraduationCap,
    link: '/training'
  }
]
</script>

<template>
  <section class="w-full bg-white py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          One Partner, Four Areas of Expertise
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-900">
          From enterprise infrastructure to public safety innovation and workforce development,
          Petabiz delivers technology solutions across every stage of your organization's growth.
        </p>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <NuxtLink
          v-for="pillar in pillars"
          :key="pillar.link"
          :to="pillar.link"
          class="group flex flex-col rounded-2xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sky-100 hover:shadow-xl hover:shadow-slate-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
        >
          <div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-600 group-hover:text-white">
            <component :is="pillar.icon" class="h-10 w-10" stroke-width="1.5" />
          </div>

          <h3 class="mt-6 text-lg font-semibold text-slate-900">
            {{ pillar.title }}
          </h3>
          <p class="mt-2 flex-grow text-sm leading-relaxed text-slate-900">
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