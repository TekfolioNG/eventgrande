<!-- app/components/global/AppFooter.vue -->
<script setup>
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-vue-next'
import { computed } from 'vue'
import logo from '~/assets/img/Event_Grande.png'

const currentYear = computed(() => new Date().getFullYear())

const exploreLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' }
]

const clientNames = [
  'Cummins',
  'Simba Group',
  'Oriflame',
  'Power Gas',
  'Gosnacks Company'
]

const serviceLinks = [
  { label: 'Event Planning & Management', to: '/services' },
  { label: 'Decoration, Styling & Design', to: '/services' },
  { label: 'Branding', to: '/services' },
  { label: 'Event Support Services', to: '/services' }
]

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' }
]
</script>

<template>
  <footer class="w-full bg-slate-950 text-slate-300">
    <div class="h-1 w-full bg-gradient-to-r from-amber-400 to-sky-400" />

    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <div
        class="text-center lg:text-left grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.8fr_0.9fr_0.9fr_1.3fr_1.3fr]">
        <div class="space-y-5">
          <NuxtLink to="/" class="inline-flex items-center" aria-label="Event Grande — Home">
            <img :src="logo" alt="Event Grande" class="h-16 w-auto">
          </NuxtLink>
          <p class="text-sm leading-relaxed text-slate-400">
            Event Grande Limited is a premium event management and decoration company, turning ordinary occasions into
            unforgettable experiences since 2017.
          </p>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-widest text-white">
            Explore
          </h3>
          <ul class="mt-5 space-y-3 text-sm">
            <li v-for="link in exploreLinks" :key="link.to">
              <NuxtLink :to="link.to" class="text-slate-400 transition-colors hover:text-sky-300">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-widest text-white">
            Past Clients
          </h3>
          <ul class="mt-5 space-y-3 text-sm">
            <li v-for="client in clientNames" :key="client" class="text-slate-500">
              {{ client }}
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-widest text-white">
            Services
          </h3>
          <ul class="mt-5 space-y-3 text-sm">
            <li v-for="link in serviceLinks" :key="link.label">
              <NuxtLink :to="link.to" class="text-slate-400 transition-colors hover:text-sky-300">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-widest text-white">
            Contact
          </h3>
          <ul class="mt-5 space-y-3 text-sm">
            <li>
              <a href="mailto:contact@eventgrande.com"
                class="flex items-center justify-center lg:justify-start gap-2 text-slate-400 transition-colors hover:text-sky-300">
                <Mail class="h-4 w-4 flex-shrink-0" stroke-width="1.75" />
                contact@eventgrande.com
              </a>
            </li>
            <li>
              <a href="mailto:eventgrande17@gmail.com"
                class="flex items-center justify-center lg:justify-start gap-2 text-slate-400 transition-colors hover:text-sky-300">
                <Mail class="h-4 w-4 flex-shrink-0" stroke-width="1.75" />
                eventgrande17@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+2349152539368"
                class="flex items-center justify-center lg:justify-start gap-2 text-slate-400 transition-colors hover:text-sky-300">
                +234 915 253 9368
              </a>
            </li>
          </ul>
          <p class="mt-4 text-xs text-slate-500">
            We typically respond within 24 hours.
          </p>

          <div class="mt-6 flex items-center justify-center lg:justify-start gap-4">
            <a v-for="social in socialLinks" :key="social.name" :href="social.href"
              :aria-label="`Event Grande on ${social.name}`" class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400
            transition-colors hover:border-sky-400 hover:text-sky-300">
              <component :is="social.icon" class="h-4 w-4" stroke-width="1.75" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-slate-800 bg-slate-900">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-slate-500 sm:flex-row lg:px-8">
        <p>© {{ currentYear }} Event Grande Limited. All rights reserved.</p>
        <a href="https://tekfolio.ng" target="_blank" rel="noopener noreferrer"
          class="transition-colors hover:text-sky-300">
          Web Design by Tekfolio Ltd
        </a>
      </div>
    </div>
  </footer>
</template>