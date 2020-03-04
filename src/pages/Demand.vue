<template>
    <Layout>
        <div class="px-4">
            <div class="max-w-screen-xl ml-auto mr-auto">
                <section class="pt-6 pb-10 md:pt-12 xl:pt-16 xl:pb-16">
                    <div class="mx-auto md:w-22/24">
                        <h1 class="mb-6 text-xl font-extrabold leading-none text-center md:mb-8 xl:mb-16 md:text-2xl xl:text-3xl">{{ page.heading }}</h1>
                        <div class="flex flex-wrap">
                            <div class="md:pr-12 xl:pr-16 md:w-12/24 xl:w-13/24">
                                <div class="text-sm text-gray-900 md:text-base wysiwyg-content md:mb-8 xl:mb-16" v-html="page.description">
                                </div>
                                <div class="grid grid-cols-2 gap-4 mb-6">
                                    <div class="flex items-center md:mb-4" v-for="person in page.people">
                                        <img :src="mapObject(person, ['image', 0, 'url'])" class="flex-grow-0 w-12 h-12 mr-4 rounded-full md:w-16 md:h-16 xl:w-20 xl:h-20" alt="person">
                                        <div>
                                            <strong class="text-sm lg:text-lg">{{ person.firstName  }} {{ person.lastName }}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="md:w-12/24 xl:w-11/24">
                                <div class="flex flex-wrap">
                                    <div class="w-full">
                                        <input type="text" class="w-full p-3 mb-4 text-sm leading-5 placeholder-gray-200 border border-gray-200 rounded md:text-sm xl:p-4 xl:text-base md:mb-6 xl:mb-8" placeholder="Jméno a příjmení">
                                    </div>
                                    <div class="w-full md:pr-4 md:w-12/24">
                                        <input type="text" class="w-full p-3 mb-4 text-sm leading-5 placeholder-gray-200 border border-gray-200 rounded md:text-sm xl:p-4 xl:text-base md:mb-6 xl:mb-8" placeholder="Email">
                                    </div>
                                    <div class="w-full md:w-12/24">
                                        <input type="text" class="w-full p-3 mb-4 text-sm leading-5 placeholder-gray-200 border border-gray-200 rounded md:text-sm xl:p-4 xl:text-base md:mb-6 xl:mb-8" placeholder="Telefon">
                                    </div>
                                    <div class="w-full">
                                        <textarea class="w-full px-3 pt-3 mb-4 text-sm placeholder-gray-200 border border-gray-200 rounded xl:text-base xl:mb-8" rows="4" placeholder="Popište nám prosím váš projekt nebo potřeby…"></textarea>
                                    </div>
                                    <div class="w-full">
                                        <label for="exampleFileUpload" class="flex items-center w-full p-3 mb-4 text-sm text-gray-200 placeholder-gray-200 border border-gray-200 rounded xl:h-13 xl:text-base md:mb-6 xl:mb-8">Přiložit soubory (max. 10MB)</label>
                                        <input type="file" id="exampleFileUpload" class="absolute invisible">
                                    </div>
                                    <div class="w-full">
                                        <input type="text" class="w-full p-3 mb-4 text-sm leading-5 placeholder-gray-200 border border-gray-200 rounded md:text-sm xl:p-4 xl:text-base md:mb-6 xl:mb-8" placeholder="Představu o rozpočtu">
                                    </div>
                                </div>
                                <div class="flex flex-wrap">
                                    <div class="w-full mb-4 text-sm md:w-17/24 xl:w-18/24 md:pr-8 xl:text-base">
                                        Můžete také zavolat: <strong>+420&nbsp;775&nbsp;300&nbsp;500</strong><span class="md:block"> (PO-PÁ 8-17).</span>
                                    </div>
                                    <div class="w-full mb-4 md:w-7/24 xl:w-6/24">
                                        <button class="w-full px-4 py-3 text-base font-semibold text-white transition-all duration-200 ease-in-out rounded-full hover:shadow-lg bg-gradient-r-blue-green active">Odeslat</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    </Layout>
</template>

<page-query>
query {
  craft {
    entry(slug: "poptávka") {
      ...on craft_demandPage_demandPage_Entry {
        heading
        description
        people {
        	...on craft_people_person_BlockType {
            id
            firstName
            lastName
            image { url }
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
