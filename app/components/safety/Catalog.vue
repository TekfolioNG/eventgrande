<!-- app/components/safety/Features.vue -->
<script setup>
import networkCablesImg from '~/assets/img/crime_center.webp'
import networkEngineeringImg from '~/assets/img/badge.webp'
import ipPhoneImg from '~/assets/img/drone_petabiz.webp'
import iPhone2Img from '~/assets/img/gadget.webp'
import serverEngineerImg from '~/assets/img/cybercrime.webp'
import externalDiskImg from '~/assets/img/command.webp'
import routerImg from '~/assets/img/dashcam.webp'
import switchImg from '~/assets/img/driver.webp'
import pcImg from '~/assets/img/police.webp'

const items = [
  {
    type: 'text',
    title: 'Real-Time Crime Centers',
    description: 'Live video, sensor, and dispatch data come together in one centralized command view. Operators gain a complete, real-time picture that enables faster, better-informed decisions.'
  },
  { type: 'image', src: networkCablesImg, alt: 'Placeholder — real-time crime center' },
  {
    type: 'text',
    title: 'Aerial and Drone Response',
    description: 'AI-assisted drones extend situational awareness far beyond ground units. This means faster response and safer outcomes during searches and emergencies.'
  },
  { type: 'image', src: networkEngineeringImg, alt: 'Placeholder — aerial and drone response' },
  {
    type: 'text',
    title: 'Body-Worn and In-Vehicle Cameras',
    description: 'Continuous video capture with tamper-proof, watertight digital security records every interaction. This builds transparency and trust between agencies and the communities they serve.'
  },
  { type: 'image', src: ipPhoneImg, alt: 'Placeholder — body-worn and in-vehicle cameras' },
  {
    type: 'text',
    title: 'License Plate Recognition',
    description: 'AI-powered recognition flags vehicles of interest in real time across roadways and checkpoints, helping locate suspects and stolen vehicles faster.'
  },
  { type: 'image', src: routerImg, alt: 'Placeholder — license plate recognition' },
  {
    type: 'text',
    title: 'Predictive Crime Analytics',
    description: 'AI models turn historical and real-time data into actionable intelligence. This proactive, digitized approach strengthens prevention, not just response.'
  },
  { type: 'image', src: switchImg, alt: 'Placeholder — predictive crime analytics' },
  {
    type: 'text',
    title: 'Digital Evidence Management',
    description: 'Secure, chain of custody compliant platforms keep every file encrypted and access-controlled from capture to courtroom.'
  },
  { type: 'image', src: externalDiskImg, alt: 'Placeholder — digital evidence management' },
  {
    type: 'text',
    title: 'Community Alert Systems',
    description: 'Real-time notifications reach residents directly during emergencies, strengthening the connection between agencies and the people they protect.'
  },
  { type: 'image', src: iPhone2Img, alt: 'Placeholder — community alert systems' },
  {
    type: 'text',
    title: 'Cybersecurity for Public Safety Networks',
    description: 'As public safety systems become increasingly digitized, watertight cybersecurity protects sensitive law enforcement data and infrastructure around the clock.'
  },
  { type: 'image', src: pcImg, alt: 'Placeholder — cybersecurity for public safety networks' },
  {
    type: 'text',
    title: 'Unified Command Dashboards',
    description: 'Every agency, unit, and incident comes together in one connected, real-time view, enabling coordinated, AI-supported decision-making.'
  },
  { type: 'image', src: serverEngineerImg, alt: 'Placeholder — unified command dashboards' }
]
</script>

<template>
  <section class="w-full bg-slate-50 py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Modern, AI-Powered Public Safety Systems
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-900">
          In partnership with the world's leading public safety technology providers, we deliver digitized, AI-driven systems that help public security agencies see more, respond faster, and protect their communities.
        </p>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <template v-for="item in items" :key="item.title || item.src">
          <div
            v-if="item.type === 'image'"
            class="min-h-[280px] overflow-hidden rounded-2xl"
          >
            <img
              :src="item.src"
              :alt="item.alt"
              class="h-full w-full object-cover"
              loading="lazy"
            >
          </div>

          <div
            v-else
            class="flex min-h-[280px] flex-col justify-center rounded-2xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sky-100 hover:shadow-xl hover:shadow-slate-200/60"
          >
            <h3 class="text-xl sm:text-2xl font-semibold text-slate-900">
              {{ item.title }}
            </h3>
            <p class="mt-4 text-base leading-relaxed text-slate-900">
              {{ item.description }}
            </p>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>