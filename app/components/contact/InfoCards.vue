<script setup>
import { Mail, MapPin, Phone } from 'lucide-vue-next';

const cards = [
    {
        icon: Mail,
        title: 'Email Us',
        description: "Send us an email and we'll respond within 24 hours.",
        value: 'info@petabiz.com',
        href: 'mailto:info@petabiz.com'
    },
    {
        icon: Phone,
        title: 'Call Us',
        description: 'Available Monday to Friday, 9AM to 5PM.',
        value: '+234 802 326 7433',
        href: 'tel:+2348023267433'
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        description: 'Come say hello at our office.',
        value: '77 Awolowo Way, MAN House (4th Floor), Ikeja, Lagos, Nigeria',
        href: null
    }
]
</script>

<template>
    <section class="w-full bg-white py-20 sm:py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div v-for="card in cards" :key="card.title"
                    class="rounded-2xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sky-100 hover:shadow-xl hover:shadow-slate-200/60">
                    <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                        <component :is="card.icon" class="h-7 w-7" stroke-width="1.5" />
                    </div>
                    <h3 class="mt-6 text-xl font-semibold text-slate-900">{{ card.title }}</h3>
                    <p class="mt-3 text-base text-slate-500">{{ card.description }}</p>

                    <!-- Fixed missing '<a' bracket and changed to NuxtLink -->
                    <NuxtLink v-if="card.href" :to="card.href"
                        class="mt-4 block font-semibold text-sky-600 transition-colors hover:text-sky-700">
                        {{ card.value }}
                    </NuxtLink>
                    <address v-else class="mt-4 font-semibold not-italic text-sky-600">
                        {{ card.value }}
                    </address>
                </div>
            </div>
        </div>
    </section>
</template>
