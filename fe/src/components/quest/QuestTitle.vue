<template>
  <div class="d-flex quest-title alert alert-primary">
    <span>!!</span>
    <span>{{ quest.title }}</span>    
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {QuestModel} from "@/biz/quest/questModel";

defineProps<{
  quest: QuestModel;
}>();

</script>

<style lang="scss">
.quest-title {
  height: 200px;
};
</style>