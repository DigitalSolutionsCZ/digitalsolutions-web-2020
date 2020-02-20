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
  // Include template compiler for Icons template
  resolve: { alias: { vue: 'vue/dist/vue.esm.js' } },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: '~/assets/icons/sprite.svg',
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
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
  },
  configureWebpack(config) {
    return merge(projectConfig , config)
  }
};
