<!-- app/components/contact/Faq.vue -->
<script setup>
const faqs = [
    {
        question: 'How quickly do you respond to inquiries?',
        answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent needs, please call us directly.'
    },
    {
        question: 'Do you work across all four business areas, or should I contact you separately?',
        answer: 'One team, one point of contact. Whether it\'s infrastructure, public safety technology, or workforce training, select the relevant topic in the form above and we\'ll route it to the right specialists.'
    },
    {
        question: 'Do you offer free consultations?',
        answer: 'Yes. We offer complimentary initial consultations to understand your organization\'s needs and recommend the right path forward.'
    }
]
</script>

<template>
    <section class="w-full bg-white py-20 sm:py-24">
        <div class="mx-auto max-w-3xl px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                    Frequently Asked Questions
                </h2>
                <p class="mt-4 text-base sm:text-lg text-slate-900">
                    Quick answers to common questions about working with us.
                </p>
            </div>

            <div class="mt-14 space-y-6">
                <div v-for="faq in faqs" :key="faq.question"
                    class="rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:border-sky-100 hover:shadow-lg hover:shadow-slate-200/60">
                    <h3 class="flex items-center text-lg font-semibold text-slate-900">
                        <span class="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-sky-600" />
                        {{ faq.question }}
                    </h3>
                    <p class="mt-3 pl-5 text-base text-slate-900">
                        {{ faq.answer }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>