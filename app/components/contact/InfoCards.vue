<!-- app/components/contact/InfoCards.vue -->
<script setup>
import { Mail, MessageCircle, Phone } from 'lucide-vue-next';

if (import.meta.client) {
    import('@lottiefiles/lottie-player');
}

const stackedCards = [
    {
        icon: Phone,
        title: 'Call Us',
        description: 'Reach out directly to discuss your event and get answers right away.',
        value: '+234 915 253 9368',
        href: 'tel:+2349152539368'
    },
    {
        icon: Mail,
        title: 'Email Us',
        description: 'Send us an email and we\'ll respond within 24 hours.',
        value: 'contact@eventgrande.org',
        href: 'mailto:contact@eventgrande.org'
    }
]
</script>

<template>
    <section class="w-full bg-white py-20 sm:py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-5">
                <a href="#contact-form" class="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md
                transition-all duration-300 hover:-translate-y-1 hover:border-amber-100 hover:shadow-xl lg:col-span-3">
                    <div class="flex h-80 w-full items-center justify-center bg-amber-50 sm:h-96 lg:h-[28rem]">
                        <ClientOnly>
                            <lottie-player
                                src="https://lottie.host/d65cd4e5-1434-4c18-a27f-58a799379160/bmzjgGI9x6.json"
                                background="transparent" renderer="svg" speed="1" autoplay loop
                                class="h-72 w-72 sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]" />
                        </ClientOnly>
                    </div>
                    <div class="p-8 sm:p-10">
                        <div
                            class="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-white">
                            <MessageCircle class="h-7 w-7" stroke-width="1.75" />
                        </div>
                        <h3 class="mt-6 text-xl font-semibold text-slate-900">Free Consultation</h3>
                        <p class="mt-3 max-w-sm text-base text-slate-800">
                            We offer a complimentary initial consultation to understand your vision.
                        </p>
                        <span
                            class="mt-5 inline-block text-xl font-semibold text-sky-600 transition-colors group-hover:text-sky-700">
                            Book a call
                        </span>
                    </div>
                </a>

                <div class="flex flex-col gap-8 lg:col-span-2">
                    <a v-for="card in stackedCards" :key="card.title" :href="card.href" class="group flex-1 rounded-2xl border border-slate-100 bg-white p-8 shadow-md transition-all
                    duration-300 hover:-translate-y-1 hover:border-amber-100 hover:shadow-xl">
                        <div
                            class="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-white">
                            <component :is="card.icon" class="h-7 w-7" stroke-width="1.75" />
                        </div>
                        <h3 class="mt-6 text-xl font-semibold text-slate-900">{{ card.title }}</h3>
                        <p class="mt-3 text-base text-slate-800">{{ card.description }}</p>
                        <span class="mt-4 block font-semibold text-sky-600 transition-colors group-hover:text-sky-700">
                            {{ card.value }}
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>