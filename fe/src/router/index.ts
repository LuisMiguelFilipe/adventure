import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LayoutMain from "@/Layout/LayoutMain.vue";
import QuestDetail from "@/domain/quest/components/QuestDetail.vue";
import QuestTitleList from "@/domain/quest/components/QuestTitleList.vue";
import UserProfile from "@/domain/user/components/UserProfile.vue";
import PageNotFound from "@/shared/components/misc/PageNotFound.vue";
import * as params from "@/router/routeParams";
import { initNavigator } from "./navigator";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: LayoutMain,
        name: 'home',
        children: [
            {
                path: '',
                component: QuestTitleList,
            },
            {
                path: 'quest/:id',
                name: 'quest',
                component: QuestDetail,
                props: (route):params.RouteParams<params.QuestDetailRouteParams> => ({ routeParams: { questId: route.params.id as string } }),
            },
            {
                path: 'userProfile',
                name: 'userProfile',
                component: UserProfile,
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: PageNotFound,
    },
];

export const createVueRouter = () => {
    const router = createRouter({
        history: createWebHistory(),
        routes
    });
    initNavigator(router);
    return router;
};