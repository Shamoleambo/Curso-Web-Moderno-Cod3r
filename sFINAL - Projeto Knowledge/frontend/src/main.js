import 'font-awesome/css/font-awesome.css';

import Vue from 'vue';
import App from './App';

import './config/bootstrap'; //There is no need to pass the bootstrap to the Vue instance, all you got to do is to load it
import './config/msgs'; //The same as above

import store from './config/store';
import router from './config/router';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')