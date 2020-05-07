<template functional>
    <hr class="border-current"  :class="parent.toClass(props.content, ['typeHandle'], true)">
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
