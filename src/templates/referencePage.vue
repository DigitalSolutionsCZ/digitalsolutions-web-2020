<template>
    <Layout>
        <template #headerSection>
            <div class="max-w-screen-md mx-auto md:max-w-screen-sm">
                <section class="flex flex-wrap pt-6 xl:py-16">
                    <div class="w-full px-4 text-center">
                        <h1 class="mb-4 text-xl font-extrabold text-black leading-none lg:mb-6 lg:text-2xl xl:text-3xl" v-if="page.heading" v-html="page.heading"/>
                        <div class="mb-4 text-xs text-gray-700 xs:text-sm lg:text-base md:mb-6 xl:mb-8" v-if="page.excerpt" v-html="page.excerpt"></div>
                    </div>
                    <div class="relative z-20 mb-4 text-center md:mb-6 xl:mb-8 mx-auto">
                        <dropdown class="inline-block text-left" ref="dropdown">
                            <template #header="{open}">
                                <div
                                        class="inline-flex items-center justify-center px-8 py-2 border-gray-100 rounded-full border-3 focus:outline-none">
                                    {{ activeTag.title }}
                                    <icon
                                            symbol="i_chevron"
                                            class="w-4 h-4 ml-3 -mr-2 text-blue-500 transition-transform duration-200 ease-in-out transform rotate-90 fill-current"
                                            :class="{'-rotate-90': open}"
                                    />
                                </div>
                            </template>
                            <template #content>
                                <div class="flex flex-col py-2 pt-4 mt-4 bg-white shadow-lg">
                                    <a
                                            tabindex="0"
                                            class="block px-8 py-2 text-sm text-gray-700 ease-in-out cursor-pointer hover:text-green-500 focus:text-green-500 transition-color focus:outline-none"
                                            :key="tag.slug"
                                            v-for="tag in tags"
                                            :href="tag.url"
                                            @click.prevent="toSlug(tag.url)"
                                    >
                                        {{ tag.title }}
                                    </a>
                                </div>
                            </template>
                        </dropdown>
                    </div>
                </section>
            </div>
        </template>
        <section class="relative flex flex-col flex-1 pt-4 pb-8 bg-gray-100 md:px-4">
            <div :style="{'background-image': 'url(/bg_ds_code.jpg)'}"
                 class="absolute inset-0 bg-center pointer-events-none"></div>
            <div class="relative w-full max-w-screen-xl mx-auto overflow-hidden" v-if="list.length > 0">
                <div class="flex flex-wrap justify-center mb-4 -mx-2">
                    <div
                        v-for="(reference, index) in list"
                        :key="reference.id"
                        class="flex w-full px-2 mb-4 list-item"
                        :class="[reference.typeHandle === 'referenceFullWidth' && !reference.smallReference ? 'relative' : 'md:w-11/24']"
                        :style="{zIndex: list.length - index}"
                    >
                        <component
                            v-if="reference.typeHandle === 'referenceFullWidth'"
                            :is="reference.typeHandle + (reference.smallReference ? 'Small' : '')"
                            :key="reference.id"
                            :reference="reference"
                            :base-url="$context.baseUrl + getDetailUrl(reference.url, reference.title)"

                        />
                        <component
                            v-else
                            :is="reference.typeHandle"
                            :key="reference.id"
                            :reference="reference"
                        />
                    </div>
                </div>
            </div>
            <div class="relative z-10 flex flex-wrap justify-center" v-if="$context.totalPage > 1">
                <a
                    class="flex items-center justify-center px-4 py-3 mx-2 mb-4 text-base font-semibold text-gray-800 transition-all duration-200 ease-in-out bg-white rounded-full min-w-40"
                    :class="[prevUrl ? 'hover:shadow-lg' : 'opacity-50 cursor-not-allowed']"
                    :href="prevUrl"
                    @click.prevent="toPage(prevUrl)"
                >
                    Předchozí
                </a>
                <a
                    v-if="nextUrl"
                    class="flex items-center justify-center px-4 py-3 mx-2 mb-4 text-base font-semibold text-white transition-all duration-200 ease-in-out rounded-full min-w-40 hover:shadow-lg bg-gradient-r-blue-green"
                    :href="nextUrl"
                    @click.prevent="toPage(nextUrl, true)"
                >
                    Načíst {{ moreCount }} dalších...
                </a>
                <a
                    class="flex items-center justify-center px-4 py-3 mx-2 mb-4 text-base font-semibold text-gray-800 transition-all duration-200 ease-in-out bg-white rounded-full min-w-40"
                    :class="[nextUrl ? 'hover:shadow-lg' : 'opacity-50 cursor-not-allowed']"
                    :href="nextUrl"
                    @click.prevent="toPage(nextUrl)"
                >
                    Další
                </a>
            </div>
        </section>
    </Layout>
