<template>
  <nav class="navigation">
    <router-link
      v-for="item in config.navigation"
      :key="item.path"
      :to="item.path"
      class="nav-link"
    >
      {{ item.name }}
    </router-link>
  </nav>
</template>

<script setup>
import { inject } from "vue";

const config = inject("config");
</script>

<style scoped>
.navigation {
  display: flex;
  gap: var(--spacing-xl);
  align-items: center;
}

.nav-link {
  font-size: var(--font-size-base);
  color: var(--color-text);
  font-weight: 500;
  transition: color var(--transition-fast);
  position: relative;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link.router-link-active {
  color: var(--color-primary);
}

.nav-link.router-link-active::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-primary);
  border-radius: 2px;
}

@media (max-width: 768px) {
  .navigation {
    gap: var(--spacing-lg);
  }

  .nav-link {
    font-size: var(--font-size-sm);
  }
}
</style>
