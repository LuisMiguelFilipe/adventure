<template>
  <div class="container">
    <h1 class="col-12">
      <span>Quest detail for {{ store.getQuest.title }}</span>
    </h1>
    <div class="col-12">
      <quest-comment-view
          v-for="comment in store.getComments"
          :key="comment.id"
          :quest-comment="comment"
      />
    </div>
    <div class="row">
      <div class="col"/>
      <div class="col-auto">
        <BaseButton
            v-show="!showNewComment"
            :icon="Icon.plus"
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
    <div class="row">
      <div class="col" />
      <div class="col-auto">
        <BaseButton class="new-quest-button" :icon="Icon.new" @click="onNewQuest">
          <span>New Quest</span>
        </BaseButton>
      </div>
      <div class="col" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";
import { useQuestInfoStore } from "@/domain/questInfo/useQuestInfo";
import type {QuestDetailRouteParams} from "@/router/routeParams";
import BaseButton from "@/shared/components/base/BaseButton.vue";
import QuestCommentForm from "@/domain/quest/components/QuestCommentForm.vue";
import {QuestCommentNew} from "@/domain/quest/questModel";
import QuestCommentView from "@/domain/quest/components/QuestCommentView.vue";
import { Icon } from "@/types/icons";
import { useNavigator } from "@/router/navigator";

const props = defineProps<{
  routeParams: QuestDetailRouteParams;
}>();

const store = useQuestInfoStore();
store.loadQuest(props.routeParams.questId);

const showNewComment = ref(false);

const onAddCommentClicked = () => {
  showNewComment.value = true;
}

const onNewQuestComment = ({data}: { data: QuestCommentNew }) => {
  store.addComment(data);
  showNewComment.value = false;
}

const onNewQuest = () => {
  const nav =  useNavigator();
  nav.push(nav.routes.newQuest(props.routeParams.questId));
}

</script>

<style lang="scss" scoped>
.new-quest-button {
  height: 64px;
}
</style>
