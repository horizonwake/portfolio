<template>
  <div class="projects">
    <div class="container">
      <div class="page-header section text-center">
        <h1 class="page-title mb-lg">Projects</h1>
        <p class="page-subtitle">
          A collection of my work showcasing various technologies and solutions
        </p>
      </div>

      <ProjectSection
        v-for="section in config.projectSections"
        :key="section.id"
        :section="section"
      />
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import ProjectSection from "../components/projects/ProjectSection.vue";

const config = inject("config");
</script>

<style scoped>
.page-header {
  padding: var(--spacing-3xl) 0;
}

.page-title {
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

.page-subtitle {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}
</style>
