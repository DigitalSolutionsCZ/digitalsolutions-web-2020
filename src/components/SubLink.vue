<template functional>
    <g-link
        :to="props.href"
        class="relative inline-flex items-center py-2 pl-16 pr-4 mt-auto mb-12 overflow-hidden text-xs font-bold text-black bg-gray-100 rounded-r-full group-hover:text-white transition-all duration-200 ease-in-out"
    >
        <span class="relative z-20">
            {{ props.label }}
        </span>
        <icon symbol="i_new_window" class="relative z-20 w-3 h-3 ml-4 text-blue-500 fill-current group-hover:text-white transition-color duration-200 ease-in-out" />
        <span class="absolute inset-0 z-10 opacity-0 bg-gradient-r-blue-green group-hover:opacity-100 transition-all duration-200 ease-in-out"/>
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
