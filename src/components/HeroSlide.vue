<template>
    <div class="flex py-16 md:py-20 lg:py-40 mt-12 overflow-hidden hp-header bg-gradient-tr-blue-green mobileLandscape:py-0 mobileLandscape:mt-0"
         v-keyframes
         style="perspective: 900px">
        <section class="self-center w-full px-4 mobileLandscape:px-8 xl:px-16" :data-keyframes="JSON.stringify(
                           atLeastBreakpoint && (atLeastBreakpoint('md') && atLeastBreakpoint('sm', false)) ? {
                            0: { opacity: 1, transform: 'translateY(0vh) rotate(0deg)' },
                            15: { opacity: 1, transform: 'translateY(5vh) rotateX(0deg)' },
                            30: { opacity: .5, transform: 'translateY(10vh) rotateX(0deg)' },
                            50: { opacity: 0, transform: 'translateY(30vh) rotateX(30deg)' },
                          } : { 0: { opacity: 1, transform: 'translateY(0vh) rotate(0deg)' },
                           })">
            <div class="max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto">
                <transition name="fade" appear>
                <div class="text-center md:px-20 lg:px-40">
                    <h1 class="mb-2 text-base xs:text-xl leading-tight text-white mobileLandscape:text-2xl xl:text-5xl mobileLandscape:mb-6 xl:mb-8" v-html="page.heading"/>
                    <div class="mb-4 text-xs xs:text-sm text-white opacity-75 mobileLandscape:mb-8 xl:mb-10 mobileLandscape:text-lg xl:text-xl">{{ page.homepageSubheader }}</div>
                    <template v-if="containsString(page.homepageButtonLink, '#') && page.homepageButtonLink">
                        <project-button variant="ghost" tag="a" v-scroll-to="page.homepageButtonLink">
                            {{ page.homepageButtonText }}
                        </project-button>
                    </template>
                    <template v-else>
                        <project-button variant="ghost" tag="a" :href="page.homepageButtonLink">
                            {{ page.homepageButtonText }}
                        </project-button>
                    </template>
                </div>
                </transition>
            </div>
        </section>
    </div>
</template>

<script>
  import ProjectButton from "../components/ProjectButton";
  import {containsString} from '~/components/utils';
  export default  {
    props: {
      page: Object,
    },
    methods: {
      containsString
    },
    components: {
      ProjectButton
    }
  }
</script>
