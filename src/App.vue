<template>
    <div class="flex flex-col flex-1">
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5PFW27N" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
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
            return process.env.GRIDSOME_LIVE_PREVIEW === 'true' ? process.env.GRIDSOME_CRAFT_GRAPHQL_ENDPOINT : false
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
}
</script>

<static-query>
query {
    metadata {
        siteName
        siteDescription
        siteUrl
    }
}
</static-query>
