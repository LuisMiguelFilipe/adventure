<template>
  <main class="flex-shrink-0">
    <p>Hello</p>
  </main>
  <footer-component>
    <span class="text-muted">Place sticky f12312ooter content here.</span>
  </footer-component>
</template>

<script setup lang="ts">

import {defineProps} from "vue";
import FooterComponent from "@/components/common/FooterComponent.vue";

defineProps<{
  msg: string;
}>()

</script>

<style lang="sass">
@import "/src/styles/mainStyle.scss"
</style>
