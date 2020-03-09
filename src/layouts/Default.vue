<template>
    <div class="flex flex-col h-full text-xs md:text-sm xl:text-base">
        <slot name="header" :menu="menu" :contact="link">
            <template v-if="chameleon">
                <section class="relative cha-main-header" data-cha-section data-theme="light">
                    <div class="absolute inset-0 z-30 pointer-events-none cha-header-clip" data-cha-header-clip>
                        <site-header
                            class="bg-white cha-header"
                            data-cha-header
                            :menu="menu"
                            :contact="link"
                        >
                            <template #logo>
                                <g-link to="/" class="relative flex items-center pl-2 w-36 md:w-48">
                                    <img
                                        src="../images/logo-ds.png"
                                        style="visibility: var(--logo-color-visibility)" class="absolute w-auto"
                                    />
                                </g-link>
                            </template>
                        </site-header>
                    </div>
                    <div class="mt-20 xl:mt-24">
                        <slot name="headerSection"></slot>
                    </div>
                </section>
            </template>
            <template v-else>
                <site-header
                    data-theme="light"
                    class="z-30 bg-white"
                    :menu="menu"
                    :contact="link"
                />
            </template>
        </slot>
        <slot name="content">
            <div class="relative flex flex-col flex-grow" :class="{'mt-12 md:mt-20 xl:mt-24 z-20': !chameleon}"
                 :data-cha-section="chameleon">
                <slot/>
            </div>
        </slot>
        <site-footer :footer="footer"/>
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
        }
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
            },
            footer: globalSet(handle: "siteFooter") {
                ...on craft_siteFooter_GlobalSet {
                    footerContactHeadline,
                    email,
                    phone,
                    address
                    footerCopyright,
                    footerHeadlineCompany,
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
                    },
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
                }
            }
        }
    }
</static-query>

<style src="../css/main.css"/>
