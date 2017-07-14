/**
 * @name VueJS vQriously (vue-qriously)
 * @description Component to generate HTML canvas QR codes for Vue.js 2.0
 * @author Theodore Messinezis <theo@theomessin.com>
 * @file vue-qriously plugin definition
 */

import vQriously from './components/v-qriously.vue';

var VueQriously = {
    install(Vue, options) {
        Vue.component('qriously', vQriously)
    }
};

export default VueQriously;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueQriously)
}
