import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue';
import router from './router';
import VueAnime from 'vue-animejs';
import './eventBus';

import '@/main.scss';

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueAnime);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router //added router instance
}).$mount('#app');
