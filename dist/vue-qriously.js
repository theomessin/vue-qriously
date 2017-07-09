(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['vue-qriously'] = factory());
}(this, (function () { 'use strict';

/**
 * @name VueJS vQriously (vue-qriously)
 * @description Component to generate HTML canvas QR codes for Vue.js 2.0
 * @author Theodore Messinezis <theo@theomessin.com>
 * @file vue-qriously plugin definition
 */

var VueQriously = {
    install: function install(Vue, options) {
        Vue.component('qriously', require('./components/v-qriously.vue'));
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueQriously);
}

return VueQriously;

})));
