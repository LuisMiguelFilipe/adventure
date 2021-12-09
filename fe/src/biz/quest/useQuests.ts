import {QuestModel} from "@/biz/quest/questModel";

export const quests: QuestModel[] = [
    new QuestModel("adv-1", "An amazing adventure", "bi-alarm"),
    new QuestModel("adv-2", "A mystery to solve", "bi-bookmark-star-fill"),
];

export const getQuest = (id: string): QuestModel => {
    const q = quests.find(q => q.id === id);
    if (!q) throw new Error();
    return q;
}