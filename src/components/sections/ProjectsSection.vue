<template>
  <section class="section" id="projects">
    <SectionHeader
      tag="Portafolio"
      title="Proyectos Destacados"
      subtitle="Casos reales donde aseguré la calidad"
    />
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { projects } from '@/data/projects.js'
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: var(--spacing-lg);
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>