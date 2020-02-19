// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from "~/layouts/Default.vue";

require.context('~/assets/icons', false, /^\.\/.*\.svg$/);
import Icons from "@ds/vue-plugin-icons";
import "./css/main.css";

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Muli:400,700,800&display=swap'
  });
//   Vue.use(Icons, {
//     path: require.context('~/assets/icons', false, /^\.\/.*\.svg$/)
//   });
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
