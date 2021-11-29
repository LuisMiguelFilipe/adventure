<template>
  <footer class="footer mt-auto py-3 bg-light">
    <div class="container">
      <slot />
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  .container {
    width: auto;
    max-width: 680px;
    padding: 0 15px;
  }
}
</style>