<template>
  <section class="section" id="certifications">
    <SectionHeader
      tag="Formación"
      title="Certificaciones & Estudios"
      subtitle="Aprendizaje continuo y validación de conocimientos"
    />
    <div class="certs-grid">
      <CertificationCard
        v-for="cert in certifications"
        :key="cert.id"
        :certification="cert"
      />
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
import CertificationCard from '@/components/ui/CertificationCard.vue'
import { certifications } from '@/data/certifications.js'
</script>

<style scoped>
.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .certs-grid {
    grid-template-columns: 1fr;
  }
}
</style>