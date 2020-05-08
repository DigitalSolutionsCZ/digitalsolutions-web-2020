const {slugifyUrlEntry, livePreviewEnabled, endingSlash} = require('./utils');
const stripHtml = require("string-strip-html");

function allPageBuilders(data, createPage) {
    const siteUrl = data.metadata.siteUrl;
    data.craft.customPages.map((page, index) => {
        page.pathUrl = livePreviewEnabled
            ? '/' + page.slug
            : slugifyUrlEntry(page.itemUrl, page.title);
        createPage({
           path: endingSlash(page.pathUrl),
           component: './src/templates/page.vue',
           context: {
               slug: page.slug,
               id: page.id,
               seoTitle: page.seoTitle || stripHtml(page.title),
               seoKeywords: page.seoKeywords,
               seoDescription: page.seoDescription,
               ogTitle: page.ogTitle || page.title,
               ogDescription: page.ogDescription,
               ogImage: page.ogImage,
               ogUrl: siteUrl + page.pathUrl,
           }
        });
    });
}

module.exports = {
    allPageBuilders
};
