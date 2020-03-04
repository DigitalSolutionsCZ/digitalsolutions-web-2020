<template>
  <Layout>
    <template #header>
      <section class="relative" data-cha-section data-theme="dark">
        <div class="cha-header-clip" data-cha-header-clip>
          <div class="fixed inset-x-0 top-0 z-30 px-4 cha-header" style="background: var(--header-background)" >
            <header class="mx-auto max-w-screen-3xl" data-cha-header>
              <div class="flex items-center h-12 md:h-20 xl:h-24">
                <div class="sm:w-7/24 w-9/24 xs:w-10/24 md:w-5/24 xl:w-4/24">
                  <g-link to="/" class="relative flex items-center h-12 md:h-20 xl:h-24">
                    <img src="../images/logo-ds.png"  style="visibility: var(--logo-color-visibility)" class="absolute" />
                    <img src="../images/logo-ds-white.png" style="visibility: var(--logo-white-visibility)"  class="absolute" />
                  </g-link>
                </div>
                <div class="flex-grow hidden md:block">
                  <nav class="flex justify-center text-base font-bold cha-nav">
                    <g-link class="cha-nav-link group" to="/about/">
                      <div class="relative">
                        O nás
                        <div class="cha-nav-link-underline"></div>
                      </div>
                    </g-link>
                    <g-link class="cha-nav-link" to="/services/">
                      <div class="relative">
                        Služby
                        <div class="cha-nav-link-underline"></div>
                      </div>
                    </g-link>
                    <g-link class="cha-nav-link" to="/reference/">
                      <div class="relative">
                        Reference
                        <div class="cha-nav-link-underline"></div>
                      </div>
                    </g-link>
                    <g-link class="cha-nav-link" to="/demand/">
                      <div class="relative">
                        Poptávka
                        <div class="cha-nav-link-underline"></div>
                      </div>
                    </g-link>
                    <g-link class="cha-nav-link" to="/contact/">
                      <div class="relative">
                        Kontakt
                        <div class="cha-nav-link-underline"></div>
                      </div>
                    </g-link>
                  </nav>
                </div>
                <div class="w-15/24 md:w-3/24 xl:w-3/24">
                  <div class="flex items-center justify-end">
                    <g-link class="cha-nav-button" to="/contact/">
                      Kontakt
                    </g-link>
                    <div class="ml-3 md:hidden">☰</div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div class="flex h-screen bg-gradient-tr-blue-green">
          <section class="self-center w-full">
            <div class="max-w-6xl mx-auto">
              <div class="text-center">
                <h1 class="leading-none text-white xl:text-3xl xl:mb-8" v-html="page.heading">Vyvíjíme <span class="font-extrabold">informační systémy</span>, webové a&nbsp;mobilní aplikace na míru</h1>
                <div class="mb-10 text-white opacity-75">{{ page.homepageSubheader }}</div>
                <g-link class="inline-flex justify-center px-4 py-2 text-sm text-white transition-all duration-200 ease-in-out border border-gray-100 rounded-full min-w-40 md:text-base hover:shadow-lg" :to="page.homepageButtonLink" v-if="page.homepageButtonLink">
                  {{ page.homepageButtonText }}
                </g-link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </template>
    <template #content>
       <section class="relative mb-16">
         <div :style="{'background-image': 'url(/bg_ds_code.jpg)'}" class="absolute inset-0"></div>
         <div class="relative" data-cha-section>
           <div class="pt-6 md:pt-8 xl:pt-16">
             <div class="max-w-screen-xl mx-auto">
               <div class="px-4 mx-auto w-22/24 md:w-18/24">
                 <h2 class="mb-6 text-base text-center md:mb-8 xl:mb-16 md:text-xl xl:text-2xl" v-html="page.homepageReferenceHeader"></h2>
               </div>
               <div class="mx-auto md:w-22/24">
                 <div class="relative z-20 w-full md:px-4" v-for="(reference, index) in page.homepageReference" :key="reference.id">
                   <div class="mx-auto transition-all duration-200 ease-in-out bg-white rounded shadow-none group hover:shadow-xl"
                        :class="[index === page.homepageReference.length - 1 ? 'mb-8' : 'mb-3 md:mb-8 xl:mb-16']"
                   >
                     <div class="relative z-20 px-4 pt-8 md:px-8 xl:px-16 md:pt-8 xl:pt-16">
                       <h2 class="mb-3 text-base font-bold leading-tight md:text-lg xl:text-2xl">{{ reference.header }}</h2>
                       <div class="mb-4 text-sm text-green-500 md:mb-6 xl:text-base">{{ mapObject(reference, ['client', 0 , 'title']) }}</div>
                       <div class="flex flex-wrap mb-6">
                         <div class="w-full md:pr-16 md:w-16/24">
                           <div class="text-sm wysiwyg-content xl:text-lg" v-html="reference.description"></div>
                           <div class="w-full h-1 mb-6 rounded bg-gradient-l-blue-green md:mb-9 xl:mb-12"></div>
                           <div class="relative" v-if="reference.textTestemonial">
                             <icon symbol="i_quotation" class="absolute w-16 h-16 -mt-3 -ml-3 text-gray-100 transform fill-current lg:mt-8 lg:ml-6 lg:-translate-x-full lg:-translate-y-full"></icon>
                             <div class="relative text-sm italic text-gray-700  wysiwyg-content md:text-base" v-html="reference.textTestemonial">
                             </div>
                           </div>
                           <div class="flex items-center mb-4 md:mb-6">
                             <div>
                               <strong class="text-sm lg:text-lg">{{ mapObject(reference, ['testemonial', 0 , 'title']) }}</strong>
                               <div class="text-xs lg:text-base">{{ mapObject(reference, ['testemonial', 0 , 'position']) }}</div>
                             </div>
                           </div>
                         </div>
                         <div class="w-full md:w-8/24">
                           <div class="flex justify-center">
                             <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/12/1418948033symfony-logo.png" alt="symfony">
                           </div>
                         </div>
                       </div>
                     </div>
                     <sub-link :href="reference.buttonLink" :label="reference.buttonText ? reference.buttonText : 'Prohlédnout referenci'" />
                   </div>
                   <div v-if="index !== page.homepageReference.length - 1" class="justify-center hidden md:flex md:mb-8 xl:mb-16">
                     <img src="identity-horizontal-line.svg" alt="delimiter" />
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
      <section class="relative" data-cha-section>
        <div class="max-w-screen-xl px-4 mx-auto">
          <h2 class="mb-4 text-base font-bold text-center md:mb-6 xl:mb-12 md:text-xl xl:text-2xl">{{ page.homepageAssignmentsHeader }}</h2>
            <div class="flex flex-wrap justify-between w-full mx-auto md:w-22/24">
              <div class="w-full md:w-7/24" v-for="(assigment, index) in page.homepageAssignments">
                <div class="">
                  <icon symbol="i_quotation" class="absolute w-12 h-12 -mt-6 -ml-3 md:-ml-6 text-gray-100 transform fill-current md:w-16 md:h-16 lg:mt-8 lg:ml-6 lg:-translate-x-full lg:-translate-y-full"></icon>
                  <div class="relative text-xs text-gray-700 md:text-sm wysiwyg-content md:text-base mb-8 md:mb-10 xl:mb-16" v-html="assigment.description"></div>
                </div>
              </div>
            </div>
            <h2 class="mb-2 text-base font-bold text-center md:mb-3 md:text-xl xl:text-2xl">{{ page.contactFormHeader }}</h2>
            <div class="w-full mx-auto text-lg text-center md:w-12/24 xl:w-10/24">
              <div class="text-sm leading-relaxed wysiwyg-content md:text-base" v-html="page.homepageAssignmentsFormText"></div>
              <contact-form class="mb-5 md:mb-8"></contact-form>
            </div>
          </div>
      </section>
    </template>
  </Layout>
</template>

<page-query>
query {
  craft {
    entry(slug: "homepage") {
      ... on craft_homepage_homepage_Entry {
        heading
        homepageSubheader
        homepageButtonText
        homepageButtonLink
        homepageReferenceHeader
        homepageAssignmentsHeader
        contactFormHeader
        homepageAssignmentsFormText
        homepageClientLogos {
          url
        }
        homepageAssignments {
          ...on craft_homepageAssignments_assignments_BlockType {
            description
          }
        }
        homepageReference {
          ... on craft_homepageReference_reference_BlockType {
            header
            description
            buttonText
            buttonLink
            id
            textTestemonial
            testemonial {
              ... on craft_testemonials_klients_Entry {
                title
                position
              }
            }
            client {
              title
            }
            image {
              url
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import init from '../components/ChameleonHeader.js';
import SubLink from "../components/SubLink.vue";
import { mapObject } from  '~/components/utils';
import ContactForm from '../components/ContactForm'

export default {
  components: {
    SubLink,
    ContactForm
  },
  computed: {
    page() {
      return this.$page.craft.entry;
    },
  },
  metaInfo: {
    title: 'Homepage'
  },
  methods: {
    mapObject
  },
  mounted() {
    init();
  }
}
</script>

