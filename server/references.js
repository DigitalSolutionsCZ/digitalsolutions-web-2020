const {slugifyUrlEntry, livePreviewEnabled} = require("./utils");

async function referencePage(data, createPage) {

    const referenceUrl = slugifyUrlEntry(data.craft.referencePage.itemUrl, data.craft.referencePage.title);
    const categories = data.craft.categories;
    createReferencePage(createPage, {url: referenceUrl, entry: {...data.craft.referencePage}, baseUrl: referenceUrl});

    categories.map(category => {
        createReferencePage(createPage, {
            url: `${referenceUrl}/${category.slug}`,
            entry: {
                id: category.id,
                slug: data.craft.referencePage.slug,
            },
            baseUrl: referenceUrl
        });
    });

    data.craft.referenceRecords.map(referenceRecord => {
        const referenceDetailUrl =  livePreviewEnabled
            ? referenceUrl + slugifyUrlEntry(referenceRecord.itemUrl, referenceRecord.title)
            : referenceUrl + '/' + referenceRecord.slug;

        createPage({
            path: referenceDetailUrl,
            component: './src/templates/craftEntryReferencesItemReferenceFullWidth.vue',
            context: {
                id: referenceRecord.id,
                slug: referenceRecord.slug
            }
        })
    });
}

function createReferencePage(createPage, {baseUrl, url, entry}) {
    createPage({
        path: url,
        component: './src/templates/ReferencePage.vue',
        context: {
            id: entry.id,
            slug: entry.slug,
            services: baseUrl !== url ? entry.id : null,
            baseUrl: baseUrl
        }
    });
}

module.exports = {
    referencePage
};
