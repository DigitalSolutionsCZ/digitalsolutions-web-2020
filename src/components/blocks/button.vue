<template functional>
    <div :class="parent.toClass(props.content, ['marginB', 'marginT', 'textAlign'])">
        <a
            :href="props.content.href"
            v-html="props.content.text"
            class="inline-flex text-center transition-all duration-200 ease-in-out font-bold"
            :class="parent.toClass(props.content, ['buttonColor', 'buttonSize', 'fonzSize', 'fontSizeMedium', 'fontSizeLarge', 'fontSizeXLarge', 'fontSize2XLarge', 'width', 'widthMedium', 'widthLarge', 'widthXLarge', 'width2XLarge', 'rounded', 'shadow'])"
        />
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            required: true
        }
    }
}
</script>
