<template functional>
    <div
        :class="parent.toClass(props.content, ['marginB', 'marginT', 'width', 'widthMedium', 'widthLarge', 'widthXLarge', 'width2XLarge'])"
    >
        <div
            class="relative overflow-hidden block w-full"
            :class="parent.toClass(props.content, ['aspectRatio', 'shadow', 'rounded'])"
        >
            <youtube
                :source="props.content.href"
                class="absolute inset-0 object-cover w-full h-full"
            />
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
    },
}
</script>
