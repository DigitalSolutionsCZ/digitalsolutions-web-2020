<template>
    <form>
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
        </div>

        <div class="flex items-center justify-center">
            <button class="px-4 py-3 mx-2 text-base font-semibold text-white transition-all duration-200 ease-in-out rounded-full min-w-40 hover:shadow-lg bg-gradient-r-blue-green active">Odeslat</button>
        </div>
    </form>
</template>
