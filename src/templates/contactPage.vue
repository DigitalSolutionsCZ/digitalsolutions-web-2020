<template>
    <Layout :page-slug="$context.slug">
        <template #headerSection>
            <div class="max-w-screen-md mx-auto md:max-w-screen-sm xs:pt-6 xl:pt-0">
                <section class="flex flex-wrap pt-6 xl:pt-16">
                    <div class="w-full px-4 text-center">
                        <h1 class="mb-4 text-xl font-extrabold leading-none tracking-tight text-black lg:mb-6 lg:text-2xl xl:text-3xl" v-if="page.heading" v-html="page.heading"/>
                        <div class="mb-4 text-xs text-gray-900 xs:text-sm lg:text-base md:mb-6 xl:mb-8" v-if="page.excerpt" v-html="page.excerpt"></div>
                    </div>
                </section>
            </div>
            <div class="max-w-screen-md px-4 mx-auto md:max-w-screen-md md:px-16 xl:px-0 xs:py-6 xl:py-0">
                <div class="flex flex-col items-center justify-center md:flex-row md:mb-2 xl:mb-16" v-if="page.showContactButtons">
                    <div class="md:w-9/24">
                        <project-button class="mb-3 md:w-full" href="#nogo" variant="secondary" v-scroll-to="'#contact'">Napište nám</project-button>
                    </div>
                    <div class="md:w-6/24">
                        <div class="mb-3 text-xs text-center lg:text-base">nebo vyplňte</div>
                    </div>
                    <div class="md:w-9/24">
                        <project-button class="mb-3 md:w-full" href="/poptavka/">Nezávaznou poptávku</project-button>
                    </div>
                </div>
            </div>
        </template>
        <div class="bg-ds-code">
            <div class="px-4 py-4 xl:py-8">
                <div class="relative max-w-screen-xl mx-auto">
                    <section class="flex flex-wrap overflow-hidden bg-white rounded">
                        <div class="w-full md:w-13/24 lg:w-15/24">
                            <a :href="mapObject(page, ['map', 0, 'contactMapLink'])"
                               target="_blank"
                               class="block h-full"
                            >
                                <g-image
                                    :src="mapObject(page, ['map', 0, 'contactMapImage', 0, 'url'])"
                                    :alt="mapObject(page, ['contactAdress', 0, 'header'])"
                                    class="object-cover w-full h-full" fit="cover"
                                />
                            </a>
                        </div>
                        <div class="w-full md:w-11/24 lg:w-9/24">
                            <div class="py-12 pl-8 pr-4">
                                <div class="mb-4 text-lg font-bold xl:text-xl xl:mb-8">
                                    {{ mapObject(page, ['contactAdress', 0, 'header']) }}
                                </div>
                                <div class="text-sm text-gray-900 md:text-base xl:text-lg">
                                    <div class="flex mb-2">
                                        <icon symbol="i_map_point" class="flex-grow-0 flex-shrink-0 w-6 h-6 mt-1 mr-3 text-green-500 fill-current"></icon>
                                        <span><a :href="mapObject(page, ['map', 0, 'contactMapLink'])">{{ mapObject(page, ['contactAdress', 0, 'address']) }}</a></span>
                                    </div>
                                    <div class="flex mb-2 text-base xl:text-lg">
                                        <icon symbol="i_phone" class="flex-grow-0 flex-shrink-0 w-6 h-6 mt-1 mr-3 text-green-500 fill-current"></icon>
                                        <strong>{{ mapObject(page, ['contactAdress', 0, 'phone']) }}</strong>
                                    </div>
                                    <div class="flex mb-4 text-base xl:text-lg">
                                        <icon symbol="i_envelope" class="flex-grow-0 flex-shrink-0 w-6 h-6 mt-1 mr-3 text-green-500 fill-current"></icon>
                                        <span class="block break-all">{{ mapObject(page, ['contactAdress', 0, 'email']) }}</span>
                                    </div>
                                    <div v-html="mapObject(page, ['contactAdress', 0, 'description'])"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div class="px-4 bg-white pt-4 md:pt-8 xl:pt-16">
            <div class="max-w-screen-xl ml-auto mr-auto">
                <section class="mx-4 mb-4 lg:mb-8">
                    <div class="px-4 text-center">
                        <h2 class="mb-3 text-base font-bold text-black xl:mb-8 md:text-xl xl:text-2xl">{{ page.subheading }}</h2>
                        <div class="mx-auto mb-4 text-sm text-gray-900 xl:text-base md:w-20/24 xl:w-14/24 wysiwyg-content md:mb-8 xl:mb-16" v-html="page.body"></div>
                    </div>
                </section>
                <div class="flex flex-wrap mb-2 xl-mx-8">
                    <template v-for="(route, index) in page.threeTextColumns">
                        <div :class="getColumnSizeByOrder(index)" :key="route.id">
                            <div class="mb-2 text-base font-bold text-blue-500 xl:text-lg">{{ route.header }}</div>
                            <div class="text-sm text-gray-700 break-words wysiwyg-content xl:text-base" v-html="route.description"></div>
                        </div>
                    </template>
                </div>
                <h3 id="contact" class="mb-2 md:mb-6 xl:mb-8 text-lg font-bold text-center text-black md:text-xl">Napište nám</h3>
                <div class="mx-auto max-w-screen-sm">
                    <contact-form class="mb-4 md:mb-16 w-full md:w-22/24 mx-auto"/>
                </div>
            </div>
        </div>
        <div class="bg-ds-code">
            <div class="px-4">
                <div class="relative max-w-screen-xl pt-8 pb-4 mx-auto xl:pt-16 xl:pb-12">
                    <h3 class="mb-3 text-lg font-bold text-center text-black md:text-xl md:mb-6 xl:mb-8">Sledujte nás na sociálních sítích</h3>
                    <div>
                        <div class="flex flex-wrap items-center justify-center">
                            <template v-for="social in socials">
                                <g-link :to="social.socialLink" :key="social.id" :alt="social.socialName">
                                    <template v-if="social.svg">
                                        <span class="flex items-center w-12 h-12 mx-1 mb-4 fill-current text-gray-900" v-html="social.svg"/>
                                    </template>
                                    <template v-if="social.img">
                                        <g-image class="w-12 h-12 mb-4 mr-1" :src="mapObject(social, ['img', 0, 'url'])" loading="lazy" />
                                    </template>
                                </g-link>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<page-query>
    query($slug: [String], $site: [String]) {
        craft {
            entry(slug: $slug, site: $site) {
                ... on craft_contactPage_contactPage_Entry {
                    heading
                    excerpt
                    itemUrl
                    showContactButtons
                    subheading
                    body
                    contactFormHeader
                    threeTextColumns {
                        ... on craft_threeTextColumns_sloupce_BlockType {
                            id
                            header
                            description
                        }
                    }
                    map {
                        ...on craft_map_contactMap_BlockType {
                            contactMapLink
                            contactMapImage {
                                url(transform: "xlargeImage")
                            }
                            contactMapNewWindow
                        }
                    }
                    contactAdress {
                        ...on craft_contactAdress_contactBlock_BlockType {
                            header
                            address
                            phone
                            email
                            description
                        }
                    }
                }
            },
            socials: globalSet(handle: "socialNetworks") {
                ...on craft_socialNetworks_GlobalSet {
                    socials {
                        ...on craft_socials_socialsImg_BlockType {
                            id
                            socialName,
                            socialLink,
                            img: socialPicture {
                                url
                            }
                        },
                        ...on craft_socials_socialsSvg_BlockType {
                            id
                            svg :socialPicture
                            socialName,
                            socialLink
                        }
                    }
                }
            }
        }
    }
</page-query>
<script>
  import ContactForm from '../components/ContactForm'
  import ProjectButton from '../components/ProjectButton'
  import { mapObject, metaInfo } from  '~/components/utils';

  export default {
      metaInfo() {
          return metaInfo({title: this.$context.seoTitle}, this.$context);
      },
      components: {
          ContactForm,
          ProjectButton
      },
      computed: {
          page() {
              return this.$page.craft.entry;
          },
          socials() {
              return this.$page.craft.socials.socials
          }
      },
      methods: {
          mapObject,
          getColumnSizeByOrder(index) {
              const classNames = [
                  'w-full md:w-7/24 xl:w-6/24 md:pr-10 xl:pr-16',
                  'w-full md:w-10/24 xl:w-12/24 md:pr-10 xl:pr-16',
                  'w-full md:w-7/24 xl:w-6/24',
              ];
              return classNames[index];
          }
      },
  }
</script>

