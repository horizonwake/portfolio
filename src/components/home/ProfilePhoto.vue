<template>
  <div class="profile-photo">
    <img :src="src" :alt="alt" class="photo-image" />
    <div class="photo-overlay"></div>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Profile Photo'
  }
})
</script>

<style scoped>
.profile-photo {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  transition: transform var(--transition-base);
}

.profile-photo:hover {
  transform: scale(1.05);
}

.photo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 122, 255, 0.1), rgba(88, 86, 214, 0.1));
  opacity: 0;
  transition: opacity var(--transition-base);
}

.profile-photo:hover .photo-overlay {
  opacity: 1;
}

@media (max-width: 768px) {
  .profile-photo {
    width: 200px;
    height: 200px;
  }
}
</style>
