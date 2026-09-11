<script setup lang="ts">

useSeoMeta({
  title: 'Event Grande',
  ogTitle: 'Event Grande',
  titleTemplate: 'Event Grande',
  description: 'Grand designs, styles, stages, and experiences that create lasting memories for you and your guests.',
  ogDescription: 'Grand designs, styles, stages, and experiences that create lasting memories for you and your guests.',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Event Grande',
  twitterDescription: 'Grand designs, styles, stages, and experiences that create lasting memories for you and your guests.',

  ogImage: {
    url: 'https://eventgrande.org/event-hero.webp',
    width: 1200,
    height: 630,
    alt: 'Event Grande - Premier Event Management & Decoration'
  },
  twitterImage: 'https://eventgrande.org/event-hero.webp'
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
