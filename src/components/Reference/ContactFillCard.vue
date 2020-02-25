<template functional>
    <div class="flex w-full px-2 mb-4 md:w-11/24" v-bind="data.attrs" :style="data.style">
        <div
            class="relative flex flex-col items-start mx-auto overflow-hidden text-white rounded bg-gradient-tr-blue-green group"
        >
            <div class="relative z-20 px-16 pt-16 pb-8">
                <h2 class="mb-3 text-2xl font-bold leading-tight">{{ props.reference.heading }}</h2>
                <div class="text-base text-white opacity-75" v-html="props.reference.content" />
            </div>
            <a
                href="#nogo"
                class="relative inline-flex items-center py-2 pl-16 pr-4 mt-auto mb-12 overflow-hidden text-xs font-bold text-white rounded-r-full transition-all duration-200 ease-in-out"
            >
                {{ props.reference.linkText }}
                <span class="absolute inset-0 bg-white opacity-25"></span>
            </a>
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
