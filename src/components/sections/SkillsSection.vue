<template>
  <section class="section" id="skills">
    <SectionHeader
      tag="Skills"
      title="Herramientas & Tecnologías"
      subtitle="Mi stack principal de testing"
    />
    <div class="skills-grid">
      <SkillCard
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
      />
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
import SkillCard from '@/components/ui/SkillCard.vue'
import { skills } from '@/data/skills.js'
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--spacing-sm);
}
</style>