import { RouteLocationRaw, Router } from "vue-router";
import { routes } from "@/router/routes";

let router: Router;
export const initNavigator = (r: Router) => {
    router = r;
}

export const useNavigator = () => {
    if (!router) { throw new Error('router not initialized') }

    return {
        routes,
        push: (route: RouteLocationRaw) => {
            router.push(route);
        }
    }
}