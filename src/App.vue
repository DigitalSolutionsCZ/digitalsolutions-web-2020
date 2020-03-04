<template>
    <div>
        <router-view />
        <CraftLivePreview v-if="craftEndpoint" :endpoint="craftEndpoint" />
    </div>
</template>

<script>
export default {
    components: {
        CraftLivePreview: () => import ('@bhws/gridsome-source-craft-graphql/CraftLivePreview')
    },
    computed: {
        craftEndpoint() {
            return process.env.GRIDSOME_LIVE_PREVIEW ? process.env.GRIDSOME_CRAFT_GRAPHQL_ENDPOINT : false
        }
    },
    metaInfo() {
        return {
            title: this.$static.metadata.siteName,
            meta: [
                {
                    key: 'description',
                    name: 'description',
                    content: this.$static.metadata.siteDescription
                }
            ]
        }
    },
    mounted() {
        console.log(process.env.GRIDSOME_LIVE_PREVIEW);
        console.log(process.env.GRIDSOME_CRAFT_GRAPHQL_ENDPOINT);
        console.log(this.craftEndpoint);
    }
}
</script>

<static-query>
query {
    metadata {
        siteName
        siteDescription
    }
}
</static-query>
