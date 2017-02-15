window._ = require('lodash');
window.Vue = require('vue');

import VueQriously from '../vue-qriously';
Vue.use(VueQriously);

Vue.component('application', require('./components/application.vue'));

const app = new Vue({
    el: '#app'
});
