<template>
  <span>Quest detail for {{ quest.id }}</span>
  <div class="d-flex justify-content-end">
    <div>
      <BaseButton
          icon="bi-plus"
          text="Add comment"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import { getQuest } from "@/biz/quest/useQuests";
import {QuestDetailRouteParams, } from "@/router";
import BaseButton from "@/components/base/BaseButton.vue";

const props = defineProps<{
  routeParams: QuestDetailRouteParams;
}>();

const quest = getQuest(props.routeParams.questId);

</script>
