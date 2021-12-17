import type {App} from "vue";
import {createStore} from "vuex";
import type {Store, CommitOptions, DispatchOptions} from 'vuex'
import type * as RootTypes from "./types";

import {questModule} from "@/store/quest/questModule";
import {RootState} from "./types";


export interface PlainStore extends Omit<Store<RootTypes.RootState>, 'commit' | 'getters' | 'dispatch'> {
    commit<K extends keyof RootTypes.Mutations>(
        key: K,
        payload?: Parameters<RootTypes.Mutations[K]>[1],
        options?: CommitOptions
    ): ReturnType<RootTypes.Mutations[K]>

    getters: {
        [K in keyof RootTypes.Getters]: ReturnType<RootTypes.Getters[K]>
    }

    dispatch<K extends keyof RootTypes.Actions>(
        key: K,
        payload?: Parameters<RootTypes.Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<RootTypes.Actions[K]>
}

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
    return rootStore as PlainStore;
}