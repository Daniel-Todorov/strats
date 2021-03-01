import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import i18n from './i18n'

Vue.config.productionTip = false;

import '@/assets/css/root.css';
import '@/assets/css/reset.css';
import '@/assets/css/main.css';
import '@/assets/css/main-575.css';
import '@/assets/css/main-768.css';
import '@/assets/css/main-991.css';
import '@/assets/css/main-1199.css';

new Vue({
  router,
  store,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app');
