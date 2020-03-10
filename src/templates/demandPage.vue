<template>
    <Layout :page-slug="$context.slug" :chameleon="false">
        <div class="max-w-screen-md mx-auto md:max-w-screen-sm">
            <section class="flex flex-wrap pt-6 xl:pt-16 xl:pb-8">
                <div class="w-full px-4 text-center">
                    <h1 class="mb-4 text-xl font-extrabold leading-none text-black lg:mb-6 lg:text-2xl xl:text-3xl" v-if="page.heading" v-html="page.heading"/>
                </div>
            </section>
        </div>
        <div class="flex flex-wrap max-w-screen-sm lg:max-w-6xl px-4 mx-auto">
            <div class="md:pr-12 xl:pr-16 lg:w-12/24 xl:w-14/24">
                <div class="text-sm text-gray-900 md:text-base wysiwyg-content md:mb-8 xl:mb-12 lg:mt-2" v-if="page.description" v-html="page.description">
                </div>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="flex items-center md:mb-4" v-for="person in page.people">
                        <img :src="mapObject(person, ['image', 0, 'url'])" class="flex-grow-0 w-12 h-12 mr-4 rounded-full md:w-16 md:h-16 xl:w-20 xl:h-20" alt="person">
                        <div>
                            <strong class="text-sm lg:text-lg">{{ person.firstName  }} {{ person.lastName }}</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:w-12/24 xl:w-10/24">
                <demand-form></demand-form>
            </div>
        </div>
    </Layout>
</template>

<page-query>
    query($slug: [String]) {
        craft {
            entry(slug: $slug) {
                ...on craft_demandPage_demandPage_Entry {
                    heading
                    description
                    people {
                        ...on craft_people_person_BlockType {
                            id
                            firstName
                            lastName
                            image {
                                url(transform: "xsmallImage")
                            }
                        }
                    }
                }
            }
        }
    }
</page-query>

<script>
  import DemandForm from '~/components/DemandForm';
  import { mapObject, metaInfo } from  '~/components/utils';

  export default {
      metaInfo() {
          return metaInfo({title: this.$context.seoTitle}, this.$context);
      },
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
