import type {Module, MutationTree, GetterTree, ActionContext, ActionTree, Store} from "vuex";
import {QuestComment, QuestModel} from "@/biz/quest/questModel";
import type {RootState} from "@/store/stores";

export const quests: QuestModel[] = [
    new QuestModel("adv-1", "An amazing adventure", "bi-alarm"),
    new QuestModel("adv-2", "A mystery to solve", "bi-bookmark-star-fill"),
];

export interface QuestState {
    questInfo: QuestModel | undefined;
    comments: QuestComment[];
}

type S = QuestState;
type R = RootState;

export enum MutationTypes {
    ADD_COMMENT = "ADD_COMMENT",
}

export interface Mutations {
    [MutationTypes.ADD_COMMENT](state: S, payload: QuestComment): void
}

export enum GetterTypes {
    GET_COMMENTS = "GET_COMMENTS",
}

export interface Getters {
    [GetterTypes.GET_COMMENTS](state: S): QuestComment[],
}

export const getters: GetterTree<S, R> & Getters = {
    [GetterTypes.GET_COMMENTS]: state => state.comments,
}

export const mutations: MutationTree<S> & Mutations = {
    [MutationTypes.ADD_COMMENT]: (state, comment) => {
        state.comments.push(comment);
    }
}

export enum ActionTypes {
    FETCH_COMMENTS = "FETCH_COMMENTS",
}

/* We only want to commit valid mutations, so we override the commit function of the ActionContext */
interface AugmentedActionContext extends Omit<ActionContext<S, R>, "commit"> {
    commit<K extends keyof Mutations>(
        key: K,
        payload?: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}

export interface Actions {
    [ActionTypes.FETCH_COMMENTS]({commit}: AugmentedActionContext): Promise<void>
}

export const actions: ActionTree<S, R> & Actions = {
    async [ActionTypes.FETCH_COMMENTS]({commit}) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        commit(MutationTypes.ADD_COMMENT, {
            id: 'from-action',
            description: 'a comment from an action',
            timestamp: 123,
            user: 'action-user'
        });
    }
}

export const questModule: Module<S, R> = {
    state: () => ({
        questInfo: quests[0],
        comments: [],
    }),
    getters,
    mutations,
    actions,
}