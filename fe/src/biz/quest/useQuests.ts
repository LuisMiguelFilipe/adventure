import {QuestComment, QuestModel} from "@/biz/quest/questModel";

export const quests: QuestModel[] = [
    new QuestModel("adv-1", "An amazing adventure", "bi-alarm"),
    new QuestModel("adv-2", "A mystery to solve", "bi-bookmark-star-fill"),
];

interface State {
    currentQuest: string|undefined;
}

const state: State = {
    currentQuest: undefined
};

export const getQuest = (id: string): QuestModel => {
    const q = quests.find(q => q.id === id);
    if (!q) throw new Error();
    state.currentQuest = q.id;
    return q;
}

export const addComment = (data: QuestComment) => {
    if (!state.currentQuest) throw new Error();
    debugger;
    const q = getQuest(state.currentQuest);
    q.comments.push(data);
}