<!-- app/components/training/Coaches.vue -->
<script setup>
import antoineImg from '~/assets/img/antoinne.webp';
import jamesImg from '~/assets/img/james-ladipo.webp';
import augustinaImg from '~/assets/img/sarbiah.webp';

const coaches = [
    {
        name: 'James Kola Ladipo',
        role: 'CEO & First Triple Gallup Coach in Nigeria',
        image: jamesImg,
        intro: 'The first Triple Gallup Qualified Coach in Nigeria, leading Petabiz with over two decades of cross-functional business expertise.',
        highlights: [
            '20+ years across Finance & Accounting, Sales & Marketing, IT, and Human Capital',
            'Fellow of ICAN and Certified SAP FICO Consultant'
        ],
        certifications: [
            'Gallup-Certified BP10 Coach',
            'Gallup-Certified Strengths Coach',
            'Gallup Train-the-Trainer Coach'
        ]
    },
    {
        name: 'Antoine Carriere',
        role: 'Triple Qualified Gallup Strengths Coach & Trainer',
        image: antoineImg,
        intro: 'A Triple Qualified Gallup Strengths Coach and Trainer specializing in leadership, engagement, and personal growth.',
        highlights: [
            'Baccalaureate in Communication and Psychology, plus a Business Administration Certificate from the University of Ottawa',
            'Specializes in coaching entrepreneurs through the pre-launch phase'
        ],
        certifications: [
            'Gallup-Certified Strengths Coach',
            'Gallup-Certified Strengths Course Leader',
            'Trained Builder Profile 10 Coach and Trainer'
        ]
    },
    {
        name: 'Augustina Kwao-Sarbah',
        role: 'Gallup Certified Strengths Coach',
        image: augustinaImg,
        intro: 'A Gallup Certified Strengths Coach with deep expertise across human capital development.',
        highlights: [
            '15+ years of experience in banking and academia',
            'Specializes in performance management, talent management, and workplace culture'
        ],
        certifications: [
            'Gallup-Certified Strengths Coach',
            'Certified CliftonStrengths Trainer and HR Practitioner',
            'Certified NLP Coach (ABNLP)'
        ]
    }
]
</script>

<template>
    <section class="w-full bg-white py-12 sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-3xl text-center">
                <p class="text-sm font-semibold uppercase tracking-widest text-sky-600">
                    World-Class Expertise
                </p>
                <h2 class="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                    Our Gallup Certified Coaches
                </h2>
                <p class="mt-4 text-base sm:text-lg text-slate-900">
                    Meet our team of internationally certified Gallup coaches dedicated to transforming organizations
                    through strengths-based development.
                </p>
            </div>

            <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div v-for="coach in coaches" :key="coach.name"
                    class="overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
                    <div class="h-80 w-full overflow-hidden bg-slate-100">
                        <img :src="coach.image" :alt="coach.name" class="h-full w-full object-cover object-center">
                    </div>
                    <div class="p-6 md:p-8">
                        <h3 class="text-xl font-semibold text-slate-900">
                            {{ coach.name }}
                        </h3>
                        <p class="mt-1 text-sm font-semibold uppercase tracking-wide text-sky-600">
                            {{ coach.role }}
                        </p>
                        <p class="mt-4 text-base leading-relaxed text-slate-900">
                            {{ coach.intro }}
                        </p>

                        <ul class="mt-4 space-y-2">
                            <li v-for="point in coach.highlights" :key="point"
                                class="flex items-start gap-2 text-base leading-relaxed text-slate-900">
                                <span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-600" />
                                <span>{{ point }}</span>
                            </li>
                        </ul>

                        <p class="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-900">
                            Certifications
                        </p>
                        <ul class="mt-2 space-y-1.5 border-t border-slate-100 pt-3">
                            <li v-for="cert in coach.certifications" :key="cert"
                                class="flex items-start gap-2 text-sm font-medium text-sky-700">
                                <span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-600" />
                                {{ cert }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>