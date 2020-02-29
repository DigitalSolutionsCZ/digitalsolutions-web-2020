const slugify = require('@sindresorhus/slugify');

const livePreviewEnabled = process.env.CRAFT_LIVE_PREVIEW;

function slugifyUrlEntry(itemUrl, title) {
    return itemUrl || '/' + slugify(title);
}

module.exports = {
    livePreviewEnabled,
    slugifyUrlEntry
}
