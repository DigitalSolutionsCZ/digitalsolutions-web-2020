<template>
        <div class="flex flex-col flex-1 text-xs text-gray-900 md:text-sm xl:text-base">
            <slot name="header" :menu="menu" :contact="link">
                <template v-if="chameleon">
                    <section class="relative cha-main-header" data-cha-section data-theme="light">
                        <div class="absolute inset-0 z-30 pointer-events-none md:cha-header-clip" data-cha-header-clip>
                            <site-header
                                class="bg-white cha-header"
                                data-cha-header
                                :menu="menu"
                                :contact="link"
                                :page-slug="pageSlug"
                            >
                                <template #logo>
                                    <g-link to="/" class="relative flex items-center w-32 xs:w-40 lg:w-56 mobileLandscape:w-40">
                                        <img
                                            src="../images/logo-ds.png"
                                            style="visibility: var(--logo-color-visibility)" class="absolute w-auto"
                                        />
                                    </g-link>
                                </template>
                            </site-header>
                        </div>
                        <transition name="fade" appear>
                        <div class="mt-12 md:mt-20 xl:mt-24">
                            <slot name="headerSection"></slot>
                        </div>
                        </transition>
                    </section>
                </template>
                <template v-else>
                    <site-header
                        data-theme="light"
                        class="z-30 bg-white"
                        :menu="menu"
                        :contact="link"
                        :page-slug="pageSlug"
                    />
                </template>
            </slot>
                <slot name="content">
                    <div class="relative flex flex-col flex-grow flex-shrink-0 " :class="{'mt-12 md:mt-20 xl:mt-24 z-20': !chameleon}"
                         :data-cha-section="chameleon">
                        <transition name="fade" appear>
                            <div class="flex-1 flex flex-col">
                                <slot/>
                            </div>
                        </transition>
                    </div>
                </slot>
            <site-footer :footer="footer" :socials="$static.craft.socials.socials" />
        </div>
</template>

<script>
import SiteHeader from "~/components/Layouts/Header.vue"
import SiteFooter from "~/components/Layouts/Footer.vue"
import init from '../components/ChameleonHeader.js';

export default {
    props: {
        chameleon: {
            type: Boolean,
            default: true,
        },
        pageSlug: String,
    },
    data: () => ({
        initialized: false,
    }),
    components: {
        SiteHeader,
        SiteFooter
    },
    computed: {
        menu() {
            return this.$static.craft.globalSet.menu;
        },
        link() {
            return this.$static.craft.globalSet.odkaz[0];
        },
        footer() {
            return this.$static.craft.footer;
        },
    },

    mounted() {
        if (this.chameleon) {
            init();
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
                            id,
                            menuName,
                            menuLink {
                                slug,
                                title,
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
            },
            footer: globalSet(handle: "siteFooter") {
                ...on craft_siteFooter_GlobalSet {
                    footerContactHeadline,
                    email,
                    phone,
                    address
                    footerCopyright,
                    footerHeadlineCompany,
                    menu {
                        ...on craft_menu_internalItem_BlockType {
                            id,
                            menuName,
                            menuLink {
                                slug,
                                title,
                                ...ItemUrl
                            }
                        }
                    }
                }
            }
            socials: globalSet(handle: "socialNetworks") {
                ...on craft_socialNetworks_GlobalSet {
                    socials {
                        ...on craft_socials_socialsImg_BlockType {
                            id
                            socialName,
                            socialLink,
                            img: socialPicture {
                                url
                            }
                        },
                        ...on craft_socials_socialsSvg_BlockType {
                            id
                            svg :socialPicture
                            socialName,
                            socialLink
                        }
                    }
                }
            }
        }
    }
</static-query>

<style src="../css/main.css"/>
