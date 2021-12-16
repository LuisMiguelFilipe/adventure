import type {Module} from "vuex";
import {QuestComment, QuestModel} from "@/biz/quest/questModel";

export interface StoreState {
    questInfo: QuestModel | undefined;
    comments: QuestComment[];
}

export const questModule: Module<StoreState> = {
    state: {
        questInfo: undefined,
        comments: [],
    },
    getters: {
        comments(state) {
            return state.comments;
        },
        commentsCount(state, getters) {
            return getters.comments?.length || 0;
        }
    },
    mutations: {
        addComment(state, payload: QuestComment) {
            state.comments.push(payload);
        },
    }
}
