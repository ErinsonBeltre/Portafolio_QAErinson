<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :class="buttonClasses"
    :aria-label="ariaLabel || text"
    @click="$emit('click')"
  >
    <i v-if="icon" :class="icon" aria-hidden="true"></i>
    <slot>{{ text }}</slot>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, default: '' },
  href: { type: String, default: '' },
  icon: { type: String, default: '' },
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'outline', 'dark', 'outline-sm'].includes(v)
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md'].includes(v)
  },
  ariaLabel: { type: String, default: '' }
})

defineEmits(['click'])

const buttonClasses = computed(() => ({
  'btn': props.size === 'md',
  'btn-sm': props.size === 'sm',
  'btn-primary': props.variant === 'primary',
  'btn-outline': props.variant === 'outline',
  'btn-sm-dark': props.variant === 'dark',
  'btn-sm-outline': props.variant === 'outline-sm'
}))
</script>