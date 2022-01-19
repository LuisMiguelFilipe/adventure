<template>
  <div class="container-fluid">
    <div class="row text-start">
      <span>{{ questComment.description }}</span>
    </div>
    <div class="row justify-content-end">
      <div class="col-auto">
        <span class="fst-italic">
          By {{ questComment.user }} <base-date :timestamp="questComment.timestamp"/>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {QuestComment} from "@/domain/quest/questModel";
import BaseDate from "@/components/base/BaseDate.vue";

defineProps<{
  questComment: QuestComment | undefined;
}>();
</script>
