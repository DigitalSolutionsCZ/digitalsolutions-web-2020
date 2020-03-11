<template functional>
    <div
        class="w-full mx-auto transition-all duration-200 ease-in-out bg-white shadow-none md:rounded group hover:shadow-xl md:w-22/24"
    >
        <div class="relative z-20 p-4 md:p-8 xl:pb-8 xl:px-16 xl:pt-16">
            <g-link :to="props.baseUrl" class="block w-18/24 md:w-16/24">
                <h2 class="mb-2 text-base font-black text-black xl:mb-3 xl:leading-tight md:text-xl xl:text-2xl">
                    {{ props.reference.heading }}
                </h2>
            </g-link>
            <span
                class="inline-block mb-4 text-sm text-green-500 md:mb-5 md:mb-8"
                v-if="parent.mapObject(props.reference, ['vyberKlienta', 0, 'title'])"
            >
                {{ parent.mapObject(props.reference, ['vyberKlienta', 0, 'title']) }}
            </span>
            <div class="w-full text-xs leading-relaxed text-gray-600 md:text-base md:w-12/24 xl:w-14/24"
                 v-html="props.reference.excerpt"/>
        </div>
        <sub-link
            :href="props.baseUrl"
            :label="props.reference.referenceDetailLinkText ? props.reference.referenceDetailLinkText : 'Prohlédnout referenci'"
        />
        <div
            class="bottom-0 right-0 z-20 grid grid-cols-11 gap-4 px-2 text-right pointer-events-none md:absolute md:w-full md:grid-cols-none backface-visibility-hidden translate-z-0">
            <div
                class="self-end col-start-2 col-end-7 row-start-1 row-end-1 pointer-events-auto md:col-start-8 md:col-end-11 translate-z-0"
                v-if="props.reference.referenceMultipleImages.length > 0">
                <g-link
                    :to="props.baseUrl"
                    class="relative block transition-transform duration-200 ease-in-out transform aspect-ratio-square xl:translate-x-8 xl:translate-y-0 xl:scale-1 group-hover:translate-x-0 will-change-transform translate outline-none"
                >
                    <g-image
                        class="absolute inset-0 object-cover w-full h-full"
                        :src="parent.mapObject(props.reference, ['referenceMultipleImages', 0, 'url'])"
                    />
                </g-link>
            </div>
            <div class="col-start-6 col-end-11 row-start-1 row-end-1 pointer-events-auto md:col-start-10 md:col-end-13 translate-z-0"
                 v-if="props.reference.referenceMultipleImages.length === 2">
                <g-link
                    :to="props.baseUrl"
                    class="relative block transition-transform duration-200 ease-in-out transform aspect-ratio-square xl:group-hover:translate-x-8 xl:translate-y-0 xl:scale-1 will-change-transform"
                >
                    <g-image
                        class="absolute inset-0 object-cover w-full h-full"
                        :src="parent.mapObject(props.reference, ['referenceMultipleImages', 1, 'url'])"
                    />
                </g-link>
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
