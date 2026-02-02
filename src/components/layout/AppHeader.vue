<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <router-link to="/" class="logo">
          {{ config.personal.name }}
        </router-link>

        <Navigation />
      </nav>
    </div>
  </header>
</template>

<script setup>
import { inject } from "vue";
import Navigation from "../common/Navigation.vue";

const config = inject("config");
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid var(--color-border);
  z-index: 100;
}

.nav {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-text);
  transition: color var(--transition-fast);
}

.logo:hover {
  color: var(--color-primary);
}
</style>
