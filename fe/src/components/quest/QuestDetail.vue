<template>
  <span>Quest detail for {{ quest.id }}</span>
  <div class="d-flex justify-content-end">
    <div v-if="!showNewComment">
      <BaseButton
          icon="bi-plus"
          @click="onAddCommentClicked"
      >
        <span>Add comment</span>
      </BaseButton>

    </div>
    <div v-if="showNewComment">
      <quest-comment-form
          :quest-comment="undefined"
          @save="onNewQuestComment"
      />
    </div>
    <div>
      <quest-comment-view
          v-for="comment in use.currentComments.value"
          :key="comment.id"
          :quest-comment="comment"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";
import * as use from "@/biz/quest/useQuests";
import {QuestDetailRouteParams,} from "@/router";
import BaseButton from "@/components/base/BaseButton.vue";
import QuestCommentForm from "@/components/quest/QuestCommentForm.vue";
import {QuestComment} from "@/biz/quest/questModel";
import QuestCommentView from "@/components/quest/QuestCommentView.vue";

const props = defineProps<{
  routeParams: QuestDetailRouteParams;
}>();

const quest = use.getQuest(props.routeParams.questId);
const showNewComment = ref(false);

const onAddCommentClicked = () => {
  showNewComment.value = true;
}

const onNewQuestComment = ({data}: {data: QuestComment}) => {
  use.addComment(data);
  showNewComment.value = false;
}

</script>
