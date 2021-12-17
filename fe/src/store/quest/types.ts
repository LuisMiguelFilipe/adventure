import type { GetterTree } from "vuex";
import type { AugmentedActionContext } from "@/store/types";

import {QuestComment, QuestModel} from "@/biz/quest/questModel";
import {RootState} from "@/store/types";

export interface QuestState {
    questInfo: QuestModel | undefined;
    comments: QuestComment[];
}

type S = QuestState;
type R = RootState;

export enum GetterTypes {
    GET_COMMENTS = "GET_COMMENTS",
}

export interface Getters {
    [GetterTypes.GET_COMMENTS](state: S): QuestComment[],
}

export type GettersTree = GetterTree<S, R> & Getters;


export enum MutationTypes {
    ADD_COMMENT = "ADD_COMMENT",
}

export interface Mutations {
    [MutationTypes.ADD_COMMENT](state: S, payload: QuestComment): void
}

export enum ActionTypes {
    FETCH_COMMENTS = "FETCH_COMMENTS",
}

type ACA = AugmentedActionContext<S, R, Mutations>;
export interface Actions {
    [ActionTypes.FETCH_COMMENTS]({commit}: ACA): Promise<void>
}


