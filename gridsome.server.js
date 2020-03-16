const {referencePage} = require("./server/references");
const {allPages} = require("./server/pages");

module.exports = function (api) {
    api.createPages(async ({graphql, createPage}) => {
        const {data} = await graphql(`
            {
              craft {
                pages: entries {
                  title,
                  id,
                  slug,
                  typeHandle,
                  ...on craft_referencePage_referencePage_Entry {
                        heading,
                        itemUrl,
                        seoTitle,
                        seoKeywords,
                        seoDescription
                    }
                    ...on craft_demandPage_demandPage_Entry {
                        heading,
                        itemUrl,
                        seoTitle,
                        seoKeywords,
                        seoDescription
                    }
                    ...on craft_contactPage_contactPage_Entry {
                        heading,
                        itemUrl,
                        seoTitle,
                        seoKeywords,
                        seoDescription
                    }
                    ...on craft_servicesPage_servicesPage_Entry {
                        heading,
                        itemUrl,
                        seoTitle,
                        seoKeywords,
                        seoDescription
                    }
                    ...on craft_referencePage_referencePage_Entry {
                        heading,
                        itemUrl,
                        seoTitle,
                        seoKeywords,
                        seoDescription
                    }
                    ...on craft_referencesItem_referenceFullWidth_Entry {
                        heading,
                        itemUrl,
                        seoTitle,
                        seoKeywords,
                        seoDescription
                    }
                },
                referencePage: entry(slug: "reference") {
                  id,
                  slug,
                  title
                  ...on craft_referencePage_referencePage_Entry {
                    heading,
                    itemUrl,
                    seoTitle,
                    seoKeywords,
                    seoDescription
                  }
                },
                categories(group: "servicesProduct") {
                  id,
                  title,
                  slug
                },
                referenceRecords: entries(section: "referencesItem", typeId: 4) {
                  id,
                  title,
                  slug,
                  ...on craft_referencesItem_referenceFullWidth_Entry {
                    itemUrl
                  }
                },
                references: entries(section: "referencesItem") {
                    title,
                    slug,
                    ...on craft_referencesItem_referenceFullWidth_Entry {
                        sluzbyProduktu {
                            id,
                            title
                        }
                    },
                    ...on craft_referencesItem_referenceContactBlock_Entry {
                        sluzbyProduktu {
                            id,
                            title
                        }
                    }
                }
              }
            }
            `);

        allPages(data, createPage);
        referencePage(data, createPage);


    })
}

