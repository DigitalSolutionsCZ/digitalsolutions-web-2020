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
import VueImg from 'v-img';

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
    head.script.push({
        innerHTML: 'window.intercomSettings = {\n' + 'app_id: "qbm24tn9"\n' + ' };'
    });
    head.script.push({
        innerHTML: '(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic(\'reattach_activator\');ic(\'update\',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement(\'script\');s.type=\'text/javascript\';s.async=true;s.src=\'https://widget.intercom.io/widget/qbm24tn9\';var x=d.getElementsByTagName(\'script\')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent(\'onload\',l);}else{w.addEventListener(\'load\',l,false);}}})();\n'
    });
    head.link.push({
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
        crossorigin: 'anonymous'
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
    Vue.use(VueImg);

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
