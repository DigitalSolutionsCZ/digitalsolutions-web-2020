<template functional>
    <div class="flex px-2 mb-4 w-full md:w-11/24" v-bind="data.attrs" :style="data.style">
        <div
            class="relative flex flex-col items-start mx-auto overflow-hidden border-2 rounded group"
        >
            <div class="relative z-20 px-16 pt-16 pb-8">
                <h2 class="mb-3 text-2xl font-bold leading-tight">{{ props.reference.heading }}</h2>
                <div class="text-base text-gray-600" v-html="props.reference.content" />
            </div>
            <sublink label="Prohlédnout referenci" />
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
