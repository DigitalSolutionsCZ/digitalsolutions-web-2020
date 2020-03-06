<template>
    <header
        class="fixed inset-x-0 top-0 z-50"
        :class="{white : 'bg-white border-b border-gray-100'}"
    >
        <div class="mx-auto max-w-screen-3xl flex justify-between h-12-5 md:h-19">
            <div class="flex pl-2">
                <slot name="logo">
                    <g-link to="/" class="flex items-center pl-2 w-36 md:w-48 relative">
                        <g-image src="~/images/logo-ds.png" alt="logo" class="w-auto"></g-image>
                    </g-link>
                </slot>
            </div>
            <div class="items-center justify-center flex-grow hidden md:flex">
                <nav
                    class="flex justify-center text-base font-bold"
                    :class="[white ? 'cha-nav' : 'text-gray-400']"
                >
                    <template v-for="menuItem in menu">
                        <g-link
                            :key="menuItem.id"
                            class="flex items-center px-4 py-4 text-xs transition-all duration-200 ease-in-out md:mr-3 xl:mr-10 group lg:text-base"
                            :class="[white ? 'cha-nav-link' : 'hover:text-gray-900']"
                            :to="getUrl(mapObject(menuItem, ['menuLink', '0', 'itemUrl']), mapObject(menuItem, ['menuLink', '0', 'slug']))"
                        >
                            <div class="relative leading-tight">
                                {{ menuItem.menuName }}
                                <div
                                    class="absolute inset-x-0 h-1 mt-2 transition-all duration-200 ease-in-out rounded opacity-0 group-hover:opacity-100"
                                    :class="[white ? 'cha-nav-link-underline': 'bg-gradient-r-blue-green']"
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
                    <div class="inline-block p-3 cursor-pointer md:hidden" @click="isOpen = !isOpen">
                        <div class="w-4 h-3 hamburger sm:h-4 sm:w-5" :class="{'is-active': isOpen}">
                            <div
                                class="hamburger-inner h-2px sm:h-3px"
                                :class="[white ? 'bg-white' : 'bg-gray-600']"
                            />
                        </div>
                    </div>
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
    data: () => ({
        isOpen: false,
    }),
    methods: {
        mapObject,
        getUrl,
    },
}
</script>
