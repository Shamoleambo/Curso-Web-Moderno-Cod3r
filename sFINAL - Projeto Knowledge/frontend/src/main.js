import 'font-awesome/css/font-awesome.css';

import Vue from 'vue';
import App from './App';

import './config/bootstrap'; //There is no need to pass the bootstrap to the Vue instance, all you got to do is to load it
import store from './config/store';
import router from './config/router';

Vue.config.productionTip = false

//TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwibmFtZSI6IlRlc3RlIiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZS5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjE0NDI0MTk4LCJleHAiOjE2MTQ2ODMzOTh9.n57Qpisrx_TlxIQCDu66uuZCspLPppV6eToKkCsVy9o';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')