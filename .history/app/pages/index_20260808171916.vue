<!-- app/pages/index.vue -->
<template>
  <div>
    <!-- HERO: PRIMARY TECH PARTNER FOCUS -->
    <section class="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <span class="text-sky-400 font-semibold tracking-wider uppercase text-xs bg-sky-500/10 px-3 py-1 rounded-full">
          Enterprise Systems & Integration
        </span>
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mt-4 mb-6 text-white">
          Your Strategic Technology & Infrastructure Partner
        </h1>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          Petabiz engineers and deploys mission-critical telecommunications networks, physical threat detection matrices, and intelligent technology ecosystems.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/telco" class="bg-sky-600 hover:bg-sky-500 text-white font-medium px-6 py-3 rounded-lg transition shadow-lg shadow-sky-500/20">
            Explore Solutions Hub
          </NuxtLink>
          <NuxtLink to="/training" class="bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium px-6 py-3 rounded-lg border border-slate-700 transition">
            View Training Tracks
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CORE CAPABILITIES GRID -->
    <section class="py-20 px-6 max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-white">Technical Infrastructure Delivery</h2>
        <p class="text-slate-400 mt-2">Industrial-grade technical execution for enterprise platforms.</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-slate-950 p-8 rounded-xl border border-slate-800 hover:border-sky-500/30 transition group">
          <div class="text-sky-500 text-3xl mb-4 group-hover:scale-110 transition duration-300">📡</div>
          <h3 class="text-xl font-semibold text-white mb-2">Telecom Systems</h3>
          <p class="text-slate-400 text-sm leading-relaxed">Fiber optic rollouts, complex pipeline routing architectures, and carrier-grade switching networks.</p>
        </div>
        <div class="bg-slate-950 p-8 rounded-xl border border-slate-800 hover:border-sky-500/30 transition group">
          <div class="text-sky-500 text-3xl mb-4 group-hover:scale-110 transition duration-300">🛡️</div>
          <h3 class="text-xl font-semibold text-white mb-2">Public Safety Operations</h3>
          <p class="text-slate-400 text-sm leading-relaxed">Modern threat management tools, connected sensor matrices, and secure digital evidence network paths.</p>
        </div>
        <div class="bg-slate-950 p-8 rounded-xl border border-slate-800 hover:border-sky-500/30 transition group">
          <div class="text-sky-500 text-3xl mb-4 group-hover:scale-110 transition duration-300">⚡</div>
          <h3 class="text-xl font-semibold text-white mb-2">Power Conditioning</h3>
          <p class="text-slate-400 text-sm leading-relaxed">Industrial voltage tracking, continuous surge containment, and utility isolation frameworks for clean compute loops.</p>
        </div>
      </div>
    </section>

    <!-- SYNERGY TRANSITION -->
    <section class="bg-gradient-to-r from-sky-950/30 via-slate-950 to-sky-950/30 border-y border-slate-800 py-16 px-6 text-center">
      <div class="max-w-3xl mx-auto">
        <h3 class="text-2xl font-bold text-white mb-3">Enterprise Knowledge Amplification</h3>
        <p class="text-slate-400 leading-relaxed">
          We do not just install complex field architectures. Through our high-tech academy arm, we build custom workforce training tracks to ensure operational mastery.
        </p>
      </div>
    </section>
  </div>
</template>
