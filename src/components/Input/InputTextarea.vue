<template>
    <input-wrapper :value="value" :error-message="errors ? errors.messages: null">
        <label class="absolute flex items-center transition-all duration-300 ease-in-out transform pointer-events-none leading-5"
               :class="[{'text-red-500': isError }, value ? '-top-1 text-black text-xs font-bold -translate-y-full' : 'pt-4 -left-px font-base text-xs md:text-sm xl:text-base text-gray-200 translate-x-4 xl:translate-x-5']" :for="id" >
            {{ label }}
            <template v-if="required">*</template>
        </label>
        <textarea
            class="w-full p-3 text-sm leading-5 border rounded form-input md:text-sm xl:p-4 xl:text-base focus:outline-none"
            :class="[isError ? 'border-red-500' : 'border-gray-200']"
            :id="id"
            :name="$attrs.name ? $attrs.name : id"
            v-bind="$attrs"
            :value="value"
            v-on="inputListeners"
        />
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
