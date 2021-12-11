<template>
  <div class="container-fluid vh-100">
    <header-component>
      <h1>Adventure game!</h1>
    </header-component>
    <div class="row">
      <router-view />
    </div>
    <footer-component>
      <span class="text-muted">Place sticky footer content here.</span>
    </footer-component>
  </div>
</template>

<script setup lang="ts">
import FooterComponent from "@/components/common/FooterComponent.vue";
import HeaderComponent from "@/components/common/HeaderComponent.vue";

</script>

<style lang="sass">
@import "/src/styles/mainStyle.scss"


</style>
