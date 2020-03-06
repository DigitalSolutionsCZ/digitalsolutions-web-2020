<template>
    <Layout>
        <div class="max-w-screen-xl ml-auto mr-auto">
            <section class="flex flex-wrap md:pt-6 lg:pt-16">
                <div class="w-full px-4 text-center lg:pr-12">
                    <h1 class="mb-4 text-xl font-extrabold leading-none md:mb-6 md:text-2xl xl:text-3xl">{{ page.heading }}</h1>
                    <div class="text-xs text-gray-700 xs:text-base md:mb-6 xs:mb-16" v-html="page.excerpt"></div>
                </div>
            </section>
        </div>
        <div class="relative">
            <g-image src="~/images/bg_ds_code.jpg" class="absolute object-cover w-full h-full" fit="cover"/>
            <div class="mx-4">
                <div class="relative max-w-screen-xl py-6 ml-auto mr-auto">
                    <section class="px-4 pt-4 bg-white rounded md:pt-10 xl:pt-16 md:px-0">
                        <div class="flex flex-wrap justify-between w-full mx-auto md:w-22/24">
                            <div class="flex flex-col w-full mb-6 md:w-7/24 md:mb-10 xl:mb-16" v-for="service in page.mainServices" :key="service.id">
                                <div class="relative h-16 mb-4 xl:mb-6">
                                    <img :src="mapObject(service, ['icon', 0, 'url'])" class="h-16 object-contain absolute" :alt="mapObject(service, ['icon', 0, 'title'])">
                                </div>
                                <h2 class="mb-3 text-base font-bold md:text-lg xl:text-xl md:mb-6 xl:mb-8">{{ service.header }}</h2>
                                <div class="flex-grow">
                                    <div class="mb-4 text-sm text-gray-900 wysiwyg-content xl:text-base md:mb-6 xl:mb-8" v-html="service.description"></div>
                                </div>
                                <a :href="service.serviceDetailLink" class="text-sm text-green-500 underline md:text-base" v-if="service.serviceDetailLink">{{ service.serviceDetailText ? service.serviceDetailText : 'Detail služby' }}</a>
                            </div>
                            <div class="w-full h-1 mb-6 rounded bg-gradient-l-blue-green md:mb-10 xl:mb-16"></div>
                        </div>
                        <div class="flex flex-wrap justify-between w-full mx-auto md:w-20/24 xl:w-18/24">
                            <div class="w-full md:w-11/24" v-for="subService in page.subServices" :key="subService.id">
                                <div class="mb-6 md:mb-8 xl:mb-16">
                                    <h3 class="text-base font-bold xl:mb-4 xl:text-lg">{{ subService.header }}</h3>
                                    <div class="text-sm text-gray-900 wysiwyg-content" v-html="subService.description"></div>
                                </div>
                                <a :href="subService.subServiceLink" class="text-sm text-green-500 underline md:text-base" v-if="subService.subServiceLink">Detail služby</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div class="px-4">
            <template v-for="(story, index) in page.developmentStories">
                <div class="relative mx-auto max-w-screen-3xl" v-if="mapObject(story, ['isBigStory', 0])">
                    <section class="max-w-screen-xl mx-auto mt-6 lg:mt-16">
                        <h2 class="mb-4 text-lg font-bold text-center md:text-xl xl:text-2xl xl:mb-8" v-if="index === 0">{{ page.developmentHeader }}</h2>
                        <div class="flex flex-wrap mx-auto xl:w-22/24" :class="{'flex-row-reverse': (index) % 2}">
                            <div class="flex flex-wrap w-full mx-auto mb-4 md:w-16/24 md:mb-16">
                                <div :class="[(index) % 2 ? 'md:pl-8 xl:pl-20' : 'md:pr-8 xl:pr-20']">
                                    <h3 class="mb-3 text-base font-bold md:text-lg xl:text-xl">{{ story.header }}</h3>
                                    <div class="mb-3 text-sm text-gray-900 md:text-base xl:text-lg"><strong>{{ story.subheader }}</strong></div>
                                    <div class="text-xs leading-relaxed text-gray-900 md:text-sm xl:text-base wysiwyg-content" v-html="story.description">
                                    </div>
                                </div>
                            </div>
                            <div class="w-full mb-4 md:w-8/24 md:mb-16">
                                <div class="top-0 bottom-0 w-full px-2 mb-4 text-right xl:absolute md:flex md:justify-end xl:w-8/24 md:mb-16" :class="[index % 2 ? 'left-0' : 'right-0']">
                                    <div class="">
                                        <img :src="mapObject(story, ['image', 0, 'url'])" class="inset-0 object-cover w-full h-full mx-auto xl:absolute" :alt="mapObject(story, ['image', 0, 'title'])">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="max-w-screen-xl mx-auto" v-else>
                    <div class="flex flex-wrap mx-auto xl:w-22/24 relative" :class="{'flex-row-reverse': (index) % 2}">
                        <div class="self-center mb-4 md:w-17/24 md:mb-16" :class="[(index) % 2 ? 'md:pl-8 xl:pl-20' : 'md:pr-8 xl:pr-20']">
                            <h3 class="mb-3 text-base font-bold md:text-lg xl:text-xl">Software development done right</h3>
                            <div class="mb-3 text-sm text-gray-900 md:text-base xl:text-lg"><strong>Sed et egestas mauris, at iaculis eros. Suspendisse blandit, quam at commodo pretium.</strong></div>
                            <div class="text-xs leading-relaxed text-gray-900 md:text-sm xl:text-base wysiwyg-content">
                                <p>
                                    Sed et egestas mauris, at iaculis eros. Suspendisse blandit, quam at commodo pretium, magna nibh suscipit dolor, nec porta enim mi quis ex. Ut ac quam arcu. Sed congue magna odio, et commodo augue imperdiet nec. Nullam vitae lacus lorem. Nunc pretium ipsum laoreet consectetur imperdiet.
                                    Phasellus bibendum ante in quam pharetra, quis fringilla urna vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus id egestas orci.
                                </p>
                            </div>
                        </div>
                        <div class="w-full mb-4 md:w-7/24 md:mb-16">
                            <div class="relative h-full">
                                <img :src="mapObject(story, ['image', 0, 'url'])" class="mx-auto absolute w-full h-full object-cover" :alt="mapObject(story, ['image', 0, 'title'])" v-if="mapObject(story, ['image', 0, 'url'])">
                            </div>
                        </div>
                    </div>
                </div>
            </template>

        </div>
        <section class="relative">
            <g-image src="~/images/bg_ds_code.jpg" class="absolute object-cover w-full h-full" fit="cover"/>
            <div class="px-4">
                <div class="relative max-w-5xl px-10 pt-8 pb-8 ml-auto mr-auto xl:pt-16 xl:pb-16">
                    <h3 class="mb-3 text-lg font-bold text-center md:text-xl md:mb-6 xl:mb-8">
                        Pojďme spolu vymyslet něco úžasného, co vás posune o míle vpřed.
                    </h3>
                    <div class="items-center mx-auto md:flex w-19/24">
                        <div class="md:w-8/24">
                            <a href="#nogo" class="flex items-center justify-center px-4 py-3 mx-2 text-base font-semibold text-white transition-all duration-200 ease-in-out rounded-full min-w-40 hover:shadow-lg bg-gradient-r-blue-green active">
                                Domluvit schůzku
                            </a>
                        </div>
                        <div class="md:w-8/24">
                            <div class="text-base text-center">nebo si přečtěte</div>
                        </div>
                        <div class="md:w-8/24">
                            <a href="#nogo" class="flex items-center justify-center px-4 py-3 mx-2 text-base font-semibold text-gray-800 transition-all duration-200 ease-in-out bg-white rounded-full min-w-40 hover:shadow-lg active">Něco o nás</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>

<page-query>
query {
  craft {
    entry(slug: "services") {
      ... on craft_servicesPage_servicesPage_Entry {
        heading
        developmentHeader
        excerpt
        mainServices {
          ... on craft_mainServices_columns_BlockType {
            id
            description
            serviceDetailLink
            serviceDetailText
            icon {
              url
              title
            }
            header
          }
        }
        subServices {
          ... on craft_subServices_columns_BlockType {
            id
            header
            description
            subServiceLink
          }
        }
        developmentStories {
          ... on craft_developmentStories_columns_BlockType {
            header
            subheader
            description
            isBigStory
            image {
              url
              title
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
  import { mapObject } from  '~/components/utils';

  export default {
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

