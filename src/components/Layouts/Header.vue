<template>
    <header
        class="fixed inset-x-0 top-0 shadow-md mobileLandscape:shadow-none"
        :class="[white ? '' : 'bg-white']"
    >
        <div class="relative">
            <div class="flex justify-between mx-auto max-w-screen-3xl h-13 mobileLandscape:h-19">
                <div class="flex pl-4">
                    <slot name="logo">
                        <g-link to="/" class="relative flex items-center w-32 xs:w-40 mobileLandscape:w-48">
                            <g-image src="../../images/logo-ds.png" alt="logo" class="w-auto pl-2"/>
                        </g-link>
                    </slot>
                </div>
                <div
                    class="absolute inset-x-0 z-20 items-center justify-center flex-grow mt-2 mx-2 xs:left-auto xs:w-full top-full mobileLandscape:flex mobileLandscape:mt-0 mobileLandscape:mx-0 mobileLandscape:relative mobileLandscape:top-auto xs:max-w-xs mobileLandscape:visible mobileLandscape:max-w-none mobileLandscape:items-stretch"
                    :class="{'invisible': !open}"
                >
                    <nav
                        class="flex flex-col justify-center w-full py-2 text-base font-medium origin-top-right transform bg-white rounded shadow-lg menu-transition mobileLandscape:flex-row mobileLandscape:shadow-none mobileLandscape:bg-transparent mobileLandscape:py-0 mobileLandscape:transform-none mobileLandscape:opacity-100 mobileLandscape:transition-none"
                        :class="[white ? 'cha-nav' : 'text-gray-600', open ? 'translate-y-0 translate-x-0' : 'scale-75 opacity-0']"
                    >
                        <template v-for="menuItem in menu">
                            <g-link
                                :key="menuItem.id"
                                class="relative flex px-6 py-4 text-xs transition-all tracking-tight duration-200 ease-in-out overflow-hidden mobileLandscape:py-0 mobileLandscape:overflow-visible mobileLandscape:mr-3 xl:mr-10 group lg:text-base focus:outline-none"
                                :class="[white ? 'cha-nav-link mobileLandscape:cha-nav-link-color' : 'hover:text-gray-900', {'text-gray-900 font-bold': activeMenu(menuItem)}]"
                                :to="getUrl(mapObject(menuItem, ['menuLink', '0', 'itemUrl']), mapObject(menuItem, ['menuLink', '0', 'title']), mapObject(menuItem, ['menuLink', '0', 'slug']))"
                            >
                                <div class="leading-tight mobileLandscape:relative mobileLandscape:flex">
                                    <span class="self-center">
                                        {{ menuItem.menuName }}
                                    </span>
                                    <div
                                        class="absolute inset-y-0 left-0 w-1 my-1 transition-all duration-200 ease-in-out rounded-r opacity-0 bg-gradient-b-blue-green mobileLandscape:bg-gradient-r-blue-green mobileLandscape:transform mobileLandscape:-translate-y-1/2 mobileLandscape:rounded mobileLandscape:mt-0 mobileLandscape:top-full mobileLandscape:bottom-auto mobileLandscape:inset-x-0 mobileLandscape:h-1 group-hover:opacity-100 mobileLandscape:w-auto"
                                        :class="[white ? 'mobileLandscape:cha-nav-link-underline': 'bg-gradient-r-blue-green', {'opacity-100': activeMenu(menuItem)}]"
                                    />
                                </div>
                            </g-link>
                        </template>
                    </nav>
                </div>
                <div class="flex items-stretch mobileLandscape:pr-3">
                    <div class="flex items-stretch justify-end">
                        <g-link
                            class="inline-flex self-center justify-center px-4 py-2 tracking-tighter text-xs font-bold leading-none transition-all duration-200 ease-in-out rounded-full mobileLandscape:px-5 mobileLandscape:py-3 mobileLandscape:text-sm"
                            :class="[white ? 'cha-nav-button' : 'text-green-500 border border-gray-100 mobileLandscape:border-none mobileLandscape:text-white mobileLandscape:bg-gradient-r-blue-green active']"
                            :to="getUrl(mapObject(contact, ['linkUrl', '0', 'itemUrl']), mapObject(contact, ['linkUrl', '0', 'slug']))"
                        >
                            {{ mapObject(contact, ['linkTitle']) }}
                        </g-link>
                        <div @click.prevent="toggle" tabindex="1" data-toggle-menu class="flex items-center focus:outline-none">
                            <div class="relative z-50 inline-block p-2 mx-4 cursor-pointer mobileLandscape:hidden focus:outline-none rounded-full" :class="{'bg-gradient-tr-blue-green': open}">
                                <div class="w-4 h-4 hamburger" :class="{'is-active': open}">
                                    <div
                                        class="hamburger-inner h-2px"
                                        :class="{'mobileLandscape:bg-white': white}"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full h-3 -mt-px transform translate-y-full cha-header-shadow opacity-0 mobileLandscape:opacity-10"></div>
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
        },
        pageSlug: String,
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
        },
        activeMenu(menuItem) {
            return this.pageSlug === this.mapObject(menuItem, ['menuLink', '0', 'slug'])
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
