import type {Module, MutationTree, GetterTree, ActionContext, ActionTree, Store} from "vuex";
import {QuestModel} from "@/biz/quest/questModel";
import * as types from "./types";
import {RootState} from "@/store/types";
import {GettersTree} from "./types";

export const quests: QuestModel[] = [
    new QuestModel("adv-1", "An amazing adventure", "bi-alarm"),
    new QuestModel("adv-2", "A mystery to solve", "bi-bookmark-star-fill"),
];

type S = types.QuestState;
type R = RootState;
const G = types.G;

export const getters: types.GettersTree = {
    [G.GET_COMMENTS]: state => state.comments,
}

const M = types.MutationTypes;
export const mutations: MutationTree<S> & types.Mutations = {
    [M.ADD_COMMENT]: (state, comment) => {
        state.comments.push(comment);
    }
}

const A = types.ActionTypes;
export const actions: ActionTree<S, R> & types.Actions = {
    async [A.FETCH_COMMENTS]({commit}) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        commit(M.ADD_COMMENT, {
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