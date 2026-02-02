<template>
  <div class="profile-content">
    <h1 class="profile-name mb-md">{{ config.personal.name }}</h1>
    <h3 class="profile-title mb-lg">{{ config.personal.title }}</h3>
    <p class="profile-bio mb-xl">{{ config.personal.bio }}</p>

    <div class="profile-meta mb-2xl">
      <span v-if="config.personal.location" class="meta-item">
        <span class="meta-icon">📍</span>
        {{ config.personal.location }}
      </span>
      <span v-if="config.personal.email" class="meta-item">
        <span class="meta-icon">✉️</span>
        {{ config.personal.email }}
      </span>
    </div>

    <slot></slot>
  </div>
</template>

<script setup>
import { inject } from "vue";

const config = inject("config");
</script>

<style scoped>
.profile-content {
  max-width: 600px;
}

.profile-name {
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-secondary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.profile-title {
  color: var(--color-text-secondary);
  font-weight: 500;
}

.profile-bio {
  font-size: var(--font-size-lg);
  line-height: 1.8;
}

.profile-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-text-secondary);
  font-size: var(--font-size-base);
}

.meta-icon {
  font-size: 1.2em;
}

@media (max-width: 768px) {
  .profile-content {
    text-align: center;
  }

  .profile-meta {
    justify-content: center;
  }
}
</style>
