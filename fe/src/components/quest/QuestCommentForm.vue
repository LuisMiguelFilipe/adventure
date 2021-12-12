<template>
  <div>
    <textarea :value="data.description" @input="save" rows="3" cols="20"/>
    <base-button
        @click="onSave"
    >
      Save
    </base-button>
  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from "vue";
import {QuestComment} from "@/biz/quest/questModel";
import clone from "lodash/clone";
import {getGuid} from "@/utils/guid";
import * as clock from "@/utils/clock";
import BaseButton from "@/components/base/BaseButton.vue";

const props = defineProps<{
  questComment: QuestComment | undefined;
}>();

const emit = defineEmits<{
  (e: 'save', payload: { data: QuestComment }): void
}>()

const data: QuestComment = props.questComment
    ? clone(props.questComment)
    : {} as QuestComment;

const onSave = () => {
  if (!data.id) {
    data.id = getGuid();
    data.user = "luis";
    data.timestamp = clock.getNow();
  }
  emit("save", {data});
}

</script>
