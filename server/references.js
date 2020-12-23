const {slugifyUrlEntry, livePreviewEnabled, paginateEntries, endingSlash} = require("./utils");
const stripHtml = require("string-strip-html");

async function referencePage(data, createPage) {
    const finalUrl = slugifyUrlEntry(data.craft.referencePage.itemUrl, data.craft.referencePage.title);
    const referenceUrl = endingSlash(finalUrl);
    const siteUrl = endingSlash(data.metadata.siteUrl);
    const categories = data.craft.categories;
    const referencePage = data.craft.referencePage;
    const references = data.craft.references;
    const perPage = 11;
    data.craft.referenceRecords.map((referenceRecord, index) => {
        const referenceDetailUrl = livePreviewEnabled
            ? referenceUrl + referenceRecord.slug
            : referenceUrl + slugifyUrlEntry(referenceRecord.itemUrl, referenceRecord.title);

        let nextReferenceUrl = null;
        if (data.craft.referenceRecords[index + 1]) {
            const nextRef = data.craft.referenceRecords[index + 1];
            nextReferenceUrl = livePreviewEnabled
                ? referenceUrl + nextRef.slug
                : referenceUrl + slugifyUrlEntry(nextRef.itemUrl, nextRef.title);
        }

        createPage({
            path: endingSlash(referenceDetailUrl),
            component: './src/templates/craftEntryReferencesItemReferenceFullWidth.vue',
            context: {
                id: referenceRecord.id,
                slug: referenceRecord.slug,
                ogUrl: siteUrl + referenceDetailUrl,
                baseSlug: data.craft.referencePage.slug,
                referenceUrl,
                nextReferenceUrl,
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
            seoKeywords: referencePage.seoKeywords,
            seoDescription: referencePage.seoDescription,
            ogTitle: referencePage.ogTitle,
            ogDescription: referencePage.ogDescription,
            ogImage: referencePage.ogImage,
            ogUrl: siteUrl + referenceUrl,
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
            path: `${referenceUrl}${endingSlash(category.slug)}`,
            context: {
                seoTitle: referencePage.seoTitle || stripHtml(referencePage.heading),
                sepKeywords: referencePage.seoKeywords,
                seoDescription: referencePage.seoDescription,
                ogTitle: referencePage.ogTitle,
                ogDescription: referencePage.ogDescription,
                ogImage: referencePage.ogImage,
                ogUrl: `${siteUrl}${referenceUrl}${endingSlash(category.slug)}`,
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
