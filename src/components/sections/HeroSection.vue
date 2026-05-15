<template>
  <section class="hero" id="hero">
    <div class="hero-container">
      <div class="hero-text">
        <div class="hero-badge">
          <span class="dot" aria-hidden="true"></span>
          <span>{{ personal.availabilityText }}</span>
        </div>

        <h1>
          {{ personal.role }} <br />
          <span class="highlight">{{ personal.subtitle }}</span>
        </h1>

        <p class="hero-subtitle">{{ personal.description }}</p>

        <div class="hero-stats">
          <div v-for="stat in personal.stats" :key="stat.label" class="hero-stat">
            <div class="hero-stat-number">{{ stat.number }}</div>
            <div class="hero-stat-label">{{ stat.label }}</div>
          </div>
        </div>

        <div class="hero-buttons">
          <BaseButton
            text="Ver proyectos"
            href="#projects"
            icon="fa-solid fa-folder-open"
            variant="primary"
          />
          <BaseButton
            text="Descargar CV"
            icon="fa-solid fa-download"
            variant="outline"
            @click="downloadCV"
          />
        </div>
      </div>

      <div class="hero-image">
        <div class="avatar-container">
          <img
            :src="personal.avatar"
            :alt="`${personal.name} - QA Engineer`"
            loading="eager"
            @error="handleImageError"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { personalData } from '@/data/personal.js'
import { useDownloadCV } from '@/composables/useDownloadCV.js'

const personal = ref(personalData)
const { downloadCV } = useDownloadCV()

const handleImageError = (event) => {
  event.target.style.display = 'none'
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--navbar-height) + 2rem) var(--spacing-lg) 4rem;
  background: linear-gradient(135deg, var(--color-bg) 0%, #e8ecf1 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--color-primary-alpha) 0%, transparent 70%);
  top: -100px;
  right: -150px;
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, var(--color-secondary-alpha) 0%, transparent 70%);
  bottom: -50px;
  left: -100px;
  border-radius: 50%;
}

.hero-container {
  max-width: var(--max-width);
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 1;
}

.hero-text { flex: 1; }

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  background: var(--color-white);
  padding: 0.5rem 1.2rem;
  border-radius: var(--radius-lg);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  box-shadow: var(--shadow-sm);
}

.dot {
  width: 10px;
  height: 10px;
  background: var(--color-accent-green);
  border-radius: 50%;
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 184, 148, 0.4); }
  50% { box-shadow: 0 0 0 10px rgba(0, 184, 148, 0); }
}

.hero h1 {
  font-size: var(--font-size-2xl);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: var(--spacing-sm);
}

.highlight { color: var(--color-primary); }

.hero-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-gray);
  margin-bottom: var(--spacing-md);
  max-width: 500px;
}

.hero-stats {
  display: flex;
  gap: 2.5rem;
  margin-bottom: var(--spacing-lg);
}

.hero-stat { text-align: center; }

.hero-stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
}

.hero-stat-label {
  font-size: var(--font-size-sm);
  color: var(--color-gray);
  font-weight: 500;
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.hero-image {
  flex: 0 0 350px;
  display: flex;
  justify-content: center;
}

.avatar-container {
  width: 320px;
  height: 320px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 30px 60px rgba(108, 92, 231, 0.25);
}

.avatar-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 900px) {
  .hero-container {
    flex-direction: column-reverse;
    text-align: center;
    gap: var(--spacing-lg);
  }

  .hero h1 { font-size: 2.4rem; }
  .hero-subtitle { margin: 0 auto var(--spacing-md); }
  .hero-stats { justify-content: center; }
  .hero-buttons { justify-content: center; }
  .hero-image { flex: 0 0 auto; }

  .avatar-container {
    width: 200px;
    height: 200px;
  }
}
</style>