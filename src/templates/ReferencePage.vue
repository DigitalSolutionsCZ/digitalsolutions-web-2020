<template>
    <Layout>
        <section class="px-4 bg-white">
            <div class="pt-10 mx-auto max-w-screen-xl">
                <h1 class="mb-8 text-2xl font-black text-center lg:text-3xl color-black">{{ page.heading }}</h1>
                <div class="mx-auto mb-8 text-base text-center text-gray-700 lg:w-1/2" v-html="page.excerpt"/>
                <div class="mb-10 text-center">
                    <dropdown class="inline-block text-left">
                        <template #header="{open}">
                            <div href=""
                                 class="inline-flex items-center justify-center px-8 py-2 border-gray-100 rounded-full border-3 focus:outline-none">
                                Všechny projekty
                                <icon
                                    symbol="i_chevron"
                                    class="w-4 h-4 ml-3 -mr-2 text-blue-500 fill-current transform transition-transform duration-200 ease-in-out rotate-90"
                                    :class="{'-rotate-90': open}"
                                />
                            </div>
                        </template>
                        <template #content>
                            <div class="flex flex-col py-2 pt-4 mt-4 bg-white shadow-lg">
                                <g-link
                                    :to="tag.url" tabindex="0"
                                    class="block px-8 py-2 text-sm text-gray-700 hover:text-green-500 focus:text-green-500 transition-color ease-in-out focus:outline-none"
                                    :key="tag.slug"
                                    v-for="tag in tags"
                                >
                                    {{ tag.title }}
                                </g-link>
                            </div>
                        </template>
                    </dropdown>
                </div>
            </div>
        </section>
        <section class="px-4 pt-4 pb-8 bg-gray-100">
            <div class="relative mx-auto max-w-screen-xl">
                <div class="flex flex-wrap justify-center mb-4 -mx-2">
                    <template v-for="(reference, index) in list">
                        <template v-if="reference.typeHandle === 'referenceFullWidth'">
                            <component
                                :is="reference.typeHandle + (reference.smallReference ? 'Small' : '')"
                                :key="reference.id"
                                :reference="reference"
                                :style="{zIndex: references.length - index}"
                            />
                        </template>
                        <template v-else>
                            <component
                                :is="reference.typeHandle"
                                :key="reference.id"
                                :reference="reference"
                                :style="{zIndex: references.length - index}"
                            />
                        </template>
                    </template>
                </div>
                <div class="flex justify-center">
                    <g-link
                        class="flex items-center justify-center px-4 min-w-40 py-3 mx-2 text-base font-semibold text-gray-800 bg-white rounded-full hover:shadow-lg transition-all duration-200 ease-in-out"
                        to="/">Předchozí
                    </g-link>
                    <g-link
                        class="flex items-center justify-center px-4 min-w-40 py-3 mx-2 text-base font-semibold text-white rounded-full hover:shadow-lg transition-all duration-200 ease-in-out bg-gradient-r-blue-green"
                        to="/">Načíst 10 dalších...
                    </g-link>
                    <g-link
                        class="flex items-center justify-center px-4 min-w-40 py-3 mx-2 text-base font-semibold text-gray-800 bg-white rounded-full hover:shadow-lg transition-all duration-200 ease-in-out"
                        to="/">Další
                    </g-link>
                </div>
            </div>
        </section>
        <div class="w-full h-4 bg-gradient-r-blue-green"/>
    </Layout>
</template>

<script>
import Dropdown from "../components/Dropdown.vue";
import SubLink from "../components/SubLink.vue";

import referenceFullWidth from "../components/Reference/referenceFullWidth.vue";
import referenceContactBlock from "../components/Reference/referenceContactBlock.vue";

