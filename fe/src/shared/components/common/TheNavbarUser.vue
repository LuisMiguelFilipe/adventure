<template>
  <button class="d-flex align-items-center user-button" type="button" @click="onClick">
    <img v-if="user" :src="user.avatar" :alt="`${user.name} avatar`" class="user-img" />
    <span class="ms-1 text-muted">{{ user?.name }}</span>
  </button>
</template>


<script setup lang="ts">

import { useUserStore } from "@/domain/user/useUser";
import { useNavigator } from "@/router/navigator";

const user = useUserStore().currentUser;
const navigator = useNavigator();

const onClick = () => {
  debugger;
  navigator.push(navigator.routes.userProfile());
}

</script>

<style scoped>
.user-img {
  height: 32px;
  width: 32px;
}

.user-button {
  border: 0;
  background: transparent;
}
</style>