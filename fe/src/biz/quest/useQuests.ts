import {QuestComment} from "@/biz/quest/questModel";
import {computed} from "vue";
import {useStore} from "@/store/stores";
import {MutationTypes} from "@/store/questModule";

const store = useStore();
const state = store.state.quest;

export const currentComments = computed(() => state.comments);
export const quest = computed(() => state.questInfo);

export const addComment = (data: QuestComment) => {
    store.commit(MutationTypes.ADD_COMMENT, data);
}