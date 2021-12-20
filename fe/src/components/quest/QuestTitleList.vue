<template>
  <div class="d-flex flex-column">
    <quest-title
        v-for="q in quests"
        :key="q.id"
        :quest="q"
    />
  </div>
</template>

<script setup lang="ts">
import { useQuestsStore } from "@/biz/quest/useQuests";
import QuestTitle from "@/components/quest/QuestTitle.vue";

const quests = useQuestsStore().quests;
</script> 

