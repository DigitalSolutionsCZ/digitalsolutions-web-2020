<template>
    <component :is="symbol" />
</template>

<script>
export default {
    props: {
        symbol: String
    }
};
</script>
