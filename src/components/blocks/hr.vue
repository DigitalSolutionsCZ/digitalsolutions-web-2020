<template functional>
    <div :class="parent.toClass(props.content, ['bgColor'])">
        <hr class="invisible"  :class="parent.toClass(props.content, ['typeHandle', 'bgColor'], true)">
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
