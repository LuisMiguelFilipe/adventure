<template>
  <span :title="isoTimestamp">{{ humanTimestamp }}</span>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import * as clock from "@/shared/utils/clock";

interface Props {
  timestamp?: number;
} 

const props = defineProps<Props>();

const dayjs = clock.toDayjs(props.timestamp);
const humanTimestamp = dayjs ? clock.toHumanFormat(dayjs) : "n/a";
const isoTimestamp = dayjs ? clock.toIsoString(dayjs) : undefined;

</script>