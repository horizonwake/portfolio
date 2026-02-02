<template>
  <button
    :class="['btn', `btn-${variant}`, { 'btn-icon': icon }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="icon" class="btn-icon-wrapper">
      <slot name="icon"></slot>
    </span>
    <span class="btn-text">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "secondary", "outline", "ghost"].includes(value),
  },
  icon: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const handleClick = (event) => {
  emit("click", event);
};
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-size-base);
  font-weight: 500;
  font-family: var(--font-primary);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
  white-space: nowrap;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: var(--color-secondary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: var(--color-surface);
  color: var(--color-text);
}

.btn-secondary:hover:not(:disabled) {
  background: var(--color-border);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-outline:hover:not(:disabled) {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}

.btn-ghost {
  background: transparent;
  color: var(--color-primary);
}

.btn-ghost:hover:not(:disabled) {
  background: var(--color-surface);
}

.btn-icon-wrapper {
  display: flex;
  align-items: center;
  font-size: 1.2em;
}
</style>
