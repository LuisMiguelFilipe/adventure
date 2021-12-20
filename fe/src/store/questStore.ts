import {QuestComment, QuestModel} from "@/biz/quest/questModel";
import {defineStore} from 'pinia'

export const quests: QuestModel[] = [
    new QuestModel("adv-1", "An amazing adventure", "bi-alarm"),
    new QuestModel("adv-2", "A mystery to solve", "bi-bookmark-star-fill"),
];

export interface State {
    questInfo: QuestModel | undefined;
    comments: QuestComment[];
}

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useQuestStore = defineStore('quest', {
    state: (): State => ({
        questInfo: quests[0],
        comments: [],
    }),
    actions: {
        addComment(comment: QuestComment) {
            this.comments.push(comment);
        }
    }
})
