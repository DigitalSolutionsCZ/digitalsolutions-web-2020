const {slugifyUrlEntry, livePreviewEnabled, endingSlash} = require('./utils');
const stripHtml = require("string-strip-html");

function allPages(data, createPage) {
    const siteUrl = data.metadata.siteUrl;
    const pages = data.craft.pages.filter( page => page.typeHandle.includes("Page") && page.typeHandle !== 'referencePage');

    pages.map(page => {
        page.pathUrl = livePreviewEnabled
            ? '/' + page.slug
            : slugifyUrlEntry(page.itemUrl, page.title);


        createPage({
            path: endingSlash(page.pathUrl),
            component: `./src/templates/${page.typeHandle}.vue`,
            context: {
                seoTitle: page.seoTitle || stripHtml(page.heading),
                seoKeywords: page.seoKeywords,
                seoDescription: page.seoDescription,
                ogTitle: page.ogTitle || page.title,
                ogDescription: page.ogDescription,
                ogImage: page.ogImage,
                ogUrl: siteUrl + page.pathUrl,
                id: page.id,
                slug: page.slug
            }
        })
    });
}

module.exports = {
    allPages
};
