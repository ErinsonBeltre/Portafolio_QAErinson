<template>
  <div ref="itemRef" class="timeline-item fade-in">
    <div class="timeline-dot" aria-hidden="true"></div>
    <div class="timeline-content">
      <span class="timeline-date">{{ experience.date }}</span>
      <h3>{{ experience.title }}</h3>
      <p class="timeline-company">{{ experience.company }}</p>
      <p class="timeline-description">{{ experience.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

defineProps({
  experience: {
    type: Object,
    required: true
  }
})

const itemRef = ref(null)
useScrollReveal(itemRef)
</script>

<style scoped>
.timeline-item {
  position: relative;
  padding-left: 55px;
  margin-bottom: 2.5rem;
}

.timeline-dot {
  position: absolute;
  left: 8px;
  top: 4px;
  width: 26px;
  height: 26px;
  background: var(--color-primary);
  border-radius: 50%;
  border: 4px solid var(--color-white);
  box-shadow: 0 0 0 4px var(--color-primary-alpha-light);
  z-index: 1;
}

.timeline-content {
  background: var(--color-white);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

.timeline-date {
  font-size: 0.8rem;
  color: var(--color-primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.timeline-content h3 {
  font-size: 1.1rem;
  margin: 0.3rem 0;
}

.timeline-company {
  font-weight: 600;
  color: var(--color-gray);
  font-size: 0.9rem;
}

.timeline-description {
  color: var(--color-gray);
  font-size: 0.9rem;
  margin-top: var(--spacing-xs);
}
</style>