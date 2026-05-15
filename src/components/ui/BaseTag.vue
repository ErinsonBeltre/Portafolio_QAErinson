<template>
  <span class="tag">{{ text }}</span>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.tag {
  background: var(--color-bg);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--color-dark);
}
</style>