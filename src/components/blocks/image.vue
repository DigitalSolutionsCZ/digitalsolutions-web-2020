<template functional>
    <div :class="parent.toClass(props.content, ['marginB', 'marginT'])">
        <component
            :is="props.content.href && props.content.hrefTarget !== 'lightbox' ? 'a' : 'div'"
            :href="props.content.href || false"
            :target="props.content.href && props.content.hrefTarget === 'blank' ? '_blank': false"
            class="relative overflow-hidden block"
            :class="parent.toClass(props.content, ['aspectRatio', 'shadow', 'rounded', 'width', 'widthMedium', 'widthLarge', 'widthXLarge', 'width2XLarge'])"
        >
            <!-- v-img directive doesnt support disable option -->
            <component
                v-if="props.content.hrefTarget === 'lightbox'"
                is="g-image"
                v-img="{src: props.content.img[0].origin}"
                :src="props.content.imgSize ? props.content.img[0][props.content.imgSize] : props.content.img[0].origin"
                :class="{'absolute inset-0 w-full h-full object-cover': !props.content.aspectRatio }"
            />
            <component
                v-else
                is="g-image"
                :src="props.content.imgSize ? props.content.img[0][props.content.imgSize] : props.content.img[0].origin"
                :class="{'absolute inset-0 w-full h-full object-cover': !props.content.aspectRatio }"
            />
        </component>
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
