<template>
    <ClientOnly>
        <transition
                enter-class="scale-50 opacity-0"
                enter-active-class="transition-all duration-200 ease-in-out opacity-1 transform-center"
                leave-active-class="transition-all duration-200 ease-in-out opacity-1 transform-center"
                leave-to-class="scale-50 opacity-0"
        >
            <div class="absolute inset-0 z-40 py-16" v-if="loading">
                <div class="absolute inset-0 bg-white opacity-75"></div>
                <div class="sticky z-20 w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg left-1/2 top-1/2 mx-auto">
                    <div class="absolute inset-0 rounded-full loading"></div>
                    <div class="absolute inset-0 rounded-full loading loading-1"></div>
                    <div class="absolute inset-0 rounded-full loading loading-2"></div>
                </div>
            </div>
        </transition>
    </ClientOnly>
</template>

<script>
  export default {
    props: {
      loading: Boolean,
    }
  }
</script>
