const slugify = require('@sindresorhus/slugify');

const livePreviewEnabled = process.env.GRIDSOME_CRAFT_GRAPHQL_ENDPOINT;

function slugifyUrlEntry(itemUrl, title) {
    return itemUrl !== "" ?  itemUrl : '/' + slugify(title);
}

module.exports = {
    livePreviewEnabled,
    slugifyUrlEntry
}
