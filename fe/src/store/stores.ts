import type {App} from "vue";
import {createStore} from "vuex";
import type {Store} from 'vuex'
import type {RootStore} from "./types";

import {questModule} from "@/store/quest/questModule";
import {RootState} from "./types";

export const rootStore: Store<RootState> = createStore({
    modules: {
        quest: questModule,
    },
});
// export  const modulesStore  =  createStore({});

export const createStores = (app: App) => {
    app.use(rootStore);
}

export const useStore = () => {
    return rootStore as RootStore;
}