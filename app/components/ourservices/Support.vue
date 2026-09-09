<!-- app/components/services/Support.vue -->
<script setup>
import { ArrowRight, ClipboardList, Gift, PhoneCall, Users } from 'lucide-vue-next';

const subServices = [
    {
        title: 'Hostesses',
        description: 'Trained hostesses skilled in guest reception, registration, ushering, and warm, attentive assistance from arrival to farewell.',
        icon: Users
    },
    {
        title: 'Registration Management',
        description: 'Seamless guest registration with efficient check-in, proper documentation, and a smooth flow of attendees into your event.',
        icon: ClipboardList
    },
    {
        title: 'Call Center, Hotel Bookings & Venue Sourcing',
        description: 'Responsive guest communications, seamless hotel bookings, and venue sourcing that matches your event\'s vision and requirements.',
        icon: PhoneCall
    },
    {
        title: 'Corporate Gift Sourcing',
        description: 'Thoughtful, high-quality gifts, from executive items to custom hampers, curated and delivered to make a lasting impression.',
        icon: Gift
    }
]
</script>

<template>
    <section id="support" class="w-full scroll-mt-24 bg-slate-50 py-16 sm:py-20">
        <div class="mx-auto max-w-6xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
                <p class="text-sm font-semibold uppercase tracking-widest text-amber-500">
                    04 &middot; Support
                </p>
                <h2 class="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    Event Support Services
                </h2>
                <p class="mt-4 text-base leading-relaxed text-slate-800 sm:text-lg">
                    Let us take the logistics off your plate. From the first inquiry to the final confirmation, our
                    support team coordinates every detail so you can focus on what matters most.
                </p>
            </div>

            <div class="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div v-for="service in subServices" :key="service.title"
                    class="rounded-2xl border border-slate-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
                    <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                        <component :is="service.icon" class="h-7 w-7" stroke-width="1.75" />
                    </div>
                    <h3 class="mt-4 text-base font-semibold text-slate-900">
                        {{ service.title }}
                    </h3>
                    <p class="mt-2 text-base leading-relaxed text-slate-800">
                        {{ service.description }}
                    </p>
                </div>
            </div>

            <div
                class="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center sm:flex-row sm:p-8 sm:text-left">
                <div>
                    <h3 class="text-lg font-semibold text-slate-900">
                        Have an unexpected moment on the day?
                    </h3>
                    <p class="mt-1 text-sm text-slate-800 sm:text-base">
                        Our on-site Event Emergency Service handles the small stuff, so you don't have to.
                    </p>
                </div>
                <NuxtLink to="/#emergency-service"
                    class="inline-flex flex-shrink-0 items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-slate-900 transition-colors hover:bg-slate-900 hover:text-white">
                    Learn More
                    <ArrowRight class="ml-2 h-4 w-4" />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>