<!-- app/components/contact/Form.vue -->
<script setup>
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-vue-next'

const formAccessKey = '0f124479-05cd-4fcf-a66e-67276a365cbb'

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
        errors.push('Please select a subject')
    }
    if (!formData.message.trim() || formData.message.length < 10) {
        errors.push('Message must be at least 10 characters long')
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
                subject: `Petabiz Contact: ${formData.subject}`,
                ...formData
            }
        })

        if (response.success) {
            statusMessage.value = { show: true, error: false, text: 'Message sent successfully. We will be in touch soon.' }
            resetForm()
            setTimeout(() => { statusMessage.value.show = false }, 5000)
        } else {
            throw new Error(response.message || 'Failed to send message')
        }
    } catch (error) {
        statusMessage.value = { show: true, error: true, text: error.data?.message || error.message || 'An unexpected error occurred. Please try again.' }
        setTimeout(() => { statusMessage.value.show = false }, 8000)
    } finally {
        isSubmitting.value = false
    }
}
</script>

<template>
    <section class="w-full bg-slate-50 py-20 sm:py-24">
        <div class="mx-auto max-w-4xl px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                    Send Us a Message
                </h2>
                <p class="mt-4 text-base sm:text-lg text-slate-900">
                    Tell us about your organization and how we can help. Our team responds within 24 hours.
                </p>
            </div>

            <form novalidate
                class="mt-14 rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/60 md:p-12"
                @submit="handleSubmit">
                <input type="checkbox" name="botcheck" style="display: none;">

                <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                        <label for="firstName" class="mb-3 block text-sm font-semibold text-slate-900">
                            First Name <span class="text-red-500">*</span>
                        </label>
                        <input id="firstName" v-model="formData.firstName" type="text" name="firstName" required
                            minlength="2" maxlength="100" autocomplete="given-name" placeholder="Enter your first name"
                            class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 placeholder-slate-400 transition-all focus:border-transparent focus:ring-2 focus:ring-sky-500">
                    </div>

                    <div>
                        <label for="lastName" class="mb-3 block text-sm font-semibold text-slate-900">
                            Last Name <span class="text-red-500">*</span>
                        </label>
                        <input id="lastName" v-model="formData.lastName" type="text" name="lastName" required
                            minlength="2" maxlength="100" autocomplete="family-name" placeholder="Enter your last name"
                            class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 placeholder-slate-400 transition-all focus:border-transparent focus:ring-2 focus:ring-sky-500">
                    </div>

                    <div>
                        <label for="email" class="mb-3 block text-sm font-semibold text-slate-900">
                            Email Address <span class="text-red-500">*</span>
                        </label>
                        <input id="email" v-model="formData.email" type="email" name="email" required maxlength="150"
                            autocomplete="email" placeholder="your.email@example.com"
                            class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 placeholder-slate-400 transition-all focus:border-transparent focus:ring-2 focus:ring-sky-500">
                    </div>

                    <div>
                        <label for="phone" class="mb-3 block text-sm font-semibold text-slate-900">
                            Phone Number
                        </label>
                        <input id="phone" v-model="formData.phone" type="tel" name="phone" maxlength="20"
                            autocomplete="tel" placeholder="+234 800 000 0000"
                            class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 placeholder-slate-400 transition-all focus:border-transparent focus:ring-2 focus:ring-sky-500">
                    </div>

                    <div class="md:col-span-2">
                        <label for="subject" class="mb-3 block text-sm font-semibold text-slate-900">
                            Subject <span class="text-red-500">*</span>
                        </label>
                        <select id="subject" v-model="formData.subject" name="subject" required
                            class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 transition-all focus:border-transparent focus:ring-2 focus:ring-sky-500">
                            <option value="">Select a topic...</option>
                            <option value="Our Services">Our Services</option>
                            <option value="Our Products">Our Products</option>
                            <option value="Smart Public Safety">Smart Public Safety</option>
                            <option value="Training">Training</option>
                            <option value="General Inquiry">General Inquiry</option>
                        </select>
                    </div>
                </div>

                <div class="mt-8">
                    <label for="message" class="mb-3 block text-sm font-semibold text-slate-900">
                        Your Message <span class="text-red-500">*</span>
                    </label>
                    <textarea id="message" v-model="formData.message" name="message" rows="6" required minlength="10"
                        maxlength="2000" placeholder="Tell us about your organization and how we can help..."
                        class="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 placeholder-slate-400 transition-all focus:border-transparent focus:ring-2 focus:ring-sky-500" />
                </div>

                <div class="mt-8 flex justify-center">
                    <button type="submit" :disabled="isSubmitting"
                        class="inline-flex min-w-[200px] items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60">
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
                    <div v-if="statusMessage.show" class="mt-6 rounded-xl border-2 px-6 py-4"
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