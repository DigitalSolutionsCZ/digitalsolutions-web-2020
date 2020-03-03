<template>
    <Layout>
        <div class="ml-auto mr-auto max-w-screen-xl">
            <section class="flex flex-wrap pt-6 pb-6 lg:pt-16 lg:pb-16">
                <div class="w-full px-4 md:w-1/2 lg:pr-12">
                    <h1 class="mb-4 text-xl font-extrabold leading-none md:mb-6 md:text-2xl xl:text-3xl">{{ page.heading }}</h1>
                    <div class="inline-block mb-3 text-green-500 md:mb-5" v-if="page.vyberKlienta">{{ page.vyberKlienta.title }}</div>
                    <div class="mb-4 text-xs md:mb-6 lg:text-base wysiwyg-content" v-html="page.description"></div>
                </div>
                <div class="w-full px-4 md:w-1/2">
                    <g-image :src="mapObject(page, ['mainImage', 'url'])" alt="" fit="cover"/>
                </div>
            </section>
        </div>
        <div class="relative mb-16">
            <g-image src="~/images/bg_ds_code.jpg" class="absolute object-cover w-full h-full" fit="cover"/>
            <div class="relative py-8 ml-auto mr-auto max-w-screen-xl">
                <section class="flex flex-wrap">
                    <div class="w-full px-4 md:w-14/24 md:pr-12">
                        <h2 class="mb-3 text-base font-bold md:mb-5 xl:mb-8 md:text-xl xl:text-2xl">{{ page.firstRowHeadline }}</h2>
                        <div class="text-xs md:text-sm xl:text-base wysiwyg-content" v-html="page.firstRowDescription">
                        </div>
                    </div>
                    <div class="self-start w-full px-4 md:w-10/24 group">
                        <!--TODO Create component-->
                        <div class="bg-white rounded group-hover:shadow-xl">
                            <div class="pt-4 mx-4 md:mx-8 md:pt-8 xl:pt-16 xl:mx-16" v-if="page.vyberKlienta">
                                <g-image :src="mapObject(page, ['vyberKlienta', 'photo', 0, 'url'])" alt="logo partnera" class="w-24 mb-4 lg:mb-8" />
                                <div class="text-xs md:text-sm xl:text-base wysiwyg-content" v-html="page.vyberKlienta.description"></div>
                            </div>
                            <a :href="page.referenceClientLink" class="inline-flex items-center py-3 pl-4 mb-4 text-xs font-bold bg-gray-100 rounded-r-full md:py-3 xl:py-2 md:pl-8 xl:pl-16 md:mb-8 xl:mb-16 group-hover:text-white group-hover:bg-gradient-r-blue-green">
                               {{ page.referenceClientLinkText }}
                            </a>
                        </div>

                    </div>
                </section>
            </div>
        </div>
        <div class="relative ml-auto mr-auto max-w-screen-xl">
            <section class="flex flex-wrap mb-4 lg:mb-8">
                <div class="self-center w-full px-4 lg:w-14/24 lg:pr-12">
                    <h2 class="mb-3 text-base font-bold md:mb-5 xl:mb-8 md:text-xl xl:text-2xl">{{ page.secondRowHeadline }}</h2>
                    <div class="text-xs md:text-sm xl:text-base wysiwyg-content" v-html="page.secondRowDescription">
                    </div>
                </div>
                <div class="self-start w-full px-4 lg:w-10/24">
                    <div class="mb-2 lg:mb-8 lg:ml-16">
                        <h3 class="mb-4 text-base font-bold md:mb-5 xl:mb-8 md:text-lg xl:text-xl">Dodané služby</h3>
                        <ul class="mb-6 lg:mb-16">
                            <li class="mb-3" v-for="service in services">
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
                        <h3 class="mb-4 text-base font-bold md:mb-5 xl:mb-8 md:text-lg xl:text-xl">Technologie</h3>

                        <div class="lg:w-20/24">
                            <div class="grid grid-cols-3 md:grid-cols-4 gap-4">
                                <div class="flex items-center justify-center p-2 border border-gray-100 rounded">
                                    <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/12/1418948033symfony-logo.png" alt="symfony">
                                </div>
                                <div class="flex items-center justify-center p-2 border border-gray-100 rounded">
                                    <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/12/1418948033symfony-logo.png" alt="symfony">
                                </div>
                                <div class="flex items-center justify-center p-2 border border-gray-100 rounded">
                                    <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/12/1418948033symfony-logo.png" alt="symfony">
                                </div>
                                <div class="flex items-center justify-center p-2 border border-gray-100 rounded">
                                    <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/12/1418948033symfony-logo.png" alt="symfony">
                                </div>
                                <div class="flex items-center justify-center p-2 border border-gray-100 rounded">
                                    <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/12/1418948033symfony-logo.png" alt="symfony">
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
            <div class="px-4 pt-8 ml-auto mr-auto max-w-screen-lg">
                <VueSlickCarousel class="rounded shadow-xl" v-bind="carouselSettings">
                    <div class="relative" v-for="slide in page.gallery">
                        <div class="flex flex-col justify-around overflow-hidden rounded">
                            <div class="relative aspect-ratio-16/9" v-if="slide.url">
                                <img :src="slide.url" class="absolute inset-0 w-full h-full" />
                            </div>
                            <div class="flex items-center justify-center h-12 bg-white">
                                <div class="text-base truncate">!Není!</div>
                            </div>
                        </div>
                    </div>
                    <template #prevArrow>
                        <div class="absolute inset-y-0 left-0 flex items-center -ml-10 cursor-pointer">
                            <icon
                                    symbol="i_chevron_thin_stroke"
                                    class="w-8 h-8 fill-current transform rotate-180"
                            ></icon>
                        </div>
                    </template>
                    <template #nextArrow>
                        <div class="absolute inset-y-0 right-0 flex items-center -mr-10 cursor-pointer">
                            <icon
                                    symbol="i_chevron_thin_stroke"
                                    class="w-8 h-8 fill-current"
                            ></icon>
                        </div>
                    </template>
                </VueSlickCarousel>
            </div>
        </div>
        <div class="ml-auto mr-auto max-w-screen-xl">
            <section class="flex flex-wrap pb-6 lg:pb-16" >
                <div class="relative w-full px-4 mb-6 lg:mb-0 lg:w-1/2 lg:pr-16">
                    <h2 class="mb-3 text-base font-bold md:mb-5 xl:mb-8 md:text-lg xl:text-2xl">{{ page.thirdRowHeadline }}</h2>
                    <div class="mb-6 text-xs md:text-sm xl:text-base wysiwyg-content" v-html="page.thirdRowDescription">
                    </div>
                    <div class="absolute left-0 lg:left-auto right-0 h-1 mx-4 rounded lg-mx-0 lg:inset-y-0 lg:w-1 lg:h-full bg-gradient-r-blue-green lg:bg-gradient-t-blue-green"></div>
                </div>
                <div class="w-full px-4 lg:w-1/2 lg:pl-16" id="client-survey">
                    <div class="lg:w-18/24">
                        <h2 class="mb-3 text-base font-bold text-green-500 md:mb-5 xl:mb-8 md:text-xl xl:text-2xl">{{ page.thirdRowHeadlineRight }}</h2>
                        <div class="relative">
                            <icon symbol="i_quotation" class="absolute w-16 h-16 -mt-3 -ml-3 text-gray-100 fill-current lg:mt-8 lg:ml-6 transform lg:-translate-x-full lg:-translate-y-full"></icon>
                            <div class="relative text-sm md:text-base xl:text-lg wysiwyg-content" v-html="page.thirdRowWysiwygRight">
                            </div>
                        </div>
                        <div class="flex items-center">
                            <img class="flex-shrink-0 w-16 h-16 mr-4 rounded-full lg:w-24 lg:h-24" src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/12/1418948033symfony-logo.png" alt="avatar">
                            <div>
                                <strong class="text-sm lg:text-lg">Zdeněk samek</strong>
                                <div class="text-xs lg:text-base">regionální ředitel pro Prahu a , M&M reality</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="bg-gradient-r-blue-green">
            <div class="ml-auto mr-auto max-w-screen-xl px-4">
                <div class="flex flex-wrap-reverse">
                    <div class="w-full lg:w-1/2">
                        <div class="text-center lg:text-left">
                            <a href="#nogo" class="inline-flex items-center py-5 xl:py-6 text-base text-white lg:text-xl">
                                <icon symbol="i_chevron" class="w-3 h-3 mr-2 fill-current transform rotate-180"></icon>
                                Zpět na seznam referencí
                            </a>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2">
                        <div class="text-center lg:text-right">
                            <a href="#nogo" class="inline-flex items-center py-5 xl:py-6  text-base text-white lg:text-xl">
                                Další reference
                                <icon symbol="i_chevron" class="w-3 h-3 ml-2 fill-current"></icon>
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
  import { transformSingleArrayToObject } from  '~/components/utils';

  export default {
    metaInfo: {
      title: 'Reference'
    },
    components: {
      VueSlickCarousel
    },
    computed: {
      page() {
        return transformSingleArrayToObject(this.$page.craft.entry, ['mainImage', 'vyberKlienta', 'technologie']);
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
      mapObject(object, keys, transform) {
        if(Array.isArray(keys)) {
          for (const key of keys) {
            if (object[key] !== null && object[key] !== undefined) {
              object = object[key]
            } else {
              return '';
            }
          }
        }
        if (transform) {
          return transform(object);
        }
        return object;
      }
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
              title
            }
            gallery {
                url
            }
          }
        }
    }
}
</page-query>
