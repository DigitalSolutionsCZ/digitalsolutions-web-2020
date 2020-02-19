<template>
    <Layout>
        <section class="px-4 bg-white">
            <div class="pt-10 mx-auto max-w-screen-xl">
                <h1 class="mb-8 text-2xl font-black text-center lg:text-3xl color-black">Naše práce</h1>
                <div class="mx-auto mb-8 text-base text-center text-gray-700 lg:w-1/2">
                    <p>We don’t have to pick our best works as we give our best shot every single time. Here are just some of our stellar projects to help inspire your own.</p>
                </div>
                <div class="mb-10 text-center">
                    <dropdown class="inline-block">
                        <template #header>
                            <a href="" class="inline-flex items-center justify-center px-8 py-2 border-gray-100 rounded-full border-3 focus:outline-none">
                                Všechny projekty
                                <span class="block w-4 h-4"></span>
                            </a>
                        </template>
                        <template #content>
                        <div class="flex py-2 flex-col pt-4 bg-white shadow-lg mt-4">
                            <g-link :to="tag.slug" tabindex="0" class="block px-8 py-2 text-sm text-gray-700 hover:text-green-500 focus:text-green-500 transition-color duration-200 ease-in-out focus:outline-none" :key="tag.slug" v-for="tag in tags">
                                {{ tag.name }}
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
                    <template v-for="reference in references">
                        <component
                            :is="'reference-' + reference.type"
                            :key="reference.id"
                            :reference="reference"
                        />
                    </template>
                </div>
                <div class="flex justify-center">
                    <g-link class="flex items-center justify-center px-8 py-3 mx-2 text-base font-semibold text-gray-800 bg-white rounded-full hover:shadow-lg transition-all duration-200 ease-in-out" to="/">Předchozí</g-link>
                    <g-link class="flex items-center justify-center px-8 py-3 mx-2 text-base font-semibold text-white rounded-full hover:shadow-lg transition-all duration-200 ease-in-out bg-gradient-r-blue-green" to="/">Načíst 10 dalších...</g-link>
                    <g-link class="flex items-center justify-center px-8 py-3 mx-2 text-base font-semibold text-gray-800 bg-white rounded-full hover:shadow-lg transition-all duration-200 ease-in-out" to="/">Další</g-link>
                </div>
            </div>
        </section>
    </Layout>
</template>

<script>
import ReferenceFull from "../components/Reference/LargeCard.vue";
import ReferenceHalf from "../components/Reference/SmallCard.vue";
import ReferenceBlankContact from "../components/Reference/ContactBlankCard.vue";
import ReferenceFillContact from "../components/Reference/ContactFillCard.vue";
import Dropdown from "../components/Dropdown.vue";

import axios from 'axios';

export default {
    components: {
        Dropdown,
        ReferenceFull,
        ReferenceHalf,
        ReferenceBlankContact,
        ReferenceFillContact
    },
    data: () => ({
        tags: [
            {
                slug: "reference/",
                name: "Všechny projekty"
            },
            {
                slug: "reference/is",
                name: "Informační systémy"
            },
            {
                slug: "reference/corporate-webs",
                name: "Corporate weby"
            },
            {
                slug: "reference/mobile-apps",
                name: "Mobilní aplikace"
            }
        ],
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
    async mounted() {
        const test = await axios.post(`https://demo.craftcms.com/urReQLMIrq/api`, {
           query: this.$context.craftQuery,
           variables: {
               ...this.$context.craftQueryVariables,
               tag: "2047"
           }
        });
        console.log(test);
    }
}
</script>

<page-query>
    query($tag: [craft_QueryArgument]) {
        craft {
            tags(group: "reference") {
                id,
                slug,
                title
            },
            entries(section: "news", tagy: $tag) {
                slug,
                ...on craft_news_article_Entry {
                    tagy {
                        id
                    }
                }
            }
        }
    }
</page-query>

