<template>
  <section class="section" id="contact">
    <SectionHeader
      tag="Contacto"
      title="¿Hablamos?"
      subtitle="Escríbeme si quieres revisar un producto o sumar QA a tu equipo"
    />
    <div class="contact-grid">
      <ContactCard
        v-for="link in contactLinks"
        :key="link.id"
        :link="link"
      />
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
import ContactCard from '@/components/ui/ContactCard.vue'
import { contactLinks } from '@/data/contacts.js'
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
