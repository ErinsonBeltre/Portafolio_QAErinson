<template>
  <div class="section-header">
    <span class="section-tag">{{ tag }}</span>
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  tag: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' }
})
</script>