<template>
    <Layout>
        <section class="px-4 bg-white">
            <div class="pt-10 mx-auto max-w-screen-xl">
                <h1 class="mb-8 text-2xl font-black text-center lg:text-3xl color-black">{{ page.heading }}</h1>
                <div class="mx-auto mb-8 text-base text-center text-gray-700 lg:w-1/2" v-html="page.excerpt"/>
                <div class="mb-10 text-center">
                    <dropdown class="inline-block text-left" ref="dropdown">
                        <template #header="{open}">
                            <div
                                 class="inline-flex items-center justify-center px-8 py-2 border-gray-100 rounded-full border-3 focus:outline-none">
                                {{ activeTag.title }}
                                <icon
                                    symbol="i_chevron"
                                    class="w-4 h-4 ml-3 -mr-2 text-blue-500 fill-current transform transition-transform duration-200 ease-in-out rotate-90"
                                    :class="{'-rotate-90': open}"
                                />
                            </div>
                        </template>
                        <template #content>
                            <div class="flex flex-col py-2 pt-4 mt-4 bg-white shadow-lg">
                                <a
                                    tabindex="0"
                                    class="block px-8 py-2 text-sm text-gray-700 cursor-pointer hover:text-green-500 focus:text-green-500 transition-color ease-in-out focus:outline-none"
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
            </div>
        </section>
        <section class="md:px-4 pt-4 pb-8 bg-gray-100" v-if="list.length > 0">
            <div class="relative mx-auto max-w-screen-xl">
                <div class="flex flex-wrap justify-center mb-4 md:-mx-2">
                    <transition-group name="list">
                        <template v-for="(reference, index) in list">
                            <template v-if="reference.typeHandle === 'referenceFullWidth'">
                                <component
                                    :is="reference.typeHandle + (reference.smallReference ? 'Small' : '')"
                                    :key="reference.id"
                                    :reference="reference"
                                    :base-url="$context.baseUrl + getDetailUrl(reference.url, reference.title)"
                                    :style="{zIndex: list.length - index}"
                                />
                            </template>
                            <template v-else>
                                <component
                                    :is="reference.typeHandle"
                                    :key="reference.id"
                                    :reference="reference"
                                    :style="{zIndex: list.length - index}"
                                />
                            </template>
                        </template>
                    </transition-group>
                </div>
                <div class="flex justify-center"v-if="false">
                    <g-link
                        class="flex items-center justify-center px-4 py-3 mx-2 text-base font-semibold text-gray-800 bg-white rounded-full min-w-40 hover:shadow-lg transition-all duration-200 ease-in-out"
                        to="/">Předchozí
                    </g-link>
                    <g-link
                        class="flex items-center justify-center px-4 py-3 mx-2 text-base font-semibold text-white rounded-full min-w-40 hover:shadow-lg transition-all duration-200 ease-in-out bg-gradient-r-blue-green"
                        to="/">Načíst 10 dalších...
                    </g-link>
                    <g-link
                        class="flex items-center justify-center px-4 py-3 mx-2 text-base font-semibold text-gray-800 bg-white rounded-full min-w-40 hover:shadow-lg transition-all duration-200 ease-in-out"
                        to="/">Další
                    </g-link>
                </div>
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

import { fetch } from 'gridsome'
import slugify from "@sindresorhus/slugify";

export default {
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
                ...this.$page.craft.categories.map(category => {
                    category.url = this.$context.baseUrl + '/' + category.url;
                    return category
                })
            ]
        },
        activeTag() {
            return this.tags.find(tag => tag.id === this.serviceId)
        }
    },
    created() {
        this.serviceId = this.$context.id;
        this.list = this.$page.craft.list
    },
    methods: {
        async toSlug(value) {
            this.$refs.dropdown.close();
            const response = await fetch(value);
            this.list = response.data.craft.list;
            this.serviceId = response.context.id;
            window.history.pushState(response, null, value);
        },
        getDetailUrl(itemUrl, title) {
            return itemUrl !== "" ?  itemUrl : '/' + slugify(title)
        }
    }
}
</script>

<page-query>
query($slug: [String], $services: [craft_QueryArgument]) {
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
        list: entries(section: "referencesItem",  sluzbyProduktu: $services) {
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
