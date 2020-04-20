<template>
    <Layout>
        <template #header="{menu, contact}">
            <section class="relative cha-main-header" data-cha-section data-theme="dark">
                <div class="absolute inset-0 z-30 pointer-events-none mobileLandscape:cha-header-clip" data-cha-header-clip>
                    <site-header
                        class="cha-header"
                        :white="true"
                        data-cha-header
                        :menu="menu"
                        :contact="contact"
                    >
                        <template #logo>
                            <g-link to="/" class="relative flex items-center w-32 xs:w-40 lg:w-56 mobileLandscape:w-40">
                                <img
                                    src="../images/logo-ds.png"
                                    class="absolute w-auto logo-color"
                                    alt="Logo Digital Solutions s.r.o."
                                />
                                <img
                                    src="../images/logo-ds-white.png"
                                    class="absolute hidden w-auto logo-white mobileLandscape:block"
                                    alt="Logo Digital Solutions s.r.o."
                                />
                            </g-link>
                        </template>
                    </site-header>
                </div>
                <ClientOnly>
                    <hero-slide :page="page"/>
                </ClientOnly>
                <hero-slide :page="page" v-if="isVisibleClientOnlySkeleton"/>
            </section>
            <section class="relative" data-cha-section>
                <div class="flex items-center overflow-hidden md:h-24 bg-white">
                    <div class="w-full max-w-screen-lg mx-auto">
                        <div class="flex flex-wrap items-center justify-center md:justify-around">
                            <div class="overflow-hidden px-1 sm:px-4 -my-4" v-for="logo in page.homepageClientLogos">
                                <img :src="logo.url" class="w-20 md:w-40" :alt="logo.title" :key="logo.id">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
        <section class="bg-ds-code">
            <div class="relative overflow-hidden">
                <div class="pt-6 md:pt-8 xl:pt-16">
                    <div class="max-w-screen-xl mx-auto">
                        <div class="px-4 mx-auto max-w-lg lg:max-w-2xl xl:max-w-5xl xl:px-16">
                            <h2
                                class="mb-6 text-base md:text-lg text-center md:mb-8 xl:mb-16 lg:text-xl xl:text-2xl"
                                v-html="page.homepageReferenceHeader"
                                id="reference-header"
                            />
                        </div>
                        <div class="mx-auto md:w-22/24">
                            <div
                                class="relative z-20 w-full md:px-4"
                                v-for="(reference, index) in page.homepageReference" :key="reference.id">
                                <div
                                    class="mx-auto transition-all duration-200 ease-in-out bg-white rounded shadow-none group hover:shadow-xl"
                                    :class="[index === page.homepageReference.length - 1 ? 'mb-8' : 'mb-3 md:mb-8 xl:mb-16']"
                                >
                                    <div class="relative z-20 px-4 pt-8 md:px-8 xl:px-16 md:pt-8 xl:pt-16">
                                        <div class="flex flex-wrap mb-6">
                                            <div class="w-full md:pr-12 md:w-15/24">
                                                <g-link :to="reference.buttonLink">
                                                    <h2 class="mb-3 text-black text-base font-bold leading-tight text-black md:text-lg xl:text-2xl">
                                                        {{ reference.header }}
                                                    </h2>
                                                </g-link>
                                                <div class="mb-4 text-sm text-green-500 xl:text-base">
                                                    {{ mapObject(reference, ['client', 0 , 'title']) }}
                                                </div>
                                                <div class="text-sm wysiwyg-content md:text-base"
                                                     v-html="reference.description"></div>
                                                <div
                                                    v-if="reference.textTestemonial"
                                                    class="w-full h-1 mb-6 rounded bg-gradient-l-blue-green xl:mb-8"
                                                >
                                                </div>
                                                <template v-if="reference.textTestemonial">
                                                    <div class="relative">
                                                        <icon symbol="i_quotation"
                                                              class="absolute w-4 h-4 xl:w-8 xl:h-8 -mt-1 -ml-4 text-gray-100 transform fill-current lg:mt-5 lg:-ml-1 lg:-translate-x-full lg:-translate-y-full"
                                                        />
                                                        <div
                                                            class="relative text-sm italic text-gray-700 wysiwyg-content md:text-base mb-4 xl:mb-8"
                                                            v-html="reference.textTestemonial">
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center mb-4 xl:mb-8">
                                                        <img class="flex-shrink-0 w-12 h-12 mr-4 rounded-full xl:w-16 xl:h-16"
                                                             v-if="mapObject(reference, ['testemonial', 0, 'photo',0, 'url'])"
                                                             :src="mapObject(reference, ['testemonial', 0, 'photo',0, 'url'])"
                                                             :alt="mapObject(reference, ['testemonial', 0, 'photo',0, 'title'])"
                                                             loading="lazy"
                                                        />
                                                        <div>
                                                            <strong class="text-sm md:text-lg">
                                                                {{ mapObject(reference, ['testemonial', 0 , 'title']) }}
                                                            </strong>
                                                            <div class="text-xs md:text-sm">
                                                                {{ mapObject(reference, ['testemonial', 0 , 'position'])}}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                                <div class="-ml-4 md:-ml-8 xl:-ml-16">
                                                    <sub-link
                                                            :href="reference.buttonLink"
                                                            :label="reference.buttonText ? reference.buttonText : 'Prohlédnout referenci'"
                                                    />
                                                </div>
                                            </div>
                                            <div class="w-full md:w-9/24 pb-4 -mt-4 md:mt-0">
                                                <div class="flex justify-center">
                                                    <g-link :to="reference.buttonLink">
                                                        <g-image
                                                            :src="mapObject(reference, ['image', 0 , 'url'])"
                                                            :alt="mapObject(reference, ['image', 0 , 'title'])"
                                                            loading="lazy"
                                                        />
                                                    </g-link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    v-if="index !== page.homepageReference.length - 1"
                                    class="justify-center hidden md:flex md:mb-8 xl:mb-16"
                                >
                                    <img src="identity-horizontal-line.svg" alt="delimiter"/>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center mb-8" v-if="referenceLink">
                            <project-button
                                :href="referenceLink"
                            >
                                {{ mapObject(page, ['referenceLink', 0 , 'linkTitle']) }}
                            </project-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="relative pt-16 bg-white">
            <div class="max-w-screen-xl px-4 mx-auto">
                <h2 class="mb-4 text-base font-bold text-center text-black md:mb-6 xl:mb-12 md:text-xl xl:text-2xl">
                    {{ page.homepageAssignmentsHeader }}
                </h2>
                <div class="flex flex-wrap justify-between w-full mx-auto md:w-22/24">
                    <div
                        class="w-full max-w-lg mx-auto md:w-8/24"
                        v-for="(assigment, index) in page.homepageAssignments"
                        :key="index"
                    >
                        <icon
                            symbol="i_quotation"
                            class="absolute w-4 h-4 xl:w-8 xl:h-8 -mt-1 -ml-4 text-gray-100 transform fill-current xl:mt-6 xl:ml-6 xl:-translate-x-full xl:-translate-y-full"
                        />
                        <div
                            class="relative mb-8 text-gray-900 text-sm wysiwyg-content lg:text-base md:mb-10 xl:mb-16 px-2 xl:px-8"
                            v-html="assigment.description"
                        />
                    </div>
                </div>
                <h2 class="mb-2 text-base font-bold text-center text-black md:mb-3 md:text-xl xl:text-2xl">
                    {{ page.contactFormHeader }}</h2>
                <div class="w-full mx-auto text-lg text-center max-w-lg md:max-w-xl">
                    <div
                        class="text-sm wysiwyg-content md:text-base"
                        v-html="page.homepageAssignmentsFormText"
                    />
                    <contact-form class="mb-5 md:mb-8"></contact-form>
                </div>
            </div>
        </section>
    </Layout>
