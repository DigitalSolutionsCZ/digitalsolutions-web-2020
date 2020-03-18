<template>
    <Layout :page-slug="$context.baseSlug">
        <template #headerSection>
            <div class="px-4 md:pl-8">
                <div class="relative mx-auto max-w-screen-2xl">
                    <div class="max-w-screen-xl mx-auto">
                        <section class="flex flex-wrap items-center pt-6 xl:pt-0">
                            <div class="w-full xl:pr-0 md:w-11/24 lg:w-12/24">
                                <h1 class="mb-4 text-xl font-extrabold leading-tight tracking-tight text-black md:mb-6 lg:text-2xl xl:text-3xl">
                                    {{ page.heading }}
                                </h1>
                                <div class="inline-block mb-3 text-green-500 md:mb-5"
                                     v-if="mapObject(page, ['vyberKlienta', 0, 'title'])">
                                    {{ mapObject(page, ['vyberKlienta', 0, 'title']) }}
                                </div>
                                <div
                                    class="mb-4 text-xs leading-relaxed md:mb-6 md:text-sm xl:text-base wysiwyg-content"
                                    v-html="page.description"></div>
                                <div class="text-center md:text-left">
                                    <project-button variant="primary" tag="a" target="_blank" class="mb-4"
                                                    :href="page.referenceLink" v-if="page.referenceLink">
                                        <span class="flex items-center">
                                            Živá ukázka
                                            <icon
                                                symbol="i_new_window"
                                                class="w-4 h-4 ml-2 fill-current"
                                            />
                                        </span>
                                    </project-button>
                                </div>
                            </div>
                            <div class="w-full overflow-hidden md:w-13/24 lg:w-12/24">
                                <div class="h-0 aspect-ratio-4/3 md:my-4 xl:my-8">
                                    <div
                                        class="top-0 bottom-0 flex items-center w-full overflow-hidden md:absolute md:flex md:justify-end md:w-12/24">
                                        <div
                                            class="relative w-full h-0 aspect-ratio-4/3 md:-mr-8 lg:-mr-1 xl:-ml-2 xl:mr-auto">
                                            <g-image
                                                v-if="mapObject(page, ['mainImage', 0, 'url'])"
                                                :src="mapObject(page, ['mainImage', 0, 'url'])"
                                                :alt="page.heading"
                                                class="absolute inset-0 object-cover w-full h-full mx-auto"
                                                fit="cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </template>

        <div
            class="relative px-4 mb-8 md:px-8 xl:mb-16"
        >
            <g-image src="~/images/bg_ds_code.jpg" class="absolute object-cover h-full -mx-4 md:-mx-8" fit="cover"/>
            <div class="relative w-full max-w-screen-xl py-4 mx-auto md:py-8">
                <section class="flex flex-wrap items-center">
                    <div class="w-full md:w-14/24 md:pr-12 md:pt-4 md:pb-4">
                        <h2 class="mb-2 text-base font-bold leading-tight text-black md:mb-4 xl:mb-6 md:text-xl xl:text-2xl">
                            {{ page.firstRowHeadline }}</h2>
                        <div
                            class="text-xs leading-relaxed md:text-sm xl:text-base wysiwyg-content"
                            v-html="page.firstRowDescription"
                        />
                    </div>
                    <div class="self-start w-full md:w-10/24 group">
                        <div class="transition-all duration-200 ease-in-out bg-white rounded group-hover:shadow-xl">
                            <div
                                :class="{'pb-4 xl:pb-10': page.referenceClientLinkText == null}"
                                class="pt-4 mx-4 md:mx-8 md:pt-8 xl:pt-16 xl:mx-16"
                            >
                                <g-image :src="mapObject(page, ['vyberKlienta', 0, 'photo', 0, 'url'])"

                                         :alt="mapObject(page, ['vyberKlienta', 0, 'title'])"
                                         class="h-10 mb-4 lg:mb-8"
                                         v-if="mapObject(page, ['vyberKlienta', 0, 'photo', 0, 'url'])"/>
                                <div class="text-xs leading-relaxed md:text-sm wysiwyg-content"
                                     v-html="mapObject(page, ['vyberKlienta', 0, 'description'])"></div>
                            </div>
                            <template v-if="page.referenceClientLinkText != null">
                                <template v-if="page.referenceClientLink">
                                    <sub-link :href="page.referenceClientLink" :label="page.referenceClientLinkText"/>
                                </template>
                                <template v-else>
                                    <a
                                        href="#"
                                        v-scroll-to="'#client-survey'"
                                        class="relative inline-flex items-center py-2 pl-4 pr-4 mt-auto mb-8 overflow-hidden text-xs font-bold text-black transition-all duration-200 ease-in-out bg-gray-100 rounded-r-full md:pl-8 xl:pl-16 xl:mb-12 group-hover:text-white"
                                    >
                                        <span class="relative z-20">
                                            {{ page.referenceClientLinkText }}
                                        </span>
                                        <icon symbol="i_chevron"
                                              class="relative z-20 w-4 h-4 ml-4 text-blue-500 duration-200 ease-in-out fill-current group-hover:text-white transition-color"/>
                                        <span
                                            class="absolute inset-0 z-10 transition-all duration-200 ease-in-out rounded-r-full opacity-0 bg-gradient-r-blue-green group-hover:opacity-100"/>
                                    </a>
                                </template>
                            </template>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div
            class="px-4 md:px-8"
        >
            <div class="relative w-full max-w-screen-xl mx-auto">
                <section class="flex flex-wrap mb-4 xl:mb-8">
                    <div class="w-full md:w-14/24 md:pr-12">
                        <h2 class="mb-2 text-base font-bold leading-tight text-black md:mb-5 xl:mb-8 md:text-xl xl:text-2xl">
                            {{ page.secondRowHeadline }}
                        </h2>
                        <div class="text-xs leading-relaxed md:text-sm xl:text-base wysiwyg-content"
                             v-html="page.secondRowDescription">
                        </div>
                    </div>
                    <div class="self-start w-full md:w-10/24">
                        <div class="mb-2 lg:mb-8 xl:ml-16">
                            <template v-if="services && services.length > 0">
                                <h3 class="mb-2 text-base font-bold text-black md:mb-4 xl:mb-6 md:text-lg xl:text-xl">
                                    Dodané služby</h3>
                                <ul class="mb-6 lg:mb-16">
                                    <li class="mb-2 xl:mb-6" v-for="service in services" :key="service.id">
                                        <div class="flex items-center mb-2">
                                            <span class="flex-1 text-xs truncate md:text-sm">{{ service.title }}</span>
                                            <span class="flex-grow-0 text-xs text-gray-600 md:text-sm">{{ service.podil }}%</span>
                                        </div>
                                        <div class="flex items-center">
                                            <div class="h-1 rounded bg-gradient-l-blue-green"
                                                 :style="{ width: service.podil + '%' }"></div>
                                            <div class="flex-grow border-b border-gray-200"></div>
                                        </div>
                                    </li>
                                </ul>
                            </template>
                            <template v-if="page.technologie && page.technologie.length > 0">
                                <h3 class="mb-2 text-base font-bold text-black md:mb-4 xl:mb-6 md:text-lg xl:text-xl">
                                    Technologie</h3>
                                <div class="w-full">
                                    <div
                                        class="grid grid-cols-6 gap-4 sm:grid-cols-8 md:grid-cols-4 md:gap-4 xl:grid-cols-4 xl:gap-3">
                                        <div class="flex items-center justify-center p-2 border border-gray-200 rounded"
                                             v-for="technology in page.technologie" :key="technology.id">
                                            <g-image
                                                :src="mapObject(technology, ['obrazek', 0, 'url'])"
                                                :alt="technology.title"
                                                :title="technology.title"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="relative px-4 mb-6 md:px-8 lg:mb-16" v-if="page.gallery && page.gallery.length > 0">
            <div class="absolute w-full h-full -mx-4 overflow-hidden md:-mx-8">
                <g-image src="~/images/bg_ds_code.jpg" class="absolute object-cover w-full h-full -mt-20" fit="cover"/>
            </div>
            <div class="max-w-screen-lg pt-8 ml-auto mr-auto">
                <VueSlickCarousel
                    class="rounded shadow-xl"
                    v-bind="carouselSettings"
                    v-if="page.gallery.length > 1"
                    ref="referenceCarousel"
                >
                    <div class="relative" v-for="slide in page.gallery">
                        <div class="flex flex-col justify-around overflow-hidden rounded">
                            <div class="relative aspect-ratio-16/9" v-if="slide.url">
                                <img :src="slide.url" class="absolute inset-0 object-cover w-full h-full"/>
                            </div>
                            <div class="flex items-center justify-center h-12 bg-white">
                                <div class="flex-grow text-xs italic text-center truncate md:text-sm xl:text-base">
                                    {{ slide.title }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <template #prevArrow>
                        <div
                            class="absolute bottom-0 left-0 z-10 flex items-center h-12 pr-4 bg-white cursor-pointer xl:h-auto xl:inset-y-0 xl:-ml-10 xl:bg-transparent xl:pr-0">
                            <icon
                                symbol="i_chevron_thin_stroke"
                                class="w-8 h-8 transform rotate-180 fill-current"
                            />
                        </div>
                    </template>
                    <template #nextArrow>
                        <div
                            class="absolute bottom-0 right-0 z-10 flex items-center h-12 pl-4 bg-white cursor-pointer xl:h-auto xl:inset-y-0 xl:-mr-10  xl:bg-transparent xl:pl-0">
                            <icon
                                symbol="i_chevron_thin_stroke"
                                class="w-8 h-8 fill-current"
                            />
                        </div>
                    </template>
                </VueSlickCarousel>
                <div class="rounded shadow-xl" v-else>
                    <div class="flex flex-col justify-around overflow-hidden rounded">
                        <div class="relative aspect-ratio-16/9">
                            <img :src="page.gallery[0].url" class="absolute inset-0 object-cover w-full h-full"/>
                        </div>
                        <div class="flex items-center justify-center h-12 bg-white">
                            <div class="flex-grow text-xs italic text-center truncate md:text-sm xl:text-base">
                                {{ page.gallery[0].title }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-4 md:px-8">
            <div class="w-full max-w-screen-xl mx-auto">
                <section class="flex flex-wrap pb-6 lg:pb-16">
                    <div
                        :class="[page.thirdRowWysiwygRight == null ? 'mx-auto' : 'lg:pr-12']"
                        class="relative w-full mb-6 lg:mb-0 lg:w-1/2"
                    >
                        <h2 class="mb-2 text-base font-bold text-black md:mb-4 xl:mb-6 md:text-lg xl:text-2xl">
                            {{ page.thirdRowHeadline }}
                        </h2>
                        <div class="mb-6 text-xs leading-relaxed md:text-sm xl:text-base wysiwyg-content"
                             v-html="page.thirdRowDescription">
                        </div>
                        <div
                            v-if="page.thirdRowWysiwygRight != null"
                            class="absolute left-0 right-0 h-1 rounded lg:left-auto lg:inset-y-0 lg:w-1 lg:h-full bg-gradient-r-blue-green lg:bg-gradient-t-blue-green"></div>
                    </div>
                    <div class="w-full lg:w-1/2 lg:pl-12" id="client-survey" v-if="page.thirdRowWysiwygRight != null">
                        <h2
                            v-if="page.thirdRowHeadlineRight != null"
                            class="mb-2 text-base font-bold text-green-500 md:mb-4 xl:mb-6 md:text-xl xl:text-2xl"
                        >
                            {{ page.thirdRowHeadlineRight }}
                        </h2>
                        <div class="relative">
                            <icon
                                symbol="i_quotation"
                                class="absolute w-4 h-4 lg:w-8 lg:h-8 -ml-4 text-gray-100 transform fill-current lg:mt-6 lg:-ml-1 lg:-translate-x-full lg:-translate-y-full"
                            />
                            <div
                                class="relative text-sm italic leading-relaxed md:text-base xl:text-lg wysiwyg-content"
                                v-html="page.thirdRowWysiwygRight"
                            />
                        </div>
                        <div class="flex items-center">
                            <img class="flex-shrink-0 w-16 h-16 mr-4 rounded-full lg:w-20 lg:h-20"
                                 v-if="mapObject(page, ['vyberKlientaTretiRadek', 0, 'photo',0, 'url'])"
                                 :src="mapObject(page, ['vyberKlientaTretiRadek', 0, 'photo',0, 'url'])"
                                 :alt="mapObject(page, ['vyberKlientaTretiRadek', 0, 'photo',0, 'title'])" />
                            <div>
                                <strong class="text-sm lg:text-lg">{{ mapObject(page, ['vyberKlientaTretiRadek', 0,
                                    'firstName']) }} {{ mapObject(page, ['vyberKlientaTretiRadek', 0, 'lastName'])
                                    }}</strong>
                                <div class="text-xs lg:text-sm">{{ mapObject(page, ['vyberKlientaTretiRadek', 0,
                                    'position']) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="px-4 mt-auto bg-gradient-r-blue-green">
            <div class="max-w-screen-xl px-4 ml-auto mr-auto">
                <div class="flex flex-col-reverse md:flex-row md:justify-center">
                    <div :class="{'flex-1' : $context.nextReferenceUrl}">
                        <div class="text-center md:text-left">
                            <g-link
                                :to="$context.referenceUrl"
                                class="inline-flex items-center pt-5 pb-2 text-base text-white xl:pt-6 xl:pb-3 lg:text-xl"
                            >
                                <icon symbol="i_chevron" class="w-5 h-5 mr-2 transform rotate-180 fill-current"/>
                                Zpět na seznam referencí
                            </g-link>
                        </div>
                    </div>
                    <div class="flex-1" v-if="$context.nextReferenceUrl">
                        <div class="text-center md:text-right">
                            <g-link
                                :to="$context.nextReferenceUrl"
                                class="inline-flex items-center pt-5 pb-2 text-base text-white xl:pt-6 xl:pb-3 lg:text-xl"
                            >
                                Další reference
                                <icon symbol="i_chevron" class="w-5 h-5 ml-2 fill-current"/>
                            </g-link>
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
  import {mapObject, metaInfo} from '~/components/utils';
  import SubLink from "~/components/SubLink.vue";
  import ProjectButton from "~/components/ProjectButton.vue";

  export default {
      metaInfo() {
          return metaInfo({title: this.$page.seoTitle, heading: this.page.heading}, {
              keywords: this.$page.seoKeywords,
              description: this.$page.seoDescription
          })
      },
      components: {
          VueSlickCarousel,
          SubLink,
          ProjectButton
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
          carouselSettings() {
              return {
                  autoplay: this.page.autoplay,
                  autoplaySpeed: 3000,
                  lazyLoad: "ondemand",
                  pauseOnFocus: true,
                  pauseOnHover: true,
                  centerMode: true,
                  centerPadding: '0px',
                  infinite: true,
                  slidesToShow: 1,
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
                        url(transform: "xxlargeImage")
                    }
                    vyberKlienta {
                        title
                        id
                        ... on craft_klient_Category {
                            description
                            photo {
                                url(transform: "smallImage")
                            }
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
                                url(transform: "smallImage")
                            }
                        }
                    }
                    gallery {
                        url(transform: "xxlargeImage")
                        title
                    },
                    autoplay
                    vyberKlientaTretiRadek {
                        ...on craft_testemonials_klients_Entry {
                            position
                            firstName
                            lastName
                            photo {
                                url(transform: "smallImage")
                                title
                            }
                        }
                    },
                    seoDescription,
                    seoKeywords,
                    seoTitle
                }
            }
        }
    }
</page-query>
