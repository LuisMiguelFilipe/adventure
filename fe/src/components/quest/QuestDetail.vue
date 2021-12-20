<template>
  <div class="container">
    <h1 class="col-12">
      <span>Quest detail for {{ quest.id }}</span>
    </h1>
    <div class="col-12">
      <quest-comment-view
          v-for="comment in use.currentComments.value"
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
  <!--  <div class="d-flex justify-content-end">-->
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";
import * as use from "@/biz/quest/useQuests";
import {QuestDetailRouteParams,} from "@/router";
import BaseButton from "@/components/base/BaseButton.vue";
import QuestCommentForm from "@/components/quest/QuestCommentForm.vue";
import {QuestCommentNew} from "@/biz/quest/questModel";
import QuestCommentView from "@/components/quest/QuestCommentView.vue";

defineProps<{
  routeParams: QuestDetailRouteParams;
}>();

const quest = use.quest;
const showNewComment = ref(false);

const onAddCommentClicked = () => {
  showNewComment.value = true;
}

const onNewQuestComment = ({data}: { data: QuestCommentNew }) => {
  use.addComment(data);
  showNewComment.value = false;
}

</script>
