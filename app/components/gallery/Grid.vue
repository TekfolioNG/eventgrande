<!-- app/components/gallery/Grid.vue -->
<script setup>
import { Play, X } from 'lucide-vue-next'
import { galleryItems } from '~/data/gallery.js'

const categories = [
    { key: 'all', label: 'All' },
    { key: 'corporate', label: 'Corporate Events' },
    { key: 'weddings', label: 'Weddings' },
    { key: 'venues', label: 'Birthdays' }
]

const CURATED_PER_CATEGORY = 15

const activeCategory = ref('all')
const visibleCount = ref(24)
const activeItem = ref(null)

function interleave(groups) {
    const result = []
    const maxLength = Math.max(...groups.map((g) => g.length))
    for (let i = 0; i < maxLength; i++) {
        for (const group of groups) {
            if (group[i]) result.push(group[i])
        }
    }
    return result
}

const curatedAllItems = computed(() => {
    const groupKeys = categories.filter((c) => c.key !== 'all').map((c) => c.key)
    const groups = groupKeys.map((key) =>
        galleryItems.filter((item) => item.category === key).slice(0, CURATED_PER_CATEGORY)
    )
    return interleave(groups)
})

const filteredItems = computed(() => {
    if (activeCategory.value === 'all') return curatedAllItems.value
    return galleryItems.filter((item) => item.category === activeCategory.value)
})

const isAllTab = computed(() => activeCategory.value === 'all')
const visibleItems = computed(() => {
    if (isAllTab.value) return filteredItems.value
    return filteredItems.value.slice(0, visibleCount.value)
})
const hasMore = computed(() => !isAllTab.value && visibleCount.value < filteredItems.value.length)

function setCategory(key) {
    activeCategory.value = key
    visibleCount.value = 24
}

function loadMore() {
    visibleCount.value += 24
}

function openLightbox(item) {
    activeItem.value = item
    document.body.style.overflow = 'hidden'
}

function closeLightbox() {
    activeItem.value = null
    document.body.style.overflow = ''
}
</script>

<template>
    <section class="w-full bg-white py-16 sm:py-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="flex flex-wrap items-center justify-center gap-3">
                <button v-for="cat in categories" :key="cat.key" type="button"
                    class="rounded-full border px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors"
                    :class="activeCategory === cat.key
                        ? 'border-amber-400 bg-amber-400 text-slate-900'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-amber-300 hover:text-amber-600'"
                    @click="setCategory(cat.key)">
                    {{ cat.label }}
                </button>
            </div>

            <div class="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
                <button v-for="item in visibleItems" :key="item.id" type="button"
                    class="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl"
                    @click="openLightbox(item)">
                    <img :src="item.type === 'video' ? item.poster : item.src" :alt="item.alt"
                        class="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy">
                    <div
                        class="absolute inset-0 bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/20" />
                    <div v-if="item.type === 'video'" class="absolute inset-0 flex items-center justify-center">
                        <span
                            class="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <Play class="h-6 w-6 translate-x-0.5" fill="currentColor" stroke-width="0" />
                        </span>
                    </div>
                </button>
            </div>

            <div v-if="hasMore" class="mt-12 flex justify-center">
                <button type="button"
                    class="inline-flex items-center rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-amber-400 hover:text-slate-900"
                    @click="loadMore">
                    Load More
                </button>
            </div>

            <p v-if="filteredItems.length === 0" class="mt-12 text-center text-slate-500">
                No photos in this category yet.
            </p>
        </div>

        <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="activeItem"
                class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 sm:p-8"
                @click.self="closeLightbox">
                <button type="button"
                    class="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
                    aria-label="Close" @click="closeLightbox">
                    <X class="h-6 w-6" />
                </button>

                <img v-if="activeItem.type === 'image'" :src="activeItem.src" :alt="activeItem.alt"
                    class="max-h-full max-w-full rounded-lg object-contain">
                <video v-else :src="activeItem.src" :poster="activeItem.poster" controls autoplay preload="none"
                    class="max-h-full max-w-full rounded-lg" />
            </div>
        </Transition>
    </section>
</template>