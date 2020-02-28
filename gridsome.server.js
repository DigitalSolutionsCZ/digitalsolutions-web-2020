const slugify = require('@sindresorhus/slugify')

module.exports = function (api) {
  api.createPages(async ({graphql, createPage}) => {

    await referencePage(graphql, createPage);

  })
}


async function referencePage(graphql, createPage) {
  const referencePage = await graphql(`{
      craft {
        entry(slug: "reference") {
          id,
          slug,
          title
          ...on craft_referencePage_referencePage_Entry {
            itemUrl
          }
        }
      }
    }`);
  const referenceUrl = referencePage.data.craft.entry.itemUrl || '/' + slugify(referencePage.data.craft.entry.title);

  createPage({
    path: referenceUrl,
    component: './src/templates/Reference.vue',
    context: {
      id: referencePage.data.craft.entry.id,
      slug: referencePage.data.craft.entry.slug
    }
  });
}
