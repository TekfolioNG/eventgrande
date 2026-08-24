<template>
  <section class="w-full overflow-hidden bg-white py-20 sm:py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <h2 class="text-center text-slate-900 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
        Our OEM Partners
      </h2>
    </div>

    <div class="relative mt-14">
      <div class="partner-fade-mask overflow-hidden">
        <div class="flex w-max space-x-8 partners-scroll-right">
          <div v-for="(logo, index) in [...firstRow, ...firstRow]" :key="`row1-${index}`" class="min-w-[150px] p-2">
            <img :src="logo.src" :alt="logo.name"
              class="h-12 sm:h-16 object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              loading="lazy">
          </div>
        </div>
      </div>

      <div class="partner-fade-mask overflow-hidden mt-6">
        <div class="flex w-max space-x-8 partners-scroll-left">
          <div v-for="(logo, index) in [...secondRow, ...secondRow]" :key="`row2-${index}`" class="min-w-[150px] p-2">
            <img :src="logo.src" :alt="logo.name"
              class="h-12 sm:h-16 object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              loading="lazy">
          </div>
        </div>
      </div>

      <div class="partner-fade-mask overflow-hidden mt-6">
        <div class="flex w-max space-x-8 partners-scroll-right">
          <div v-for="(logo, index) in [...thirdRow, ...thirdRow]" :key="`row3-${index}`" class="min-w-[150px] p-2">
            <img :src="logo.src" :alt="logo.name"
              class="h-12 sm:h-16 object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              loading="lazy">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axis from '~/assets/img/axis.png'
import bosch from '~/assets/img/bosch.png'
import commscope from '~/assets/img/commscope.png'
import dell from '~/assets/img/dell.png'
import eset from '~/assets/img/eset.png'
import fortinet from '~/assets/img/fortinet.png'
import groupIb from '~/assets/img/group-ib.png'
import hitachi from '~/assets/img/hitachi.png'
import hp from '~/assets/img/hp.png'
import huawei from '~/assets/img/huawei.png'
import ibm from '~/assets/img/ibm.png'
import kaspersky from '~/assets/img/kaspersky.png'
import microsoft from '~/assets/img/microsoft.png'
import netapp from '~/assets/img/netapp.png'
import oracle from '~/assets/img/oracle.png'
import paloalto from '~/assets/img/paloalto.png'
import pelco from '~/assets/img/pelco.png'
import quest from '~/assets/img/quest.png'
import vertiv from '~/assets/img/vertiv.png'
import vmware from '~/assets/img/vmware.png'

const firstRow = [
  { name: 'Oracle', src: oracle },
  { name: 'Dell EMC', src: dell },
  { name: 'Microsoft', src: microsoft },
  { name: 'Huawei', src: huawei },
  { name: 'HP', src: hp },
  { name: 'IBM', src: ibm },
  { name: 'Hitachi', src: hitachi }
]

const secondRow = [
  { name: 'Vertiv', src: vertiv },
  { name: 'Group-IB', src: groupIb },
  { name: 'VMware', src: vmware },
  { name: 'ESET', src: eset },
  { name: 'Quest', src: quest },
  { name: 'Kaspersky', src: kaspersky },
  { name: 'NetApp', src: netapp },
  { name: 'Fortinet', src: fortinet },
  { name: 'Palo Alto Networks', src: paloalto }
]

const thirdRow = [
  { name: 'CommScope', src: commscope },
  { name: 'Bosch', src: bosch },
  { name: 'Pelco', src: pelco },
  { name: 'Axis Communications', src: axis }
]
</script>

<style scoped>
.partner-fade-mask {
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}

@keyframes partners-scroll-left {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@keyframes partners-scroll-right {
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0);
  }
}

.partners-scroll-left {
  animation: partners-scroll-left 30s linear infinite;
}

.partners-scroll-right {
  animation: partners-scroll-right 30s linear infinite;
}

.partners-scroll-left:hover,
.partners-scroll-right:hover {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {

  .partners-scroll-left,
  .partners-scroll-right {
    animation: none;
  }
}
</style>