<template>
  <div>
    <span>{{questComment.description}}</span>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {QuestComment} from "@/biz/quest/questModel";

const p = defineProps<{
  questComment: QuestComment | undefined;
}>();

console.log('p', p);

</script>
