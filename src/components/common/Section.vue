<template>
  <section class="hero-section section">
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
}
</style>
