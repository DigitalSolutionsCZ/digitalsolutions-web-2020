<template>
    <footer>
        <div class="w-full h-4 bg-gradient-r-blue-green"></div>
        <div class="px-4 overflow-hidden bg-gray-900">
            <div class="max-w-screen-xl mx-auto">
                <div class="flex flex-wrap pt-4 xl:pt-8">
                    <div class="w-full md:w-12/24 xl:w-10/24 md:pr-8">
                        <h3 class="mb-4 text-base font-bold text-white md:text-lg xl:text-xl"
                            v-if="footer.footerContactHeadline" v-html="footer.footerContactHeadline"/>
                        <div class="text-sm text-gray-300 xl:text-base">
                            <div class="flex mb-2">
                                <icon
                                    symbol="i_map_point"
                                    class="flex-grow-0 flex-shrink-0 w-6 h-6 mt-1 mr-3 fill-current"
                                />
                                <span>{{ footer.address }}</span>
                            </div>
                            <div class="flex mb-2">
                                <icon
                                    symbol="i_phone"
                                    class="flex-grow-0 flex-shrink-0 w-6 h-6 mt-1 mr-3 fill-current"
                                />
                                <strong>{{ footer.phone }}</strong>
                            </div>
                            <div class="flex mb-4">
                                <icon
                                    symbol="i_envelope"
                                    class="flex-grow-0 flex-shrink-0 w-6 h-6 mt-1 mr-3 fill-current"
                                />
                                <span>{{ footer.email }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-12/24 xl:w-14/24">
                        <h3 class="mb-4 text-base font-bold text-white md:text-lg xl:text-xl">Digital Solutions</h3>
                        <ul class="flex flex-wrap mb-2 xl:mb-8">
                            <template v-for="menuItem in footer.menu">
                                <li class=" mb-3 mr-8">
                                    <g-link
                                        :key="menuItem.id"
                                        class="flex items-center"
                                        :to="getUrl(mapObject(menuItem, ['menuLink', '0', 'itemUrl']), mapObject(menuItem, ['menuLink', '0', 'slug']))"
                                    >
                                        <icon
                                            symbol="i_chevron"
                                            class="flex-shrink-0 w-4 h-4 mr-2 text-green-500 fill-current"/>
                                        <span class="text-sm text-gray-300 xl:text-base">{{ menuItem.menuName }}</span>
                                    </g-link>
                                </li>
                            </template>
                        </ul>
                        <div class="flex flex-wrap items-center text-gray-400">
                            <template v-for="social in footer.socials">
                                <g-link :to="social.socialLink" :key="social.id" :alt="social.socialName">
                                    <template v-if="social.svg">
                                        <span class="flex items-center w-8 h-8 mb-4 mr-1 fill-current" v-html="social.svg"/>
                                    </template>
                                    <template v-if="social.img">
                                        <g-image class="w-8 h-8 mb-4 mr-1" :src="mapObject(social, ['img', 0, 'url'])"/>
                                    </template>
                                </g-link>
                            </template>
                        </div>
                    </div>
                </div>
                <div
                    class="pb-3 text-sm text-gray-300 xl:text-base" v-if="footer.footerCopyright"
                    v-html="copyright"/>
            </div>
        </div>
    </footer>
</template>

<script>
import {mapObject, getUrl} from '~/components/utils';

export default {
    props: {
        footer: Object,
    },
    computed: {
        copyright() {
            return this.footer.footerCopyright.replace('${today}', new Date().getFullYear());
        }
    },
    methods: {
        mapObject,
        getUrl
    },
 }
</script>
