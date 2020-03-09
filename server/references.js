const {slugifyUrlEntry, livePreviewEnabled, paginateEntries} = require("./utils");
const stripHtml = require("string-strip-html");

async function referencePage(data, createPage) {
    const referenceUrl = slugifyUrlEntry(data.craft.referencePage.itemUrl, data.craft.referencePage.title);
    const categories = data.craft.categories;
    const referencePage = data.craft.referencePage;
    const references = data.craft.references;
    const perPage = 10;

    data.craft.referenceRecords.map(referenceRecord => {
        const referenceDetailUrl = livePreviewEnabled
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

    paginateEntries(createPage, {
        length: references.length,
        perPage,
        component: './src/templates/referencePage.vue',
        path: referenceUrl,
        context: {
            seoTitle: referencePage.seoTitle || stripHtml(referencePage.heading),
            sepKeywords: referencePage.seoKeywords,
            seoDescription: referencePage.seoDescription,
            id: referencePage.id,
            slug: referencePage.slug,
            services: referenceUrl !== referenceUrl ? referencePage.id : null,
            baseUrl: referenceUrl,
            referenceId: referencePage.id,
        }
    });

    categories.map(category => {
        const length = references.filter(reference => {
            return reference.sluzbyProduktu.some(sluzba => sluzba.id === category.id)
        }).length;

        paginateEntries(createPage, {
            length,
            perPage,
            component: './src/templates/referencePage.vue',
            path: `${referenceUrl}/${category.slug}`,
            context: {
                id: category.id,
                slug: referencePage.slug,
                services: `${referenceUrl}/${category.slug}` !== referenceUrl ? category.id : null,
                baseUrl: referenceUrl,
                referenceId: referencePage.id,
            }
        });
    });

}

module.exports = {
    referencePage
};
