<template functional>
    <div :class="parent.toClass(props.content, ['marginB', 'marginT'])">
        <component
            :is="props.content.headline"
            v-html="props.content.textRedactor"
            class="headline"
            :class="[(props.content.fontSize || props.content.fontSizeMedium || props.content.fontSizeLarge || props.content.fontSizeXLarge || props.content.fontSize2XLarge) ? null : props.fontSizes[props.content.headline], parent.toClass(props.content, ['headline', 'typeHandle', 'marginT', 'marginB', 'textRedactor'], true)]"
        >
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
        fontSizes: {
            type: Object,
            default: () => ({
                h1: 'text-xl md:text-2xl lg:text-3xl leading-tight',
                h2: 'text-lg md:text-xl lg:text-2xl leading-tight',
                h3: 'text-base md:text-lg lg:text-xl',
                h4: 'text-base md:text-lg',
                h5: 'text-base md:text-lg',
                h6: 'text-base lg:text-lg',
            })
        },
    }
}
</script>
<style>
    .headline a {
        color: #72bf44
    }
</style>
