<template>
    <component :is="tag"
               class="px-4 py-2 inline-flex justify-center md:py-3 xl:py-4 text-xs text-base font-semibold text-center transition-all duration-200 ease-in-out rounded-full xl:px-8 xl:text-base md:text-sm min-w-40 hover:shadow-lg"
               :class="getClassesByType(variant)"
    >
        <slot></slot>
    </component>
</template>

<script>
  export default {
    props: {
      tag: {
        default: 'a',
        type: String
      },
      variant: {
        default: 'primary',
        type: String
      },
    },
    methods: {
      getClassesByType(key) {
        const variants = {
          primary: 'text-white bg-gradient-r-blue-green',
          secondary: 'bg-gray-100 text-black',
          tertiary: 'text-gray-800 bg-white'
        }
        return variants[key];
      }
    }
  }
</script>
