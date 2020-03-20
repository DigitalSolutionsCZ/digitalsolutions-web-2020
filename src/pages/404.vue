<template>
    <layout>
        <div class="flex flex-1 items-center justify-center">
            <div class="max-w-screen-md mx-auto md:max-w-screen-sm">
                <section class="flex flex-wrap">
                    <div class="w-full px-4 text-center">
                        <h1 class="mb-4 text-xl font-extrabold leading-none tracking-tight text-black lg:mb-6 lg:text-2xl xl:text-3xl">
                            404
                        </h1>
                        <div class="mb-4 text-xs text-gray-900 xs:text-sm lg:text-base md:mb-6 xl:mb-8">
                            Stránka nenalezena.
                        </div>
                        <project-button tag="a" class="mb-3 md:w-full" href="/">Přejít na homepage</project-button>
                    </div>
                </section>
            </div>
        </div>
    </layout>
</template>
<script>
    import ProjectButton from '../components/ProjectButton'
	export default {
		components: {
			ProjectButton
		}
	}
</script>