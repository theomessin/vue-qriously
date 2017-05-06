/**
 * @name VueJS vQriously (vue-qriously)
 * @description Component to generate HTML canvas QR codes for Vue.js 2.0
 * @author Theodore Messinezis <theo@theomessin.com>
 * @file vue-qriously plugin definition
 */

import VueQriously from './components/v-qriously.vue';

VueQriously.install = function (Vue) {
    Vue.component(VueQriously.name, VueQriously);
}

export default VueQriously;
