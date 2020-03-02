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
                <h1 class="leading-none text-white xl:text-3xl xl:mb-8">Vyvíjíme <span class="font-extrabold">informační systémy</span>, webové a&nbsp;mobilní aplikace na míru</h1>
                <div class="mb-10 text-white opacity-75">I na ty opravdu velké si sáhnete do<br> 3 měsíců</div>
                <g-link class="inline-flex justify-center px-4 py-2 text-sm text-white border border-gray-100 rounded-full min-w-40 md:text-base hover:shadow-lg transition-all duration-200 ease-in-out" to="/contact/">
                  Jak vyvíjíme
                </g-link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </template>
    <template #content>
      <section class="relative" data-cha-section>
        <!-- your section content 👇-->
        <div class="container">
          <div class="text-component line-height-lg">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus et fugiat reiciendis maiores. Illo, ex magnam, soluta, accusamus rerum incidunt provident deserunt enim neque tempora dicta asperiores expedita veritatis rem perferendis modi! Eos, aperiam delectus itaque repudiandae sit necessitatibus mollitia nostrum maiores? Perspiciatis commodi sunt voluptates similique! Dolorem nobis repellat laborum praesentium maxime fugit id non eius doloremque? Corporis suscipit cupiditate eaque vitae voluptates tempora repellat? Laboriosam facere architecto illo repellat. Reprehenderit odio iure nihil obcaecati esse, laboriosam rerum quod quidem natus perferendis, officiis tempore eos veritatis aspernatur cumque corrupti a, minima non tempora! Nam adipisci at repellendus optio earum.</p>
          </div>
        </div>
      </section>
    </template>
  </Layout>
</template>

<script>
import init from '../components/ChameleonHeader.js';

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  mounted() {
    init();
  }
}
</script>

