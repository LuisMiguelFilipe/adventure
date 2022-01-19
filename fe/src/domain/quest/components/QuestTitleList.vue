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
import { useQuestsStore } from "@/domain/quest/useQuests";
import QuestTitle from "@/domain/quest/components/QuestTitle";

const quests = useQuestsStore().quests;
</script> 

