<!-- app/components/global/AppNav.vue -->
<script setup>
import logo from '~/assets/img/Event_Grande.png'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' }
]

function onScroll() {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 bg-slate-900 transition-colors duration-300 md:bg-transparent"
    :class="isScrolled || isMenuOpen ? 'md:border-b md:border-slate-100 md:bg-white/95 md:backdrop-blur' : ''">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid h-24 grid-cols-2 items-center md:grid-cols-[auto_1fr_auto] md:h-28">
        <div class="justify-self-start">
          <NuxtLink to="/" class="inline-flex items-center rounded-sm" aria-label="Event Grande — Home">
            <img :src="logo" alt="Event Grande" class="h-16 w-auto md:h-20">
          </NuxtLink>
        </div>

        <nav
          class="hidden justify-self-center md:flex items-center gap-10 text-sm font-semibold uppercase tracking-wider">
          <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to"
            class="nav-link relative py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 rounded-sm"
            :class="isScrolled ? 'text-slate-900 hover:text-sky-600 active-scrolled' : 'text-white hover:text-sky-300 active-unscrolled'">
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="justify-self-end flex items-center gap-4">
          <NuxtLink to="/contact"
            class="hidden md:inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
            :class="isScrolled ? 'bg-amber-400 text-slate-900 hover:bg-white' : 'bg-slate-900 text-white hover:bg-sky-600'">
            Contact
          </NuxtLink>

          <button type="button"
            class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
            :aria-expanded="isMenuOpen" aria-controls="mobile-menu" aria-label="Toggle navigation menu"
            @click="toggleMenu">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke-width="1.75" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke-width="1.75" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
      <nav v-if="isMenuOpen" id="mobile-menu" class="md:hidden border-t border-slate-800 bg-slate-900 px-6 py-6">
        <ul class="flex flex-col gap-1 text-base font-semibold uppercase tracking-wider text-white">
          <li v-for="item in navItems" :key="item.to">
            <NuxtLink :to="item.to" class="block rounded-sm px-2 py-3 hover:text-sky-300" active-class="text-sky-300">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
        <NuxtLink to="/contact"
          class="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-800 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white">
          Contact
        </NuxtLink>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

.active-scrolled::after {
  background-color: #f59e0b;
}

.active-unscrolled::after {
  background-color: #38bdf8;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  transform: scaleX(1);
}
</style>