export default {
    components: {
        Dropdown,
        referenceFullWidth,
        referenceContactBlock,
        SubLink,
    },
    computed: {
        page() {
            return this.$page.craft.entry
        },
        tags() {
            return [
                {
                    id: false,
                    slug: 'all',
                    url: this.$context.baseUrl,
                    title: "Všechny projekty"
                },
                ...this.$page.craft.categories.map(category => {
                    category.url = this.$context.baseUrl + '/' + category.url
                    return category
                })
            ]
        },
        list() {
            return this.$page.craft.list;
        }
    },
    data: () => ({
        activeTag: 'all',
        references: [
            {
                id: 1,
                type: 'full',
                heading: 'Optimalizace procesu vypracování smluv',
                content: '<p>Prodej či nákup nemovitosti je záležitost, kterou je třeba bezchybně smluvně ošetřit. V rámci služby realitní makléři poskytují svým klientům právní servis (ve spolupráci s právním oddělením).</p>',
                mainImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                secondaryImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                client: 'M&M reality a.s.',
                link: '/',
                linkText: 'Prohlédnout referenci',
            },
            {
                id: 2,
                type: 'half',
                heading: 'Optimalizace procesu vypracování',
                content: '<p>Majitelé nemovitostí chtějí od realitních makléřů.</p>',
                mainImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                secondaryImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                client: 'M&M reality a.s.',
                link: '/',
                linkText: 'Prohlédnout referenci',
            },
            {
                id: 3,
                type: 'half',
                heading: 'Optimalizace procesu vypracování',
                content: '<p>Majitelé nemovitostí chtějí od realitních makléřů špičkovou službu - nemovitost na prohlídce dobře odprezentovat.</p>',
                mainImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                secondaryImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                client: 'M&M reality a.s.',
                link: '/',
                linkText: 'Prohlédnout referenci',
            },
            {
                id: 4,
                type: 'full',
                heading: 'Optimalizace procesu vypracování smluv',
                content: '<p>Prodej či nákup nemovitosti je záležitost, kterou je třeba bezchybně smluvně ošetřit. V rámci služby realitní makléři poskytují svým klientům právní servis (ve spolupráci s právním oddělením).</p>',
                mainImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                secondaryImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                client: 'M&M reality a.s.',
                link: '/',
                linkText: 'Prohlédnout referenci',
            },
            {
                id: 5,
                type: 'blank-contact',
                heading: 'Zakázkové řešení pouze pro Vás?',
                content: '<p>Majitelé nemovitostí chtějí od realitních makléřů špičkovou službu - nemovitost na prohlídce.</p>',
                link: '/',
                linkText: 'Napište nám',
            },
            {
                id: 6,
                type: 'half',
                heading: 'Optimalizace procesu vypracování smluv',
                content: '<p>Majitelé nemovitostí chtějí od realitních makléřů špičkovou službu - nemovitost na prohlídce dobře odprezentovat.</p>',
                mainImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                secondaryImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                client: 'M&M reality a.s.',
                link: '/',
                linkText: 'Prohlédnout referenci',
            },
            {
                id: 4,
                type: 'full',
                heading: 'Optimalizace procesu vypracování smluv',
                content: '<p>Prodej či nákup nemovitosti je záležitost, kterou je třeba bezchybně smluvně ošetřit. V rámci služby realitní makléři poskytují svým klientům právní servis (ve spolupráci s právním oddělením).</p>',
                mainImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                secondaryImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                client: 'M&M reality a.s.',
                link: '/',
                linkText: 'Prohlédnout referenci',
            },
            {
                id: 5,
                type: 'half',
                heading: 'Optimalizace procesu vypracování smluv',
                content: '<p>Majitelé nemovitostí chtějí od realitních makléřů špičkovou službu - nemovitost na prohlídce dobře odprezentovat.</p>',
                mainImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                secondaryImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                client: 'M&M reality a.s.',
                link: '/',
                linkText: 'Prohlédnout referenci',
            },
            {
                id: 6,
                type: 'fill-contact',
                heading: 'Zakázkové řešení pouze pro Vás?',
                content: '<p>Majitelé nemovitostí chtějí od realitních makléřů špičkovou službu - nemovitost na prohlídce.</p>',
                mainImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                secondaryImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                client: 'M&M reality a.s.',
                link: '/',
                linkText: 'Napište nám',
            },
            {
                id: 7,
                type: 'full',
                heading: 'Optimalizace procesu vypracování smluv',
                content: '<p>Prodej či nákup nemovitosti je záležitost, kterou je třeba bezchybně smluvně ošetřit. V rámci služby realitní makléři poskytují svým klientům právní servis (ve spolupráci s právním oddělením).</p>',
                mainImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                secondaryImage: 'https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG',
                client: 'M&M reality a.s.',
                link: '/',
                linkText: 'Prohlédnout referenci',
            },
        ]
    }),
}
</script>

<page-query>
query($slug: [String]) {
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
        list: entries(section: "referencesItem") {
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
