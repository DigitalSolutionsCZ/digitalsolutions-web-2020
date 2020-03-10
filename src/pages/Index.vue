<template>
    <Layout>
         <template #header="{menu, contact}">
            <section class="relative cha-main-header" data-cha-section data-theme="dark">
                <div class="absolute inset-0 z-30 pointer-events-none md:cha-header-clip" data-cha-header-clip>
                    <site-header
                        class="cha-header"
                        :white="true"
                        data-cha-header
                        :menu="menu"
                        :contact="contact"
                    >
                        <template #logo>
                            <g-link to="/" class="relative flex items-center w-36 md:w-48">
                                <img
                                    src="../images/logo-ds.png"
                                    class="absolute w-auto pl-2 logo-color"
                                    alt="logo společnosti"
                                />
                                <img
                                    src="../images/logo-ds-white.png"
                                    class="absolute hidden w-auto logo-white md:block"
                                    alt="logo společnosti"
                                />
                            </g-link>
                        </template>
                    </site-header>
                </div>
                <div class="flex py-12 mt-12 overflow-hidden hp-header bg-gradient-tr-blue-green md:py-0 md:mt-0"
                     v-keyframes
                     style="perspective: 900px">
                  <section class="self-center w-full px-4 md:px-8 xl:px-16" :data-keyframes="JSON.stringify(
                      atLeastBreakpoint && atLeastBreakpoint('lg') ? {
                        0: { opacity: 1, transform: 'translateY(0vh) rotate(0deg)' },
                        15: { opacity: 1, transform: 'translateY(5vh) rotateX(0deg)' },
                        30: { opacity: .5, transform: 'translateY(10vh) rotateX(0deg)' },
                        50: { opacity: 0, transform: 'translateY(30vh) rotateX(30deg)' },
                      } : {})">
                    <div class="max-w-6xl mx-auto">
                      <div class="text-center">
                        <h1 class="mb-2 text-base leading-tight text-white md:text-2xl xl:text-3xl md:mb-6 xl:mb-8" v-html="page.heading"/>
                        <div class="mb-4 text-xs text-white opacity-75 md:mb-8 xl:mb-10 md:text-lg xl:text-xl">{{ page.homepageSubheader }}</div>
                        <project-button variant="ghost" tag="g-link" :to="page.homepageButtonLink" v-if="page.homepageButtonLink">
                          {{ page.homepageButtonText }}
                        </project-button>
                      </div>
                    </div>
                  </section>
                </div>
            </section>
            <section class="relative" data-cha-section>
                <div class="flex items-center overflow-hidden md:h-40">
                    <div class="w-full max-w-screen-xl mx-auto">
                        <div class="flex flex-wrap items-center justify-center md:justify-around">
                            <div class="px-4 mb-4 md:mb-0" v-for="logo in page.homepageClientLogos">
                                <img :src="logo.url" class="w-24 md:w-32" :alt="logo.title" :key="logo.id">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
        <section class="relative">
            <div :style="{'background-image': 'url(/bg_ds_code.jpg)'}" class="absolute inset-0"></div>
            <div class="relative overflow-hidden">
                <div class="pt-6 md:pt-8 xl:pt-16">
                    <div class="max-w-screen-xl mx-auto">
                        <div class="px-4 mx-auto max-w-lg lg:max-w-2xl xl:max-w-5xl xl:px-16">
                            <h2 class="mb-6 text-lg text-center md:mb-8 xl:mb-16 lg:text-xl xl:text-2xl"
                                v-html="page.homepageReferenceHeader"></h2>
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
                                        <h2 class="mb-3 text-base font-bold leading-tight md:text-lg xl:text-2xl">
                                            {{ reference.header }}</h2>
                                        <div class="mb-4 text-sm text-green-500 md:mb-6 xl:text-base">
                                            {{ mapObject(reference, ['client', 0 , 'title']) }}
                                        </div>
                                        <div class="flex flex-wrap mb-6">
                                            <div class="w-full md:pr-16 md:w-16/24">
                                                <div class="text-sm wysiwyg-content md:text-base"
                                                     v-html="reference.description"></div>
                                                <div class="w-full h-1 mb-6 rounded bg-gradient-l-blue-green xl:mb-8"></div>
                                                <div class="relative" v-if="reference.textTestemonial">
                                                    <icon symbol="i_quotation"
                                                          class="absolute w-8 h-8 lg:w-16 lg:h-16 -mt-3 -ml-3 text-gray-100 transform fill-current lg:mt-8 lg:ml-6 lg:-translate-x-full lg:-translate-y-full"
                                                    />
                                                    <div
                                                        class="relative text-sm italic text-gray-700 wysiwyg-content md:text-base mb-4"
                                                        v-html="reference.textTestemonial">
                                                    </div>
                                                </div>
                                                <div class="flex items-center mb-4 md:mb-6">
                                                    <div>
                                                        <strong class="text-sm md:text-lg">
                                                            {{ mapObject(reference, ['testemonial', 0 , 'title']) }}
                                                        </strong>
                                                        <div class="text-xs md:text-sm">
                                                            {{ mapObject(reference, ['testemonial', 0 , 'position'])}}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="w-full md:w-8/24">
                                                <div class="flex justify-center">
                                                    <img
                                                        :src="mapObject(reference, ['image', 0 , 'url'])"
                                                        :alt="mapObject(reference, ['image', 0 , 'title'])" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <sub-link
                                        :href="reference.buttonLink"
                                        :label="reference.buttonText ? reference.buttonText : 'Prohlédnout referenci'"
                                    />
                                </div>
                                <div
                                    v-if="index !== page.homepageReference.length - 1"
                                    class="justify-center hidden md:flex md:mb-8 xl:mb-16"
                                >
                                    <img src="identity-horizontal-line.svg" alt="delimiter"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="relative pt-16">
            <div class="max-w-screen-xl px-4 mx-auto">
                <h2 class="mb-4 text-base font-bold text-center md:mb-6 xl:mb-12 md:text-xl xl:text-2xl">
                    {{ page.homepageAssignmentsHeader }}
                </h2>
                <div class="flex flex-wrap justify-between w-full mx-auto md:w-22/24">
                    <div
                        class="w-full max-w-lg mx-auto md:w-7/24"
                        v-for="(assigment, index) in page.homepageAssignments"
                        :key="index"
                    >
                        <icon
                            symbol="i_quotation"
                            class="absolute w-6 h-6 lg:w-12 lg:h-12 -mt-2 -ml-3 text-gray-100 transform fill-current lg:mt-6 lg:ml-6 lg:-translate-x-full lg:-translate-y-full"
                        />
                        <div
                            class="relative mb-8 text-gray-900 text-sm text-center md:text-left wysiwyg-content lg:text-base md:mb-10 xl:mb-16"
                            v-html="assigment.description"
                        />
                    </div>
                </div>
                <h2 class="mb-2 text-base font-bold text-center md:mb-3 md:text-xl xl:text-2xl">
                    {{ page.contactFormHeader }}</h2>
                <div class="w-full mx-auto text-lg text-center max-w-xl">
                    <div
                        class="text-sm leading-relaxed wysiwyg-content md:text-base"
                        v-html="page.homepageAssignmentsFormText"
                    />
                    <contact-form class="mb-5 md:mb-8"></contact-form>
                </div>
            </div>
        </section>
    </Layout>
