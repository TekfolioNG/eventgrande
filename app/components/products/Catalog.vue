<!-- app/components/products/Catalog.vue -->
<script setup>
import networkCablesImg from '~/assets/img/networkcables.webp'
import networkEngineeringImg from '~/assets/img/networkengineering.webp'
import ipPhoneImg from '~/assets/img/ipphone.webp'
import iPhone2Img from '~/assets/img/iphone2.webp'
import serverEngineerImg from '~/assets/img/serverengineer.webp'
import externalDiskImg from '~/assets/img/externaldisk.webp'
import routerImg from '~/assets/img/router.webp'
import switchImg from '~/assets/img/switch.webp'
import pcImg from '~/assets/img/personal-computer.webp'

const items = [
  { type: 'text', title: 'Enterprise Servers', description: 'Scalable, high performance servers built for data intensive applications and mission critical workloads.' },
  { type: 'image', src: networkCablesImg, alt: 'Enterprise network cabling infrastructure' },
  { type: 'text', title: 'Enterprise Storage Solutions', description: 'Secure, high capacity NAS and SAN systems that scale with your data and keep your business running.' },
  { type: 'image', src: networkEngineeringImg, alt: 'Network engineer working on infrastructure' },
  { type: 'text', title: 'Converged and Hyper Converged Systems', description: 'Compute, storage, and networking integrated into one platform, for a simpler, more efficient data center.' },
  { type: 'image', src: ipPhoneImg, alt: 'IP phone unified communications device' },
  { type: 'text', title: 'Routers and Switches', description: 'High performance, secure networking hardware that keeps your organization connected, at any scale.' },
  { type: 'image', src: routerImg, alt: 'Enterprise networking router' },
  { type: 'text', title: 'Wireless Solutions', description: 'Enterprise grade Wi-Fi access points and controllers delivering fast, reliable connectivity campus wide.' },
  { type: 'image', src: switchImg, alt: 'Enterprise network switch' },
  { type: 'text', title: 'Network Security', description: 'Firewalls, threat detection, and incident response built to protect your critical systems around the clock.' },
  { type: 'image', src: externalDiskImg, alt: 'Enterprise external storage drive' },
  { type: 'text', title: 'Fibre and RAN Network Integration', description: 'Complete fibre and RAN deployment, from FTTH rollout to enterprise network upgrades.' },
  { type: 'image', src: iPhone2Img, alt: 'IP phone on an office desk' },
  { type: 'text', title: 'Unified Communications', description: 'IP phones, video conferencing, and collaboration tools that integrate seamlessly with your infrastructure.' },
  { type: 'image', src: pcImg, alt: 'Enterprise desktop workstation' },
  { type: 'text', title: 'Power Conditioning Systems', description: 'UPS and inverter solutions that protect critical systems from outages, surges, and fluctuations.' },
  { type: 'image', src: serverEngineerImg, alt: 'Engineer configuring enterprise server hardware' }
]
</script>

<template>
  <section class="w-full bg-slate-50 py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Enterprise Technology, Built to Perform
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-900">
          A growing portfolio of enterprise technology solutions, sourced from Oracle, Hitachi, Dell EMC, and other global leaders.
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