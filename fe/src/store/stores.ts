import type {App} from "vue";
import {createStore, type Store, useStore as vuexUseStore} from "vuex";
import {Store as VuexStore, CommitOptions, DispatchOptions} from 'vuex'

export interface RootState {
    quest: QuestState,
}

import {
    Mutations as PlainMutations,
    Getters as PlainGetters,
    Actions as PlainActions,
    QuestState,
    MutationTypes,
    questModule,
} from "@/store/questModule";


export  type  Mutations = PlainMutations  // union with mutations from other modules
export  type  Getters = PlainGetters  // union with getters from other modules
export  type  Actions = PlainActions  // union with actions from other modules

export interface PlainStore extends Omit<VuexStore<RootState>, 'commit' | 'getters' | 'dispatch'> {
    commit<K extends keyof Mutations>(
        key: K,
        payload?: Parameters<Mutations[K]>[1],
        options?: CommitOptions
    ): ReturnType<Mutations[K]>

    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>
    }

    dispatch<K extends keyof Actions>(
        key: K,
        payload?: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>
}

export const plainStore: Store<RootState> = createStore({
    modules: {
        quest: questModule,
    },
});
// export  const modulesStore  =  createStore({});

export const createStores = (app: App) => {
    app.use(plainStore);
}

export const useStore = () => {
    return plainStore as PlainStore;
}