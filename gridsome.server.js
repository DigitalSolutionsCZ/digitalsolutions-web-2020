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
                        itemUrl
                    }
                    ...on craft_demandPage_demandPage_Entry {
                        itemUrl
                    }
                    ...on craft_contactPage_contactPage_Entry {
                        itemUrl
                    }
                    ...on craft_servicesPage_servicesPage_Entry {
                        itemUrl
                    }
                    ...on craft_referencePage_referencePage_Entry {
                        itemUrl
                    }
                    ...on craft_referencesItem_referenceFullWidth_Entry {
                        itemUrl
                    }
                },
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

