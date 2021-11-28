<template>
  <p>Hello</p>
</template>

<script setup lang="ts">

import { defineProps} from "vue";

defineProps<{
  msg: string;
}>()

</script>
