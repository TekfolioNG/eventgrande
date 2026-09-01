<script setup lang="ts">

useSeoMeta({
  title: 'Petabiz Nigeria Ltd',
  ogTitle: 'Petabiz Nigeria Ltd',
  titleTemplate: 'Petabiz Nigeria Ltd',
  description: 'Global OEM Solutions for Enterprise Success.',
  ogDescription: 'Global OEM Solutions for Enterprise Success',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Petabiz Nigeria Ltd',
  twitterDescription: 'Global OEM Solutions for Enterprise Success',

  ogImage: {
    url: 'https://petabiz.com/networkcables.webp',
    width: 1200,
    height: 630,
    alt: 'Petabiz Nigeria Ltd - Trsuted Tech Partner'
  },
  twitterImage: 'https://petabiz.com/networkcables.webp'
})

</script>

<template>
  <div class="space-y-0">
    <HomeHero />
    <HomeIntro />
    <HomeServices />
    <HomeAssurance />
    <HomeLogos />
    <HomeCta />
  </div>
</template>
