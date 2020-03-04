<template functional>
    <div class="relative z-20 flex w-full px-2 mb-4" v-bind="data.attrs" :style="data.style">
        <div
            class="mx-auto bg-white rounded group shadow-none hover:shadow-xl transition-all duration-200 ease-in-out md:w-22/24"
        >
            <div class="relative z-20 pt-16 pb-8 pl-16">
                <g-link :to="props.baseUrl" class="block w-16/24">
                    <h2 class="mb-3 text-2xl font-black leading-tight">{{ props.reference.heading }}</h2>
                </g-link>
                <span class="inline-block mb-8 text-sm text-green-500" v-if="props.reference.vyberKlienta">{{ props.reference.vyberKlienta[0].title }}</span>
                <div class="text-lg text-gray-600 w-14/24" v-html="props.reference.excerpt"/>
            </div>
            <sub-link :href="props.baseUrl" :label="props.reference.referenceDetailLinkText ? props.reference.referenceDetailLinkText : 'Prohlédnout referenci'" />
            <div class="absolute z-20 bottom-0 right-0 z-10 w-full px-2 text-right pointer-events-none grid gap-4">
                <div class="row-start-1 row-end-1 col-start-8 col-end-11 pointer-events-auto" v-if="props.reference.referenceMultipleImages.length > 0">
                    <g-link
                        :to="props.baseUrl"
                        class="relative block aspect-ratio-square transform translate-x-8 group-hover:translate-x-0 transition-transform duration-200 ease-in-out"
                    >
                        <g-image
                            class="absolute inset-0 object-cover w-full h-full"
                            :src="props.reference.referenceMultipleImages[0].url"
                        />
                    </g-link>
                </div>
                <div class="row-start-1 row-end-1 col-start-10 col-end-13 pointer-events-auto" v-if="props.reference.referenceMultipleImages.length === 2">
                    <g-link
                        :to="props.baseUrl"
                        class="relative block aspect-ratio-square transform group-hover:translate-x-8 transition-transform duration-200 ease-in-out"
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
