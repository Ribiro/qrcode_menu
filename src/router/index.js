import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/components/Login";
import Register from "@/components/Register";
import Menu from "@/components/Menu";
import Categories from "@/components/Categories";
import Contacts from "@/components/Contacts";
import Home from "@/components/Home";
import Profile from "@/components/Profile";
import Welcome from "@/components/Welcome";

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        // meta: {
        //     requiresVisitor: true
        // }
    },
    {
        path: '/',
        name: 'welcome',
        component: Welcome,
        // meta: {
        //     requiresVisitor: true
        // }
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        // meta: {
        //     requiresVisitor: true
        // }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        // meta: {
        //     requiresVisitor: true
        // }
    },
    {
        path: '/menus',
        name: 'menus',
        component: Menu,
        // meta: {
        //     requiresVisitor: true
        // }
    },
    {
        path: '/categories',
        name: 'categories',
        component: Categories,
        // meta: {
        //     requiresVisitor: true
        // }
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts,
        // meta: {
        //     requiresVisitor: true
        // }
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        // meta: {
        //     requiresVisitor: true
        // }
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router