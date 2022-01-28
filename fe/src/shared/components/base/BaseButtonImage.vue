<template>
  <button type="button" class="btn btn-primary">
    <img :src="src" :alt="alt" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

interface Props {
  src: string;
  alt: string;
} 

defineProps<Props>();

</script>