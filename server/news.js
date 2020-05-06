const {slugifyUrlEntry, livePreviewEnabled, endingSlash} = require('./utils');
const stripHtml = require("string-strip-html");

function allNews(data, createPage) {
    data.craft.articles.map((article, index) => {
        createPage({
           path: '/' + article.slug,
           component: './src/templates/Article.vue',
           context: {
               slug: article.slug,
               id: article.id
           }
        });
    });
}

module.exports = {
    allNews
};
