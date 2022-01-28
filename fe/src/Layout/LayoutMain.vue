<template>
  <div class="container-fluid vh-100">
    <the-navbar></the-navbar>
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
import FooterComponent from "@/shared/components/common/FooterComponent.vue";
import HeaderComponent from "@/shared/components/common/HeaderComponent.vue";
import TheNavbar from "@/shared/components/common/TheNavbar.vue";

</script>

<style lang="sass">
@import "~/src/app/styles/mainStyle.scss"
</style>
