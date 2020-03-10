<template>
    <input-wrapper :value="value" :error-message="errors ? errors.messages: null">
        <label class="absolute flex items-center transition-all duration-300 ease-in-out transform pointer-events-none leading-5"
               :class="[{'text-red-500': isError }, value ? '-top-1 text-black text-xs font-bold -translate-y-full' : '-left-px font-base text-xs md:text-sm xl:text-base text-gray-200 translate-x-4 xl:translate-x-5 inset-y-0', labelClass]" :for="id" >
            {{ label }}
            <template v-if="required">*</template>
        </label>
        <input class="w-full p-3 text-sm leading-5 border rounded form-input md:text-sm xl:p-4 xl:text-base focus:outline-none" :class="[isError ? 'border-red-500' : 'border-gray-200']"
               :id="id"
               :name="$attrs.name ? $attrs.name : id"
               :type="type"
               v-bind="$attrs"
               :value="value"
               v-on="inputListeners"
        >
        <div
            v-if="hasLoading"
            class="absolute right-0 mr-4 -translate-y-1/2 loading loading-trail-transparent loading-border-width-4 loading-sm top-half after:border-l-primary-500 before:border-gray-300"
        ></div>
    </input-wrapper>
</template>

<script>
    import InputWrapper from './Input.vue';

    export default {
		inheritAttrs: false,
        components: {
            InputWrapper
        },
        props: {
            id: String,
            name: String,
            label: String,
            errors: Object,
            value: String,
            required: Boolean,
            type: {
                default: 'text',
                type: String
            },
            hasLoading: Boolean,
            loading: {
                default: true,
                type: Boolean
            },
            labelClass: String,
        },

        computed: {
		  isError() {
		    return this.errors && this.errors.messages && this.errors.messages.length > 0;
          },
            inputListeners() {
                const vm = this;
                return Object.assign({},
                    this.$listeners, {
                        input: function (event) {
                            vm.$emit('input', event.target.value);
                        }
                    }
                )
            },
        },
    }
</script>
