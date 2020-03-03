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

module.exports = {
  siteName: "Digital Solutions",
  plugins: [
    {
      use: "@bhws/gridsome-source-craft-graphql",
      options: {
        url: process.env.GRIDSOME_CRAFT_GRAPHQL_ENDPOINT,
        fieldName: "craft",
        typeName: "craft",
        livePreview: process.env.CRAFT_LIVE_PREVIEW || false,
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
};
