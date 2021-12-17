<template>
  <div class="d">
    <textarea v-model="data.description" rows="3" cols="20"/>
    <base-button
        @click="onSave"
    >
      Save
    </base-button>
  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from "vue";
import {QuestComment, QuestCommentNew} from "@/biz/quest/questModel";
import clone from "lodash/clone";
import {getGuid} from "@/utils/guid";
import * as clock from "@/utils/clock";
import BaseButton from "@/components/base/BaseButton.vue";

const props = defineProps<{
  questComment: QuestComment | QuestCommentNew | undefined;
}>();

const emit = defineEmits<{
  (e: 'save', payload: { data: QuestComment|QuestCommentNew }): void
}>()

const data: QuestComment|QuestCommentNew = props.questComment
    ? clone(props.questComment)
    : {} as QuestCommentNew;

const onSave = () => {
  emit("save", {data});
}

</script>
