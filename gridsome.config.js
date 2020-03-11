// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const autoprefixer = require("autoprefixer");
const nested = require('postcss-nested');
const moduleImport = require('postcss-import');

const postcssPlugins = [moduleImport, tailwind(), nested];

if (process.env.NODE_ENV === "production") {
    postcssPlugins.push(autoprefixer);
}

console.log(process.env.GRIDSOME_LIVE_PREVIEW);

module.exports = {
    siteName: "Digital Solutions s.r.o.",
    siteUrl: 'https://digitalcz.netlify.com',
    titleTemplate: `%s | Digital Solutions s.r.o.`,
    plugins: [
        {
            use: "@bhws/gridsome-source-craft-graphql",
            options: {
                url: process.env.GRIDSOME_CRAFT_GRAPHQL_ENDPOINT,
                fieldName: "craft",
                typeName: "craft",
                livePreview: process.env.GRIDSOME_LIVE_PREVIEW || false,
            }
        },
        {
            use: '@gridsome/plugin-sitemap',
            options: {
                cacheTime: 600000, // default
            }
        },
    ],
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins
            }
        }
    },
};
