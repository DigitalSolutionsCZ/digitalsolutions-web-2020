<template>
    <Layout>
        <template #headerSection>
            <div class="max-w-screen-xl ml-auto mr-auto md:w-18/24 xl:w-14/24">
                <section class="flex flex-wrap pt-6 pb-6 xl:pt-16 xl:pb-16">
                    <div class="px-4 text-center">
                        <h1 class="mb-3 text-xl font-extrabold leading-none md:mb-5 xl:mb-6 md:text-2xl xl:text-3xl" v-if="page.heading" v-html="page.heading" />
                        <div class="mb-4 text-base text-gray-700 md:mb-6 xl:mb-8" v-if="page.excerpt" v-html="page.excerpt"></div>
                        <div class="items-center md:flex" v-if="page.showContactButtons">
                            <div class="md:w-9/24">
                                <a href="#nogo" class="flex items-center justify-center px-4 py-3 mx-2 mb-3 text-base font-semibold transition-all duration-200 ease-in-out bg-gray-100 rounded-full min-w-40 hover:shadow-lg active">Napište nám</a>
                            </div>
                            <div class="md:w-6/24">
                                <div class="mb-3 text-base text-center">nebo vyplňte</div>
                            </div>
                            <div class="md:w-9/24">
                                <a href="#nogo" class="flex items-center justify-center px-4 py-3 mx-2 mb-3 text-base font-semibold text-white transition-all duration-200 ease-in-out rounded-full min-w-40 hover:shadow-lg bg-gradient-r-blue-green active">Nezávaznou poptávku</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </template>
        <div class="relative mb-4 md:mb-8 xl:mb-16">
            <g-image src="~/images/bg_ds_code.jpg" class="absolute object-cover w-full h-full" fit="cover"/>
            <div class="px-4 py-4 xl:py-8 md:px-16">
                <div class="relative max-w-screen-xl ml-auto mr-auto">
                    <section class="flex flex-wrap overflow-hidden bg-white rounded">
                        <div class="w-full md:w-15/24">
                            <a :href="mapObject(page, ['map', 0, 'contactMapLink'])"
                               target="_blank"
                               class="block h-full"
                            >
                                <g-image :src="mapObject(page, ['map', 0, 'contactMapImage', 0, 'url'])" alt="mapa" class="object-cover w-full h-full" fit="cover"/>
                            </a>
                        </div>
                        <div class="w-full: md:w-9/24">
                            <div class="py-12 pl-8 pr-4">
                                <div class="mb-4 text-lg font-bold xl:text-xl xl:mb-8">
                                    {{ mapObject(page, ['contactAdress', 0, 'header']) }}
                                </div>
                                <div class="text-sm text-gray-900 md:text-base xl:text-lg">
                                    <div class="flex mb-2">
                                        <icon symbol="i_map_point" class="flex-grow-0 w-6 h-6 mt-1 mr-3 text-green-500 fill-current"/>
                                        <span>{{ mapObject(page, ['contactAdress', 0, 'address']) }}</span>
                                    </div>
                                    <div class="flex mb-2 text-base xl:text-lg">
                                        <icon symbol="i_phone" class="flex-grow-0 w-6 h-6 mt-1 mr-3 text-green-500 fill-current"/>
                                        <strong>{{ mapObject(page, ['contactAdress', 0, 'phone']) }}</strong>
                                    </div>
                                    <div class="flex mb-4 text-base xl:text-lg">
                                        <icon symbol="i_envelope" class="flex-grow-0 w-6 h-6 mt-1 mr-3 text-green-500 fill-current"/>
                                        <span>{{ mapObject(page, ['contactAdress', 0, 'email']) }}</span>
                                    </div>
                                    <p>{{ mapObject(page, ['contactAdress', 0, 'description']) }}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div class="px-4">
            <div class="max-w-screen-xl ml-auto mr-auto">
                <section class="mx-4 mb-4 lg:mb-8">
                    <div class="px-4 text-center">
                        <h2 class="mb-3 text-base font-bold xl:mb-8 md:text-xl xl:text-2xl">{{ page.subheading }}</h2>
                        <div class="m-auto text-sm text-gray-900 xl:text-base md:w-20/24 xl:w-14/24 wysiwyg-content" v-html="page.body"></div>
                    </div>
                </section>
                <div class="flex flex-wrap mb-2">
                    <template v-for="(route, index) in page.threeTextColumns">
                        <div :class="getColumnSizeByOrder(index)" :key="route.id">
                            <div class="mb-2 text-base font-bold text-blue-500 xl:text-lg">{{ route.header }}</div>
                            <div class="text-sm text-gray-700 break-words wysiwyg-content xl:text-base" v-html="route.description"></div>
                        </div>
                    </template>
                </div>
                <h3 class="mb-8 text-lg font-bold text-center md:text-xl">Napište nám</h3>
                <div class="mx-auto md:w-10/24">
                    <contact-form class="mb-4 md:mb-16" />
                </div>
            </div>
        </div>
        <div class="relative">
            <g-image src="~/images/bg_ds_code.jpg" class="absolute object-cover w-full h-full" fit="cover"/>
            <div class="px-4">
                <div class="relative max-w-screen-xl pt-10 ml-auto mr-auto xl:pt-24 xl:pb-20">
                    <h3 class="mb-3 text-lg font-bold text-center md:text-xl md:mb-6 xl:mb-8">Sledujte nás na sociálních sítích</h3>
                    <div>
                        <div class="flex flex-wrap items-center justify-center">
                            <icon symbol="i_facebook" class="w-16 h-16 mb-4 mr-1"></icon>
                            <icon symbol="i_twitter" class="w-20 h-20 mb-4"></icon>
                            <icon symbol="i_linkedin" class="w-16 h-16 mb-4 mr-2"></icon>
                            <icon symbol="i_instagram" class="w-16 h-16 mb-4"></icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<page-query>
    query($slug: [String]) {
        craft {
            entry(slug: $slug) {
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
                            contactMapImage {url}
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
            }
        }
    }
</page-query>
<script>
  import ContactForm from '../components/ContactForm'
  import { mapObject } from  '~/components/utils';

  export default {
      components: {
          ContactForm
      },
      computed: {
          page() {
              return this.$page.craft.entry;
          },
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

