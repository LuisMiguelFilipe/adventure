import type { ActionContext } from "vuex";
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
