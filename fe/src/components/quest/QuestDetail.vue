<template>
  <div class="container">
    <h1 class="col-12">
      <span>Quest detail for {{ questStore.getQuest.title }}</span>
    </h1>
    <div class="col-12">
      <quest-comment-view
          v-for="comment in questStore.getComments"
          :key="comment.id"
          :quest-comment="comment"
      />
    </div>
    <div class="row">
      <div class="col"/>
      <div class="col-auto">
        <BaseButton
            v-show="!showNewComment"
            icon="bi-plus"
            @click="onAddCommentClicked"
        >
          <span>Add comment</span>
        </BaseButton>
        <div v-if="showNewComment">
          <quest-comment-form
              :quest-comment="undefined"
              @save="onNewQuestComment"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";
import { useQuestStore } from "@/biz/quest/useQuestInfo";
import {QuestDetailRouteParams,} from "@/router";
import BaseButton from "@/components/base/BaseButton.vue";
import QuestCommentForm from "@/components/quest/QuestCommentForm.vue";
import {QuestCommentNew} from "@/biz/quest/questModel";
import QuestCommentView from "@/components/quest/QuestCommentView.vue";

const props = defineProps<{
  routeParams: QuestDetailRouteParams;
}>();

const questStore = useQuestStore();
questStore.loadQuest(props.routeParams.questId);

const showNewComment = ref(false);

const onAddCommentClicked = () => {
  showNewComment.value = true;
}

const onNewQuestComment = ({data}: { data: QuestCommentNew }) => {
  questStore.addComment(data);
  showNewComment.value = false;
}

</script>
