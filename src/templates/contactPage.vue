<template>
    <Layout>
        <template #headerSection>
            <div class="mx-auto max-w-screen-md">
                <section class="flex flex-wrap pt-6 pb-3 xl:pt-16 xl:pb-16">
                    <div class="px-4 text-center">
                        <h1 class="mb-3 text-xl font-extrabold leading-none md:mb-5 xl:mb-6 md:text-2xl xl:text-3xl">{{ page.heading }}</h1>
                        <div class="mb-4 text-base text-gray-700 md:mb-6 xl:mb-8" v-html="page.excerpt"></div>
                        <div class="items-center md:flex" v-if="page.showContactButtons">
                            <div class="md:w-9/24">
                                <project-button class="mb-3 md:w-full" href="#nogo" variant="secondary">Napište nám</project-button>
                            </div>
                            <div class="md:w-6/24">
                                <div class="mb-3 text-base text-center">nebo vyplňte</div>
                            </div>
                            <div class="md:w-9/24">
                                <project-button class="mb-3 md:w-full" href="#nogo">Nezávaznou poptávku</project-button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </template>
        <div class="relative mb-4 md:mb-8 xl:mb-16">
            <g-image src="~/images/bg_ds_code.jpg" class="absolute object-cover w-full h-full" fit="cover"/>
            <div class="px-4 py-4 xl:py-8 md:px-16">
                <div class="relative ml-auto mr-auto max-w-screen-xl">
                    <section class="flex flex-wrap overflow-hidden bg-white rounded">
                        <div class="w-full md:w-13/24 lg:w-15/24">
                            <a :href="mapObject(page, ['map', 0, 'contactMapLink'])"
                               target="_blank"
                               class="block h-full"
                            >
                                <g-image :src="mapObject(page, ['map', 0, 'contactMapImage', 0, 'url'])" alt="mapa" class="object-cover w-full h-full" fit="cover"/>
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
                                        <span>{{ mapObject(page, ['contactAdress', 0, 'address']) }}</span>
                                    </div>
                                    <div class="flex mb-2 text-base xl:text-lg">
                                        <icon symbol="i_phone" class="flex-grow-0 flex-shrink-0 w-6 h-6 mt-1 mr-3 text-green-500 fill-current"></icon>
                                        <strong>{{ mapObject(page, ['contactAdress', 0, 'phone']) }}</strong>
                                    </div>
                                    <div class="flex mb-4 text-base xl:text-lg">
                                        <icon symbol="i_envelope" class="flex-grow-0 flex-shrink-0 w-6 h-6 mt-1 mr-3 text-green-500 fill-current"></icon>
                                        <span class="block break-all">{{ mapObject(page, ['contactAdress', 0, 'email']) }}</span>
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
            <div class="ml-auto mr-auto max-w-screen-xl">
                <section class="mx-4 mb-4 lg:mb-8">
                    <div class="px-4 text-center">
                        <h2 class="mb-3 text-base font-bold xl:mb-8 md:text-xl xl:text-2xl">{{ page.subheading }}</h2>
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
                <h3 class="mb-8 text-lg font-bold text-center md:text-xl">Napište nám</h3>
                <div class="mx-auto md:w-10/24">
                    <contact-form class="mb-4 md:mb-16" />
                </div>
            </div>
        </div>
        <div class="relative">
            <g-image src="~/images/bg_ds_code.jpg" class="absolute object-cover w-full h-full" fit="cover"/>
            <div class="px-4">
                <div class="relative pt-10 ml-auto mr-auto max-w-screen-xl xl:pt-24 xl:pb-20">
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
  import ProjectButton from '../components/ProjectButton'
  import { mapObject } from  '~/components/utils';

  export default {
    components: {
      ContactForm,
      ProjectButton
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
          'w-full md:w-8/24 lg:w-6/24 md:px-4 xl:px-8',
          'w-full md:w-8/24 lg:w-12/24 md:px-4 xl:px-8',
          'w-full md:w-8/24 lg:w-6/24 md:px-4 xl:px-8',
        ];
        return classNames[index];
      }
    },
  }
</script>

