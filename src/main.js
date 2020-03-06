// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Responsive from '@ds/vue-plugin-responsive';
import resolveConfig from 'tailwindcss/resolveConfig'
import { shallowObjectValuesToInt } from  '~/components/utils';
import tailwindConfig from '../tailwind.config.js';

import DefaultLayout from "~/layouts/Default.vue";

import Icon from "~/components/Icon.vue";
import VueKeyframes from "~/components/VueKeyframes";
const req = require.context("~/components/icons", true, /\.(js|vue)$/i);

export default function(Vue, { router, head, isClient }) {
  head.bodyAttrs = { class: "flex flex-col h-full" };
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Muli:400,600,700,800&display=swap'
  });

  Vue.use(VueKeyframes);

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.component("Icon", Icon);

  req.keys().map(key => {
    const name = key.match(/\w+/)[0];
    return Vue.component(name, req(key).default);
  });

  Vue.use(Responsive, {
    breakpoints: { width: shallowObjectValuesToInt(resolveConfig(tailwindConfig).theme.screens )}
  });
}
