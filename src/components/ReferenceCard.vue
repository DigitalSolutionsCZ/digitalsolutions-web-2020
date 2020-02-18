<template>
    <div class="mb-4 px-2 relative" :class="[small ? 'w-1/2': 'w-full']">
        <div
            class="bg-white rounded group hover:shadow-xl transition-all duration-200 ease-in-out"
            :class="{'mx-auto': !small}"
        >
            <div class="relative z-20 pt-16 pb-8 pl-16">
                <h2 class="mb-3 text-2xl font-black leading-relaxed">Optimalizace procesu vypracování smluv</h2>
                <span class="inline-block mb-8 text-sm text-green-500">M&M reality a.s.</span>
                <div class="w-7/12 text-lg text-gray-600">
                    <p>Prodej či nákup nemovitosti je záležitost, kterou je třeba bezchybně smluvně ošetřit. V rámci služby realitní makléři poskytují svým klientům právní servis (ve spolupráci s právním oddělením).</p>
                </div>
            </div>
            <a
                href="#nogo"
                class="inline-flex items-center py-2 pl-16 pr-4 mb-16 text-xs font-bold text-black bg-gray-100 rounded-r-full group-hover:text-white group-hover:bg-gradient-r-blue-green transition-all duration-200 ease-in-out"
            >
                Prohlédnout referenci
            </a>
            <div class="absolute bottom-0 right-0 z-10 w-full text-right pointer-events-none grid gap-4 px-2">
                <div class="row-start-1 row-end-1 col-start-8 col-end-11">
                    <div class="relative aspect-ratio-square">
                        <g-image
                            class="absolute inset-0 object-cover w-full h-full transform translate-x-8 group-hover:translate-x-0 transition-transform duration-200 ease-in-out"
                            src="https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG"
                        />
                    </div>
                </div>
                <div class="row-start-1 row-end-1 col-start-10 col-end-13">
                    <div class="relative aspect-ratio-square">
                        <g-image
                            class="absolute inset-0 object-cover w-full h-full transform group-hover:translate-x-8 transition-transform duration-200 ease-in-out"
                            src="https://barth-net.cz/data/vehicle/car/photos/image_size_1024_768_inset_75/skoda-fabia-combi-style-1-0tsi-81kw5e455107e561c.JPG"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        small: {
            type: Boolean,
            default: false,
        }
    }
}
</script>
