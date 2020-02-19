<template>
    <div>
        <button
            ref="reference"
            :class="defaultClasses.header"
            @click.passive="toggle"
        >
            <slot name="header" :open="open">
            </slot>
        </button>

        <div
            ref="content"
            :class="defaultClasses.content"
        >
            <transition
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
import Popper from 'popper.js';

const defaultClasses = {
    header: 'relative z-40',
    content: "z-50",
    enterClass: "",
    enterToClass: "",
    enterActiveClass: "",
    leaveClass: "",
    leaveToClass: "",
    leaveActiveClass: ""
}

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
            return {...defaultClasses, ...this.classes}
        }
    },
    created() {
        const escape = (e) => {
            if (this.open && e.keyCode === 27) {
                this.close();
            }
        };
        const clickOutsideEvent = (e) => {
            if (this.open && !(this.$el === e.target || this.$el.contains(e.target) || this.popper.contains(e.target))) {
                this.close();
            }
        }
        document.addEventListener("keyup", escape);
        document.addEventListener("click", clickOutsideEvent);
        this.$once("hook:destroyed", () => {
            this.popperJs.destroy();
            document.removeEventListener("keyup", escape);
            document.removeEventListener("click", clickOutsideEvent);
        });
    },
    mounted() {
        this.reference = this.$refs.reference;
        this.popper = this.$refs.content;
    },
    methods: {
        close() {
            this.open = false;
            this.closePopper();
            this.$emit("close");
        },
        expand() {
            this.open = true;
            this.openPopper();
            this.$emit("open");
        },
        toggle() {
            this.open ? this.close() : this.expand();
        },
        openPopper() {
            document.body.appendChild(this.popper);
            this.$nextTick(() => {
                this.popperJs = new Popper(this.reference, this.popper, this.popperConfig);
            })
        },
        closePopper() {
            this.$el.appendChild(this.popper);
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
