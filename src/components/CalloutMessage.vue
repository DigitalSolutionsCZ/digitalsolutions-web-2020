<template>
    <div class="relative overflow-hidden rounded shadow-vertical-symmetric">
        <div class="absolute inset-y-0 left-0">
            <div class="w-1 h-full" :class="selectedVariant.flag"></div>
        </div>
        <div class="flex">
            <div class="self-center text-xs md:text-sm xl:text-base flex-grow py-4 pl-6" :class="selectedVariant.text"><slot></slot></div>
            <button class="px-6 text-xl leading-none" :class="selectedVariant.button" type="button" @click.prevent="close">✕</button>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      variant: {
        default: 'success',
        type: String
      },
    },
    computed: {
      selectedVariant() {
        const variants = {
          success: {
            flag: 'bg-gradient-t-green-dark-green',
            text: 'text-green-800',
            button: 'text-green-500'
          },
          error: {
            flag: 'bg-gradient-b-red-dark-red',
            text: 'text-red-700',
            button: 'text-red-700'
          },
        }
        return variants[this.variant];
      }
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
  }
</script>
