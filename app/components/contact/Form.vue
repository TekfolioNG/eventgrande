<!-- app/components/contact/Form.vue -->
<script setup>
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-vue-next'

const formAccessKey = '7aa48862-f63c-4d62-9c81-43336b01715f'

const formData = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
})

const isSubmitting = ref(false)
const statusMessage = ref({ show: false, error: false, text: '' })

function resetForm() {
    Object.keys(formData).forEach((key) => {
        formData[key] = ''
    })
}

function validateForm() {
    const errors = []
    if (!formData.firstName.trim() || formData.firstName.length < 2) {
        errors.push('First name must be at least 2 characters long')
    }
    if (!formData.lastName.trim() || formData.lastName.length < 2) {
        errors.push('Last name must be at least 2 characters long')
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.push('Please enter a valid email address')
    }
    if (!formData.subject.trim()) {
        errors.push('Please select what your event is about')
    }
    if (!formData.message.trim() || formData.message.length < 10) {
        errors.push('Tell us a little more about your event')
    }
    return errors
}

async function handleSubmit(event) {
    event.preventDefault()
    if (isSubmitting.value) return

    const validationErrors = validateForm()
    if (validationErrors.length > 0) {
        statusMessage.value = { show: true, error: true, text: validationErrors.join('. ') }
        setTimeout(() => { statusMessage.value.show = false }, 8000)
        return
    }

    isSubmitting.value = true
    statusMessage.value = { show: true, error: false, text: 'Sending your message...' }

    try {
        const response = await $fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: {
                access_key: formAccessKey,
                subject: `Event Grande Inquiry: ${formData.subject}`,
                ...formData
            }
        })

        if (response.success) {
            statusMessage.value = { show: true, error: false, text: 'Message sent. We\'ll be in touch within 24 hours.' }
            resetForm()
            setTimeout(() => { statusMessage.value.show = false }, 5000)
        } else {
            throw new Error(response.message || 'Failed to send message')
        }
    } catch (error) {
        statusMessage.value = { show: true, error: true, text: error.data?.message || error.message || 'Something went wrong. Please try again.' }
        setTimeout(() => { statusMessage.value.show = false }, 8000)
    } finally {
        isSubmitting.value = false
    }
}
</script>

<template>
    <section id="contact-form" class="relative w-full scroll-mt-24 bg-slate-950 py-20 sm:py-24">
        <div class="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
            <div class="text-center">
                <p class="text-sm font-semibold uppercase tracking-widest text-amber-400">
                    Tell Us Your Story
                </p>
                <h2 class="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    Let's Bring It to Life
                </h2>
                <p class="mt-4 text-base text-slate-300 sm:text-lg">
                    Share a few details and our team will reach out within 24 hours.
                </p>
            </div>

            <form novalidate class="mt-12 rounded-[2rem] border border-white/10 bg-white p-8 shadow-2xl md:p-12"
                @submit="handleSubmit">
                <input type="checkbox" name="botcheck" style="display: none;">

                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label for="firstName" class="mb-2 block text-sm font-semibold text-slate-900">
                            First Name <span class="text-amber-600">*</span>
                        </label>
                        <input id="firstName" v-model="formData.firstName" type="text" name="firstName" required
                            minlength="2" maxlength="100" autocomplete="given-name" placeholder="Jane"
                            class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder-slate-400 transition-all focus:border-amber-300 focus:bg-white focus:ring-2 focus:ring-amber-400/40">
                    </div>

                    <div>
                        <label for="lastName" class="mb-2 block text-sm font-semibold text-slate-900">
                            Last Name <span class="text-amber-600">*</span>
                        </label>
                        <input id="lastName" v-model="formData.lastName" type="text" name="lastName" required
                            minlength="2" maxlength="100" autocomplete="family-name" placeholder="Doe"
                            class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder-slate-400 transition-all focus:border-amber-300 focus:bg-white focus:ring-2 focus:ring-amber-400/40">
                    </div>

                    <div>
                        <label for="email" class="mb-2 block text-sm font-semibold text-slate-900">
                            Email Address <span class="text-amber-600">*</span>
                        </label>
                        <input id="email" v-model="formData.email" type="email" name="email" required maxlength="150"
                            autocomplete="email" placeholder="jane@example.com"
                            class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder-slate-400 transition-all focus:border-amber-300 focus:bg-white focus:ring-2 focus:ring-amber-400/40">
                    </div>

                    <div>
                        <label for="phone" class="mb-2 block text-sm font-semibold text-slate-900">
                            Phone Number
                        </label>
                        <input id="phone" v-model="formData.phone" type="tel" name="phone" maxlength="20"
                            autocomplete="tel" placeholder="+234 800 000 0000"
                            class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder-slate-400 transition-all focus:border-amber-300 focus:bg-white focus:ring-2 focus:ring-amber-400/40">
                    </div>

                    <div class="md:col-span-2">
                        <label for="subject" class="mb-2 block text-sm font-semibold text-slate-900">
                            What's the Occasion? <span class="text-amber-600">*</span>
                        </label>
                        <select id="subject" v-model="formData.subject" name="subject" required
                            class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 transition-all focus:border-amber-300 focus:bg-white focus:ring-2 focus:ring-amber-400/40">
                            <option value="">Select an option...</option>
                            <option value="Event Planning & Management">Wedding Ceremony</option>
                            <option value="Decoration, Styling & Design">Couple's Anniversary</option>
                            <option value="Branding">Company Retreat</option>
                            <option value="Event Support Services">Milestone Birthday</option>
                            <option value="General Inquiry">Other/General Inquiry</option>
                        </select>
                    </div>
                </div>

                <div class="mt-6">
                    <label for="message" class="mb-2 block text-sm font-semibold text-slate-900">
                        Tell Us About Your Event <span class="text-amber-600">*</span>
                    </label>
                    <textarea id="message" v-model="formData.message" name="message" rows="6" required minlength="10"
                        maxlength="2000"
                        placeholder="Date, guest count, location, style. Anything that helps us picture it..."
                        class="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder-slate-400 transition-all focus:border-amber-300 focus:bg-white focus:ring-2 focus:ring-amber-400/40" />
                </div>

                <div class="mt-8 flex justify-center">
                    <button type="submit" :disabled="isSubmitting"
                        class="inline-flex min-w-[220px] items-center justify-center rounded-full bg-amber-400 px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-slate-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60">
                        <span v-if="!isSubmitting" class="flex items-center">
                            Send Message
                            <Send class="ml-2 h-4 w-4" />
                        </span>
                        <span v-else class="flex items-center">
                            <Loader2 class="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </span>
                    </button>
                </div>

                <Transition enter-active-class="transition duration-300 ease-out"
                    enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
                    <div v-if="statusMessage.show" class="mt-6 rounded-2xl border-2 px-6 py-4"
                        :class="statusMessage.error ? 'border-red-200 bg-red-50 text-red-800' : 'border-green-200 bg-green-50 text-green-800'"
                        role="status">
                        <div class="flex items-center">
                            <CheckCircle2 v-if="!statusMessage.error" class="mr-3 h-5 w-5 flex-shrink-0" />
                            <AlertCircle v-else class="mr-3 h-5 w-5 flex-shrink-0" />
                            <p class="font-medium">{{ statusMessage.text }}</p>
                        </div>
                    </div>
                </Transition>
            </form>
        </div>
    </section>
</template>

<style scoped>
.dot-pattern {
    background-image: radial-gradient(rgba(251, 191, 36, 0.25) 1.5px, transparent 1.5px);
    background-size: 28px 28px;
}
</style>