<template>
  <div class="home">
    <Section>
      <div class="hero-content">
        <ProfilePhoto
          :src="config.personal.photo"
          :alt="config.personal.name"
        />

        <ProfileContent>
          <div class="action-buttons">
            <SocialLinks />
            <!-- add a button to link to projects page -->
            <Button variant="primary" @click="$router.push('/projects')">
              Projects
            </Button>

            <Button variant="outline" icon @click="downloadResume">
              <template #icon>
                <DownloadIcon />
              </template>
              Download Resume
            </Button>
          </div>
        </ProfileContent>
      </div>
    </Section>
  </div>
</template>

<script setup>
import { inject } from "vue";
import Section from "../components/common/Section.vue";
import Button from "../components/common/Button.vue";
import ProfilePhoto from "../components/home/ProfilePhoto.vue";
import ProfileContent from "../components/home/ProfileContent.vue";
import SocialLinks from "../components/home/SocialLinks.vue";
import DownloadIcon from "../components/icons/DownloadIcon.vue";

const config = inject("config");

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = config.resume.pdfUrl;
  link.download = config.resume.downloadFileName;
  link.click();
};
</script>

<style scoped>
.hero-content {
  display: flex;
  justify-content: center;
  gap: var(--spacing-4xl);
  flex-wrap: wrap;
}

.action-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
  align-items: center;
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-2xl);
  }

  .action-buttons {
    flex-direction: column;
    width: 100%;
  }

  .action-buttons :deep(.btn) {
    width: 100%;
  }
}
</style>
