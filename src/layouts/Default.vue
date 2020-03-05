<template>
    <div class="flex flex-col h-full">
        <slot name="header" :menu="menu" :contact="link">
            <div class="px-4 fixed inset-x-0 top-0 z-30 bg-white">
                <site-header :menu="menu" :contact="link" />
            </div>
        </slot>
        <slot name="content">
            <div class="flex-grow mt-12 md:mt-20 xl:mt-24">
                <slot/>
            </div>
        </slot>
        <footer>
            <div class="w-full h-4 bg-gradient-r-blue-green"></div>
            <div class="px-4 overflow-hidden bg-gray-900">
                <div class="mx-auto max-w-screen-xl">
                    <div class="flex flex-wrap pt-4 xl:pt-8">
                        <div class="w-full md:w-12/24 xl:w-10/24 md:pr-8">
                            <h3 class="mb-4 text-base font-bold text-white md:text-lg xl:text-xl">Kontakt</h3>
                            <div class="text-sm text-gray-300 xl:text-base">
                                <div class="flex mb-2">
                                    <icon symbol="i_map_point"
                                          class="flex-grow-0 flex-shrink-0 w-6 h-6 mt-1 mr-3 fill-current"></icon>
                                    <span>17. listopadu 203, 530 02 Pardubice</span>
                                </div>
                                <div class="flex mb-2">
                                    <icon symbol="i_phone"
                                          class="flex-grow-0 flex-shrink-0 w-6 h-6 mt-1 mr-3 fill-current"></icon>
                                    <strong>+420 775 300 500</strong>
                                </div>
                                <div class="flex mb-4">
                                    <icon symbol="i_envelope"
                                          class="flex-grow-0 flex-shrink-0 w-6 h-6 mt-1 mr-3 fill-current"></icon>
                                    <span>info@digital.cz</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-12/24 xl:w-14/24">
                            <h3 class="mb-4 text-base font-bold text-white md:text-lg xl:text-xl">Digital Solutions</h3>
                            <ul class="flex flex-wrap mb-2 xl:mb-8">
                                <li class="flex items-center mb-3 mr-8">
                                    <icon
                                        symbol="i_chevron"
                                        class="flex-shrink-0 w-4 h-4 mr-2 text-green-500 fill-current">
                                    </icon>
                                    <span class="text-sm text-gray-300 xl:text-base">O nás</span>
                                </li>
                                <li class="flex items-center mb-3 mr-8">
                                    <icon
                                        symbol="i_chevron"
                                        class="flex-shrink-0 w-4 h-4 mr-2 text-green-500 fill-current">
                                    </icon>
                                    <span class="text-sm text-gray-300 xl:text-base">Služby</span>
                                </li>
                                <li class="flex items-center mb-3 mr-8">
                                    <icon
                                        symbol="i_chevron"
                                        class="flex-shrink-0 w-4 h-4 mr-2 text-green-500 fill-current">
                                    </icon>
                                    <span class="text-sm text-gray-300 xl:text-base">Reference</span>
                                </li>
                                <li class="flex items-center mb-3 mr-8">
                                    <icon
                                        symbol="i_chevron"
                                        class="flex-shrink-0 w-4 h-4 mr-2 text-green-500 fill-current">
                                    </icon>
                                    <span class="text-sm text-gray-300 xl:text-base">Služby</span>
                                </li>
                            </ul>
                            <div class="flex flex-wrap items-center text-gray-400">
                                <icon symbol="i_facebook" class="w-8 h-8 mb-4 mr-1 fill-current"></icon>
                                <icon symbol="i_twitter" class="w-8 h-8 mb-4 fill-current"></icon>
                                <icon symbol="i_linkedin" class="w-8 h-8 mb-4 mr-1 fill-current"></icon>
                                <icon symbol="i_instagram" class="w-8 h-8 mb-4 fill-current"></icon>
                            </div>
                        </div>
                    </div>
                    <div class="pb-3 text-sm text-gray-300 xl:text-base">© Digital Solutions s.r.o., 2004 - 2020</div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import SiteHeader from "~/components/Layouts/Header.vue"
export default {
    components: {
        SiteHeader
    },
    computed: {
        menu() {
            return this.$static.craft.globalSet.menu;
        },
        link() {
            return this.$static.craft.globalSet.odkaz[0];
        }
    }
}
</script>

<static-query>
    fragment ItemUrl on craft_EntryInterface {
        slug,
        ...on craft_referencePage_referencePage_Entry {
            itemUrl
        }
        ...on craft_demandPage_demandPage_Entry {
            itemUrl
        }
        ...on craft_contactPage_contactPage_Entry {
            itemUrl
        }
        ...on craft_servicesPage_servicesPage_Entry {
            itemUrl
        }
        ...on craft_referencePage_referencePage_Entry {
            itemUrl
        }
        ...on craft_referencesItem_referenceFullWidth_Entry {
            itemUrl
        }
    }
    query {
        metadata {
            siteName
        },
        craft {
            globalSet(handle: "siteHeader") {
                id,
                ...on craft_siteHeader_GlobalSet {
                    name,
                    menu {
                        ...on craft_menu_internalItem_BlockType {
                            slug,
                            id,
                            menuName,
                            menuLink {
                                slug,
                                ...ItemUrl
                            }
                        }
                    }
                    odkaz {
                        ...on craft_odkaz_odkaz_BlockType {
                            linkTitle,
                            linkUrl {
                                title,
                                sectionId,
                                ...ItemUrl
                            }
                        }
                    }
                }
            }
        }
    }
</static-query>

<style src="../css/main.css"/>
