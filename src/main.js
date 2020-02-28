// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

import Icon from "~/components/Icon.vue";
const req = require.context("~/components/icons", true, /\.(js|vue)$/i);

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Muli:400,600,700,800&display=swap'
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.component("Icon", Icon);

  req.keys().map(key => {
    const name = key.match(/\w+/)[0];
    return Vue.component(name, req(key).default);
  });
}
