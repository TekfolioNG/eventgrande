<!-- app/components/home/PastClients.vue -->
<script setup>
import cummins from '~/assets/img/cummins.png'
import eeze from '~/assets/img/eezee.png'
import fiducia from '~/assets/img/fiducia.png'
import gosnacks from '~/assets/img/gosnacks.png'
import kenyon from '~/assets/img/kenyon.png'
import nancy from '~/assets/img/nancy.png'
import nlng from '~/assets/img/nlng.png'
import oriflame from '~/assets/img/oriflame.png'
import petra from '~/assets/img/petra.png'
import reg from '~/assets/img/reg.jpg'
import simba from '~/assets/img/simba.png'

const firstRow = [
  { name: 'Cummins', src: cummins },
  { name: 'Eeze', src: eeze },
  { name: 'Fiducia', src: fiducia },
  { name: 'Gosnacks Company', src: gosnacks },
  { name: 'Petra By Design', src: petra },
  { name: 'REG', src: reg }
]

const secondRow = [
  { name: 'The Nancy Nnadi Company', src: nancy },
  { name: 'Simba Group', src: simba },
  { name: 'NLNG', src: nlng },
  { name: 'Kenyon', src: kenyon },
  { name: 'Oriflame', src: oriflame }
]
</script>

<template>
  <section class="w-full overflow-hidden bg-white py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
      <p
        class="inline-block rounded-full bg-amber-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-amber-600">
        Our Track Record
      </p>
      <h2 class="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        Brands We've Worked With
      </h2>
    </div>

    <div class="relative mt-14">
      <div class="client-fade-mask overflow-hidden">
        <div class="flex w-max space-x-10 clients-scroll-right">
          <div v-for="(client, index) in [...firstRow, ...firstRow]" :key="`row1-${index}`" class="min-w-[150px] p-2">
            <img :src="client.src" :alt="client.name"
              class="h-16 sm:h-20 object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              loading="lazy">
          </div>
        </div>
      </div>

      <div class="client-fade-mask overflow-hidden mt-6">
        <div class="flex w-max space-x-10 clients-scroll-left">
          <div v-for="(client, index) in [...secondRow, ...secondRow]" :key="`row2-${index}`" class="min-w-[150px] p-2">
            <img :src="client.src" :alt="client.name"
              class="h-16 sm:h-20 object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              loading="lazy">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.client-fade-mask {
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}

@keyframes clients-scroll-left {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@keyframes clients-scroll-right {
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0);
  }
}

.clients-scroll-left {
  animation: clients-scroll-left 30s linear infinite;
}

.clients-scroll-right {
  animation: clients-scroll-right 30s linear infinite;
}

.clients-scroll-left:hover,
.clients-scroll-right:hover {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {

  .clients-scroll-left,
  .clients-scroll-right {
    animation: none;
  }
}
</style>