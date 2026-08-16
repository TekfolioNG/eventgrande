<!-- app/components/home/Hero.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Define the 4 unified corporate slides matching your copy strategy
const slides = [
  {
    headline: 'Enterprise Infrastructure, Engineered to Perform',
    description: 'Certified engineers deploy and support enterprise networks and infrastructure; backed by 24/7 global support.',
    link: '/services',
    image: '/assets/img/networkengineer.webp'
  },
  {
    headline: 'Powering Enterprise Innovation with Trusted Technology',
    description: 'Converged infrastructure and enterprise networking; authentic OEM solutions from Oracle, Hitachi, Dell EMC, and more.',
    link: '/products',
    image: '/assets/img/networkcables.webp'
  },
  {
    headline: 'Safer Communities, Smarter Systems',
    description: 'We partner with leading public safety organizations to deliver a digitally-enabled policing ecosystem.',
    link: '/safety',
    image: '/assets/img/drone.webp'
  },
  {
    headline: 'Build High-Performing Teams for the AI Era',
    description: 'Using CliftonStrengths and e2grow, we help you identify talent and build high-performing teams for the workplace of the future.',
    link: '/training',
    image: '/assets/img/training.webp'
  }
]

const containerRef = ref<HTMLElement | null>(null)
const activeIndex = ref(0)
const scrollProgress = ref(0)

const handleScroll = () => {
  if (!containerRef.value) return
  
  const rect = containerRef.value.getBoundingClientRect()
  const totalHeight = rect.height - window.innerHeight
  const scrolled = -rect.top
  
  if (totalHeight <= 0) return
  
  // Constrain progress indicator value between 0 and 1
  const progress = Math.min(Math.max(scrolled / totalHeight, 0), 1)
  scrollProgress.value = progress
  
  // Dynamically calculate which stage index is active based on total scroll volume
  const step = 1 / slides.length
  const index = Math.floor(progress / step)
  activeIndex.value = Math.min(index, slides.length - 1)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- The container height governs the overall scrolling duration duration -->
  <div ref="containerRef" class="relative h-[400vh] bg-slate-950">
    
    <!-- STICKY VIEWPORT WRAPPER: Locks to user screen during execution -->
    <div class="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
      
      <!-- BACKGROUND LAYER: Renders and blends background assets seamlessly -->
      <div class="absolute inset-0 z-0">
        <div 
          v-for="(slide, index) in slides" 
          :key="'img-' + index"
          class="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          :style="{ 
            backgroundImage: `url(${slide.image})`,
            opacity: activeIndex === index ? 1 : 0 
          }"
        >
          <!-- Exact visual dark overlay layer mimicking Axon website to guarantee sharp text readability -->
          <div class="absolute inset-0 bg-black/65 backdrop-blur-[1px]"></div>
        </div>
      </div>

      <!-- TEXT CONTENT STREAM MATRIX: Animates cross-fading typography lines -->
      <div class="relative z-10 max-w-5xl mx-auto px-8 w-full text-center md:text-left">
        <div class="relative h-[24rem] md:h-[18rem] flex items-center">
          <transition-group
            enter-active-class="transition duration-700 ease-out absolute"
            enter-from-class="opacity-0 translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-500 ease-in absolute"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
          >
            <div 
              v-for="(slide, index) in slides" 
              :key="'text-' + index"
              v-show="activeIndex === index"
              class="space-y-6 w-full"
            >
              <!-- Headline text size and contrast increased as specified -->
              <h1 class="text-3xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl">
                {{ slide.headline }}
              </h1>
              
              <!-- Content body parameterization adjusted for high readability -->
              <p class="text-base md:text-xl text-slate-200 max-w-2xl font-medium leading-relaxed">
                {{ slide.description }}
              </p>
              
              <!-- Clean structural interactive navigation buttons mapping flat paths -->
              <div class="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                <NuxtLink 
                  :to="slide.link" 
                  class="bg-white hover:bg-orange-500 hover:text-white text-slate-950 text-xs md:text-sm font-bold uppercase tracking-widest px-8 py-3.5 rounded transition duration-300 shadow-xl"
                >
                  Discover Portfolio
                </NuxtLink>
              </div>
            </div>
          </transition-group>
        </div>
      </div>

      <!-- VISUAL SIDEBAR INDICATOR PILLS (Tracks active location index layout) -->
      <div class="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col space-y-4">
        <div 
          v-for="(_, index) in slides" 
          :key="'dot-' + index"
          class="w-2.5 h-2.5 rounded-full transition-all duration-300"
          :class="activeIndex === index ? 'bg-orange-500 scale-125' : 'bg-white/30'"
        ></div>
      </div>

    </div>
  </div>
</template>
