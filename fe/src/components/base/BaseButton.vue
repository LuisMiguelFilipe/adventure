<template>
  <button type="button" class="btn btn-primary">
    <i v-if="icon" class="bi" :class="icon" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {Icon} from "@/types/icons";

interface Props {
  icon?: Icon;
} 

defineProps<Props>();

</script>