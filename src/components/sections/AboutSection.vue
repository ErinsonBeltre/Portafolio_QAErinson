<template>
  <section class="section" id="about">
    <SectionHeader
      tag="Sobre mí"
      title="¿Quién está detrás del testing?"
      subtitle="Un poco sobre mi enfoque y filosofía de trabajo"
    />
    <div ref="contentRef" class="about-content fade-in">
      <p>
        Soy un joven <strong>ingenerio en sistemas</strong> con pasión por el desarrollo del software,
        la calidad y la innovación tecnológica. Me enfoco en garantizar la funcionalidad,
        usabilidad y rendimiento de aplicaciones web y móviles mediante pruebas funcionales,
        manuales y automatizadas. Me apasiona encontrar bugs antes que los usuarios, diseñar
        estrategias de prueba efectivas y colaborar con equipos de desarrollo bajo
        <strong>metodologías ágiles</strong>, con comunicación clara para lograr entregas
        eficientes y sin errores. Creo firmemente en el <strong>shift-left testing</strong>
        y en la mejora continua de procesos.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const contentRef = ref(null)
useScrollReveal(contentRef)
</script>

<style scoped>
.about-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  font-size: var(--font-size-md);
  color: var(--color-gray);
  line-height: 1.8;
}
</style>