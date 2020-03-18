<template functional>
    <div
        class="relative flex flex-col justify-end items-start w-full mx-auto overflow-hidden md:rounded transition-all duration-200 ease-in-out group hover:shadow-xl"
        :class="[props.reference.importantBlock ? 'bg-gradient-tr-blue-green text-white' : 'border']"
    >
        <div class="relative z-20 px-4 pt-8 pb-2 md:px-8 xl:px-16 xl:pt-16 xl:pb-8 mt-auto">
            <g-link :to="props.reference.contactLink">
                <h2
                    class="mb-3 text-xl font-bold md:leading-tight xl:text-2xl"
                    :class="[props.reference.importantBlock ? 'text-white' : 'text-black']"
                >
                    {{ props.reference.heading }}
                </h2>
            </g-link>
            <div
                class="text-xs md:text-sm xl:text-base"
                :class="[props.reference.importantBlock ? 'text-white opacity-75' : 'text-gray-900']"
                v-html="props.reference.description"
            />
        </div>
        <template v-if="props.reference.contactLink">
            <template v-if="props.reference.importantBlock">
                <g-link
                    :to="props.reference.contactLink"
                    class="relative inline-flex items-center py-2 pl-16 pr-4 mt-auto mb-12 overflow-hidden text-xs font-bold text-white rounded-r-full transition-all duration-200 ease-in-out group-hover:text-green-500 group-hover:bg-white"
                >
                    <span class="relative z-20">
                        {{ props.reference.contactLinkText ? props.reference.contactLinkText : 'Prohlédnout referenci' }}
                    </span>
                    <icon
                        symbol="i_chevron"
                        class="relative z-20 w-4 h-4 ml-4 text-white fill-current group-hover:text-green-500 transition-color duration-200 ease-in-out"
                    />
                    <span class="absolute inset-0 bg-white opacity-25"></span>
                </g-link>
            </template>
            <template v-else>
                <sub-link
                    :href="props.reference.contactLink"
                    :label="props.reference.contactLinkText ? props.reference.contactLinkText : 'Prohlédnout referenci'"
                />
            </template>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        reference: Object
    }
}
</script>
