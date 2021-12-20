import {QuestComment, QuestCommentNew, QuestModel} from "@/biz/quest/questModel";
import {defineStore, StateTree, _GettersTree} from "pinia";
import {getCurrentUser} from "@/utils/user";
import * as clock from "@/utils/clock";
import {getGuid} from "@/utils/guid";
import {useQuestsStore} from "@/biz/quest/useQuests";

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