<template>
  <Card hoverable>
    <template #image>
      <img :src="project.image" :alt="project.title" />
    </template>

    <template #header>
      <h3 class="project-title">{{ project.title }}</h3>
    </template>

    <template #default>
      <p class="project-description">{{ project.description }}</p>

      <div class="project-tech">
        <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
          {{ tech }}
        </span>
      </div>
    </template>

    <template #footer>
      <div class="project-links">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link"
        >
          <GitHubIcon />
          <span>Code</span>
        </a>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link"
        >
          <ExternalIcon />
          <span>Demo</span>
        </a>
      </div>
    </template>
  </Card>
</template>

<script setup>
import Card from "../common/Card.vue";
import GitHubIcon from "../icons/GitHubIcon.vue";
import ExternalIcon from "../icons/ExternalIcon.vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.project-title {
  font-size: var(--font-size-xl);
  color: var(--color-text);
}

.project-description {
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tech-tag {
  padding: var(--spacing-xs) var(--spacing-md);
  background: white;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: var(--spacing-lg);
}

.project-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-text);
  font-weight: 500;
  transition: color var(--transition-fast);
}

.project-link:hover {
  color: var(--color-primary);
}
</style>
