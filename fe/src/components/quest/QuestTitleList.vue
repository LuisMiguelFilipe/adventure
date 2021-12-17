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
import { quests } from "@/store/questModule";
import QuestTitle from "@/components/quest/QuestTitle.vue";
</script> 

<style lang="scss">
</style>