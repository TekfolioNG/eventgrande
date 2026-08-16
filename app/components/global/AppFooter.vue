<!-- app/components/global/AppFooter.vue -->
<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const productCategories = [
  { name: 'Enterprise Servers' },
  { name: 'Enterprise Storage Solutions' },
  { name: 'Converged & Hyper-Converged Infrastructure' },
  { name: 'Routers & Switches (Core & Access Layers)' },
  { name: 'Wireless Connectivity Solutions' },
  { name: 'Network Security Appliances & Firewalls' },
  { name: 'Power Conditioning Systems (UPS & Inverters)' },
  { name: 'Unified Communications & VoIP Tools' }
]

const oemPartners = [
  'Oracle Enterprise Solutions',
  'Huawei Innovations',
  'IBM Enterprise Systems',
  'Dell EMC Storage Solutions',
  'Microsoft Cloud Platforms',
  'Hitachi Data Systems',
  'Vertiv Power Infrastructure',
  'NetApp Data Management',
  'Fortinet Security Matrices',
  'Palo Alto Networks',
  'VMware Systems'
]
</script>

<template>
  <footer class="bg-slate-950 text-gray-100 border-t border-slate-900 font-sans">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
        
        <!-- COLUMN 1: ABOUT US -->
        <div class="space-y-6">
          <NuxtLink
            to="/"
            class="inline-block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
            aria-label="Petabiz Technology — Home"
          >
            <img class="h-12 w-auto mx-auto md:mx-0 object-contain" src="~/assets/img/Petabiz_logo.png" alt="Petabiz Nigeria" />
          </NuxtLink>
          <div class="space-y-3">
            <!-- #1: header color -> secondary orange (placeholder orange-500, swap for exact brand hex) -->
            <h3 class="text-sm uppercase tracking-widest font-black text-gray-400">
              About Us
            </h3>
            <!-- #2: font bumped xs -> sm | #3: contrast fixed slate-400 -> white -->
            <p class="text-sm text-gray-300 leading-relaxed">
              Petabiz Nigeria is a premier technology integration partner executing mission-critical telecommunications networks, digital law enforcement ecosystems, and enterprise infrastructure pipelines.
            </p>
          </div>
        </div>

        <!-- COLUMN 2: PORTFOLIO SOLUTIONS -->
        <div class="space-y-4">
          <h3 class="text-sm uppercase tracking-widest font-black text-gray-400">
            <NuxtLink to="/products" class="hover:text-gray-100 transition">Core Products</NuxtLink>
          </h3>
          <ul class="space-y-2.5 text-sm text-gray-300">
            <li v-for="category in productCategories" :key="category.name" class="hover:text-slate-300 transition duration-150">
              {{ category.name }}
            </li>
          </ul>
        </div>

        <!-- COLUMN 3: OEM STRATEGIC PARTNERS -->
        <div class="space-y-4">
          <h3 class="text-sm uppercase tracking-widest font-black text-gray-400">
            OEM Partners
          </h3>
          <div class="grid grid-cols-2 gap-2 text-left">
            <ul class="space-y-2 text-sm text-gray-300">
              <li v-for="(partner, index) in oemPartners.slice(0, 6)" :key="index">
                {{ partner }}
              </li>
            </ul>
            <ul class="space-y-2 text-sm text-gray-300">
              <li v-for="(partner, index) in oemPartners.slice(6)" :key="index">
                {{ partner }}
              </li>
            </ul>
          </div>
        </div>

        <!-- COLUMN 4: MAN HOUSE CONTACT MATRIX -->
        <div class="space-y-5 justify-center md:justify-start">
          <h3 class="text-sm uppercase tracking-widest font-black text-gray-400">
            Contact Channels
          </h3>
          <div class="space-y-4 text-sm text-gray-300">
            <div class="flex items-start space-x-3 justify-center md:justify-start">
              <svg class="w-4 h-4 text-orange-400 fill-none flex-shrink-0 mt-0.5" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p class="leading-relaxed">77 Awolowo Way, <br>MAN House (4th Floor), <br>Ikeja, Lagos, Nigeria</p>
            </div>
            <div class="flex items-center space-x-3 justify-center md:justify-start">
              <svg class="w-4 h-4 text-orange-400 fill-none shrink-0" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p>(+234) 802 326 7433</p>
            </div>
            <div class="flex items-center space-x-3 justify-center md:justify-start">
              <svg class="w-4 h-4 text-orange-400 fill-none shrink-0" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p>info@petabiz.com</p>
            </div>
          </div>
          
          <!-- SOCIAL CONNECTIONS PANEL -->
          <div class="flex space-x-4 pt-2 justify-center md:justify-start">
            <a
              href="#"
              aria-label="Petabiz on Facebook"
              class="text-slate-400 hover:text-sky-400 transition-colors rounded-sm focus-visible:outline-none"
            >
              <svg class="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            
            <a
              href="#"
              aria-label="Petabiz on LinkedIn"
              class="text-slate-400 hover:text-sky-400 transition-colors rounded-sm focus-visible:outline-none"
            >
              <svg class="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- SUB-FOOTER REBRAND MATRIX -->
    <div class="bg-slate-950 border-t border-slate-900 py-6">
      <div class="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 text-center md:text-left gap-2">
        <p class="uppercase tracking-wider font-medium">© {{ currentYear }} Petabiz Nigeria Ltd. All Rights Reserved.</p>
        <!-- #4: font bumped, label simplified to "Web Dev by Tekfolio" -->
        <a
          href="https://tekfolio.ng"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm hover:text-orange-300 transition-colors rounded-sm focus-visible:outline-none"
        >
          Web Dev by Tekfolio
        </a>
      </div>
    </div>
  </footer>
</template>