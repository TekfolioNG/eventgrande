<template>
  <section class="w-full bg-white py-20 sm:py-24">
    <div
      class="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 px-6 py-16 text-center shadow-lg md:px-12 md:py-20">
      <img src="~/assets/img/support_petabiz.jpg" alt="" class="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="lazy">

      <div class="relative z-10 flex flex-col items-center">
        <h2 class="text-3xl md:text-4xl font-extrabold text-white">
          Create the Workplace of the Future
        </h2>
        <p class="mt-4 max-w-2xl text-lg md:text-xl text-slate-200">
          From enterprise infrastructure to public safety innovation and workforce development,
          let's discuss how Petabiz can support your organizational goals.
        </p>
        <NuxtLink to="/contact"
          class="mt-8 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-base font-semibold text-slate-950 transition-colors hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60">
          Get Started Today
        </NuxtLink>
      </div>
    </div>
  </section>
</template>