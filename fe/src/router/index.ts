import "@/components/PageHome";
import VueRouter from "vue-router";
import PageHome from "@/components/PageHome.vue";

const routes = [
    {
        path: '/',
        component: PageHome,
    }
    
];

export const createVueRouter = () => {
    return VueRouter.createRouter({
        history: VueRouter.createWebHistory(),
        routes
    });
}; 