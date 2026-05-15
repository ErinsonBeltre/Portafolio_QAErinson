<template>
  <a
    ref="cardRef"
    :href="link.href"
    class="contact-card fade-in"
    :target="link.id !== 'email' ? '_blank' : '_self'"
    :rel="link.id !== 'email' ? 'noopener noreferrer' : undefined"
    :aria-label="`Contactar por ${link.label}`"
  >
    <i :class="link.icon" aria-hidden="true"></i>
    <h4>{{ link.label }}</h4>
    <span>{{ link.value }}</span>
  </a>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

defineProps({
  link: {
    type: Object,
    required: true
  }
})

const cardRef = ref(null)
useScrollReveal(cardRef)
</script>

<style scoped>
.contact-card {
  background: var(--color-white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: var(--transition-base);
  text-decoration: none;
  color: var(--color-dark);
  border: 1px solid transparent;
  display: block;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary-alpha-light);
}

.contact-card i {
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.contact-card h4 {
  font-size: 1rem;
  margin-bottom: 0.3rem;
}

.contact-card span {
  font-size: 0.9rem;
  color: var(--color-gray);
}
</style>