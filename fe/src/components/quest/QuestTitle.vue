<template>
  <router-link
      :to="{name: 'quest', params: {id: quest.id}}"
  >
    <div class="d-flex align-items-center quest-title alert alert-primary">
      <i class="bi" :class="quest.icon"></i>
      <h1 class="ms-4">{{ quest.title }}</h1>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {QuestModel} from "@/biz/quest/questModel";

defineProps<{
  quest: QuestModel;
}>();

</script>

<style lang="scss" scoped>
.quest-title {
  height: 200px;

  .bi {
    color: red;
    font-size: 120px;
  }
}

;

</style>