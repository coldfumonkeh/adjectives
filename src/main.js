import Vue from 'vue'
import App from './App.vue'

import VueClipboard from 'vue-clipboard2';
Vue.use(VueClipboard);

import { BootstrapVue } from 'bootstrap-vue';
// Install BootstrapVue
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Hover
// import 'hover.css/css/hover-min.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
