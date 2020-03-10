<template>
    <header
        class="fixed inset-x-0 top-0 shadow-lg md:shadow-none"
        :class="[white ? '' : 'bg-white']"
    >
        <div class="relative">
            <div class="flex justify-between mx-auto max-w-screen-3xl h-12-5 md:h-19">
                <div class="flex pl-2">
                    <slot name="logo">
                        <g-link to="/" class="relative flex items-center pl-2 w-36 md:w-48">
                            <g-image src="../../images/logo-ds.png" alt="logo" class="w-auto"/>
                        </g-link>
                    </slot>
                </div>
                <div
                    class="absolute left-0 right-0 z-20 items-center justify-center flex-grow m-4 xs:left-auto xs:w-full top-full md:flex md:relative md:top-auto xs:max-w-xs md:visible"
                    :class="{'invisible': !open}"
                >
                    <nav
                        class="flex flex-col justify-center w-full py-2 text-base font-medium origin-top-right transform bg-white rounded shadow-lg menu-transition md:flex-row md:shadow-none md:bg-transparent md:py-0 md:transform-none md:opacity-100 md:transition-none"
                        :class="[white ? 'cha-nav' : 'text-gray-400', open ? 'translate-y-0 translate-x-0' : 'scale-50 translate-x-4 -translate-y-8 opacity-0']"
                    >
                        <template v-for="menuItem in menu">
                            <g-link
                                :key="menuItem.id"
                                class="relative flex items-center px-4 py-4 text-xs transition-all duration-200 ease-in-out md:mr-3 xl:mr-10 group lg:text-base"
                                :class="[white ? 'cha-nav-link md:cha-nav-link-color' : 'hover:text-gray-900']"
                                :to="getUrl(mapObject(menuItem, ['menuLink', '0', 'itemUrl']), mapObject(menuItem, ['menuLink', '0', 'slug']))"
                            >
                                <div class="leading-tight md:relative">
                                    {{ menuItem.menuName }}
                                    <div
                                        class="absolute inset-y-0 left-0 w-1 my-1 transition-all duration-200 ease-in-out rounded-r opacity-0 bg-gradient-r-blue-green md:rounded md:mt-2 md:inset-x-0 md:h-1 group-hover:opacity-100 md:w-auto md:y-0 md:inset-y-auto"
                                        :class="[white ? 'md:cha-nav-link-underline': 'bg-gradient-r-blue-green']"
                                    />
                                </div>
                            </g-link>
                        </template>
                    </nav>
                </div>
                <div class="flex items-center md:pr-3">
                    <div class="flex items-center justify-end">
                        <g-link
                            class="inline-flex justify-center px-4 py-2 text-xs font-semibold leading-tight transition-all duration-200 ease-in-out rounded-full md:px-5 md:py-3 md:text-sm"
                            :class="[white ? 'cha-nav-button' : 'text-green-500 border border-gray-100 md:border-none md:text-white md:bg-gradient-r-blue-green active']"
                            :to="getUrl(mapObject(contact, ['linkUrl', '0', 'itemUrl']), mapObject(contact, ['linkUrl', '0', 'slug']))"
                        >
                            {{ mapObject(contact, ['linkTitle']) }}
                        </g-link>
                        <div class="relative z-50 inline-block p-3 cursor-pointer md:hidden focus:outline-none" @click.prevent="toggle" tabindex="1" data-toggle-menu>
                            <div class="w-4 h-3 hamburger" :class="{'is-active': open}">
                                <div
                                    class="bg-gray-600 hamburger-inner h-2px"
                                    :class="{'md:bg-white': white}"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full h-3 -mt-px transform translate-y-full cha-header-shadow opacity-10"></div>
        </div>
    </header>
</template>

<script>
import {mapObject, getUrl} from '~/components/utils';

export default {
    props: {
        menu: Array,
        contact: Object,
        white: {
            type: Boolean,
            default: false,
        }
    },
    data: () => ({
        open: false,
    }),
    methods: {
        mapObject,
        getUrl,
        close() {
            this.open = false;
        },
        toggle() {
            this.open = !this.open;
        }
    },
    mounted() {
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
    }
}
</script>
