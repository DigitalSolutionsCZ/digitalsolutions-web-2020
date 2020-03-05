<template>
    <header>
        <div class="flex items-center h-12 md:h-20 xl:h-24">
            <div class="sm:w-7/24 w-9/24 xs:w-10/24 md:w-5/24 xl:w-4/24">
                <slot name="logo">
                    <g-link to="/">
                        <g-image src="~/images/logo-ds.png" alt="logo"></g-image>
                    </g-link>
                </slot>
            </div>
            <div class="flex-grow hidden md:block">
                <nav
                    class="flex justify-center text-base font-bold"
                    :class="[white ? 'cha-nav' : 'cha-nav-link text-gray-400']"
                >
                    <template v-for="menuItem in menu">
                        <g-link
                            :key="menuItem.id"
                            :class="[white ? 'cha-nav-link' : 'px-4 py-4 md:mr-3 xl:mr-10 hover:text-black group transition-all duration-200 ease-in-out flex items-center']"
                            class=""
                            :to="getUrl(mapObject(menuItem, ['menuLink', '0', 'itemUrl']), mapObject(menuItem, ['menuLink', '0', 'slug']))"
                        >
                            <div class="relative">
                                {{ menuItem.menuName }}
                                <div :class="[white ? 'cha-nav-link-underline': 'absolute inset-x-0 mt-1 h-1 rounded opacity-0 bg-gradient-r-blue-green group-hover:opacity-100']"/>
                            </div>
                        </g-link>
                    </template>
                </nav>
            </div>
            <div class="w-15/24 md:w-3/24 xl:w-2/24">
                <div class="flex items-center justify-end">
                    <g-link
                        :class="[white ? 'cha-nav-button' : 'inline-flex justify-center px-4 py-1 text-sm font-semibold text-green-500 border border-gray-100 rounded-full min-w-40 md:py-3 md:border-none md:text-base md:text-white hover:shadow-lg transition-all duration-200 ease-in-out md:bg-gradient-r-blue-green active']"
                        :to="getUrl(mapObject(contact, ['linkUrl', '0', 'itemUrl']), mapObject(contact, ['linkUrl', '0', 'slug']))"
                    >
                        {{ mapObject(contact, ['linkTitle']) }}
                    </g-link>
                    <div class="ml-3 md:hidden">☰</div>
                </div>
            </div>
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
    methods: {
        mapObject,
        getUrl,
    },
}
</script>
