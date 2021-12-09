<template>
  <span>Quest detail for {{ quest.id }}</span>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import { getQuest } from "@/biz/quest/useQuests";
import {QuestDetailRouteParams, } from "@/router";

const props = defineProps<{
  routeParams: QuestDetailRouteParams;
}>();

const quest = getQuest(props.routeParams.questId);

</script>