</template>

<script>
import Dropdown from "../components/Dropdown.vue";
import SubLink from "../components/SubLink.vue";

import referenceFullWidth from "../components/Reference/referenceFullWidth.vue";
import referenceFullWidthSmall from "../components/Reference/referenceFullWidthSmall.vue";
import referenceContactBlock from "../components/Reference/referenceContactBlock.vue";

import {fetch} from 'gridsome'
import {mapObject, metaInfo} from "../components/utils";
import slugify from "@sindresorhus/slugify";

export default {
    metaInfo() {
        return metaInfo({title: this.$context.seoTitle}, this.$context);
    },
    components: {
        Dropdown,
        referenceFullWidth,
        referenceFullWidthSmall,
        referenceContactBlock,
        SubLink,
    },
    data: () => ({
        serviceId: null,
        list: [],
        nextUrl: null,
        prevUrl: null,
        moreCount: null,
    }),
    computed: {
        page() {
            return this.$page.craft.entry
        },
        tags() {
            return [
                {
                    id: this.$context.referenceId,
                    slug: 'all',
                    url: this.$context.baseUrl,
                    title: "Všechny projekty"
                },
                ...this.$page.craft.categories
            ]
        },
        activeTag() {
            return this.tags.find(tag => tag.id === this.serviceId)
        },
    },
    created() {
        this.serviceId = this.$context.id;
        this.list = this.$page.craft.list;
        this.prevUrl = this.$context.prevUrl;
        this.nextUrl = this.$context.nextUrl;
        this.moreCount = this.$context.moreCount;
    },
    mounted() {
        window.addEventListener('popstate', this.popState);
        this.$once("hook:destroyed", () => {
            window.removeEventListener("popstate", this.popState);
        });
    },
    methods: {
        mapObject,
        async popState(value) {
            const response = await this.fetchData(value.target.location.pathname);

            this.serviceId = response.context.id;
            this.list = response.data.craft.list;
        },
        async toSlug(value) {
            const url = value === this.$context.baseUrl ? value : this.$context.baseUrl + '/' + value;
            this.$refs.dropdown.close();
            const response = await this.fetchData(url, value);

            window.history.pushState({id: response.context.id}, null, url);

            this.serviceId = response.context.id;
            this.list = response.data.craft.list;
        },
        async toPage(value, keep = false) {
            if (!value) return null;
            const response = await this.fetchData(value);

            window.history.pushState({id: response.context.id}, null, value);

            this.list = keep ? [...this.list, ...response.data.craft.list] : response.data.craft.list;
        },
        async fetchData(url) {
            const response = await fetch(url);
            this.nextUrl = response.context.nextUrl;
            this.prevUrl = response.context.prevUrl;
            this.moreCount = response.context.moreCount;
            return response;
        },
        getDetailUrl(itemUrl, title) {
            return itemUrl !== "" ? itemUrl : '/' + slugify(title)
        }
    }
}
</script>

<page-query>
    query($slug: [String], $services: [craft_QueryArgument], $limit: Int, $skip: Int) {
        craft {
            entry(slug: $slug) {
                ...on craft_referencePage_referencePage_Entry {
                    heading,
                    excerpt
                }
            },
            categories(group: "servicesProduct") {
                id,
                title,
                url: slug,
            },
            list: entries(section: "referencesItem", sluzbyProduktu: $services, limit: $limit, offset: $skip) {
                title
                id,
                typeHandle,
                ...on craft_referencesItem_referenceContactBlock_Entry {
                    heading,
                    description,
                    importantBlock,
                    contactLinkText,
                    contactLink,
                },
                ...on craft_referencesItem_referenceFullWidth_Entry {
                    url: itemUrl,
                    heading,
                    smallReference,
                    referenceDetailLinkText,
                    excerpt,
                    referenceMultipleImages {
                        url
                    },
                    vyberKlienta {
                        ...on craft_klient_Category {
                            title
                        }
                    },
                    referenceLink,
                }
            }
        }
    }
</page-query>
