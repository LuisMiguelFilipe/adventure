import {QuestComment, QuestCommentNew, QuestModel} from "@/domain/quest/questModel";
import {defineStore, StateTree} from "pinia";
import {getCurrentUser} from "@/utils/user";
import * as clock from "@/utils/clock";
import {getGuid} from "@/utils/guid";
import {useQuestsStore} from "@/domain/quest/useQuests";

export interface State extends StateTree {
    questInfo: QuestModel | undefined;
    comments: QuestComment[];
}

export const useQuestStore = defineStore('quest', {
    state: (): State => ({
        questInfo: undefined,
        comments: [],
    }),
    getters: {
        getComments: (state) => state.comments,
        getQuest: (state) => state?.questInfo,
    },
    actions: {
        loadQuest(id: string) {
            const questsStore = useQuestsStore();
            this.questInfo = questsStore.getQuests.find(q => q.id === id);
            this.comments = [];
        },
        addComment(data: QuestCommentNew) {
            const comment: QuestComment = {
                id: getGuid(),
                user: getCurrentUser().displayName,
                timestamp: clock.getNow(),
                description: data.description,
            };
            this.comments.push(comment);
        }
    }
});