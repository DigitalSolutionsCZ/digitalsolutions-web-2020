<template>
    <div class="flex py-20 mt-12 overflow-hidden hp-header bg-gradient-tr-blue-green md:py-0 md:mt-0"
         v-keyframes
         style="perspective: 900px">
        <section class="self-center w-full px-4 md:px-8 xl:px-16" :data-keyframes="JSON.stringify(
                           atLeastBreakpoint && (atLeastBreakpoint('md') && atLeastBreakpoint('sm', false)) ? {
                            0: { opacity: 1, transform: 'translateY(0vh) rotate(0deg)' },
                            15: { opacity: 1, transform: 'translateY(5vh) rotateX(0deg)' },
                            30: { opacity: .5, transform: 'translateY(10vh) rotateX(0deg)' },
                            50: { opacity: 0, transform: 'translateY(30vh) rotateX(30deg)' },
                          } : { 0: { opacity: 1, transform: 'translateY(0vh) rotate(0deg)' },
                           })">
            <div class="max-w-6xl mx-auto">
                <div class="text-center">
                    <h1 class="mb-2 text-base leading-tight text-white md:text-2xl xl:text-3xl md:mb-6 xl:mb-8" v-html="page.heading"/>
                    <div class="mb-4 text-xs text-white opacity-75 md:mb-8 xl:mb-10 md:text-lg xl:text-xl">{{ page.homepageSubheader }}</div>
                    <project-button variant="ghost" tag="g-link" :to="page.homepageButtonLink" v-if="page.homepageButtonLink">
                        {{ page.homepageButtonText }}
                    </project-button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import ProjectButton from "../components/ProjectButton";
  export default  {
    props: {
      page: Object,
    },
    components: {
      ProjectButton
    }
  }
</script>
