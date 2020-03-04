<template functional>
    <div class="flex w-full px-2 mb-4 md:w-11/24" v-bind="data.attrs" :style="data.style">
        <div
            class="relative flex flex-col items-start w-full mx-auto overflow-hidden md:rounded group"
            :class="[props.reference.importantBlock ? 'bg-gradient-tr-blue-green text-white' : 'border-2']"
        >
            <div class="relative z-20 px-16 pt-16 pb-8">
                <h2 class="mb-3 text-xl font-bold md:leading-tight xl:text-2xl">{{ props.reference.heading }}</h2>
                <div class="text-base text-white opacity-75" v-html="props.reference.description" />
            </div>
            <template v-if="props.reference.contactLink">
                <template v-if="props.reference.importantBlock">
                    <g-link
                        :to="props.reference.contactLink"
                        class="relative inline-flex items-center py-2 pl-16 pr-4 mt-auto mb-12 overflow-hidden text-xs font-bold text-white rounded-r-full transition-all duration-200 ease-in-out"
                    >
                        <span class="relative z-20">
                            {{ props.reference.contactLinkText ? props.reference.contactLinkText : 'Prohlédnout referenci' }}
                        </span>
                        <icon symbol="i_chevron" class="relative z-20 w-4 h-4 ml-4 text-white fill-current group-hover:text-white transition-color duration-200 ease-in-out" />
                        <span class="absolute inset-0 bg-white opacity-25"></span>
                    </g-link>
                </template>
                <template v-else>
                    <sub-link :href="props.reference.contactLink" :label="props.reference.contactLinkText ? props.reference.contactLinkText : 'Prohlédnout referenci'" />
                </template>
            </template>
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
