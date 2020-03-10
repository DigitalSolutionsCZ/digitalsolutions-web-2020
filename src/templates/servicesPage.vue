<template>
    <Layout>
        <template #headerSection>
            <div class="max-w-screen-xl ml-auto mr-auto">
                <section class="flex flex-wrap pt-6 xl:py-16">
                    <div class="w-full px-4 text-center lg:pr-12">
                        <h1 class="mb-4 text-xl font-extrabold leading-none md:mb-6 md:text-2xl xl:text-3xl" v-if="page.heading" v-html="page.heading"/>
                        <div class="mb-4 text-xs text-gray-700 xs:text-base md:mb-6 xl:mb-8" v-if="page.excerpt" v-html="page.excerpt"></div>
                    </div>
                </section>
            </div>
        </template>
        <div class="relative">
            <g-image src="~/images/bg_ds_code.jpg" class="absolute object-cover w-full h-full" fit="cover"/>
            <div class="mx-4">
                <div class="relative max-w-screen-xl pt-4 pb-4 ml-auto mr-auto xl:pb-8 xl:pt-8">
                    <section class="px-4 pt-4 bg-white rounded md:pt-10 xl:pt-16 md:px-0">
                        <div class="flex flex-wrap justify-between w-full mx-auto md:w-22/24">
                            <div class="flex flex-col w-full mb-4 md:w-7/24 md:mb-10 xl:mb-16" v-for="service in page.mainServices" :key="service.id">
                                <div class="relative h-8 mb-2 md:mb-4 md:h-12 xl:h-16 md:h-16 xl:mb-6" v-if="mapObject(service, ['icon', 0, 'url'])">
                                    <img :src="mapObject(service, ['icon', 0, 'url'])" class="absolute h-8 md:h-12 xl:h-16" :alt="mapObject(service, ['icon', 0, 'title'])">
                                </div>
                                <h2 class="mb-2 text-base font-bold md:text-lg xl:text-xl md:mb-6 xl:mb-8">{{ service.header }}</h2>
                                <div class="flex-grow">
                                    <div class="mb-2 text-sm text-gray-900 xl:text-base md:mb-6 xl:mb-8" v-html="service.description"></div>
                                </div>
                                <a :href="service.serviceDetailLink" class="mb-4 text-sm font-bold text-green-500 underline md:mb-6 xl:mb-8 md:text-base" v-if="service.serviceDetailLink">{{ service.serviceDetailText ? service.serviceDetailText : 'Detail služby' }}</a>
                            </div>
                            <div class="w-full h-1 mb-8 rounded bg-gradient-l-blue-green md:mb-10 xl:mb-16"></div>
                        </div>
                        <div class="flex flex-wrap justify-between w-full mx-auto md:w-20/24 xl:w-18/24 md:pb-8 xl:pb-20">
                            <div class="w-full mb-1 md:w-11/24" v-for="subService in page.subServices" :key="subService.id">
                                <div class="">
                                    <h3 class="mb-1 text-sm font-bold md:text-base md:mb-2 xl:mb-4 xl:text-lg">{{ subService.header }}</h3>
                                    <div class="mb-3 text-xs text-gray-900 md:text-sm md:mb-4" v-html="subService.description"></div>
                                </div>
                                <a :href="subService.subServiceLink" class="block mb-3 text-xs font-bold text-green-500 underline md:text-sm" v-if="subService.subServiceLink">Detail služby</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div class="px-4">
            <template v-for="(story, index) in page.developmentStories">
                <div class="relative mx-auto max-w-screen-3xl" v-if="mapObject(story, ['isBigStory', 0])">
                    <section class="max-w-screen-xl mx-auto mt-6 lg:mt-16" :class="index === page.developmentStories.length -1 ? 'mb-10 xl:mb-16 ' : 'xl:mb-4'">
                        <h2 class="mb-4 text-lg font-bold text-center md:text-xl xl:text-2xl xl:mb-8" v-if="index === 0">{{ page.developmentHeader }}</h2>
                        <div class="flex flex-wrap mx-auto xl:w-22/24" :class="{'flex-row-reverse': (index) % 2}">
                            <div class="flex flex-wrap items-center w-full mx-auto md:w-16/24">
                                <div :class="[(index) % 2 ? 'md:pl-8 xl:pl-20' : 'md:pr-8 xl:pr-20']">
                                    <h3 class="mb-1 text-base font-bold md:mb-3 md:text-lg xl:text-xl">{{ story.header }}</h3>
                                    <div class="mb-1 text-sm text-gray-900 md:mb-3 md:text-base xl:text-lg"><strong>{{ story.subheader }}</strong></div>
                                    <div class="mb-4 text-xs leading-relaxed text-gray-900 md:text-sm xl:text-base wysiwyg-content" v-html="story.description">
                                    </div>
                                </div>
                            </div>
                            <div class="self-center w-full md:w-8/24">
                                 <div class="h-0 aspect-ratio-4/3 xl:my-4 2xl:my-10">
                                    <div class="top-0 bottom-0 flex items-center w-full text-right xl:absolute md:flex md:justify-end xl:w-8/24" :class="[index % 2 ? 'left-0' : 'right-0']">
                                        <div class="relative w-full h-0 aspect-ratio-4/3">
                                            <img :src="mapObject(story, ['image', 0, 'url'])" class="absolute inset-0 object-cover w-full h-full mx-auto" :alt="mapObject(story, ['image', 0, 'title'])">
                                        </div>
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="max-w-screen-xl mx-auto" v-else>
                    <div class="relative flex flex-wrap mx-auto xl:w-22/24" :class="{'flex-row-reverse': (index) % 2}">
                        <div class="self-center mb-4 md:w-17/24 md:mb-16" :class="[(index) % 2 ? 'md:pl-8 xl:pl-20' : 'md:pr-8 xl:pr-20']">
                            <h3 class="mb-1 text-base font-bold  md:mb-3 md:text-lg xl:text-xl">Software development done right</h3>
                            <div class="mb-3 text-sm text-gray-900 md:text-base xl:text-lg"><strong>Sed et egestas mauris, at iaculis eros. Suspendisse blandit, quam at commodo pretium.</strong></div>
                            <div class="text-xs leading-relaxed text-gray-900 md:text-sm xl:text-base wysiwyg-content" v-html="story.description"></div>
                        </div>
                        <div class="w-full mb-4 md:w-7/24 md:mb-16">
                            <div class="relative h-full">
                                <img :src="mapObject(story, ['image', 0, 'url'])" class="absolute object-cover w-full h-full mx-auto" :alt="mapObject(story, ['image', 0, 'title'])" v-if="mapObject(story, ['image', 0, 'url'])">
                            </div>
                        </div>
                    </div>
                </div>
            </template>

        </div>
        <section class="relative">
            <g-image src="~/images/bg_ds_code.jpg" class="absolute object-cover w-full h-full" fit="cover"/>
            <div class="px-4">
                <div class="relative max-w-5xl pt-8 pb-5 ml-auto mr-auto md:px-10 xl:pt-16 xl:pb-16">
                    <h3 class="mb-8 text-lg font-bold text-center md:text-xl md:mb-6 xl:mb-8">
                        Pojďme spolu vymyslet něco úžasného, co vás posune o míle vpřed.
                    </h3>
                    <div class="items-center mx-auto md:flex w-19/24 md:w-21/24 xl:w-19/24">
                        <div class="md:w-8/24">
                            <project-button tag="g-link" href="/kontakt">
                                Domluvit schůzku
                            </project-button>
                        </div>
                        <div class="md:w-8/24">
                            <div class="mb-3 text-xs text-center md:text-sm xl:text-base">nebo si přečtěte</div>
                        </div>
                        <div class="md:w-8/24">
                            <project-button tag="g-link" href="/" variant="tertiary">Něco o nás</project-button>
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
  import { mapObject, metaInfo } from  '~/components/utils';
  import ProjectButton from "../components/ProjectButton";

  export default {
	  components: {ProjectButton},
	  metaInfo() {
          return metaInfo({title: this.$context.seoTitle}, this.$context);
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

