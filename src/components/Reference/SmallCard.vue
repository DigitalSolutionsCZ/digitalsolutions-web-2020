<template functional>
    <div class="flex px-2 mb-4 w-full md:w-11/24" v-bind="data.attrs" :style="data.style">
        <div
            class="relative flex flex-col items-start w-full mx-auto overflow-hidden bg-white rounded group hover:shadow-xl transition-all duration-200 ease-in-out"
        >
            <div class="relative z-20 px-16 pt-16 pb-8">
                <g-link :to="props.reference.link">
                    <h2 class="mb-3 text-xl font-black leading-tight">{{ props.reference.heading }}</h2>
                </g-link>
                <span class="inline-block mb-8 text-sm text-green-500">{{ props.reference.client }}</span>
                <div class="text-base text-gray-600 w-21/24" v-html="props.reference.content"/>
            </div>
            <sublink label="Prohlédnout referenci" />
            <div class="absolute bottom-0 left-0 w-full pointer-events-none grid gap-4 grid-cols-11">
                <div class="pointer-events-auto row-start-1 row-end-1 col-start-7 col-end-11">
                    <g-link
                        :to="props.reference.link"
                        class="relative block aspect-ratio-4/3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-200 ease-in-out"
                    >
                        <g-image
                            class="absolute inset-0 object-cover w-full h-full"
                            :src="props.reference.secondaryImage"
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
        reference: Object
    }
}
</script>
