const {referencePage} = require("./server/references");
const {allPages} = require("./server/pages");
const {allPageBuilders} = require('./server/pageBuilder');
const PurgeCSS = require("purgecss").default;
const fs = require("fs");

class TailwindExtractor {
    extract(content) {
        return content.match(/[A-z0-9-:\\/]+/g)
    }
}

const tailwindExtractor = content => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

    return broadMatches.concat(innerMatches)
}

module.exports = function (api) {
    api.createPages(async ({graphql, createPage}) => {
        const {data} = await graphql(`
            {
              metadata {
                  siteUrl
              },
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
                        seoDescription,
                        ogTitle,
                        ogDescription,
                        ogImage {
                            url
                        }
                    }
                    ...on craft_demandPage_demandPage_Entry {
                        heading,
                        itemUrl,
                        seoTitle,
                        seoKeywords,
                        seoDescription,
                        ogTitle,
                        ogDescription,
                        ogImage {
                            url
                        }
                    }
                    ...on craft_contactPage_contactPage_Entry {
                        heading,
                        itemUrl,
                        seoTitle,
                        seoKeywords,
                        seoDescription,
                        ogTitle,
                        ogDescription,
                        ogImage {
                            url
                        }
                    }
                    ...on craft_servicesPage_servicesPage_Entry {
                        heading,
                        itemUrl,
                        seoTitle,
                        seoKeywords,
                        seoDescription,
                        ogTitle,
                        ogDescription,
                        ogImage {
                            url
                        }
                    }
                    ...on craft_referencePage_referencePage_Entry {
                        heading,
                        itemUrl,
                        seoTitle,
                        seoKeywords,
                        seoDescription,
                        ogTitle,
                        ogDescription,
                        ogImage {
                            url
                        }
                    }
                    ...on craft_referencesItem_referenceFullWidth_Entry {
                        heading,
                        itemUrl,
                        seoTitle,
                        seoKeywords,
                        seoDescription,
                        ogTitle,
                        ogDescription,
                        ogImage {
                            url
                        }
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
                    seoDescription,
                    ogTitle,
                    ogDescription,
                    ogImage {
                        url
                    }
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
                },
                customPages: entries(section: "pageItems") {
                    title,
                    slug,
                    id,
                    ...on craft_pageItems_pageItems_Entry {
                        itemUrl,
                        seoTitle,
                        seoKeywords,
                        seoDescription,
                        ogTitle,
                        ogDescription,
                        ogImage {
                            url
                        }
                    }
                }
              }
            }
        `);
        allPages(data, createPage);
        referencePage(data, createPage);
        allPageBuilders(data, createPage)
    });

    api.afterBuild(async () => {
        if (process.env.GRIDSOME_LIVE_PREVIEW === 'false') {
            const purgeCSSResults = await new PurgeCSS().purge({
                content: ["./dist/**/*.html"],
                css: ["./dist/assets/css/*.css"],
                extractors: [
                    {
                        extractor: tailwindExtractor,
                        extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
                    },
                ]
            });
            purgeCSSResults.map((purgedCss) => {
                fs.writeFile(purgedCss.file, purgedCss.css, "utf8", (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                });
            });
        }
    });
}

