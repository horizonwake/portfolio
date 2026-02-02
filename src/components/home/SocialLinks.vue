<template>
  <div class="social-links">
    <a
      v-for="(url, platform) in config.social"
      :key="platform"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="social-link"
      :aria-label="platform"
    >
      <component :is="getIcon(platform)" />
    </a>
  </div>
</template>

<script setup>
import { inject } from "vue";
import GitHubIcon from "../icons/GitHubIcon.vue";
import LinkedInIcon from "../icons/LinkedInIcon.vue";

const config = inject("config");

const getIcon = (platform) => {
  const icons = {
    github: GitHubIcon,
    linkedin: LinkedInIcon,
  };
  return icons[platform] || GitHubIcon;
};
</script>

<style scoped>
.social-links {
  display: flex;
  gap: var(--spacing-md);
}

.social-link {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text);
  transition: all var(--transition-base);
}

.social-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

@media (max-width: 768px) {
  .social-links {
    justify-content: center;
  }
}
</style>
