<!-- app/components/global/AppNav.vue -->
<script setup>
const isMenuOpen = ref(false)
const route = useRoute()

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Our Products', to: '/products' },
  { label: 'Our Services', to: '/services' },
  { label: 'Smart Public Safety', to: '/safety' },
  { label: 'Training', to: '/training' }
]

watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-[auto_1fr_auto] items-center h-20">

        <!-- Logo -->
        <div class="justify-self-start">
          <NuxtLink
            to="/"
            class="inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
            aria-label="Petabiz Technology — Home"
          >
            <img
              src="~/assets/img/Petabiz_logo.png"
              alt="Petabiz Technology"
              class="h-8 md:h-9 w-auto"
            >
          </NuxtLink>
        </div>

        <!-- Desktop nav, centered -->
        <nav class="hidden md:flex justify-self-center items-center gap-10 text-sm uppercase tracking-wider font-semibold text-slate-600">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="nav-link relative py-2 transition-colors hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 rounded-sm"
            active-class="text-sky-600"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Right: CTA (desktop) + hamburger (mobile) -->
        <div class="justify-self-end flex items-center gap-4">
          <NuxtLink
            to="/contact"
            class="hidden md:inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
          >
            Contact
          </NuxtLink>

          <button
            type="button"
            class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
            :aria-expanded="isMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            @click="toggleMenu"
          >
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="isMenuOpen"
        id="mobile-menu"
        class="md:hidden border-t border-slate-100 bg-white px-6 py-6"
      >
        <ul class="flex flex-col gap-1 text-base font-semibold uppercase tracking-wider text-slate-600">
          <li v-for="item in navItems" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="block rounded-sm px-2 py-3 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
              active-class="text-sky-600"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <NuxtLink
          to="/contact"
          class="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-sky-600"
        >
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
  background-color: #0284c7;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  transform: scaleX(1);
}
</style>