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
                                <demand-form></demand-form>
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
  import DemandForm from '~/components/DemandForm';
  import { mapObject } from  '~/components/utils';

  export default {
    components: {
      DemandForm
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
