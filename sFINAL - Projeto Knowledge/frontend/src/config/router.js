import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/home/Home';
import AdminPages from '@/components/admin/AdminPages';
import ArticlesByCategory from '@/components/article/ArticlesByCategory';

Vue.use(VueRouter);

//Creating routes
const routes = [
    {
        name: 'home',
        path: '/', //root of the application
        component: Home
    },{
        name: 'adminPages',
        path: '/admin',
        component: AdminPages
    },{
        name: 'articlesByCategory',
        path: '/categories/:id/articles',
        component: ArticlesByCategory
    }
];

//Instance the VueRouter
export default new VueRouter(
    {
        mode: 'history', //Doesn't have the hash code at the end of the url; Prettier url
        routes //The parameter routes has the same name of the variable that contains the routes(routes)
    }
);