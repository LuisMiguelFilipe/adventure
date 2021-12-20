import {QuestComment, QuestCommentNew} from "@/biz/quest/questModel";
import {computed} from "vue";
import {getCurrentUser} from "@/utils/user";
import * as clock from "@/utils/clock";
import {getGuid} from "@/utils/guid";
import {useQuestStore} from "@/store/questStore";
import {pinia} from "@/store/stores";

const store = useQuestStore(pinia);

export const currentComments = computed(() => store.comments);
export const quest = computed(() => store.questInfo);

export const addComment = (data: QuestCommentNew) => {
    const comment: QuestComment = {
        id: getGuid(),
        user: getCurrentUser().displayName,
        timestamp: clock.getNow(),
        description: data.description,
    };
    store.addComment(comment);
}