<template>
  <div ref="cardRef" class="cert-card fade-in">
    <div :class="['cert-icon', certification.iconClass]">
      <i :class="certification.icon" aria-hidden="true"></i>
    </div>
    <div class="cert-info">
      <h3>{{ certification.title }}</h3>
      <p class="cert-org">{{ certification.organization }}</p>
      <p class="cert-date">
        <i class="fa-regular fa-calendar" aria-hidden="true"></i>
        {{ certification.date }}
      </p>
      <p class="cert-desc">{{ certification.description }}</p>
      <span
        v-if="certification.badge"
        :class="['cert-badge', certification.badgeClass]"
      >
        {{ certification.badge }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

defineProps({
  certification: {
    type: Object,
    required: true
  }
})

const cardRef = ref(null)
useScrollReveal(cardRef)
</script>

<style scoped>
.cert-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  transition: var(--transition-base);
  border: 1px solid transparent;
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
}

.cert-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary-alpha-light);
}

.cert-icon {
  width: 55px;
  height: 55px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  flex-shrink: 0;
}

.cert-icon--green { background: rgba(0, 184, 148, 0.12); color: #00b894; }
.cert-icon--purple { background: rgba(108, 92, 231, 0.12); color: #6c5ce7; }
.cert-icon--pink { background: rgba(253, 121, 168, 0.12); color: #fd79a8; }
.cert-icon--orange { background: rgba(253, 203, 110, 0.15); color: #e17055; }
.cert-icon--yellow { background: rgba(255, 165, 2, 0.12); color: #f39c12; }
.cert-icon--blue { background: rgba(52, 152, 219, 0.12); color: #3498db; }

.cert-info h3 {
  font-size: var(--font-size-md);
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.cert-org {
  font-weight: 600;
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  margin-bottom: 0.3rem;
}

.cert-date {
  font-size: 0.8rem;
  color: var(--color-gray);
  margin-bottom: var(--spacing-xs);
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.cert-desc {
  font-size: var(--font-size-sm);
  color: var(--color-gray);
  line-height: 1.5;
}

.cert-badge {
  display: inline-block;
  background: rgba(0, 184, 148, 0.1);
  color: #00b894;
  padding: 0.2rem 0.7rem;
  border-radius: var(--radius-lg);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: var(--spacing-xs);
}

.cert-badge--pending {
  background: rgba(253, 203, 110, 0.15);
  color: #e17055;
}
</style>