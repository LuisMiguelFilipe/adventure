import {QuestModel} from "@/domain/quest/questModel";
import {defineStore} from 'pinia'
import {StoreType} from "@/app/stores";
import { Icon } from "@/types/icons";

const quests: QuestModel[] = [
    new QuestModel("adv-1", "An amazing adventure", Icon.alarm),
    new QuestModel("adv-2", "A mystery to solve", Icon.bookmark),
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


