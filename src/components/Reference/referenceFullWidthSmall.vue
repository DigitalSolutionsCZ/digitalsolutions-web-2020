<template functional>
    <div
        class="relative flex flex-col items-start w-full mx-auto overflow-hidden transition-all duration-200 ease-in-out bg-white md:rounded group hover:shadow-xl"
    >
        <div class="relative z-20 p-4 md:p-8 xl:pb-8 xl:px-16 xl:pt-16">
            <g-link :to="props.baseUrl">
                <h2 class="mb-2 text-base font-black text-black xl:mb-3 md:leading-tight md:text-lg xl:text-xl">
                    {{ props.reference.heading }}
                </h2>
            </g-link>
            <span
                class="inline-block mb-4 text-sm text-green-500"
                v-if="parent.mapObject(props.reference, ['vyberKlienta', 0, 'title'])"
            >
                {{ parent.mapObject(props.reference, ['vyberKlienta', 0, 'title']) }}
            </span>
            <div
                class="text-xs text-gray-900 md:text-sm xl:text-base "
                :class="props.reference.referenceMultipleImages.length > 0 ? 'md:w-14/24' : 'w-full'"
                v-html="props.reference.excerpt"/>
        </div>
        <sub-link :href="props.baseUrl" label="Prohlédnout referenci"/>
        <div
            class="hidden bottom-0 left-0 self-center grid-cols-12 gap-4 pointer-events-none w-18/24 xl:absolute xl:w-full xl:block xl:grid"
            v-if="props.reference.referenceMultipleImages.length > 0">
            <div class="col-start-8 col-end-12 row-start-1 row-end-1 pointer-events-auto translate-z-0">
                <g-link
                    :to="props.baseUrl"
                    class="relative block transition-transform duration-200 ease-in-out transform aspect-ratio-square xl:translate-y-8 group-hover:translate-y-0 will-change-transform"
                >
                    <g-image
                        class="absolute inset-0 object-cover w-full h-full"
                        :src="parent.mapObject(props.reference, ['referenceMultipleImages', 0, 'url'])"
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
