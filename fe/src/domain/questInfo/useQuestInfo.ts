import {QuestComment, QuestCommentNew, QuestModel} from "@/domain/quest/questModel";
import {defineStore, StateTree} from "pinia";
import {getCurrentUser} from "@/shared/utils/user";
import * as clock from "@/shared/utils/clock";
import {getGuid} from "@/shared/utils/guid";
import {useQuestsStore} from "@/domain/quest/useQuests";
import {StoreType} from "@/app/stores";

export interface State extends StateTree {
    questInfo: QuestModel | undefined;
    comments: QuestComment[];
}

export const useQuestInfoStore = defineStore(StoreType.questInfo, {
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