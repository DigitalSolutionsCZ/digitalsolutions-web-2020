<template>
    <component :is="tag"
               class="inline-flex justify-center px-6 py-3 text-sm font-semibold text-center rounded-full md:py-3 md:px-8 xl:py-4 transition-all duration-200 ease-in-out xl:px-8 xl:text-base min-w-40 hover:shadow-lg"
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
