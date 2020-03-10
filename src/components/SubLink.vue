<template functional>
    <g-link
        :to="props.href"
        class="relative inline-flex items-center py-2 pl-4 pr-4 mt-auto mb-8 overflow-hidden text-xs font-bold text-black transition-all duration-200 ease-in-out bg-gray-100 rounded-r-full md:pl-8 xl:pl-16 xl:mb-12 group-hover:text-white"
    >
        <span class="relative z-20">
            {{ props.label }}
        </span>
        <icon symbol="i_chevron" class="relative z-20 w-4 h-4 ml-4 text-blue-500 duration-200 ease-in-out fill-current group-hover:text-white transition-color"/>
        <span class="absolute inset-0 z-10 transition-all duration-200 ease-in-out rounded-r-full opacity-0 bg-gradient-r-blue-green group-hover:opacity-100"/>
    </g-link>
</template>

<script>
 export default {
     props: {
         href: String,
         label: String
     }
 }
</script>
