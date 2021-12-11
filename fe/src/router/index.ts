import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import LayoutMain from "@/Layout/LayoutMain.vue";
import QuestDetail from "@/components/quest/QuestDetail.vue";
import QuestTitleList from "@/components/quest/QuestTitleList.vue";
import PageNotFound from "@/components/misc/PageNotFound.vue";

export type RouteParams<T> = { routeParams: T};
export interface QuestDetailRouteParams {
    questId: string;
}

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: LayoutMain,
        children: [
            {
                path: '',
                component: QuestTitleList,
            },
            {
                path: 'quest/:id',
                name: 'quest',
                component: QuestDetail,
                props: route => ({ routeParams: { questId : route.params.id }}),
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
    return createRouter({
        history: createWebHistory(),
        routes
    });
};