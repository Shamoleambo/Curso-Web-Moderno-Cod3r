import 'font-awesome/css/font-awesome.css';

import Vue from 'vue';
import App from './App';

import './config/bootstrap'; //There is no need to pass the bootstrap to the Vue instance, all you got to do is to load it
import store from './config/store';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')