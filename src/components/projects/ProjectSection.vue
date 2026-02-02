<template>
  <div class="project-section">
    <div class="section-header mb-2xl">
      <h2 class="section-title">{{ section.title }}</h2>
      <p class="section-description">{{ section.description }}</p>
    </div>

    <div class="projects-grid">
      <ProjectCard
        v-for="project in section.projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";

defineProps({
  section: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.project-section {
  margin-bottom: var(--spacing-4xl);
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  padding-bottom: 4px;
}

.section-title {
  margin-bottom: var(--spacing-md);
  line-height: 1.3;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-secondary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
