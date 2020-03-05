<template functional>
    <div>
        <div class="float-label relative z-10 mt-4" v-if="props.float" :class="[{'input-error': (props.errorMessage && props.errorMessage.length > 0)}, {'is-active' : props.value && props.value !== ''}]">
            <slot></slot>
        </div>
        <slot v-else></slot>
        <transition name="form-error">
            <div v-if="props.errorMessage && props.errorMessage.length > 0">
                <div v-for="(message, index) in props.errorMessage" :key="index" class="text-red-600 text-sm">{{ message }}</div>
            </div>
        </transition>
    </div>
</template>

<script>
  export default {
    props: {
      value: String,
      errorMessage: Array,
      float: {
        default: true,
        type: Boolean
      }
    },
  }
</script>
