<template>
  <div class="card" :class="{ 'card-hoverable': hoverable }">
    <div v-if="$slots.image" class="card-image">
      <slot name="image"></slot>
    </div>

    <div class="card-content">
      <div v-if="$slots.header" class="card-header">
        <slot name="header"></slot>
      </div>

      <div class="card-body">
        <slot></slot>
      </div>

      <div v-if="$slots.footer" class="card-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  hoverable: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-base);
}

.card-hoverable {
  cursor: pointer;
}

.card-hoverable:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--color-border);
  display: block;
}

.card-image :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform var(--transition-slow);
}

.card-hoverable:hover .card-image :deep(img) {
  transform: scale(1.05);
}

.card-content {
  padding: var(--spacing-xl);
}

.card-header {
  margin-bottom: var(--spacing-md);
}

.card-body {
  margin-bottom: var(--spacing-md);
}

.card-footer {
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-border);
}
</style>
