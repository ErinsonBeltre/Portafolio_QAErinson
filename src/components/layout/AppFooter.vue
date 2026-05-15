<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <p>&copy; {{ currentYear }} {{ personal.name }} – QA Engineer Portfolio.</p>
        <p class="footer-tagline">
          Construido con
          <i class="fa-solid fa-heart footer-heart" aria-hidden="true"></i>
          Vue 3 y buenas prácticas de testing.
        </p>
      </div>
      <div class="footer-links">
        <a
          v-for="link in socialLinks"
          :key="link.id"
          :href="link.url"
          :aria-label="link.label"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i :class="link.icon" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { personalData } from '@/data/personal.js'

const personal = personalData
const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  { id: 'email', icon: 'fa-solid fa-envelope', label: 'Email', url: `mailto:${personal.email}` },
  { id: 'linkedin', icon: 'fa-brands fa-linkedin', label: 'LinkedIn', url: `https://${personal.linkedin}` },
  { id: 'github', icon: 'fa-brands fa-github', label: 'GitHub', url: `https://${personal.github}` }
]
</script>

<style scoped>
.footer {
  background: var(--color-white);
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-lg);
  margin-top: auto;
}

.footer-container {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.footer-content {
  text-align: left;
}

.footer p {
  color: var(--color-gray);
  font-size: 0.9rem;
}

.footer-tagline {
  font-size: 0.8rem !important;
  margin-top: 0.3rem;
  opacity: 0.8;
}

.footer-heart {
  color: var(--color-primary);
  animation: heartbeat 1.5s ease infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.2); }
  50% { transform: scale(1); }
  75% { transform: scale(1.1); }
}

.footer-links {
  display: flex;
  gap: var(--spacing-md);
}

.footer-links a {
  color: var(--color-gray);
  font-size: 1.3rem;
  transition: var(--transition-base);
  padding: 0.4rem;
}

.footer-links a:hover {
  color: var(--color-primary);
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
  }

  .footer-content {
    text-align: center;
  }
}
</style>