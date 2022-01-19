import {QuestModel} from "@/domain/quest/questModel";
import {defineStore} from 'pinia'
import {StoreType} from "@/app/stores";

const quests: QuestModel[] = [
    new QuestModel("adv-1", "An amazing adventure", "bi-alarm"),
    new QuestModel("adv-2", "A mystery to solve", "bi-bookmark-star-fill"),
];

export interface State {
    quests: QuestModel[];
}

export const useQuestsStore = defineStore(StoreType.quests, {
    state: (): State => ({
        quests,
    }),
    getters: {
        getQuests: (state):QuestModel[] => state.quests,
    },
});


