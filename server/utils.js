const slugify = require('@sindresorhus/slugify');

const livePreviewEnabled = process.env.GRIDSOME_LIVE_PREVIEW === 'true';

function slugifyUrlEntry(itemUrl, title) {
    return itemUrl !== "" ? itemUrl : '/' + slugify(title);
}

/**
 *
 * @param createPage
 * @param length
 * @param perPage
 * @param component
 * @param path
 * @param context
 * @param paginationLogic
 */
function paginateEntries(createPage, {length, perPage, component, path, context, paginationLogic = '/'}) {
    const numPages = Math.ceil(length / perPage);

    if (length > 0) {
        Array.from({length: numPages}).forEach((_, i) => {
            const currentPage = i + 1;
            const nextUrl = numPages !== currentPage ? `${path}${currentPage + 1}` : null;

            let prevUrl = null;
            if (currentPage === 2) prevUrl = path;
            if (currentPage > 2) prevUrl = `${path}${currentPage - 1}`;

            const moreCount = (length - (currentPage * perPage) >= perPage)
                ? perPage
                : (length % perPage);
            createPage({
                path: i === 0 ? path : path + currentPage,
                component,
                context: {
                    ...context,
                    limit: perPage,
                    skip: i * perPage,
                    currentPage: currentPage,
                    totalPage: numPages,
                    prevUrl: prevUrl,
                    nextUrl: nextUrl,
                    moreCount: moreCount
                }
            })
        });
    } else {
        createPage({
            path,
            component: component,
            context: {
                ...context,
                limit: perPage,
                skip: 0,
                currentPage: 1,
                totalPage: 1,
                prevUrl: null,
                nextUrl: null,
                moreCount: null
            }
        });
    }
}

module.exports = {
    livePreviewEnabled,
    slugifyUrlEntry,
    paginateEntries
}
