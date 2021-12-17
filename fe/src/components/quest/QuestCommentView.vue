<template>
  <div>
    <span>{{questComment.description}}</span>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {QuestComment} from "@/biz/quest/questModel";

defineProps<{
  questComment: QuestComment | undefined;
}>();
</script>
