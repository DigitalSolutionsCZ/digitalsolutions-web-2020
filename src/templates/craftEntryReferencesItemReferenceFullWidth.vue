<template>
    <Layout>
        <template #headerSection>
            <div class="px-4">
                <div class="relative mx-auto max-w-screen-2xl">
                    <div class="max-w-screen-xl mx-auto">
                        <section class="flex flex-wrap pt-6 lg:pt-16">
                            <div class="w-full px-4 md:w-12/24 lg:pr-12 xl:pb-16">
                                <h1 class="mb-4 text-xl font-extrabold leading-none md:mb-6 md:text-2xl xl:text-3xl">{{ page.heading }}</h1>
                                <div class="inline-block mb-3 text-green-500 md:mb-5" v-if="mapObject(page, ['vyberKlienta', 0, 'title'])">{{ mapObject(page, ['vyberKlienta', 0, 'title']) }}</div>
                                <div class="mb-4 text-xs md:mb-6 md:text-sm xl:text-base wysiwyg-content" v-html="page.description"></div>
                                <a :href="page.referenceLink">Živá ukázka</a>
                            </div>
                            <div class="self-center w-full pb-6 md:w-12/24 xl:pb-16">
                                <div class="h-0 aspect-ratio-4/3 md:my-4 xl:my-8">
                                    <div class="top-0 bottom-0 flex items-center w-full text-right md:absolute md:flex md:justify-end md:w-12/24">
                                        <div class="relative w-full h-0 aspect-ratio-4/3">
                                            <g-image :src="mapObject(page, ['mainImage', 0, 'url'])" alt="" class="absolute inset-0 object-cover w-full h-full mx-auto" fit="cover"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </template>

        <div class="relative mb-8 xl:mb-16">
            <g-image src="~/images/bg_ds_code.jpg" class="absolute object-cover w-full h-full" fit="cover"/>
            <div class="relative w-full max-w-screen-xl py-8 ml-auto mr-auto">
                <section class="flex flex-wrap">
                    <div class="w-full px-4 md:w-14/24 md:pr-12">
                        <h2 class="mb-3 text-base font-bold md:mb-5 xl:mb-8 md:text-xl xl:text-2xl">{{ page.firstRowHeadline }}</h2>
                        <div class="text-xs md:text-sm xl:text-base wysiwyg-content" v-html="page.firstRowDescription"></div>
                    </div>
                    <div class="self-start w-full px-4 md:w-10/24 group">
                        <div class="bg-white rounded group-hover:shadow-xl">
                            <div class="pt-4 mx-4 md:mx-8 md:pt-8 xl:pt-16 xl:mx-16">
                                <g-image :src="mapObject(page, ['vyberKlienta', 0, 'photo', 'url'])" alt="logo partnera" class="w-24 mb-4 lg:mb-8" />
                                <div class="text-xs md:text-sm xl:text-base wysiwyg-content" v-html="mapObject(page, ['vyberKlienta', 0, 'description'])"></div>
                            </div>
                            <sub-link :href="page.referenceClientLink" :label="page.referenceClientLinkText"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="relative w-full max-w-screen-xl ml-auto mr-auto">
            <section class="flex flex-wrap mb-4 xl:mb-8">
                <div class="w-full px-4 lg:w-14/24 lg:pr-12">
                    <h2 class="mb-3 text-base font-bold md:mb-5 xl:mb-8 md:text-xl xl:text-2xl">{{ page.secondRowHeadline }}</h2>
                    <div class="text-xs md:text-sm xl:text-base wysiwyg-content" v-html="page.secondRowDescription">
                    </div>
                </div>
                <div class="self-start w-full px-4 lg:w-10/24">
                    <div class="mb-2 lg:mb-8 lg:ml-16">
                        <template v-if="services.length > 0">
                            <h3 class="mb-4 text-base font-bold md:mb-5 xl:mb-8 md:text-lg xl:text-xl">Dodané služby</h3>
                            <ul class="mb-6 lg:mb-16">
                                <li class="mb-3" v-for="service in services" :key="service.id">
                                    <div class="flex items-center mb-1">
                                        <span class="flex-1 text-xs truncate lg:text-lg">{{ service.title }}</span>
                                        <span class="flex-grow-0 text-xs lg:text-sm">{{ service.podil }}%</span>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="h-1 rounded bg-gradient-l-blue-green" :style="{ width: service.podil + '%' }"></div>
                                        <div class="flex-grow border-b border-gray-200"></div>
                                    </div>
                                </li>
                            </ul>
                        </template>
                        <h3 class="mb-4 text-base font-bold md:mb-5 xl:mb-8 md:text-lg xl:text-xl">Technologie</h3>
                        <div class="w-full">
                            <div class="grid grid-cols-4 gap-2 md:gap-4">
                                <div class="flex items-center justify-center p-2 border border-gray-100 rounded" v-for="technology in page.technologie" :key="technology.id">
                                    <img :src="mapObject(technology, ['obrazek', 0, 'url'])" :alt="technology.title">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
        <div class="relative mb-6 lg:mb-16">
            <div class="absolute w-full h-full overflow-hidden">
                <g-image src="~/images/bg_ds_code.jpg" class="absolute object-cover w-full h-full -mt-20" fit="cover"/>
            </div>
            <div class="max-w-screen-lg px-4 pt-8 ml-auto mr-auto">
                <VueSlickCarousel class="rounded shadow-xl" v-bind="carouselSettings" v-if="page.gallery" ref="referenceCarousel">
                    <div class="relative" v-for="slide in page.gallery">
                        <div class="flex flex-col justify-around overflow-hidden rounded">
                            <div class="relative aspect-ratio-16/9" v-if="slide.url">
                                <img :src="slide.url" class="absolute inset-0 object-cover w-full h-full" />
                            </div>
                            <div class="flex items-center justify-center h-12 bg-white">
                                <button type="button" class="block h-12 px-2 xl:hidden" @click.prevent="showPrevious">
                                    <icon
                                            symbol="i_chevron"
                                            class="w-8 h-8 transform rotate-180 fill-current"
                                    ></icon>
                                </button>
                                <div class="flex-grow text-xs text-center truncate md:text-sm xl:text-base">{{ slide.title }}</div>
                                <button type="button" class="block h-12 px-2 xl:hidden" @click.prevent="showNext">
                                    <icon
                                            symbol="i_chevron"
                                            class="w-8 h-8 fill-current"
                                    ></icon>
                                </button>
                            </div>
                        </div>
                    </div>
                    <template #prevArrow>
                        <div class="absolute inset-y-0 left-0 flex items-center hidden -ml-10 cursor-pointer xl:flex">
                            <icon
                                    symbol="i_chevron_thin_stroke"
                                    class="w-8 h-8 transform rotate-180 fill-current"
                            ></icon>
                        </div>
                    </template>
                    <template #nextArrow>
                        <div class="absolute inset-y-0 right-0 items-center hidden -mr-10 cursor-pointer xl:flex">
                            <icon
                                    symbol="i_chevron_thin_stroke"
                                    class="w-8 h-8 fill-current"
                            ></icon>
                        </div>
                    </template>
                </VueSlickCarousel>
            </div>
        </div>
        <div class="w-full max-w-screen-xl ml-auto mr-auto">
            <section class="flex flex-wrap pb-6 lg:pb-16" >
                <div class="relative w-full px-4 mb-6 lg:mb-0 lg:w-1/2 lg:pr-16">
                    <h2 class="mb-3 text-base font-bold md:mb-5 xl:mb-8 md:text-lg xl:text-2xl">{{ page.thirdRowHeadline }}</h2>
                    <div class="mb-6 text-xs md:text-sm xl:text-base wysiwyg-content" v-html="page.thirdRowDescription">
                    </div>
                    <div class="absolute left-0 right-0 h-1 mx-4 rounded lg:left-auto lg-mx-0 lg:inset-y-0 lg:w-1 lg:h-full bg-gradient-r-blue-green lg:bg-gradient-t-blue-green"></div>
                </div>
                <div class="w-full px-4 lg:w-1/2 lg:pl-12" id="client-survey">
                    <div class="lg:w-18/24">
                        <h2 class="mb-3 text-base font-bold text-green-500 md:mb-5 xl:mb-8 md:text-xl xl:text-2xl">{{ page.thirdRowHeadlineRight }}</h2>
                        <div class="relative">
                            <icon symbol="i_quotation" class="absolute w-16 h-16 -mt-3 -ml-3 text-gray-100 transform fill-current lg:mt-10 lg:ml-6 lg:-translate-x-full lg:-translate-y-full"></icon>
                            <div class="relative text-sm md:text-base xl:text-lg wysiwyg-content" v-html="page.thirdRowWysiwygRight">
                            </div>
                        </div>
                        <div class="flex items-center">
                            <img class="flex-shrink-0 w-16 h-16 mr-4 rounded-full lg:w-24 lg:h-24" :src="mapObject(page, ['vyberKlientaTretiRadek', 0, 'photo',0, 'url'])" :alt="mapObject(page, ['vyberKlientaTretiRadek', 0, 'photo',0, 'title'])">
                            <div>
                                <strong class="text-sm lg:text-lg">{{ mapObject(page, ['vyberKlientaTretiRadek', 0, 'firstName']) }} {{ mapObject(page, ['vyberKlientaTretiRadek', 0, 'lastName']) }}</strong>
                                <div class="text-xs lg:text-base">{{ mapObject(page, ['vyberKlientaTretiRadek', 0, 'position']) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="bg-gradient-r-blue-green">
            <div class="max-w-screen-xl px-4 ml-auto mr-auto">
                <div class="flex flex-wrap-reverse">
                    <div class="w-full lg:w-1/2">
                        <div class="text-center lg:text-left">
                            <a href="#nogo" class="inline-flex items-center pt-5 pb-2 text-base text-white xl:pt-6 xl:pb-3 lg:text-xl">
                                <icon symbol="i_chevron" class="w-4 h-4 mr-2 transform rotate-180 fill-current"></icon>
                                Zpět na seznam referencí
                            </a>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2">
                        <div class="text-center lg:text-right">
                            <a href="#nogo" class="inline-flex items-center pt-5 pb-2 text-base text-white xl:pt-6 xl:pb-3 lg:text-xl">
                                Další reference
                                <icon symbol="i_chevron" class="w-4 h-4 ml-2 fill-current"></icon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css';
  import { mapObject } from  '~/components/utils';
  import SubLink from "../components/SubLink.vue";

  export default {
    metaInfo: {
      title: 'Reference'
    },
    components: {
      VueSlickCarousel,
      SubLink
    },
    computed: {
      page() {
        return this.$page.craft.entry;
      },
      services() {
        return this.mapObject(this.$page.craft.entry, ['dodaneSluzby'], (data) => {
          return data.map(service => ({
            ...service,
              title: service.sluzba[0].title
          }));
        });
      },
    },
    data() {
      return {
        carouselSettings: {
          lazyLoad: "ondemand",
          pauseOnFocus: true,
          pauseOnHover: true,
          centerMode: true,
          centerPadding: '0px',
        }
      }
    },
    methods: {
      mapObject,
      showPrevious() {
        this.$refs.referenceCarousel.prev();
      },
      showNext() {
        this.$refs.referenceCarousel.next();
      },
    }
  }
</script>

<page-query>
query CraftEntry($slug: [String]) {
    craft {
        entry(slug: $slug) {
          id
          title
          ... on craft_referencesItem_referenceFullWidth_Entry {
            heading
            excerpt
            description
            referenceLink
            mainImage {
              url
            }
            vyberKlienta {
              title
              id
              ... on craft_klient_Category {
                description
                photo {url}
              }
            }
            firstRowHeadline
            firstRowDescription
            referenceClientLinkText
            referenceClientLink
            secondRowDescription
            secondRowHeadline
            thirdRowHeadline
            thirdRowDescription
            thirdRowHeadlineRight
            thirdRowWysiwygRight
            dodaneSluzby {
              ... on craft_dodaneSluzby_sluzba_BlockType {
                sluzba {
                  title
                }
                podil
              }
            }
            technologie {
              ...on craft_technologie_Category {
                title
                obrazek {
                  url
                }
              }
            }
            gallery {
                url
                title
            }
            vyberKlientaTretiRadek {
              ...on craft_testemonials_klients_Entry {
                position
                firstName
                lastName
                photo {
                  url
                }
              }
            }
          }
        }
    }
}
</page-query>