</template>

<page-query>
    query {
        craft {
            entry(slug: "homepage") {
                ... on craft_homepage_homepage_Entry {
                    heading
                    homepageSubheader
                    homepageButtonText
                    homepageButtonLink
                    homepageReferenceHeader
                    homepageAssignmentsHeader
                    contactFormHeader
                    homepageAssignmentsFormText
                    homepageClientLogos {
                        url
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
                                }
                            }
                            client {
                                title
                            }
                            image {
                                url
                                title
                            }
                        }
                    }
                    seoTitle
                    seoKeywords
                    seoDescription
                }
            }
        }
    }
</page-query>

<script>
import SubLink from "./../components/SubLink.vue";
import {mapObject, metaInfo} from '~/components/utils';
import ContactForm from '../components/ContactForm'
import SiteHeader from "../components/Layouts/Header.vue";
import ProjectButton from "../components/ProjectButton";

export default {
    metaInfo() {
        return metaInfo({title: this.$page.seoTitle, heading:this.page.heading}, {
            keywords: this.$page.seoKeywords,
            description: this.$page.seoDescription
        })
    },
    components: {
		ProjectButton,
        SubLink,
        ContactForm,
        SiteHeader
    },
    computed: {
        page() {
          return this.$page.craft.entry;
        },
    },
    methods: {
        mapObject
    }
}
</script>

