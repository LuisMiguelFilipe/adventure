import {QuestModel} from "@/biz/quest/questModel";
import {defineStore} from 'pinia'
import {StoreType} from "@/store/stores";

const quests: QuestModel[] = [
    new QuestModel("adv-1", "An amazing adventure", "bi-alarm"),
    new QuestModel("adv-2", "A mystery to solve", "bi-bookmark-star-fill"),
];

export interface State {
    quests: QuestModel[];
}

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useQuestsStore = defineStore(StoreType.quests, {
    state: (): State => ({
        quests,
    }),
    getters: {
        getQuests: (state):QuestModel[] => state.quests,
    },
});


