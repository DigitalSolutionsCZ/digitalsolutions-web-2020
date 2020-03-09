const {slugifyUrlEntry, livePreviewEnabled} = require('./utils');
const stripHtml = require("string-strip-html");

function allPages(data, createPage) {
    const pages = data.craft.pages.filter( page => page.typeHandle.includes("Page") && page.typeHandle !== 'referencePage');

    pages.map(page => {
        page.itemUrl = livePreviewEnabled
            ? '/' + page.slug
            : slugifyUrlEntry(page.itemUrl, page.title);

        createPage({
            path: page.itemUrl,
            component: `./src/templates/${page.typeHandle}.vue`,
            context: {
                seoTitle: page.seoTitle || stripHtml(page.heading),
                seoKeywords: page.seoKeywords,
                seoDescription: page.seoDescription,
                id: page.id,
                slug: page.slug
            }
        })
    });
}

module.exports = {
    allPages
};
