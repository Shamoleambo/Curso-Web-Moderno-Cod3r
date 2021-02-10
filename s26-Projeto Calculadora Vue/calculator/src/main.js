import Vue from 'vue';
import App from './App';

new Vue({
    render: h => h(App)
}).$mount('#app');
//From the App component all the other components will be mounted into the application