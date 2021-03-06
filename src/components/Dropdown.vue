<template>
    <div>
        <button
            ref="reference"
            class="relative z-40 focus:outline-none"
            :class="defaultClasses.header"
            @click.passive="toggle"
        >
            <slot name="header" :open="open">
            </slot>
        </button>

        <div
            ref="content"
            class="absolute z-50"
            :class="defaultClasses.content"
        >
            <transition
                enter-active-class="transition-all duration-200 ease-in-out transform"
                enter-class="translate-y-6 opacity-0"
                leave-active-class="transition-all duration-200 ease-in-out transform pointer-events-none"
                leave-to-class="translate-y-6 opacity-0"
                v-on:after-enter="afterEnter"
                v-on:after-leave="afterLeave"
            >
                <slot name="content" v-if="open">
                </slot>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        classes: {
            type: Object,
            default: () => ({})
        },
        placement: {
            type: String,
            default: "bottom-start",
            validator: v => [
                "left", "left-start", "left-end",
                "right", "right-start", "right-end",
                "top", "top-start", "top-end",
                "bottom", "bottom-start", "bottom-end"
            ].indexOf(v) !== -1,
        },
        config: {
            type: Object,
            default: () => ({})
        },
        minWidth: {
            type: Number,
            default: 300,
        },
        fitWidth: {
            type: Boolean,
            default: true,
        }
    },
    data: () => ({
        open: false
    }),
    computed: {
        popperConfig() {
            return {
                onCreate: this.setWidth,
                onUpdate: this.setWidth,
                placement: this.placement,
                ...this.config,
            }
        },
        defaultClasses() {
            return this.classes;
        }
    },
    mounted() {
        this.reference = this.$refs.reference;

        const escape = (e) => {
            if (this.open && e.keyCode === 27) {
                this.close();
            }
        };
        const clickOutsideEvent = (e) => {
            if (this.open && !(this.$el === e.target || this.$el.contains(e.target))) {
                this.close();
            }
        };
        document.addEventListener("keyup", escape);
        document.addEventListener("click", clickOutsideEvent);
        this.$once("hook:destroyed", () => {
            document.removeEventListener("keyup", escape);
            document.removeEventListener("click", clickOutsideEvent);
        });
    },
    methods: {
        close() {
            this.open = false;
            this.$emit("close");
        },
        expand() {
            this.open = true;
            this.$emit("open");
        },
        toggle() {
            this.open ? this.close() : this.expand();
        },
        afterLeave() {
            this.$emit("dropdown-open");
        },
        afterEnter() {
            this.$emit("dropdown-close");
        },
        setWidth({instance: {reference, popper}}) {
            if (reference.offsetWidth > this.minWidth || popper.offsetWidth < reference.offsetWidth) {
                popper.style.width = `${reference.offsetWidth}px`;
            }
        }
    }
}
</script>
