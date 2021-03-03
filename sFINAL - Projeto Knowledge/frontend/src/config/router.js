import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/home/Home';
import AdminPages from '@/components/admin/AdminPages';
import ArticlesByCategory from '@/components/article/ArticlesByCategory';
import ArticleById from '@/components/article/ArticleById';
import Auth from '@/components/auth/Auth';

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
    },{
        name: 'articleById',
        path: '/articles/:id',
        component: ArticleById
    },{
        name: 'auth',
        path: '/auth',
        component: Auth
    }
];

//Instance the VueRouter
export default new VueRouter(
    {
        mode: 'history', //Doesn't have the hash code at the end of the url; Prettier url
        routes //The parameter routes has the same name of the variable that contains the routes(routes)
    }
);