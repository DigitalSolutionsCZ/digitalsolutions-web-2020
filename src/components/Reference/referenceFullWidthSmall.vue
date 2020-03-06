<template functional>
    <div
        class="relative flex flex-col items-start w-full mx-auto overflow-hidden bg-white md:rounded group hover:shadow-xl transition-all duration-200 ease-in-out"
    >
        <div class="relative z-20 p-4 md:p-8 xl:pb-8 xl:px-16 xl:pt-16">
            <g-link :to="props.baseUrl">
                <h2 class="mb-2 text-base font-black xl:mb-3 md:leading-tight md:text-lg xl:text-xl">{{
                    props.reference.heading }}</h2>
            </g-link>
            <span
                class="inline-block mb-4 text-sm text-green-500 md:mb-5 xl:mb-8"
                v-if="parent.mapObject(props.reference, ['vyberKlienta', 0, 'title'])"
            >
                {{ parent.mapObject(props.reference, ['vyberKlienta', 0, 'title']) }}
            </span>
            <div class="text-xs text-gray-600 md:text-sm xl:text-base w-full md:w-21/24"
                 v-html="props.reference.excerpt"/>
        </div>
        <sub-link :href="props.baseUrl" label="Prohlédnout referenci"/>
        <div
            class="bottom-0 left-0 self-center pointer-events-none w-18/24 xl:absolute xl:w-full xl:grid gap-4 grid-cols-11"
            v-if="props.reference.referenceMultipleImages.length > 0">
            <div class="pointer-events-auto row-start-1 row-end-1 col-start-7 col-end-11">
                <g-link
                    :to="props.baseUrl"
                    class="relative block aspect-ratio-16/9 xl:aspect-ratio-4/3 transform xl:translate-y-8 group-hover:translate-y-0 transition-transform duration-200 ease-in-out"
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
