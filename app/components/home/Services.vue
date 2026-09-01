<!-- app/components/home/Pillars.vue -->
<script setup>
import { ArrowRight } from 'lucide-vue-next'
import brandingIcon from '~/assets/icons/branding.png'
import decorationIcon from '~/assets/icons/decoration.png'
import eventIcon from '~/assets/icons/event.png'
import supportIcon from '~/assets/icons/support.png'

const pillars = [
    {
        title: 'Event Planning & Management',
        description: 'From first inquiry to final confirmation, we coordinate every detail so you can focus on what matters most.',
        icon: eventIcon,
        link: '/services#planning'
    },
    {
        title: 'Decoration, Styling & Design',
        description: 'Immersive environments tailored to your theme, from elegant stage designs to custom floral installations.',
        icon: decorationIcon,
        link: '/services#decoration'
    },
    {
        title: 'Branding',
        description: 'Custom signage, branded décor, and personalized materials that keep your identity front and center.',
        icon: brandingIcon,
        link: '/services#branding'
    },
    {
        title: 'Event Support Services',
        description: 'Hostesses, registration, logistics, and gift sourcing, so every detail is handled with care.',
        icon: supportIcon,
        link: '/services#support'
    }
]

const router = useRouter()
const bouncingIndex = ref(null)

function handleClick(pillar, index, event) {
    event.preventDefault()
    bouncingIndex.value = index
    setTimeout(() => {
        bouncingIndex.value = null
        router.push(pillar.link)
    }, 450)
}
</script>

<template>
    <section class="w-full bg-slate-50 pt-8 pb-20 sm:pt-10 sm:pb-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-3xl text-center">
                <p class="text-sm font-semibold uppercase tracking-widest text-amber-600">
                    What We Do
                </p>
                <h2 class="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                    The Details That Make the Difference&hellip;
                </h2>
                <p class="mt-4 text-base sm:text-lg text-slate-800">
                    We handle every detail with care: the planning, the styling, the branding, and everything in
                    between.
                    We bring it all together so you don't have to juggle a dozen vendors.
                </p>
            </div>

            <div class="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <NuxtLink v-for="(pillar, index) in pillars" :key="pillar.link" :to="pillar.link"
                    class="group flex flex-col items-center text-center sm:items-start sm:text-left rounded-2xl border border-slate-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-100 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
                    @click="handleClick(pillar, index, $event)">
                    <div
                        class="flex h-24 w-24 items-center justify-center rounded-2xl bg-sky-50 transition-colors duration-300 group-hover:bg-sky-500">
                        <span
                            class="icon-mask h-14 w-14 bg-slate-900 transition-colors duration-300 group-hover:bg-white"
                            :class="bouncingIndex === index ? 'animate-tada' : ''"
                            :style="{ maskImage: `url(${pillar.icon})`, WebkitMaskImage: `url(${pillar.icon})` }"
                            aria-hidden="true" />
                    </div>

                    <h3 class="mt-6 text-lg font-semibold text-slate-900">
                        {{ pillar.title }}
                    </h3>
                    <p class="mt-2 flex-grow text-sm sm:text-base leading-relaxed text-slate-800">
                        {{ pillar.description }}
                    </p>

                    <span class="mt-6 inline-flex items-center text-sm font-semibold text-amber-500">
                        Learn more
                        <ArrowRight
                            class="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.icon-mask {
    display: inline-block;
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
}

@keyframes tada {
    0% {
        transform: scale(1) rotate(0deg);
    }

    10%,
    20% {
        transform: scale(0.9) rotate(-3deg);
    }

    30%,
    50%,
    70%,
    90% {
        transform: scale(1.1) rotate(3deg);
    }

    40%,
    60%,
    80% {
        transform: scale(1.1) rotate(-3deg);
    }

    100% {
        transform: scale(1) rotate(0deg);
    }
}

.animate-tada {
    animation: tada 0.5s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
    .animate-tada {
        animation: none;
    }
}
</style>