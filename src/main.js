// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Responsive from '@ds/vue-plugin-responsive';
import resolveConfig from 'tailwindcss/resolveConfig'
import {shallowObjectValuesToInt} from '~/components/utils';
import tailwindConfig from '../tailwind.config.js';

import DefaultLayout from "~/layouts/Default.vue";

import Icon from "~/components/Icon.vue";
import VueKeyframes from "~/components/VueKeyframes";
import VueScrollTo from 'vue-scrollto'

const req = require.context("~/components/icons", true, /\.(js|vue)$/i);

export default function (Vue, {router, head, isClient}) {
    head.bodyAttrs = {class: "flex flex-col"};
    head.script.push({
       innerHTML: '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':\n' +
           'new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],\n' +
           'j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\n' +
           '\'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);\n' +
           '})(window,document,\'script\',\'dataLayer\',\'GTM-5PFW27N\');'
    });
    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Muli:400,400i,600,600i,700,700i,800,800i&display=swap&subset=latin-ext'
    });
    head.meta.push({
        name: 'viewport',
        content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
    });
    head.meta.push({
        name: 'robots',
        content: 'index,follow'
    });

    Vue.use(VueKeyframes);

    Vue.use(VueScrollTo, {
        duration: 500,
        easing: "ease",
        offset: -100,
    })

    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout);

    Vue.component("Icon", Icon);

    req.keys().map(key => {
        const name = key.match(/\w+/)[0];
        return Vue.component(name, req(key).default);
    });

    if (process.isClient) {
        Vue.use(Responsive, {
            breakpoints: {
                width: shallowObjectValuesToInt(resolveConfig(tailwindConfig).theme.screens),
                height: shallowObjectValuesToInt(resolveConfig(tailwindConfig).theme.screens)
            }
        });
    }
}
