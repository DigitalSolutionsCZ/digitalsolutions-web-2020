<template>
  <div class="flex flex-col h-full">
    <div class="px-4 fixed inset-x-0 top-0 z-30 bg-white">
      <header class="mx-auto max-w-screen-3xl">
        <div class="flex items-center h-12 md:h-20 xl:h-24">
          <div class="sm:w-7/24 w-9/24 xs:w-10/24 md:w-5/24 xl:w-4/24">
            <g-link to="/">
              <g-image src="~/images/logo-ds.png" alt="logo"></g-image>
            </g-link>
          </div>
          <div class="flex-grow hidden md:block">
            <nav class="flex justify-center text-base font-bold text-gray-400">
              <g-link class="px-4 py-4 md:mr-3 xl:mr-10 hover:text-black group transition-all duration-200 ease-in-out flex items-center" to="/about/">
                <div class="relative">
                  O nás
                  <div class="absolute inset-x-0 mt-1 h-1 rounded opacity-0 bg-gradient-r-blue-green group-hover:opacity-100"></div>
                </div>
              </g-link>
              <g-link class="px-4 py-4 md:mr-3 xl:mr-10 hover:text-black group transition-all duration-200 ease-in-out flex items-center" to="/services/">
                <div class="relative">
                 Služby
                  <div class="absolute inset-x-0 mt-1 h-1 rounded opacity-0 bg-gradient-r-blue-green group-hover:opacity-100"></div>
                </div>
              </g-link>
              <g-link class="px-4 py-4 md:mr-3 xl:mr-10 hover:text-black group transition-all duration-200 ease-in-out flex items-center" to="/reference/">
                <div class="relative">
                  Reference
                  <div class="absolute inset-x-0 mt-1 h-1 rounded opacity-0 bg-gradient-r-blue-green group-hover:opacity-100"></div>
                </div>
              </g-link>
              <g-link class="px-4 py-4 md:mr-3 xl:mr-10 hover:text-black group transition-all duration-200 ease-in-out flex items-center" to="/demand/">
                <div class="relative">
                  Poptávka
                  <div class="absolute inset-x-0 mt-1 h-1 rounded opacity-0 bg-gradient-r-blue-green group-hover:opacity-100"></div>
                </div>
              </g-link>
              <g-link class="px-4 py-4 md:mr-3 xl:mr-10 hover:text-black group transition-all duration-200 ease-in-out flex items-center" to="/contact/">
                <div class="relative">
                  Kontakt
                  <div class="absolute inset-x-0 mt-1 h-1 rounded opacity-0 bg-gradient-r-blue-green group-hover:opacity-100"></div>
                </div>
              </g-link>
            </nav>
          </div>
          <div class="w-15/24 md:w-3/24 xl:w-2/24">
            <div class="flex items-center justify-end">
              <g-link class="inline-flex justify-center px-4 py-1 text-sm font-semibold text-green-500 border border-gray-100 rounded-full min-w-40 md:py-2 md:border-none md:text-base md:text-white hover:shadow-lg transition-all duration-200 ease-in-out md:bg-gradient-r-blue-green active" to="/contact/">Kontakt</g-link>
              <div class="ml-3 md:hidden">☰</div>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="flex-grow mt-12 md:mt-20 xl:mt-24">
      <slot/>
    </div>
    <footer>
      <div class="w-full h-4 bg-gradient-l-blue-green"></div>
      <div class="px-4 overflow-hidden bg-gray-900">
        <div class="mx-auto max-w-screen-xl">
          <div class="flex flex-wrap pt-4 xl:pt-8">
            <div class="w-full md:w-12/24 xl:w-10/24 md:pr-8">
              <h3 class="mb-4 text-base font-bold text-white md:text-lg xl:text-xl">Kontakt</h3>
              <div class="text-sm text-gray-300 xl:text-base">
                <div class="flex mb-2">
                  <icon symbol="i_map_point" class="flex-grow-0 flex-shrink-0 w-6 h-6 mt-1 mr-3 fill-current"></icon>
                  <span>17. listopadu 203, 530 02 Pardubice</span>
                </div>
                <div class="flex mb-2">
                  <icon symbol="i_phone" class="flex-grow-0 flex-shrink-0 w-6 h-6 mt-1 mr-3 fill-current"></icon>
                  <strong>+420 775 300 500</strong>
                </div>
                <div class="flex mb-4">
                  <icon symbol="i_envelope" class="flex-grow-0 flex-shrink-0 w-6 h-6 mt-1 mr-3 fill-current"></icon>
                  <span>info@digital.cz</span>
                </div>
              </div>
            </div>
            <div class="w-full md:w-12/24 xl:w-14/24">
              <h3 class="mb-4 text-base font-bold text-white md:text-lg xl:text-xl">Digital Solutions</h3>
              <ul class="flex flex-wrap mb-2 xl:mb-8">
                <li class="flex items-center mb-3 mr-8">
                  <icon
                          symbol="i_chevron"
                          class="flex-shrink-0 w-4 h-4 mr-2 text-green-500 fill-current">
                  </icon>
                  <span class="text-sm text-gray-300 xl:text-base">O nás</span>
                </li>
                <li class="flex items-center mb-3 mr-8">
                  <icon
                          symbol="i_chevron"
                          class="flex-shrink-0 w-4 h-4 mr-2 text-green-500 fill-current">
                  </icon>
                  <span class="text-sm text-gray-300 xl:text-base">Služby</span>
                </li>
                <li class="flex items-center mb-3 mr-8">
                  <icon
                          symbol="i_chevron"
                          class="flex-shrink-0 w-4 h-4 mr-2 text-green-500 fill-current">
                  </icon>
                  <span class="text-sm text-gray-300 xl:text-base">Reference</span>
                </li>
                <li class="flex items-center mb-3 mr-8">
                  <icon
                          symbol="i_chevron"
                          class="flex-shrink-0 w-4 h-4 mr-2 text-green-500 fill-current">
                  </icon>
                  <span class="text-sm text-gray-300 xl:text-base">Služby</span>
                </li>
              </ul>
              <div class="flex flex-wrap items-center text-gray-400">
                <icon symbol="i_facebook" class="w-8 h-8 mb-4 mr-1 fill-current"></icon>
                <icon symbol="i_twitter" class="w-8 h-8 mb-4 fill-current"></icon>
                <icon symbol="i_linkedin" class="w-8 h-8 mb-4 mr-1 fill-current"></icon>
                <icon symbol="i_instagram" class="w-8 h-8 mb-4 fill-current"></icon>
              </div>
            </div>
          </div>
          <div class="pb-3 text-sm text-gray-300 xl:text-base">© Digital Solutions s.r.o., 2004 - 2020</div>
        </div>
      </div>

    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style src="../css/main.css" />

