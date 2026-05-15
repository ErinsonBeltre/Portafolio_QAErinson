<template>
  <div ref="cardRef" class="project-card fade-in">
    <div :class="['project-header', `project-header--${project.type}`]">
      <span class="project-role">{{ project.role }}</span>
      <h3>{{ project.title }}</h3>
    </div>

    <div class="project-body">
      <ul>
        <li v-for="(item, index) in project.description" :key="index">
          <i class="fa-solid fa-check-circle" aria-hidden="true"></i>
          {{ item }}
        </li>
      </ul>

      <div class="project-metrics">
        <div v-for="(metric, index) in project.metrics" :key="index" class="metric">
          <div class="metric-number">{{ metric.number }}</div>
          <div class="metric-label">{{ metric.label }}</div>
        </div>
      </div>
    </div>

    <div class="project-footer">
      <BaseButton
        v-for="(link, index) in project.links"
        :key="index"
        :text="link.text"
        :href="link.url"
        :icon="link.icon"
        :variant="link.type"
        size="sm"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

defineProps({
  project: {
    type: Object,
    required: true
  }
})

const cardRef = ref(null)
useScrollReveal(cardRef)
</script>

<style scoped>
.project-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition-base);
  border: 1px solid transparent;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary-alpha-light);
}

.project-header {
  padding: var(--spacing-lg);
  color: var(--color-white);
  position: relative;
}

.project-header--ecommerce {
  background: linear-gradient(135deg, #6c5ce7 0%, #5a4bd1 100%);
}
.project-header--mobile {
  background: linear-gradient(135deg, #00b894 0%, #00a381 100%);
}
.project-header--api {
  background: linear-gradient(135deg, #e17055 0%, #d63031 100%);
}

.project-role {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.3rem 1rem;
  border-radius: var(--radius-lg);
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  backdrop-filter: blur(5px);
}

.project-header h3 {
  font-size: 1.3rem;
  font-weight: 700;
}

.project-body {
  padding: var(--spacing-md);
}

.project-body ul {
  list-style: none;
}

.project-body ul li {
  padding: 0.4rem 0;
  font-size: 0.9rem;
  color: var(--color-gray);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-xs);
}

.project-body ul li i {
  color: var(--color-accent-green);
  margin-top: 0.2rem;
  flex-shrink: 0;
}

.project-metrics {
  display: flex;
  gap: var(--spacing-md);
  margin-top: 1.2rem;
  padding-top: 1.2rem;
  border-top: 1px solid var(--color-border);
}

.metric {
  text-align: center;
}

.metric-number {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--color-dark);
}

.metric-label {
  font-size: var(--font-size-xs);
  color: var(--color-gray);
}

.project-footer {
  padding: var(--spacing-sm) var(--spacing-md);
  border-top: 1px solid var(--color-border);
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}
</style>