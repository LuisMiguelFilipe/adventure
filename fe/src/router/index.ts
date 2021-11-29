import { createRouter, createWebHistory } from "vue-router";
import LayoutMain from "@/Layout/LayoutMain.vue";

const routes = [
    {
        path: '/',
        component: LayoutMain,
    }
];

export const createVueRouter = () => {
    return createRouter({
        history: createWebHistory(),
        routes
    });
};