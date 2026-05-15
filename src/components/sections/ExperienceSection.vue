<template>
  <section class="section" id="experience">
    <SectionHeader
      tag="Experiencia"
      title="Trayectoria Profesional"
      subtitle="Mi camino en el mundo del QA"
    />
    <div class="timeline">
      <TimelineItem
        v-for="exp in experiences"
        :key="exp.id"
        :experience="exp"
      />
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
import TimelineItem from '@/components/ui/TimelineItem.vue'
import { experiences } from '@/data/experience.js'
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-border);
}
</style>