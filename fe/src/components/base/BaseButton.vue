<template>
  <button type="button" class="btn btn-primary">
    <i v-if="icon" class="bi" :class="icon" />
    {{ text }}</button>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {Icon} from "@/types/icons";

interface Props {
  icon: Icon;
  text: string;
} 

defineProps<Props>();

</script>