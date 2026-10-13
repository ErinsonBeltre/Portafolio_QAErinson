<template>
  <div ref="cardRef" class="skill-card fade-in">
    <div class="skill-icon">
      <i :class="skill.icon" aria-hidden="true"></i>
    </div>
    <h3>{{ skill.title }}</h3>
    <p>{{ skill.description }}</p>
    <div class="skill-tags">
      <BaseTag
        v-for="tag in skill.tags"
        :key="tag"
        :text="tag"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseTag from '@/components/ui/BaseTag.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const props = defineProps({
  skill: {
    type: Object,
    required: true
  }
})

const cardRef = ref(null)
useScrollReveal(cardRef)
</script>

<style scoped>
.skill-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-md);
  transition: var(--transition-base);
  border: 1px solid transparent;
  text-align: center;
}

.skill-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary-alpha);
}

.skill-icon {
  width: 44px;
  height: 44px;
  background: var(--color-primary-light);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-xs);
  font-size: 1.2rem;
  color: var(--color-primary);
}

.skill-card h3 {
  font-size: 1rem;
  margin-bottom: 0.35rem;
}

.skill-card p {
  font-size: var(--font-size-sm);
  line-height: 1.55;
  color: var(--color-gray);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: var(--spacing-xs);
  justify-content: center;
}

.skill-tags :deep(.tag) {
  padding: 0.18rem 0.55rem;
  font-size: 0.7rem;
}
</style>