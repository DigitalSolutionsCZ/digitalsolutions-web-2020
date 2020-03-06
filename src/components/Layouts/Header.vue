<template>
    <header>
        <div class="flex items-center md:h-20 xl:h-24">
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
                            class="flex items-center px-4 py-4 transition-all duration-200 ease-in-out md:mr-3 xl:mr-10 group"
                            :class="[white ? 'cha-nav-link' : 'hover:text-gray-900']"
                            :to="getUrl(mapObject(menuItem, ['menuLink', '0', 'itemUrl']), mapObject(menuItem, ['menuLink', '0', 'slug']))"
                        >
                            <div class="relative">
                                {{ menuItem.menuName }}
                                <div
                                    class="absolute inset-x-0 h-1 mt-1 transition-all duration-200 ease-in-out rounded opacity-0 group-hover:opacity-100"
                                    :class="[white ? 'cha-nav-link-underline': 'bg-gradient-r-blue-green']"
                                />
                            </div>
                        </g-link>
                    </template>
                </nav>
            </div>
            <div class="w-15/24 md:w-3/24 xl:w-2/24">
                <div class="flex items-center justify-end">
                    <g-link
                        class="inline-flex justify-center px-4 py-2 text-sm font-semibold transition-all duration-200 ease-in-out rounded-full md:min-w-40 md:py-3 md:text-base hover:shadow-lg"
                        :class="[white ? 'cha-nav-button' : 'text-green-500 border border-gray-100 md:border-none md:text-white md:bg-gradient-r-blue-green active']"
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
