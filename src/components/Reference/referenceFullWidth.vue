<template functional>
    <div class="relative z-20 flex w-full px-2 mb-4" v-bind="data.attrs" :style="data.style">
        <div
            class="w-full mx-auto bg-white shadow-none md:rounded group hover:shadow-xl transition-all duration-200 ease-in-out md:w-22/24"
        >
            <div class="relative z-20 p-4 md:p-8 xl:pb-8 xl:px-16 xl:pt-16">
                <g-link :to="props.baseUrl" class="block w-18/24 md:w-16/24">
                    <h2 class="mb-2 text-base font-black xl:mb-3 xl:leading-tight md:text-xl xl:text-2xl">{{ props.reference.heading }}</h2>
                </g-link>
                <span class="inline-block mb-4 text-sm text-green-500 md:mb-5 md:mb-8" v-if="props.reference.vyberKlienta">{{ props.reference.vyberKlienta[0].title }}</span>
                <div class="w-full text-xs leading-relaxed text-gray-600 md:text-base md:w-12/24 xl:w-14/24" v-html="props.reference.excerpt"/>
            </div>
            <sub-link :href="props.baseUrl" :label="props.reference.referenceDetailLinkText ? props.reference.referenceDetailLinkText : 'Prohlédnout referenci'" />
            <div class="bottom-0 right-0 z-10 z-20 px-2 text-right pointer-events-none md:absolute md:w-full grid gap-4 grid-cols-11 md:grid-cols-none">
                <div class="self-end pointer-events-auto row-start-1 row-end-1 col-start-2 col-end-7 md:col-start-8 md:col-end-11" v-if="props.reference.referenceMultipleImages.length > 0">
                    <g-link
                        :to="props.baseUrl"
                        class="relative block aspect-ratio-square transform xl:translate-x-8 group-hover:translate-x-0 transition-transform duration-200 ease-in-out"
                    >
                        <g-image
                            class="absolute inset-0 object-cover w-full h-full"
                            :src="props.reference.referenceMultipleImages[0].url"
                        />
                    </g-link>
                </div>
                <div class="pointer-events-auto row-start-1 row-end-1 col-start-6 col-end-11 md:col-start-10 md:col-end-13" v-if="props.reference.referenceMultipleImages.length === 2">
                    <g-link
                        :to="props.baseUrl"
                        class="relative block aspect-ratio-square transform xl:group-hover:translate-x-8 transition-transform duration-200 ease-in-out"
                    >
                        <g-image
                            class="absolute inset-0 object-cover w-full h-full"
                            :src="props.reference.referenceMultipleImages[1].url"
                        />
                    </g-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        reference: Object,
        baseUrl: String,
    }
}
</script>