</template>

<page-query>
    fragment ItemUrl on craft_EntryInterface {
        slug,
        title
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
            siteUrl
        },
        craft {
            entry(slug: "homepage") {
                ... on craft_homepage_homepage_Entry {
                    title
                    heading
                    url
                    homepageSubheader
                    homepageButtonText
                    homepageButtonLink
                    homepageReferenceHeader
                    homepageAssignmentsHeader
                    contactFormHeader
                    homepageAssignmentsFormText
                    homepageClientLogos {
                        url(transform: "smallImage")
                        title
                        id
                    }
                    homepageAssignments {
                        ...on craft_homepageAssignments_assignments_BlockType {
                            description
                        }
                    }
                    homepageReference {
                        ... on craft_homepageReference_reference_BlockType {
                            header
                            description
                            buttonText
                            buttonLink
                            id
                            textTestemonial
                            testemonial {
                                ... on craft_testemonials_klients_Entry {
                                    title
                                    position
                                    photo {
                                        url(transform: "smallImage")
                                        title
                                    }
                                }
                            }
                            client {
                                title
                            }
                            image {
                                url(transform: "largeImage")
                                title
                            },
                        }
                    }
                    referenceLink: odkaz {
                        ...on craft_odkaz_externiOdkaz_BlockType {
                            url: linkUrl,
                            linkTitle
                        }
                        ...on craft_odkaz_externiOdkaz_BlockType {
                            url: linkUrl,
                            linkTitle
                        }
                        ...on craft_odkaz_odkaz_BlockType {
                            linkTitle,
                            linkUrl {
                                ...ItemUrl
                            }
                        }
                    }
                    seoTitle
                    seoKeywords
                    seoDescription
                    ogTitle
                    ogDescription
                    ogImage {
                        url
                    }
                }
            }
        }
    }
</page-query>

<script>
import SubLink from "./../components/SubLink.vue";
import {mapObject, metaInfo, getUrl} from '~/components/utils';
import ContactForm from '../components/ContactForm'
import SiteHeader from "../components/Layouts/Header.vue";
import ProjectButton from "../components/ProjectButton";
import HeroSlide from "../components/HeroSlide.vue";

export default {
    metaInfo() {
        return metaInfo({title: this.page.seoTitle, heading: this.page.heading}, {
            seoKeywords: this.page.seoKeywords,
            seoDescription: this.page.seoDescription,
            ogTitle: this.page.ogTitle || this.page.title,
            ogDescription: this.page.ogDescription,
            ogImage: this.page.ogImage,
            ogUrl: this.metadata.siteUrl
        })
    },
    components: {
        ProjectButton,
        SubLink,
        ContactForm,
        SiteHeader,
        HeroSlide
    },
    computed: {
        page() {
            return this.$page.craft.entry;
        },
        metadata() {
            return this.$page.metadata;
        },
        reference() {
            return this.mapObject(this.$page.craft.entry, ['referenceLink', 0]);
        },
        referenceLink() {
            if (this.reference.url) return this.reference.url;
            return this.getUrl(
                this.mapObject(this.reference, ['linkUrl', 0 , 'itemUrl']),
                this.mapObject(this.reference, ['linkUrl', 0 , 'title' ]),
                this.mapObject(this.reference, ['linkUrl', 0 , 'slug' ])
            );
        }
    },
    data() {
        return {
            isVisibleClientOnlySkeleton: true
        }
    },
    methods: {
        mapObject,
        getUrl,
    },
    mounted() {
        if (process.isClient) {
            this.$nextTick(() => {
                this.isVisibleClientOnlySkeleton = false
            })
        }
    }
}
</script>

