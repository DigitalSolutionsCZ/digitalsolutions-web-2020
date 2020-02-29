const slugify = require('@sindresorhus/slugify')

module.exports = function (api) {
    api.createPages(async ({graphql, createPage}) => {

        await referencePage(graphql, createPage);

    })
}


async function referencePage(graphql, createPage) {
    const {data} = await graphql(`{
      craft {
        referencePage: entry(slug: "reference") {
          id,
          slug,
          title
          ...on craft_referencePage_referencePage_Entry {
            itemUrl
          }
        },
        categories(group: "servicesProduct") {
          id,
          title,
          slug
        },
        referenceRecords: entries(section: "referencesItem", typeId: 4) {
          title,
          slug,
          ...on craft_referencesItem_referenceFullWidth_Entry {
            itemUrl
          }
        }
      }
    }`);

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
        const referenceDetailUrl = referenceUrl + '/' + referenceRecord.slug;

        createPage({
            path: referenceDetailUrl,
            component: './src/templates/ReferenceDetail.vue',
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
            baseUrl: baseUrl
        }
    });
}

function slugifyUrlEntry(itemUrl, title) {
    return itemUrl || '/' + slugify(title);
}
