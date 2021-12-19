import type { ActionContext, Store, CommitOptions, DispatchOptions } from "vuex";
import * as QuestModule from "@/store/quest/types";

export interface RootState {
    quest: QuestModule.QuestState,
}

export interface AugmentedActionContext<S, R, M extends Record<string, any>> extends Omit<ActionContext<S, R>, "commit"> {
    commit<K extends keyof M>(
        key: K,
        payload?: Parameters<M[K]>[1]
    ): ReturnType<M[K]>
}

export type Mutations = QuestModule.Mutations;  // union with mutations from other modules
export type Getters = QuestModule.Getters;  // union with getters from other modules
export type Actions = QuestModule.Actions;  // union with actions from other modules

export interface RootStore extends Omit<Store<RootState>, 'commit' | 'getters' | 'dispatch'> {
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
