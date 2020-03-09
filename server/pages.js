const {slugifyUrlEntry, livePreviewEnabled} = require('./utils');

function allPages(data, createPage) {
    const pages = data.craft.pages.filter( page => page.typeHandle.includes("Page"));

    pages.map(page => {
        page.itemUrl = livePreviewEnabled
            ? '/' + page.slug
            : slugifyUrlEntry(page.itemUrl, page.title);

        createPage({
            path: page.itemUrl,
            component: `./src/templates/${page.typeHandle}.vue`,
            context: {
                id: page.id,
                slug: page.slug
            }
        })
    });
}

module.exports = {
    allPages
};
