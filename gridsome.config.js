// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const merge = require('webpack-merge')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const autoprefixer = require("autoprefixer");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production") {
  postcssPlugins.push(purgecss("./purgecss.config.js"));
  postcssPlugins.push(autoprefixer);
}

const projectConfig =  {
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: '~/assets/sprite.svg',
          esModule: false,
        }
      },
    ]
  },
  plugins: [
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
  ]
};
module.exports = {
  siteName: "Digital Solutions",
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  configureWebpack(config) {
    return merge(projectConfig , config)
  }
};
