// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const autoprefixer = require("autoprefixer");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production") {
  postcssPlugins.push(purgecss("./purgecss.config.js"));
  postcssPlugins.push(autoprefixer);
}

module.exports = {
  siteName: "Digital Solutions",
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
};
