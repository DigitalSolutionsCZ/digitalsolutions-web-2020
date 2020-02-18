<template functional>
    <div class="flex px-2 mb-4 w-full md:w-11/24">
        <div
            class="relative flex flex-col items-start mx-auto overflow-hidden border-2 rounded group"
        >
            <div class="relative z-20 px-16 pt-16 pb-8">
                <h2 class="mb-3 text-2xl font-bold leading-tight">{{ props.reference.heading }}</h2>
                <div class="text-base text-gray-600" v-html="props.reference.content" />
            </div>
            <a
                href="#nogo"
                class="inline-flex items-center py-2 pl-16 pr-4 mt-auto mb-12 text-xs font-bold text-black bg-gray-100 rounded-r-full group-hover:text-white group-hover:bg-gradient-r-blue-green transition-all duration-200 ease-in-out"
            >
                {{ props.reference.linkText }}
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
