<template functional>
    <div :class="parent.toClass(props.content, ['textAlign'])" v-if="props.content.img && props.content.img.length > 0">
        <div
            class="inline-block"
            :class="parent.toClass(props.content, ['marginB', 'marginT', 'width', 'widthMedium', 'widthLarge', 'widthXLarge', 'width2XLarge'])"
        >
            <component
                :is="props.content.href && props.content.hrefTarget !== 'lightbox' ? 'a' : 'div'"
                :href="props.content.href || false"
                :target="props.content.href && props.content.hrefTarget === 'blank' ? '_blank': false"
                class="relative block w-full overflow-hidden"
                :class="parent.toClass(props.content, ['aspectRatio', 'shadow', 'rounded'])"
            >
                <!-- v-img directive doesnt support disable option -->
                <component
                    v-if="props.content.hrefTarget === 'lightbox'"
                    :is="'g-image'"
                    v-img="{src: props.content.img[0].origin}"
                    :src="props.content.imgSize ? props.content.img[0][props.content.imgSize] : props.content.img[0].origin"
                    :class="{'absolute inset-0 w-full h-full object-cover': props.content.aspectRatio !== 'origin' }"
                    :alt="props.content.img[0].title"
                />
                <component
                    v-else
                    :is="'g-image'"
                    :src="props.content.imgSize ? props.content.img[0][props.content.imgSize] : props.content.img[0].origin"
                    :class="{'absolute inset-0 w-full h-full object-cover': props.content.aspectRatio !== 'origin' }"
                    :alt="props.content.img[0].title"
                />
            </component>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            required: true
        },
    }
}
</script>
