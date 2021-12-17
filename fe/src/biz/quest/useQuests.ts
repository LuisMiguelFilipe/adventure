import {QuestComment, QuestCommentNew} from "@/biz/quest/questModel";
import {computed} from "vue";
import {useStore} from "@/store/stores";
import {MutationTypes} from "@/store/questModule";
import {getCurrentUser} from "@/utils/user";
import * as clock from "@/utils/clock";
import {getGuid} from "@/utils/guid";

const store = useStore();
const state = store.state.quest;

export const currentComments = computed(() => state.comments);
export const quest = computed(() => state.questInfo);

export const addComment = (data: QuestCommentNew) => {
    const comment: QuestComment = {
        id: getGuid(),
        user: getCurrentUser().displayName,
        timestamp: clock.getNow(),
        description: data.description,
    };
    store.commit(MutationTypes.ADD_COMMENT, comment);
}